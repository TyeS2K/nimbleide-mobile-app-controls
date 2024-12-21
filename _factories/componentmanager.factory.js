/* ComponentManager Component Manager/Factory :
	Updated: 8/24/2022
*/

FACTORY.Register("ComponentManager", function ComponentFactory() {
	var ComponentManager = function (config, filter) {
		if (!config) return null;
		
		var self = this;
		var curdlg = $f.buildname(config), basedlg = curdlg, ctrlid = [], 
			ctrls = [], ctrlType = {}, reg = {}, parts = {};
			parts._init = {};

		// Register all Components.
		if (App && App.Code && App.Code.Components) {
			for (var comp in App.Code.Components) {
				if (!filter || filter.indexOf(comp) > -1) {
					if (typeof(App.Code.Components[comp]) == 'object') reg[comp] = App.Code.Components[comp];
				}
			}
		}

		function resolveName(ctrl) {
			var id, idx = ctrls.indexOf(ctrl);
			if (idx > -1) {
				id = ctrlid[idx];
				return {dlg: id.resolveName('instform'), ctrl: id.resolveName('control')};
			} else { return { dlg: "", ctrl: "" }; }
		}
		function inject(inst, props, styles) {
			var instId = '', defPos, defStyle, pos;
			var form, idlg = curdlg.resolveName('instform');
			
			if (inst.dialog) {
				form = $f.getinstname(curdlg || inst.parent) ;
				defStyle = ( null | globals.DlgStyles.dragable | globals.DlgStyles.sizable );
				pos = {target: form};
				defPos = {dock:'RRRR', left: inst.left, top: inst.top, width: inst.width, height: inst.height};
				pos = $k.instance.validatepos(pos, defPos);
				
				FORMS.Target = form;
				instId = $f.surface(inst.ctrl, pos.left, pos.top, inst.width, inst.height, defStyle);
				self.target(instId.resolveName('instform'));
				$f.setprop(inst.ctrl, '', props);
				$f.setstyle(inst.ctrl, '', styles);
			} else { 
				// Verify if dialog is the :hnd or the first .div/frame.
				form = inst.parent ? 
					$f.getinstname(idlg, (inst.parent.indexOf(':hnd') == -1) ? inst.parent : '') :
					$f.getinstname(idlg, curdlg.resolveName('control'));
					
				// if :hnd is on .div and not a dialog.
				form = (inst.parent.indexOf(':hnd') > -1 && curdlg.indexOf(':hnd') == -1) ?
					$f.getinstname(curdlg.resolveName('instform'), inst.parent || '') : form;
				
				// Always send ctype for accurate type of value.
				$f.add(form, inst.ctrl, inst.ctype || inst.type, inst.options, inst.left, inst.top, inst.width, inst.height);
            	instId = $f.instname(form, inst.ctrl);
				$f.setprop(form, inst.ctrl, props);
              	$f.setstyle(form, inst.ctrl, styles);
			}
			
			return instId;
		}
		function attachEvents(ctrl) {
			var type = ctrlType[ctrl] || '',
				arr = parts[type] || [],
				comp = reg[type];
				
			arr.forEach(function(pctrl) {
				var cfn, evt;
				
				cfn = pctrl.replace(':', '_');
				for (var fn in comp) {
					if (typeof(comp[fn]) == 'function' && fn.indexOf(cfn + '_On') > -1) {
						evt = fn.split('_On')[1];
						$f.addevent(curdlg, pctrl, evt.toLowerCase(), comp[fn]);
					}
				}
			});
		}
		function addInstance(ctrl, type, parms) {
			var form, elem, instIds = [], instId = '', cid, len;
			var dataType;
				
			parms = parms || {};
			len = parms.items ? parms.items.length : 0;
			parms.items = parms.items || [true];

			// parms.items: A List of control names to initialize. This string array
			// will override the "ctrl" parameter and create multiple instances.
			parms.items.forEach(function(item, index) {
				var blArray = (typeof(item) == 'string');
				if (reg[type] && typeof(reg[type].load) == 'function') {
					instId = reg[type].load(inject, curdlg, (blArray) ? item : ctrl, parms, parts, len, index);
					
					dataType = $f.getprop(instId, '', 'model-data');
					if (dataType) {
						App.Model.init(dataType, false, true, true);
						App.Model.create(dataType, instId.resolveName('instform'));
					}
                } else {
                  	console.log('Error: Control type "' + type + '" missing from ComponentManager factory.');
                }
				
				if (parts[type]) {
					if (!instId) { 
						form = curdlg;
						cid = ctrl + ':hnd';
						elem = $f.elem(curdlg.resolveName('instform'), cid);
						instId = elem ? elem.id : '';
					} else {
						form = instId.resolveName('form');
						cid = '';
					}

					if (instId) {
						$f.hide(form, cid);
						
						ctrls.push(ctrl);
						ctrlType[ctrl] = type;
						ctrlid.push(instId);

						if (reg[type] && typeof(reg[type].init) == 'function') { 
							parts[type].forEach(function(pctrl) {
								if (parts._init[type].indexOf(pctrl) > -1) reg[type].init(instId.resolveName('instform'), pctrl, "", {});
							});
						}
						
						// Overide default properties.
						if (parms.pos) $f.setpos(form, cid, parms.pos.left || '', parms.pos.top || '');
						if (parms.size) $f.resize(form, cid, parms.size.width || '', parms.size.height || '');
                      	
						if (parms.props) $f.setprop(form, cid, parms.props || []);
                      	if (parms.styles) $f.setstyle(form, cid, parms.styles || []);
                      
						if (parms.disable) $f.disable(form, cid);
						if (parms.show) $f.show(form, cid);
						
						// Attach DEFAULT Events.
						attachEvents(ctrl);
						// Over-ride with USER Events.
						if (parms.events) {
							self.events(ctrl, parms.events);
						} else if (reg[type].events) {
							self.events(ctrl, reg[type].events);
						}
						
						// Notify after each component is added.
						if (parms.each) parms.each(instId, form, cid, item, index);
						if (blArray) instIds.push(instId);
					}
					
					if (reg[type] && typeof(reg[type].activate) == 'function') { 
						parts[type].forEach(function(pctrl) {
							if (parts._init[type].indexOf(pctrl) > -1) reg[type].activate(instId.resolveName('instform'), pctrl, "", {});
						});
					}
				}
			});
			
			self.target(basedlg);
			
			return (instIds.length > 0) ? instIds : instId;
		}
		function triggerMethod(ctrl, event, parms) {
			parms = parms || {};
			var form, cid, type = ctrlType[ctrl];

			var retval = reg[type][event](inject, curdlg, ctrl, parms, parts);
			if (retval) {
				form = retval.resolveName('instform');
              	cid = retval.resolveName('control');

				// Overide default properties.
				if (parms.pos) $f.setpos(form, cid, parms.pos.left || '', parms.pos.top || '');
				if (parms.size) $f.resize(form, cid, parms.size.width || '', parms.size.height || '');
				
				if (parms.props) $f.setprop(form, cid, parms.props || []);
              	if (parms.styles) $f.setstyle(form, cid, parms.styles || []);
              	
				if (parms.disable) $f.disable(form, cid);
				if (parms.show) $f.show(form,cid);
				if (parms.each) parms.each(instId, form, cid, item, index);
				if (parms.events) self.events(ctrl, parms.events);
			}
			return retval;
		}
		
		
		['unload', 'show', 'hide', 'enable', 'disable', 'isvisible', 
		'isenabled', 'setfocus'].forEach(function(fn) {
			self[fn] = function(ctrl) {
				var obj = resolveName(ctrl);
				
				$f[fn](obj.dlg, obj.ctrl);
			};
		});
		['prop', 'style'].forEach(function(fn) {
			self[fn] = function(ctrl, prop, value) {
				var obj = resolveName(ctrl);
				
				if (typeof(value) == 'undefined') {
					return $f['get' + fn](obj.dlg, obj.ctrl, prop);
				} else {
					$f[fn](obj.dlg, obj.ctrl, prop, value);
				}
			};
		});
		['value', 'checked', 'text', 'caption'].forEach(function(fn) {
			self[fn] = function(ctrl, value) {
				var obj = resolveName(ctrl);
				
				if (typeof(value) == 'undefined') {
					return $f['get' + fn](obj.dlg, obj.ctrl);
				} else {
					$f[fn](obj.dlg, obj.ctrl, value);
				}
			};
		});
		['zorder', 'zindex', 'title'].forEach(function(fn) {
			self[fn] = function(ctrl, value) {
				var obj = resolveName(ctrl);
				
				if (typeof(value) == 'undefined') {
					return $f['get' + fn] ? $f['get' + fn](obj.dlg) : null;
				} else {
					$f[fn](obj.dlg, value);
				}
			};
		});

		self.destroy = function() {
			ctrls.forEach(function(ctrl, index) {
				var type = ctrlType[ctrl] || '',
					ary = parts[type] || [];
					
				ary.forEach(function(pctrl) {
					if (pctrl != '_init') {
						if (reg[type] && typeof(reg[type].destroy) == 'function') {
							if (parts._init[type].indexOf(pctrl)> -1) {
								reg[type].destroy(ctrlid[index].resolveName('instform'), pctrl, "", {});
							}
						}
						$f.unload(curdlg, pctrl);
					}
				});

				delete parts._init[type];
				delete parts[type];
				delete ctrlType[ctrl];
			});
			ctrls = [];
			ctrlid = [];
		};
		self.elem = function(ctrl) {
			var obj = resolveName(ctrl);
			
			return $f.elem(obj.dlg, obj.ctrl);
		};
		self.elemid = function(ctrl) {
			var elem = self.elem(ctrl);
			return elem ? elem.id : '';
		};
		self.target = function(newdlg, newctrl) {
			var targ = $f.getinstname(newdlg, newctrl);
			if (targ) {
				curdlg = $f.getinstname(targ);
			} else { return curdlg; }
		};
		self.items = function() {
			return ctrls || [];
		};
		self.ids = function(ctrl) {
			return ctrlid || [];
		};
		self.parts = function(type) {
			type = type || '';
			
			return parts[type] || [];
		};
		
		self.trigger = function(ctrl, event, options) {
			var retval = '', targ, type = ctrlType[ctrl];

			if (type && reg[type] && reg[type][event]) {
                targ = options.target;
                if (targ) self.target(targ.form || curdlg, targ.ctrl || '');
				retval = triggerMethod(ctrl, event, options);
              	self.target(basedlg);
			}
			return retval;
		};
		self.load = function(ctrl, type, options) {
			options = options || {};
			type = type || '';
			
			var targ = options.target;
			if (targ) self.target(targ.form || curdlg, targ.ctrl || '');

			return addInstance(ctrl, type, options);
		};
		self.unloaditems = function(ctrls) {
			ctrls.forEach(function(ctrl) {
				self.unload(ctrl);
			});
		};
		self.events = function(ctrl, evtobj, blRem) {
			var type = ctrlType[ctrl] || '';
			var arr = parts[type] || [];
			
			arr.forEach(function(ctrl) {
				var elem;
				
				if (ctrl != '_init') {
					elem = $f.elem(curdlg, ctrl);
					
					if (elem && evtobj[ctrl]) {
						Object.keys(evtobj[ctrl]).forEach(function(evt) {
							if (evt != '_notify') {
								if (typeof(evtobj[ctrl][evt]) == 'function') {
									$f.setevent(curdlg, ctrl, 'on' + evt, blRem ? null : evtobj[ctrl][evt]);
								}
								
								// NOTIFY events are not wrapped and do not .resolve() itm object.
								if (evtobj[ctrl]._notify && typeof(evtobj[ctrl]._notify) == 'function') {
									elem[blRem ? 'removeEventListener' : 'addEventListener'](evt, evtobj[ctrl]._notify);
								} else if (evtobj._notify && typeof(evtobj._notify) == 'function') {
									elem[blRem ? 'removeEventListener' : 'addEventListener'](evt, evtobj._notify);
								}
							}
						});
					}
				}
			});
		};
	};
	
	ComponentManager.prototype.type = function () {
		return "ComponentManager";
	};
	ComponentManager.prototype.toDto = function () {
		var self = this;
		return { };
	};
	return ComponentManager;
});
