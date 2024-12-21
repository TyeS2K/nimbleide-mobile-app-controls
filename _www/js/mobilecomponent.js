/**
 * Generated with nimble-ide v5.1 on 12/20/2024 11:10 pm.
 * Created for the nimbleJS runtime.
 * (c)2016 by Nimble Solutions, All rights reserved.
 *
 * version: 5.0
 **/
 
if (!$heap) { var $heap = { }; }
$heap.mobilecomponent = { };
$heap.mobilecomponent.Code = {
	_callback: null,
	SlideDesktop: function(oldD, newD) {
		var desk = $f.elem('desktop' + newD + '.body');
		if (!desk) return;
		
		function fadeIn() {
		    if (desk.style.opacity < 1) {
		        desk.style.opacity = (Number(desk.style.opacity) + 0.1).toFixed(2);
		        setTimeout( fadeIn, 60 );
		    } else { 
		        desk.style.opacity = 1;
		        $d.setactive(newD);
		        DESKTOP.switching = false;
		    }
		}
		
		DESKTOP.switching = true;
		desk.style.opacity = 0;
		$d.show('desktop'+ newD +'.body');
		$f.setpos('desktop' + newD + '.body', '', 0, 0);
		$f.slideto('desktop' + oldD + '.body', '', 100, 0, -1, -1, 0.25, function(anim) {
			if (anim.pos == 100) {
				$f.slideto('desktop' + oldD + '.body', '', -(1.35 * DESKTOP.width), 0, -1, -1, 0.50, function(anim) {
					if (anim.pos == 100) {
						fadeIn();
					}
				});
			}
		});
	},
	Ini: { 
	 },
	Csv: { 
	 },
	Data: { 
		"black.json": {
			'data' : '{<CR>' + 
			'	<DQ>name<DQ>: <DQ>black<DQ>,<CR>' + 
			'	<DQ>jsonType<DQ>: <DQ>palette<DQ>,<CR>' + 
			'	<DQ>data<DQ>: {<CR>' + 
			'		<DQ>b50<DQ>: <DQ>#fafafa<DQ>, <CR>' + 
			'		<DQ>b100<DQ>: <DQ>#f5f5f5<DQ>, <CR>' + 
			'		<DQ>b200<DQ>: <DQ>#eeeeee<DQ>, <CR>' + 
			'		<DQ>b300<DQ>: <DQ>#e0e0e0<DQ>, <CR>' + 
			'		<DQ>b400<DQ>: <DQ>#bdbdbd<DQ>, <CR>' + 
			'		<DQ>b500<DQ>: <DQ>#9e9e9e<DQ>, <CR>' + 
			'		<DQ>b600<DQ>: <DQ>#757575<DQ>, <CR>' + 
			'		<DQ>b700<DQ>: <DQ>#616161<DQ>, <CR>' + 
			'		<DQ>b800<DQ>: <DQ>#424242<DQ>, <CR>' + 
			'		<DQ>b900<DQ>: <DQ>#212121<DQ><CR>' + 
			'	}<CR>' + 
			'}<CR>' + 
			''
		},
		"bluegray.json": {
			'data' : '{<CR>' + 
			'	<DQ>name<DQ>: <DQ>bluegray<DQ>,<CR>' + 
			'	<DQ>jsonType<DQ>: <DQ>palette<DQ>,<CR>' + 
			'	<DQ>data<DQ>: {<CR>' + 
			'		<DQ>bg50<DQ>: <DQ>#eceff1<DQ>, <CR>' + 
			'		<DQ>bg100<DQ>: <DQ>#cfd8dc<DQ>, <CR>' + 
			'		<DQ>bg200<DQ>: <DQ>#b0bec5<DQ>, <CR>' + 
			'		<DQ>bg300<DQ>: <DQ>#90a4ae<DQ>, <CR>' + 
			'		<DQ>bg400<DQ>: <DQ>#78909c<DQ>, <CR>' + 
			'		<DQ>bg500<DQ>: <DQ>#607d8b<DQ>, <CR>' + 
			'		<DQ>bg600<DQ>: <DQ>#546e7a<DQ>, <CR>' + 
			'		<DQ>bg700<DQ>: <DQ>#455a64<DQ>, <CR>' + 
			'		<DQ>bg800<DQ>: <DQ>#37474f<DQ>, <CR>' + 
			'		<DQ>bg900<DQ>: <DQ>#263238<DQ><CR>' + 
			'	}<CR>' + 
			'}<CR>' + 
			''
		},
		"brown.json": {
			'data' : '{<CR>' + 
			'	<DQ>name<DQ>: <DQ>brown<DQ>,<CR>' + 
			'	<DQ>jsonType<DQ>: <DQ>palette<DQ>,<CR>' + 
			'	<DQ>data<DQ>: {<CR>' + 
			'		<DQ>br50<DQ>: <DQ>#efebe9<DQ>, <CR>' + 
			'		<DQ>br100<DQ>: <DQ>#d7ccc8<DQ>, <CR>' + 
			'		<DQ>br200<DQ>: <DQ>#bcaaa4<DQ>, <CR>' + 
			'		<DQ>br300<DQ>: <DQ>#a1887f<DQ>, <CR>' + 
			'		<DQ>br400<DQ>: <DQ>#8d6e63<DQ>, <CR>' + 
			'		<DQ>br500<DQ>: <DQ>#795548<DQ>, <CR>' + 
			'		<DQ>br600<DQ>: <DQ>#6d4c41<DQ>, <CR>' + 
			'		<DQ>br700<DQ>: <DQ>#5d4037<DQ>, <CR>' + 
			'		<DQ>br800<DQ>: <DQ>#4e342e<DQ>, <CR>' + 
			'		<DQ>br900<DQ>: <DQ>#3e2723<DQ><CR>' + 
			'	}<CR>' + 
			'}<CR>' + 
			''
		},
		"palette.json": {
			'data' : '{<CR>' + 
			'	<DQ>name<DQ>: <DQ>light blue<DQ>,<CR>' + 
			'	<DQ>jsonType<DQ>: <DQ>palette<DQ>,<CR>' + 
			'	<DQ>data<DQ>: {<CR>' + 
			'		<DQ>color50<DQ>: <DQ>#e1f5fe<DQ>, <CR>' + 
			'		<DQ>color100<DQ>: <DQ>#b3e5fc<DQ>, <CR>' + 
			'		<DQ>color200<DQ>: <DQ>#81d4fa<DQ>, <CR>' + 
			'		<DQ>color300<DQ>: <DQ>#4fc3f7<DQ>, <CR>' + 
			'		<DQ>color400<DQ>: <DQ>#29b6f6<DQ>, <CR>' + 
			'		<DQ>color500<DQ>: <DQ>#03a9f4<DQ>, <CR>' + 
			'		<DQ>color600<DQ>: <DQ>#039be5<DQ>, <CR>' + 
			'		<DQ>color700<DQ>: <DQ>#0288d1<DQ>, <CR>' + 
			'		<DQ>color800<DQ>: <DQ>#0277bd<DQ>, <CR>' + 
			'		<DQ>color900<DQ>: <DQ>#01579b<DQ>, <CR>' + 
			'		<DQ>colora100<DQ>: <DQ>#80d8ff<DQ>, <CR>' + 
			'		<DQ>colora200<DQ>: <DQ>#40c4ff<DQ>, <CR>' + 
			'		<DQ>colora400<DQ>: <DQ>#00b0ff<DQ>, <CR>' + 
			'		<DQ>colora700<DQ>: <DQ>#0091ea<DQ><CR>' + 
			'	}<CR>' + 
			'}<CR>' + 
			''
		}
	 },
	Lists: { 
	 },
	i18n: { 
	 },
	Vars: { },
	
	Services: function(in_msg) {
			/**
		* Build a router to parse messages coming to
		* this applications PostBox.
		*
		* version: 5.0
		**/
		switch (in_msg.msg) {
			case 'ping':
				alert("mobilecomponent received ping sent from: " + in_msg.from);
				break;
				
			default:
		}
		
	},
	Components: {
	
		"combo": {
			"init": function(dlg, ctrl, pgname, options) {
			},
			"activate": function(dlg, ctrl, pgname, options) {
			},
			"destroy": function(dlg, ctrl, pgname, options) {
			},
			"custom": function(inject, dlg, ctrl, parms, parts) {
				var inst, instId = "";
				var base, props, styles;
				//A custom event trigger.
				base = {"form": dlg, "name": ctrl};
			},
			"load": function(inject, dlg, ctrl, parms, parts, len, index) {
				var inst, instId, defPos;
				var base, props, styles;
				parts._init["combo"] = [];
				parts["combo"] = ["hnd","selected","expand","items"];
				base = {"form": dlg,"name": (len ? parms.items[index] : ctrl)};
				inst = Object.assign(base, {"parent": ((parms && parms.parent) || ""),"dialog":false,"type":"div","ctype":"","options":"","ctrl": base.name + ":hnd","left":13,"top":12,"width":258,"height":179});
					props = {"disabled":"","form":"surface1","dock":"FFFF","title":"","caption":"","ctype":"frame","bind":"false","lock-height":"!!!!","donottheme":"false","dragable":"false","model-data":"surface1","sizeable":"false","theme":"nimble-frame","watch":"false","xdragrange":"-1; -1","ydragrange":"-1; -1"};
					styles = {"color":"#000000","border-spacing":"1px","border-width":"0px","background-color":"#ffffff","font-style":"normal","font-family":"inherit","font-weight":"normal","border-radius":"3px","border":"none","box-shadow":"rgba(80,80,80,.40) 0px 2px 2px 0px","box-sizing":"border-box","display":"inline-block","font-size":"10.2pt","height":"auto","overflow-y":"auto","padding":"5px 5px 5px 5px","pointer-events":"inherit","position":"absolute","text-align":"left","visibility":"visible"};
				inject(inst, props, styles);
				inst = Object.assign(base, {"parent": base.name + ":hnd","dialog":false,"type":"label","ctype":"label","options":"","ctrl": "selected","left":7,"top":8,"width":220,"height":26});
					props = {"disabled":"","form":"surface1","dock":"FFFF","title":"","caption":"selected","bind":"false","lock-pos":"!!!!","lock-width":"!!!!","donottheme":"false","dragable":"false","scale-cpl":"25","scaletype":"false","sizeable":"false","theme":"nimble-label","watch":"false","xdragrange":"-1; -1","ydragrange":"-1; -1"};
					styles = {"color":"#000000","border-width":"0px","background-color":"#d3e3e9","font-style":"normal","font-family":"inherit","font-weight":"normal","border-radius":"9px","border":"0px solid #bbb","display":"table","font-size":"10.2pt","line-height":"100%","padding":"0px 0px","pointer-events":"inherit","text-align":"left","vertical-align":"middle","visibility":"visible","width":"calc(100% - 28px)","caption.display":"table-cell","caption.left":"0px","caption.position":"relative","caption.text-align":"left","caption.vertical-align":"middle","caption.width":"auto","div.display":"inline-block","div.margin":"3px 2px 0px 2px","div.min-width":"60px","div.padding":"4px 10px 4px 10px","div.position":"relative"};
				inject(inst, props, styles);
				inst = Object.assign(base, {"parent": base.name + ":hnd","dialog":false,"type":"icon","ctype":"icon","options":"","ctrl": "expand","left":233,"top":11,"width":20,"height":20});
				inst.options = 'media/img_missing.png';
					props = {"disabled":"","form":"surface1","dock":"FFFF","title":"","caption":"","bind":"false","lock-pos":"!!!!","donottheme":"false","dragable":"false","sizeable":"false","theme":"nimble-icon","watch":"false","xdragrange":"-1; -1","ydragrange":"-1; -1","image.class":"fa fa-angle-double-down","image.title":"undefined"};
					styles = {"color":"#000000","border-width":"0px","background-color":"transparent","font-style":"normal","font-family":"inherit","font-weight":"normal","border":"0px solid #bbb","font-size":"20px","pointer-events":"inherit","text-align":"center","vertical-align":"middle","visibility":"visible","caption.position":"relative","div.display":"inline-block","div.margin":"3px 0px 0px 4px","div.position":"relative","image.color":"#999999","image.display":"block","image.font-size":"20px"};
				inject(inst, props, styles);
				inst = Object.assign(base, {"parent": "items","dialog":false,"type":"div","ctype":"","options":"","ctrl": "items","left":5,"top":39,"width":"","height":""});
					props = {"disabled":"","form":"surface1","dock":"FFFF","title":"","caption":"","ctype":"frame","bind":"false","lock-pos":"!!!!","lock-width":"!!!!","donottheme":"false","dragable":"false","sizeable":"false","theme":"nimble-frame","watch":"false","xdragrange":"-1; -1","ydragrange":"-1; -1"};
					styles = {"left":"","top":"","width":"","color":"#000000","border-width":"0px","background-color":"#ffffff","font-style":"normal","font-family":"inherit","font-weight":"normal","border-radius":"4px","border":"0.5px solid rgba(230,230,230,0.30)","box-shadow":"rgba(80,80,80,.20) 2px 2px 5px 0px","box-sizing":"border-box","display":"block","font-size":"10.2pt","margin":"5px 0px 0px 0px","max-height":"135px","overflow-y":"auto","padding":"5px 5px 5px 5px","pointer-events":"inherit","position":"relative","text-align":"left","visibility":"visible"};
				inject(inst, props, styles);
				return instId || "";
			}
		},
		"surface1": {
			"init": function(dlg, ctrl, pgname, options) {
			},
			"activate": function(dlg, ctrl, pgname, options) {
			},
			"destroy": function(dlg, ctrl, pgname, options) {
			},
			"custom": function(inject, dlg, ctrl, parms, parts) {
				var inst, instId = "";
				var base, props, styles;
				//A custom event trigger.
				base = {"form": dlg, "name": ctrl};
			},
			"load": function(inject, dlg, ctrl, parms, parts, len, index) {
				var inst, instId, defPos;
				var base, props, styles;
				parts._init["surface1"] = [];
				parts["surface1"] = ["hnd","combo","selected","expand","items","_item1"];
				base = {"form": dlg,"name": (len ? parms.items[index] : ctrl)};
				inst = Object.assign(base, {"parent": ((parms && parms.parent) || ""),"dialog":true,"type":"dialog.surface","ctype":"form","options":"","ctrl": base.name + ":hnd","left":0,"top":0,"width":480,"height":308});
				styles = ( null | globals.DlgStyles.shadow | globals.DlgStyles.dragable | globals.DlgStyles.sizable );
				defPos = {target: 'desktop' + DESKTOP.currentDesktop, dock:'RRRR', left:'0', top:'0', width:'480', height:'308'};
					props = {"body.version":"v5.0","autosize":"false","disabled":"","_private":"false","bind":"false","clipmenu":"true","donottheme":"false","dragable":"true","flattenonpull":"true","ignorezorder":"false","model-data":"surface1","output":"normal","shadow":"true","sizeable":"true","theme":"nimble-form","toggleonflip":"true","useastheme":"false","watch":"false"};
					styles = {"color":"#eeeeee","background-color":"rgba(20,20,20,0.25)","font-family":"verdana, geneva, sans-serif","font-weight":"normal","visibility":"visible","font-size":"14px","pointer-events":"auto","z-index":"2"};
				instId = inject(inst, props, styles);
				inst = Object.assign(base, {"parent": base.name + ":hnd","dialog":false,"type":"div","ctype":"","options":"","ctrl": "combo","left":13,"top":12,"width":258,"height":179});
					props = {"disabled":"","form":"surface1","dock":"FFFF","title":"","caption":"","ctype":"frame","bind":"false","lock-height":"!!!!","donottheme":"false","dragable":"false","model-data":"surface1","sizeable":"false","theme":"nimble-frame","watch":"false","xdragrange":"-1; -1","ydragrange":"-1; -1"};
					styles = {"color":"#000000","border-spacing":"1px","border-width":"0px","background-color":"#ffffff","font-style":"normal","font-family":"inherit","font-weight":"normal","border-radius":"3px","border":"none","box-shadow":"rgba(80,80,80,.40) 0px 2px 2px 0px","box-sizing":"border-box","display":"inline-block","font-size":"10.2pt","height":"auto","overflow-y":"auto","padding":"5px 5px 5px 5px","pointer-events":"inherit","position":"absolute","text-align":"left","visibility":"visible"};
				inject(inst, props, styles);
				inst = Object.assign(base, {"parent": "combo","dialog":false,"type":"label","ctype":"label","options":"","ctrl": "selected","left":7,"top":8,"width":220,"height":26});
					props = {"disabled":"","form":"surface1","dock":"FFFF","title":"","caption":"selected","bind":"false","lock-pos":"!!!!","lock-width":"!!!!","donottheme":"false","dragable":"false","scale-cpl":"25","scaletype":"false","sizeable":"false","theme":"nimble-label","watch":"false","xdragrange":"-1; -1","ydragrange":"-1; -1"};
					styles = {"color":"#000000","border-width":"0px","background-color":"#d3e3e9","font-style":"normal","font-family":"inherit","font-weight":"normal","border-radius":"9px","border":"0px solid #bbb","display":"table","font-size":"10.2pt","line-height":"100%","padding":"0px 0px","pointer-events":"inherit","text-align":"left","vertical-align":"middle","visibility":"visible","width":"calc(100% - 28px)","caption.display":"table-cell","caption.left":"0px","caption.position":"relative","caption.text-align":"left","caption.vertical-align":"middle","caption.width":"auto","div.display":"inline-block","div.margin":"3px 2px 0px 2px","div.min-width":"60px","div.padding":"4px 10px 4px 10px","div.position":"relative"};
				inject(inst, props, styles);
				inst = Object.assign(base, {"parent": "combo","dialog":false,"type":"icon","ctype":"icon","options":"","ctrl": "expand","left":233,"top":11,"width":20,"height":20});
				inst.options = 'media/img_missing.png';
					props = {"disabled":"","form":"surface1","dock":"FFFF","title":"","caption":"","bind":"false","lock-pos":"!!!!","donottheme":"false","dragable":"false","sizeable":"false","theme":"nimble-icon","watch":"false","xdragrange":"-1; -1","ydragrange":"-1; -1","image.class":"fa fa-angle-double-down","image.title":"undefined"};
					styles = {"color":"#000000","border-width":"0px","background-color":"transparent","font-style":"normal","font-family":"inherit","font-weight":"normal","border":"0px solid #bbb","font-size":"20px","pointer-events":"inherit","text-align":"center","vertical-align":"middle","visibility":"visible","caption.position":"relative","div.display":"inline-block","div.margin":"3px 0px 0px 4px","div.position":"relative","image.color":"#999999","image.display":"block","image.font-size":"20px"};
				inject(inst, props, styles);
				inst = Object.assign(base, {"parent": "items","dialog":false,"type":"div","ctype":"","options":"","ctrl": "items","left":5,"top":39,"width":"","height":""});
					props = {"disabled":"","form":"surface1","dock":"FFFF","title":"","caption":"","ctype":"frame","bind":"false","lock-pos":"!!!!","lock-width":"!!!!","donottheme":"false","dragable":"false","sizeable":"false","theme":"nimble-frame","watch":"false","xdragrange":"-1; -1","ydragrange":"-1; -1"};
					styles = {"left":"","top":"","width":"","color":"#000000","border-width":"0px","background-color":"#ffffff","font-style":"normal","font-family":"inherit","font-weight":"normal","border-radius":"4px","border":"0.5px solid rgba(230,230,230,0.30)","box-shadow":"rgba(80,80,80,.20) 2px 2px 5px 0px","box-sizing":"border-box","display":"block","font-size":"10.2pt","margin":"5px 0px 0px 0px","max-height":"135px","overflow-y":"auto","padding":"5px 5px 5px 5px","pointer-events":"inherit","position":"relative","text-align":"left","visibility":"visible"};
				inject(inst, props, styles);
				inst = Object.assign(base, {"parent": "combo","dialog":false,"type":"label","ctype":"label","options":"","ctrl": "_item1","left":7,"top":5,"width":"","height":""});
					props = {"disabled":"","form":"surface1","dock":"FFFF","title":"","caption":"_item","bind":"false","lock-pos":"!!!!","lock-width":"!!!!","donottheme":"false","dragable":"false","scale-cpl":"25","scaletype":"false","sizeable":"false","theme":"nimble-label","watch":"false","xdragrange":"-1; -1","ydragrange":"-1; -1"};
					styles = {"color":"#000000","border-width":"0px","background-color":"#d3e3e9","font-style":"normal","font-family":"inherit","font-weight":"normal","border-radius":"9px","border":"0px solid #bbb","display":"table","font-size":"10.2pt","line-height":"100%","padding":"0px 0px","pointer-events":"inherit","text-align":"left","visibility":"visible","width":"auto","caption.display":"table-cell","caption.left":"0px","caption.position":"relative","caption.text-align":"left","caption.vertical-align":"middle","caption.width":"auto","div.display":"block","div.margin":"0px 2px 0px 2px","div.min-width":"60px","div.padding":"4px 10px 4px 10px","div.position":"relative"};
				inject(inst, props, styles);	
				$f.setprop(base.name + ":hnd","","dock", "FFFF");
				props = {"body.version":"v5.0"};
				$f.setprop(base.name + ":hnd",'', props);
				styles = {"body.background-color":"RGBA(20,20,20,0.25)","body.box-sizing":"border-box","body.color":"#eeeeee","body.overflow":"visible","body.text-align":"","body.vertical-align":""};
				$f.setstyle(base.name + ":hnd",'', styles);
				return instId || "";
			}
		}	
	},
	RegisterFactories: function() {
	
		
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
		/* CONFIG Component Manager/Factory :
		   
		*/
		FACTORY.Register("Config", function blankFactory() {
			var config = function (config) {
				var self = this;
				var _state = 'local';
		        var _ip = '127.0.0.1:3031';
		      
				self.server = function() {
		          return (_state == 'local') ? 'http://' + _ip + '/widget' : 'https://www.nimble-ide.com/widget';
				};
		      	self.domain = function() {
		          return (_state == 'local') ? 'http://' + _ip : 'https://www.nimble-ide.com';
				};
			};
			config.prototype.type = function () {
				return "config";
			};
			config.prototype.toDto = function () {
				var self = this;
				return { };
			};
			return config;
		});
		
		/* Custome Component Manager/Factory :
		   
		*/
		FACTORY.Register("CustomControl", function CustomCtrlsFactory() {
			var CustomCtrls = function (config) {
				var self = this;
		      	function add(dlg, ctrl, type, fld, lW, tH, wW, hH) {
		          var arr;
		          if ($f.custom && $f.custom[type]) {
		            arr = $f.custom[type]._cfg.template;
		            
		            arr = $k.replaceall('<<COMPONENT.NAME>>', type, arr);
		            arr = $k.replaceall('<<FORM.NAME>>', dlg, arr);
		            arr = $k.replaceall('<<CTRL.NAME>>', ctrl, arr);
		            arr = $k.replaceall('<<CTRL.LEFT>>', lW, arr);
		            arr = $k.replaceall('<<CTRL.TOP>>', tH, arr);
		            arr = $k.replaceall('<<CTRL.WIDTH>>', wW, arr);
		            arr = $k.replaceall('<<CTRL.HEIGHT>>', hH, arr);
		            
		            try {
		              arr = eval(arr);
		              arr.forEach(function(itm) {
		                var instname;
		                switch(itm.action) {
		                  case 'add':
		                      if (itm.blInst) {
		                        instname = $f.getinstname(itm.form, itm.parent);
		                        $f.add(itm.instname, itm.ctrl, itm.type, itm.fld, itm.left, itm.top, itm.width, itm.height);
		                      } else {
		                        instname = '';
		                        $f.add(itm.form, itm.ctrl, itm.type, itm.fld, itm.left, itm.top, itm.width, itm.height);
		                      }
		                      $f.setprop(itm.form, itm.ctrl, {"custom-ctrl": type});
		                      break;
		                  case 'setprop':
		                      $f.setprop(itm.form, itm.ctrl, itm.props);
		                      break;
		                  case 'setstyle':
		                      $f.setstyle(itm.form, itm.ctrl, itm.styles);
		                      break;
		                  case 'hide':
		                      $f.hide(itm.form, itm.ctrl);
		                      break;
		                  case 'show':
		                      $f.show(itm.form, itm.ctrl);
		                      break;
		                  case 'enable':
		                      $f.enable(itm.form, itm.ctrl);
		                      break;
		                  case 'disable':
		                      $f.disable(itm.form, itm.ctrl);
		                      break;
		                  case 'addevent':
		                      $f.addevent(itm.form, itm.ctrl, itm.event, itm.handler);
		                      break;
		                  case 'setevent':
		                      $f.setevent(itm.form, itm.ctrl, itm.event, itm.handler);
		                      break;
		                  case 'removeevent':
		                      $f.removeevent(itm.form, itm.ctrl, itm.event, itm.handler);
		                      break;
		                }
		              });
		              if ($f.custom[type]._load) {
		                $f.custom[type]._load(dlg, ctrl);
		              }
		            } catch(err) {
		              console.log('ERROR Adding Custom Control.');
		              console.log(err);
		            }
		          }
		        }
		      
		      	self.register = function(name, methodObj) {
		          var fns = Object.keys(methodObj);
		          fns = fns.concat(['show','hide','enable','disable']);
		          if (!$f.custom[name]) { 
		            $f.custom[name] = { 
		              _cfg: {
		                type: methodObj.type,
		                _template: methodObj._template
		              }
		            };
		          }
		          
		          fns.forEach(function(fn) {
		            if (typeof(methodObj[fn]) == 'function' || typeof($f[fn]) == 'function') {
		              $f.custom[name][fn] = methodObj[fn] ? methodObj[fn] :
		                  $f[fn] ? $f[fn] : null;
		              
		              delete methodObj[fn];
		            }
		          });
		          // Build constructor to be used for adding component
		          // at design time. Attach default events.
		          $f.custom[name].add = add;
		          $f.custom[name].unload = function(dlg, ctrl) {
		            var type = $f.getprop(itm.form, itm.ctrl, "custom-ctrl");
		            if ($f.custom[type]._unload) {
		              $f.custom[type]._unload(dlg, ctrl);
		            }
		            $f.unload(dlg, ctrl);
		          };
		        };
		      
		      	self.unregister = function(name) {
		          if ($f.custom[name]) {
		            if ($f.custom[name]._unload) {
		              $f.custom[name]._unregister(name);
		            }
		            
					for (var fn in $f.custom[name]) {
		              if (typeof($f.custom[name][fn]) == 'function') {
		                $f.custom[name][fn] = null;
		              }
		            }
		            $f.custom[name]._cfg = null;
		            delete $f.custom[name];
		          }
		        };
			};
			
		  	CustomCtrls.prototype.type = function () {
				return "CustomCtrls";
			};
			CustomCtrls.prototype.toDto = function () {
				var self = this;
				return { };
			};
			return CustomCtrls;
		});
		$k.custom.ctrls = $fctry.new('CustomControl');
		/* Events Component Manager/Factory :
		   
		*/
		FACTORY.Register("Events", function EventsFactory() {
			var Events = function (config) {
				var self = this;
		     	var $search;
		      
		      	self._config = $fctry.new('Config');
		      	self._shared = {
		          // Attach _shared factories that can be pushed to
				  // other factories via onload() event.
		        };
				
				// Attach all factories to the main parent.
				// Each factory should connect to a UI component's events.
				//
				// self.login = $fctry.new('Login');
		      	// self.header = $fctry.new('Header');
				// ...
				// ..
				// .
		      	self.startSession = function(sessid) {
				  // Trigger this after a user has logged into
				  // the site and created a sessionid.
				  // Login Complete.
		          // - Current sessionID passed as sessid. 
		          // - Current User Details located on USER.acct.
		        };
		      
		        self.main = {
		          activate: function(e, itm) {
		            $with($f, [
		              ['pos', 'frmmain', '', 0, 0],
		              ['full', 'frmmain']
		            ]);
		          },
		          startdiagnostic: function(e, itm) {
		            // Cordova Plugins diagnosis script.
		            $phone.diagnose('frmmain', 'results');
		          }
		        };
		      
				self.title = {
		          startup: function(e, itm) {
		            $f.full('frmtitle');
		            $f.load('frmmain');
					setTimeout(function() {
		              $f.unload('frmtitle');
		              $f.show('frmmain');
		              
		              $phone = $fctry.new('Phone');
		            }, 3500);
		            // Initialize and REST calls for the public view
					// of the site/app.
		          },
		          body: {
		            click: function(e, item) {
		              alert('Phone Diagnostic App!');
		            }
		          }
				};
		        // Trigger onLoad event on all attached factories,
		        // to share necessary methods in a tree.
		        for (var mod in self) {
		          if (self[mod].onload) { self[mod].onload(self); }
		        }
			};
			
		  	Events.prototype.type = function () {
				return "Events";
			};
			Events.prototype.toDto = function () {
				var self = this;
				return { };
			};
			return Events;
		});
		
		/* Phone Cordova Manager/Factory :
		   
		*/
		FACTORY.Register("Phone", function PhoneFactory() {
			var Phone = function (config) {
				var self = this;
		      	var _cfg = {};
		      	var smsList = [];
		      
		      	var _fsType = '';
		      	if (typeof(LocalFileSystem) != 'undefined') {
		      		_fsType = LocalFileSystem.PERSISTENT;
		        }
		      	var enable = {};
				var NOTIFY = {
		          DEFAULT_SUCCESS: 'SUCCESS',
		          DEFAULT_ERROR: 'ERROR',
		          
		          MEDIA_SUCCESS: 'MEDIA_SUCCESS',
		          MEDIA_ERROR: 'MEDIA_ERROR',
		          MEDIA_POS_SUCCESS: 'MEDIA_POS_SUCCESS',
		          MEDIA_POS_ERROR: 'MEDIA_POS_ERROR',
		          MEDIA_AMP_SUCCESS: 'MEDIA_AMP_SUCCESS',
		          MEDIA_AMP_ERROR: 'MEDIA_AMP_ERROR',
		          MEDIA_DUR_SUCCESS: 'MEDIA_DUR_SUCCESS',
		          MEDIA_DUR_ERROR: 'MEDIA_DUR_ERROR',
		          MEDIA_INTERVAL: 'MEDIA_INTERVAL',
		          
		          
		          FS_SUCCESS: 'FS_SUCCESS',
		          FS_ERROR: 'FS_ERROR',
		          FS_GETFILE_SUCCESS: 'FS_GETFILE_SUCCESS',
		          FS_GETFILE_ERROR: 'FS_GETFILE_ERROR',
		          FS_STREAM_SUCCESS: 'FS_STREAM_SUCCESS',
		          FS_STREAM_ERROR: 'FS_STREAM_ERROR',
		          FS_EXISTS_SUCCESS: 'FS_EXISTS_SUCCESS',
		          FS_EXISTS_ERROR: 'FS_EXISTS_ERROR',
		          FS_READ_SUCCESS: 'FS_READ_SUCCESS',
		          FS_READ_ERROR: 'FS_READ_ERROR',
		          FS_WRITE_SUCCESS: 'FS_WRITE_SUCCESS',
		          FS_WRITE_ERROR: 'FS_WRITE_ERROR',
		          FS_DELETE_SUCCESS: 'FS_DELETE_SUCCESS',
		          FS_DELETE_ERROR: 'FS_DELETE_ERROR',
		          FS_LIST_SUCCESS: 'FS_LIST_SUCCESS',
		          FS_LIST_ERROR: 'FS_LIST_ERROR',
		          FS_MKDIR_SUCCESS: 'FS_MKDIR_SUCCESS',
		          FS_MKDIR_ERROR: 'FS_MKDIR_ERROR',
		          FS_DELDIR_SUCCESS: 'FS_DELDIR_SUCCESS',
		          FS_DELDIR_ERROR: 'FS_DELDIR_ERROR',
		          FS_DELALL_SUCCESS: 'FS_DELALL_SUCCESS',
		          FS_DELALL_ERROR: 'FS_DELALL_ERROR',
		          
		          GEOLOC_SUCCESS: 'GEOLOC_SUCCESS',
		          GEOLOC_ERROR: 'GEOLOC_ERROR',
		          
		          COMPASS_SUCCESS: 'COMPASS_SUCCESS',
		          COMPASS_ERROR: 'COMPASS_ERROR',
		          
		          MOTION_SUCCESS: 'MOTION_SUCCESS',
		          MOTION_ERROR: 'MOTION_ERROR',
		          
		          GETLIBRARY_SUCCESS: 'GETLIBRARY_SUCCESS',
		          GETLIBRARY_ERROR: 'GETLIBRARY_ERROR',
		          GETALBUM_SUCCESS: 'GETALBUMN_SUCCESS',
		          GETALBUM_ERROR: 'GETALBUMN_ERROR',
		          SAVEIMAGE_SUCCESS: 'SAVEIMAGE_SUCCESS',
		          SAVEIMAGE_ERROR: 'SAVEIMAGE_ERROR',
		          SAVEVIDEO_SUCCESS: 'SAVEVIDEO_SUCCESS',
		          SAVEVIDEO_ERROR: 'SAVEVIDEO_ERROR',
		          
		          CAMERA_SUCCESS: 'CAMERA_SUCCESS',
		          CAMERA_ERROR: 'CAMERA_ERROR',
		          CAMCLENUP_SUCCESS: 'CAMCLEANUP_SUCCESS',
		          CAMCLENUP_ERROR: 'CAMCLEANUP_ERROR',
		          
		          FINDCONTACT_SUCCESS: 'FINDCONTACT_SUCCESS',
		          FINDCONTACT_ERROR: 'FINDCONTACT_ERROR',
		          CREATECONTACT_SUCCESS: 'CREATECONTACT_SUCCESS',
		          CREATECONTACT_ERROR: 'CREATECONTACT_ERROR',
		          PICKCONTACT_SUCCESS: 'PICKCONTACT_SUCCESS',
		          PICKCONTACT_ERROR: 'PICKCONTACT_ERROR',
		          
		          SENDMSGS_SUCCESS: 'SENDMSGS_SUCCESS',
		          SENDMSGS_ERROR: 'SENDMSGS_ERROR',
		          LISTMSGS_SUCCESS: 'LISTMSGS_SUCCESS',
		          LISTMSGS_ERROR: 'LISTMSGS_ERROR',
		          DELETEMSGS_SUCCESS: 'DELETEMSGS_SUCCESS',
		          DELETEMSGS_ERROR: 'DELETEMSGS_ERROR',
		          
		          RESTOREMSGS_SUCCESS: 'RESTOREMSGS_SUCCESS',
		          RESTOREMSGS_ERROR: 'RESTOREMSGS_ERROR',
		          DISABLE_INTERCEPT_SUCCESS: 'DISABLE_INTERCEPT_SUCCESS',
		          DISABLE_INTERCEPT_ERROR: 'DISABLE_INTERCEPT_ERROR',
		          ENABLE_INTERCEPT_SUCCESS: 'ENABLE_INTERCEPT_SUCCESS',
		          ENABLE_INTERCEPT_ERROR: 'ENABLE_INTERCEPT_ERROR',
		          DISABLE_WATCH_SUCCESS: 'DISABLE_WATCH_SUCCESS',
		          DISABLE_WATCH_ERROR: 'DISABLE_WATCH_ERROR',
		          ENABLE_WATCH_SUCCESS: 'ENABLE_WATCH_SUCCESS',
		          ENABLE_WATCH_ERROR: 'ENABLE_WATCH_ERROR'
		        };
		      	var permissions = (typeof(cordova) != 'undefined') ? cordova.plugins.permissions : {};
		 
		        function checkPermission(perm, onSuccess, stub) {
		          self[stub.type] = self[stub.type] || {};
		          
		          function onFailed(type, methods) {
		            if (methods.length > 0) {
		              methods.forEach(function(itm) {
		                self[type][itm] = function() { };
		              });
		            } else {
		              self[type] = function() { };
		            }
		            self[type]._enabled = false;
		            self[type]._status = 'failed';
		          }
		          function error() {
		            if (!self[stub.type]._enabled) { onFailed(stub.type, stub.methods); }
		          }
		          
		          permissions.checkPermission(perm, function(status) {
		            if (status.hasPermission) {
		              if (!self[stub.type]._enabled) {
		                self[stub.type]._enabled = true;
		                self[stub.type]._status = 'success';
		                onSuccess();
		              }
		            } else permissions.requestPermission(perm, function() {
		              if (!self[stub.type]._enabled) {
		                self[stub.type]._enabled = true;
		                self[stub.type]._status = 'success';
		                onSuccess();
		              }
		            }, error);
		          }, error);
		        }
		      	
		      	self.info = function() {
		          return (device && device.cordova) ? {
		            cordova: device.cordova,
		            model: device.model,
		            platform: device.platform,
		            uuid: device.uuid,
		            version: device.version,
		            sernum: device.serial
		          } : null;
		        };
		      	self.isMobile = function() {
		          return $nim.Agent.isMobile && ($nim.Agent.usingAndroid || $nim.Agent.usingIPad);
		        };
		      	self.Agent = function() {
		          return navigator.userAgent;
		        };
		      	self.Vendor = function() {
		          return navigator.vendor;
		        };
				enable.orientation = function() {
					self.orientation = {
		              get: function() {
		                return screen.orientation.type;
		              },
		              notify: function() {
		                console.log(screen.orientation.type); // e.g. portrait
		              }
					};
					window.addEventListener("orientationchange", self.orientation.notfy);
				};
				enable.battery = function() {
		          if (!self.battery) {
					self.battery = {
		              	_status: '',
		              	get: function() {
		                  return self.battery._status;
		                },
						notify: function(msg, status) {
		                  	self.battery._status = {msg: msg, status: status};
							console.log(msg);
							console.log(JSON.stringify(status));
						}
					};
					window.addEventListener("batterystatus", function(status) {
						self.battery.notify('battery status', status);
					}, false);
					window.addEventListener("batterylow", function(status) {
						self.battery.notify('battery low', status);
					}, false);
					window.addEventListener("batterycritical", function(status) {
						self.battery.notify('battery critical', status);
					}, false);
		          }
				};
				enable.device = function() {
					self.device = {
						// key: model | platform | uuid | version | manufacturer |
						//      isVirtual | isiOSAppOnMac | serial
						get: function(key) {
							return (device && device[key]) ? device[key] : '';
						}
					};
				};
				enable.compass = function() {
					var compID;
		          
		          	if (navigator.compass) {
		              self.compass = {
		                  _status: '',
		                  get: function() {
		                    return self.compass._status;
		                  },
		                  notify: function(heading) {
		                    self.compass._status = heading;
		                    console.log('Heading: ' + heading.magneticHeading);
		                  },
		                  getHeading: function(fn) {
		                    navigator.compass.getCurrentHeading(function(heading) {
		                      self.compass.notify(heading);
		                      if (fn) fn(NOTIFY.COMPASS_SUCCESS, heading);
		                    }, self.compass.error);
		                  },
		                  error: function(errMsg) {
		                    console.log(NOTIFY.COMPASS_ERROR);
		                    console.log(errMsg);
		                  },
		                  start: function() {
		                      watchID = navigator.compass.watchHeading(
		                          self.compass.notify, 
		                          self.compass.error,
		                          {frequency: 3000});
		                  },
		                  stop: function() {
		                      navigator.compass.clearWatch(compID);
		                  }
		              };
		            }
				};
				enable.motion = function() {
		          if (navigator.accelerometer) {
					self.motion = {
		                _status: '',
		              	get: function() {
		                    return self.motion._status;
		                },
						notify: function(acceleration) {
		                  self.motion._status = acceleration;
		                  console.log('Acceleration X: ' + acceleration.x + '\n' +
		                              'Acceleration Y: ' + acceleration.y + '\n' +
		                              'Acceleration Z: ' + acceleration.z + '\n' +
		                              'Timestamp: '      + acceleration.timestamp + '\n');
						},
						getMotion: function(fn) {
							navigator.accelerometer.getCurrentAcceleration(function(acceleration) {
		                      self.motion.notify(acceleration);
		                      if (fn) fn(NOTIFY.MOTION_SUCCESS, acceleration);
		                    }, self.motion.error);
						},
						error: function() {
							console.log(NOTIFY.MOTION_ERROR);
						},
						start: function() {
							watchID = navigator.accelerometer.watchAcceleration(
								self.motion.notify, 
								self.motion.error,
								{frequency: 3000});
						},
						stop: function() {
							navigator.accelerometer.clearWatch(compID);
						}
					};
		          }
				};
				
				enable.globalize = function() {
		          if (navigator.globalization) {
					self.globalize = {
						notify: function(success, res) {
							console.log('response:' + success);
							console.log('  result:' + res);
						},
						getLanguage: function() {
							navigator.globalization.getPreferredLanguage(function(lang) {
								self.globalize.notify(true, lang);
							}, function() {
								self.globalize.notify(false, null);
							});
						},
						getCurrency: function(curCode) {
							navigator.globalization.getCurrencyPattern(curCode, function(pattern) {
								self.globalize.notify(true, pattern);
							}, function() {
								self.globalize.notify(false, null);
							});
						},
						getLocaleName: function() {
							navigator.globalization.getLocaleName(function(locale) {
								self.globalize.notify(true, local);
							}, function() {
								self.globalize.notify(false, null);
							});
						},
						stringToDate: function(str, options) { // {formatLength:'short', selector:'date and time'}
							navigator.globalization.stringToDate(str, function(date) {
								self.globalize.notify(true, date);
							}, function() {
								self.globalize.notify(false, null);
							}, options);
						},
						stringToNumber: function(str, options) { // { type: 'decimal' }
							navigator.globalization.stringToDate(str, function(num) {
								self.globalize.notify(true, num);
							}, function() {
								self.globalize.notify(false, null);
							}, options);
						},
						dateToString: function(date, options) {  // { formatLength: 'short', selector: 'date and time' }
							navigator.globalization.dateToString(date, function(lDate) {
								self.globalize.notify(true, lDate);
							}, function() {
								self.globalize.notify(false, null);
							}, options);
						},
						numberToString: function(num, options) { // { type: 'decimal' }
							navigator.globalization.numberToString(num, function(number) {
								self.globalize.notify(true, number);
							}, function() {
								self.globalize.notify(false, null);
							}, options);
						},
						getDateNames: function(options) { // { type: 'wide', item: 'months' }
							navigator.globalization.getDateNames(function(names) {
								self.globalize.notify(true, names);
							}, function() {
								self.globalize.notify(false, null);
							}, options);
						},
						getDatePattern: function(options) { // { formatLength: 'short', selector: 'date and time' }
							navigator.globalization.getDatePattern(function(date) {
								self.globalize.notify(true, date);
							}, function() {
								self.globalize.notify(false, null);
							}, options);
						},
						getFirstDayOfWeek: function() {
							navigator.globalization.getFirstDayOfWeek(function(day) {
								self.globalize.notify(true, day);
							}, function() {
								self.globalize.notify(false, null);
							});
						},
						getNumberPattern: function(options) { // {type: 'decimal'}
							navigator.globalization.getNumberPattern(function(pattern) {
								self.globalize.notify(true, pattern);
							}, function() {
								self.globalize.notify(false, null);
							}, options);
						},
						isDayLightSavingsTime: function(date) {
							navigator.globalization.isDayLightSavingsTime(date, function(date) {
								self.globalize.notify(true, date);
							}, function() {
								self.globalize.notify(false, null);
							});
						}
					};
		          }
				};
				enable.network = function() {
		          if (!self.network) {
					self.network = {
						state: '',
		                get: function() {
		                  return self.network.state;
		                },
						notify: function(msg) {
							console.log('Network Type  :' + self.network.state);
							console.log('Network Status:' + msg);
						},
						update: function() {
							var networkState = navigator.connection.type;
							var states = {};
							
							if (typeof(Connection) == 'object') {
								states[Connection.UNKNOWN]  = 'Unknown';
								states[Connection.ETHERNET] = 'Ethernet';
								states[Connection.WIFI]     = 'WiFi';
								states[Connection.CELL_2G]  = 'Cell 2G';
								states[Connection.CELL_3G]  = 'Cell 3G';
								states[Connection.CELL_4G]  = 'Cell 4G';
								states[Connection.CELL]     = 'Cell generic';
								states[Connection.NONE]     = 'No network';
							}
							
							self.network.state = states[networkState] || 'Unknown';
						}
					};
					
					document.addEventListener("offline", function() {
						self.network.notify('offline');
					}, false);
					document.addEventListener("online", function() {
						self.network.notify('online');
					}, false);
		          }
				};
				enable.browser = function() {
		          if (cordova.InAppBrowser) {
					self.browser = {
						open: cordova.InAppBrowser.open
					};
		          }
				};
				enable.statusbar = function() {
		          if (typeof(StatusBar) == 'object') {
					self.statusbar = {
						get: function() {
							return StatusBar;
						},
						hide: StatusBar.hide,
						show: StatusBar.show
					};
		          }
				};
				
		      	var _vibrate = {
		          play: function(dur) {
		            if (navigator.vibrate) navigator.vibrate(dur);
		          }
		        };
		        enable.vibrate = function() {
		          checkPermission(permissions.VIBRATE, function() {
		              self.vibrate = Object.assign(self.vibrate, _vibrate);
					}, {type: 'vibrate', methods: Object.keys(_vibrate)});
		        };
		      
		        var _contacts = {
		            create: function(obj, fn) {
		              var myContact;
		              // {"displayName": "Test User"}
		              if (navigator.contacts) {
		                try {
		                  myContact = navigator.contacts.create(obj);
		                  if (_cfg.notify) _cfg.notify(NOTIFY.CREATECONTACT_SUCCESS, myContact);
		                  if (fn) fn(NOTIFY.CREATECONTACT_SUCCESS, myContact);
		                } catch(err) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.CREATECONTACT_ERROR);
		                  if (fn) fn(NOTIFY.CREATECONTACT_ERROR);
		                }
		              }
		            },
		            find: function(filter, fields, fn) {
		              if (navigator.contacts) {
		                // find all contacts with 'Bob' in any name field
		                // var fields       = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
		                var options      = new ContactFindOptions();
		                options.filter   = filter;
		                options.multiple = true;
		                options.desiredFields = [ fields[0] || navigator.contacts.fieldType.id ];
		                options.hasPhoneNumber = true;
		                navigator.contacts.find(fields, function(contacts) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.FINDCONTACT_SUCCESS, contacts);
		                  if (fn) fn(NOTIFY.FINDCONTACT_SUCCESS, contacts);
		                }, function(err) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.FINDCONTACT_ERROR, err);
		                  if (fn) fn(NOTIFY.FINDCONTACT_ERROR, err);
		                }, options);
		              }
		            },
		            pickContact: function(fn) {
		              if (navigator.contacts) {
		                navigator.contacts.pickContact(function(contact) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.PICKCONTACT_SUCCESS, contact);
		                  if (fn) fn(NOTIFY.PICKCONTACT_SUCCESS, contact);
		                },function(err) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.PICKCONTACT_ERROR, err);
		                  if (fn) fn(NOTIFY.PICKCONTACT_ERROR, err);
		                });
		              }
		            }
		        };
		      	enable.contacts = function() {
					checkPermission(permissions.GET_ACCOUNTS, function() {
					  checkPermission(permissions.READ_CONTACTS, function() {
						checkPermission(permissions.WRITE_CONTACTS, function() { 
						  self.contacts = Object.assign(self.contacts, _contacts);
						}, {type: 'contacts', methods: Object.keys(_contacts)});
					  }, {type: 'contacts', methods: Object.keys(_contacts)});
					}, {type: 'contacts', methods: Object.keys(_contacts)});
				};
		      
		      	/*
		        	CORDOVA App Folder:
		            cordova.file.applicationDirectory
		            
		        	FILE SYSTEM Types:
		            - window.TEMPORARY
		            = LocalFileSystem.PERSISTENT
		        */
		        var _files = {
		            type: function(type) {
		              if (type) {
		                _fsType = type;
		              } else {
		                return _fsType;
		              }
		            },
		            exists: function(file, fn) {
		               window.requestFileSystem(_fsType, 0, fsSuccess, fsError);
		               function fsSuccess(fs) {
		                  fs.root.getFile(file, {create: false}, function(fileEntry) {
		                    if (_cfg.notify) _cfg.notify(NOTIFY.FS_EXISTS_SUCCESS, true);
		                    if (fn) fn(NOTIFY.FS_EXISTS_SUCCESS, true);
		                  }, function(err) {
		                    if (_cfg.notify) _cfg.notify(NOTIFY.FS_EXISTS_ERROR, false);
		                    if (fn) fn(NOTIFY.FS_EXISTS_ERROR, false);
		                  });
		               }
		               function fsError(err) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.FS_ERROR, err);
		                  if (fn) fn(NOTIFY.FS_ERROR, err);
		               }
		            },
		          	path: function(key) {
		              switch (key.toLowerCase()) {
		                case 'app':
		                  return cordova.file.applicationDirectory;
		                  
		                case 'store':
		                  return cordova.file.applicationStorageDirectory;
		 
		                case 'temp':
		                  return cordova.file.tempDirectory || cordova.file.applicationDirectory + 'temp/';
		                  
		                case 'cache':
		                  return cordova.file.cacheDirectory;
		                  
		                case 'docs':
		                  return cordova.file.documentsDirectory || cordova.file.applicationDirectory + 'docs/';
		                  
		                case 'shared':
		                  return cordova.file.sharedDirectory || cordova.file.applicationDirectory + 'shared/';
		                  
		                case 'sync':
		                  return cordova.file.syncedDataDirectory || cordova.file.applicationDirectory + 'sync/';
		                  
		                default:
		                  return cordova.file.tempDirectory || cordova.file.applicationDirectory + 'temp/';
		              }
		            },
		            list: function(path, fn) {
		               window.requestFileSystem(_fsType, 0, fsSuccess, fsError);
		               function fsSuccess(fs) {
		                  var reader = fileSystem.createReader();
		                  reader.readEntries(
		                    function (entries) {
		                      if (_cfg.notify) _cfg.notify(NOTIFY.FS_LIST_SUCCESS, entries);
		                      if (fn) fn(NOTIFY.FS_LIST_SUCCESS, entries);
		                    },
		                    function (err) {
		                      if (_cfg.notify) _cfg.notify(NOTIFY.FS_LIST_ERROR, err);
		                      if (fn) fn(NOTIFY.FS_LIST_ERROR, err);
		                    }
		                  );
		               }
		               function fsError(err) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.FS_ERROR, err);
		                  if (fn) fn(NOTIFY.FS_ERROR, err);
		               }
		            },
		            delDir: function(folder, fn) {
		               window.requestFileSystem(_fsType, 0, fsSuccess, fsError);
		               function fsSuccess(fs) {
		                  fs.root.getDirectory(folder, {create: false, exclusive: false}, function(parent) {
		                    parent.remove(function() {
		                      if (_cfg.notify) _cfg.notify(NOTIFY.FS_DELDIR_SUCCESS, true);
		                      if (fn) fn(NOTIFY.FS_DELDIR_SUCCESS, true);
		                    }, function() {
		                      if (_cfg.notify) _cfg.notify(NOTIFY.FS_DELDIR_ERROR, false);
		                      if (fn) fn(NOTIFY.FS_DELDIR_ERROR, false);
		                    });
		                  }, function(err) {
		                    if (_cfg.notify) _cfg.notify(NOTIFY.FS_DELDIR_ERROR, false);
		                    if (fn) fn(NOTIFY.FS_DELDIR_ERROR, false);
		                  });
		               }
		               function fsError(err) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.FS_ERROR, err);
		                  if (fn) fn(NOTIFY.FS_ERROR, err);
		               }
		            },
		            makeDir: function(folder, fn) {
		               window.requestFileSystem(_fsType, 0, fsSuccess, fsError);
		               function fsSuccess(fs) {
		                  folder = folder || fs.root;
		                  folder.getDirectory(folder, {create: true, exclusive: false}, function(parent) {
		                    if (_cfg.notify) _cfg.notify(NOTIFY.FS_MKDIR_SUCCESS, parent);
		                    if (fn) fn(NOTIFY.FS_MKDIR_SUCCESS, parent);
		                  }, function(err) {
		                    if (_cfg.notify) _cfg.notify(NOTIFY.FS_MKDIR_ERROR, false);
		                    if (fn) fn(NOTIFY.FS_MKDIR_ERROR, false);
		                  });
		               }
		               function fsError(err) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.FS_ERROR, err);
		                  if (fn) fn(NOTIFY.FS_ERROR, err);
		               }
		            },
		            read: function(file, fn) {
		               window.requestFileSystem(_fsType, 0, fsSuccess, fsError);
		               function fsSuccess(fs) {
		                  fs.root.getFile(file, {}, function(fileEntry) {
		                     fileEntry.file(function(fileHnd) {
		                        var reader = new FileReader();
		                        reader.onloadend = function(e) {
		                           if (_cfg.notify) _cfg.notify(NOTIFY.FS_READ_SUCCESS, this.result);
		                           if (fn) fn(NOTIFY.FS_READ_SUCCESS, this.result);
		                        };
		                        reader.readAsText(fileHnd);
		                     }, function(err) {
		                       if (_cfg.notify) _cfg.notify(NOTIFY.FS_STREAM_ERROR, err);
		                       if (fn) fn(NOTIFY.FS_STREAM_ERROR, err);
		                     });
		                  }, function(err) {
		                    if (_cfg.notify) _cfg.notify(NOTIFY.FS_GETFILE_ERROR, err);
		                    if (fn) fn(NOTIFY.FS_GETFILE_ERROR, err);
		                  });
		               }
		               function fsError(err) {
		                 if (_cfg.notify) _cfg.notify(NOTIFY.FS_ERROR, err);
		                 if (fn) fn(NOTIFY.FS_ERROR, err);
		               }
		            },
		            write: function(file, data, fn) {
		               window.requestFileSystem(_fsType, 0, fsSuccess, fsError);
		               function fsSuccess(fs) {
		                  fs.root.getFile(file, {create: true}, function(fileEntry) {
		                     fileEntry.createWriter(function(fileWriter) {
		                        fileWriter.onwriteend = function(e) {
		                           if (_cfg.notify) _cfg.notify(NOTIFY.FS_WRITE_SUCCESS, e);
		                           if (fn) fn(NOTIFY.FS_WRITE_SUCCESS, e);
		                        };
		                        fileWriter.onerror = function(e) {
		                           if (_cfg.notify) _cfg.notify(NOTIFY.FS_WRITE_ERROR, e);
		                           if (fn) fn(NOTIFY.FS_WRITE_ERROR, e);
		                        };
		                        var blob = new Blob([data], {type: 'text/plain'});
		                        fileWriter.write(blob);
		                     }, function(err) {
		                       if (_cfg.notify) _cfg.notify(NOTIFY.FS_STREAM_ERROR, err);
		                       if (fn) fn(NOTIFY.FS_STREAM_ERROR, err);
		                     });
		                  }, function(err) {
		                    if (_cfg.notify) _cfg.notify(NOTIFY.FS_GETFILE_ERROR, err);
		                    if (fn) fn(NOTIFY.FS_GETFILE_ERROR, err);
		                  });
		               }
		               function fsError(err) {
		                 if (_cfg.notify) _cfg.notify(NOTIFY.FS_ERROR, err);
		                 if (fn) fn(NOTIFY.FS_ERROR, err);
		               }
		            },
		            delete: function(file, fn) {
		               window.requestFileSystem(_fsType, 0, fsSuccess, fsError);
		               function fsSuccess(fs) {
		                  fs.root.getFile(file, {create: false}, function(fileEntry) {
		                     fileEntry.remove(function() {
		                       if (_cfg.notify) _cfg.notify(NOTIFY.FS_DELETE_SUCCESS, true);
		                       if (fn) fn(NOTIFY.FS_DELETE_SUCCESS, true);
		                     }, function(err) {
		                       if (_cfg.notify) _cfg.notify(NOTIFY.FS_DELETE_ERROR, err);
		                       if (fn) fn(NOTIFY.FS_DELETE_ERROR, err);
		                     });
		                  }, function(err) {
		                    if (_cfg.notify) _cfg.notify(NOTIFY.FS_GETFILE_ERROR, err);
		                    if (fn) fn(NOTIFY.FS_GETFILE_ERROR, err);
		                  });
		               }
		               function fsError(err) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.FS_ERROR, err);
		                  if (fn) fn(NOTIFY.FS_ERROR, err);
		               }
		            },
		            deleteAll: function(path, fn) {
		              self.files.list(path, function(status, items) {
		                if (status == NOTIFY.FS_LIST_SUCCESS) {
		                  items.forEach(function(item) {
		                    self.files.delete(path + item);
		                    if (_cfg.notify) _cfg.notify(NOTIFY.FS_DELALL_SUCCESS, true);
		                    if (fn) fn(NOTIFY.FS_DELALL_SUCCESS, true);
		                  });
		                }
		              });
		            }
		        };
		      	enable.files = function() {
					checkPermission(permissions.WRITE_EXTERNAL_STORAGE, function() {
					  self.files = Object.assign(self.files, _files);
					}, {type: 'files', methods: Object.keys(_files)});
				};
		        var _media = {
		            init: function(src, fn) {
		              return new Media(src, function() {
		                   if (_cfg.notify) _cfg.notify(NOTIFY.MEDIA_SUCCESS, true);
		                   if (fn) fn(NOTIFY.MEDIA_SUCCESS, true);
		              }, function(err) {
		                   if (_cfg.notify) _cfg.notify(NOTIFY.MEDIA_ERROR, err);
		                   if (fn) fn(NOTIFY.MEDIA_ERROR, err);
		              });
		            },
		            watch: function(dur, fn) {
		              var counter = 0;
		              return setInterval(function() {
		                counter += dur;
		                if (fn) fn(NOTIFY.MEDIA_INTERVAL, counter);
		              }, dur);
		            },
		            clear: function(watchId) {
		              clearInterval(watchId);
		            },
		            pos: function() {},
		            duration: function() {},
		            getCurrentAmplitude: function(media, fn) {
		              media.getCurrentAmplitude(
		                function (pct) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.MEDIA_AMP_SUCCESS, pct);
		                  if (fn) fn(NOTIFY.MEDIA_AMP_SUCCESS, pct);
		                },
		                function (err) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.MEDIA_AMP_ERROR, err);
		                  if (fn) fn(NOTIFY.MEDIA_AMP_ERROR, err);
		                }
		              );
		            },
		            getCurrentPosition: function(media, fn) {
		              media.getCurrentPosition(
		                function (pos) {
		                  if (pos > -1) {
		                    if (_cfg.notify) _cfg.notify(NOTIFY.MEDIA_POS_SUCCESS, pos);
		                    if (fn) fn(NOTIFY.MEDIA_POS_SUCCESS, pos);
		                  }
		                },
		                function (err) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.MEDIA_POS_ERROR, err);
		                  if (fn) fn(NOTIFY.MEDIA_POS_ERROR, err);
		                }
		              );
		            },
		            getDuration: function(media, fn) {
		              var counter = 0;
		              var timerDur = setInterval(function() {
		                  counter = counter + 100;
		                  if (counter > 2000) {
		                      clearInterval(timerDur);
		                      if (_cfg.notify) _cfg.notify(NOTIFY.MEDIA_DUR_ERROR, err);
		                      if (fn) fn(NOTIFY.MEDIA_DUR_ERROR, err);
		                  }
		                  var dur = media.getDuration();
		                  if (dur > 0) {
		                      clearInterval(timerDur);
		                      if (_cfg.notify) _cfg.notify(NOTIFY.MEDIA_DUR_SUCCESS, dur);
		                      if (fn) fn(NOTIFY.MEDIA_DUR_SUCCESS, dur);
		                  }
		              }, 100);
		            },
		            play: function(media) {
		              media.play();
		            },
		            pause: function(media) {
		              media.pause();
		            },
		            pauseRecord: function(media) {
		              media.pauseRecord();
		            },
		            release: function(media) {
		              media.release();
		            },
		            resumeRecord: function(media) {
		              media.resumeRecord();
		            },
		            startRecord: function(media) {
		              media.startRecord();
		            },
		            stopRecord: function(media) {
		              media.stopRecord();
		            },
		            stop: function(media) {
		              media.stop();
		            },
		            seekTo: function(media, pos) {
		              // pos in milliseconds. 1 sec = 1000
		              media.seekTo(pos);
		            },
		            setVolume: function(media, vol) {
		              // vol is string from '0.0' to '1.0'
		              media.setVolume(vol);
		            },
		            setRate: function(media, speed) {
		              // Playback speed is number from 0.1 - 4.0; (unknown range)
		              media.setRate(speed);
		            }
		        };
		      	enable.media = function() {
					checkPermission(permissions.READ_AUDIO, function() { 
					  checkPermission(permissions.MODIFY_AUDIO_SETTINGS, function() { 
						checkPermission(permissions.WRITE_EXTERNAL_STORAGE, function() {
						  self.media = Object.assign(self.media, _media);
						}, {type: 'media', methods: Object.keys(_media)});
					  }, {type: 'media', methods: Object.keys(_media)});
					}, {type: 'media', methods: Object.keys(_media)});
				};
		        var _geo = {
		            get: function(opts, fn) {
		                var options = opts || {
		                  enableHighAccuracy: true,
		                  maximumAge: 3600000
		                };
		                if (navigator.geolocation) {
		                 navigator.geolocation.getCurrentPosition(function(pos) {
		                   if (_cfg.notify) _cfg.notify(NOTIFY.GEOLOC_SUCCESS, pos);
		                   if (fn) fn(NOTIFY.GEOLOC_SUCCESS, pos);
		                 }, function(err) {
		                   if (_cfg.notify) _cfg.notify(NOTIFY.GEOLOC_ERROR, err);
		                   if (fn) fn(NOTIFY.GEOLOC_ERROR, err);
		                 }, options);
		                }
		            },
		            watch: function(opts, fn) {
		               var options = opts || {
		                  maximumAge: 3600000,
		                  timeout: 3000,
		                  enableHighAccuracy: true,
		               };
		               if (navigator.geolocation) {
		                 var watchID = navigator.geolocation.watchPosition(function(pos) {
		                   if (_cfg.notify) _cfg.notify(NOTIFY.GEOLOC_SUCCESS, pos);
		                   if (fn) fn(NOTIFY.GEOLOC_SUCCESS, pos);
		                 }, function(err) {
		                   if (_cfg.notify) _cfg.notify(NOTIFY.GEOLOC_ERROR, err);
		                   if (fn) fn(NOTIFY.GEOLOC_ERROR, err);
		                 }, options);
		                 return watchID;
		               }
		            },
		            clear: function(watchId) {
		              if (navigator.geolocation) navigator.geolocation.clearWatch(watchId);
		            }
		        };
		      	enable.geo = function() {
					checkPermission(permissions.ACCESS_COARSE_LOCATION, function() {
					  checkPermission(permissions.ACCESS_FINE_LOCATION, function() {
						checkPermission(permissions.ACCESS_LOCATION_EXTRA_COMMANDS, function() {
						  self.geo = Object.assign(self.geo, _geo);
						}, {type: 'geo', methods: Object.keys(_geo)});
					  }, {type: 'geo', methods: Object.keys(_geo)});
					}, {type: 'geo', methods: Object.keys(_geo)});
				};
		        var _gallery = {
		          	getThumbnail: function(libItm, fn) { // or LibItm.id
		              if (cordova && cordova.plugin && cordova.plugins.photoLibrary) {
		                cordova.plugins.photoLibrary.getThumbnail(libItm, function (libItm) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.DEFAULT_SUCCESS, libItm);
		                  if (fn) fn(NOTIFY.DEFAULT_SUCCESS, libItm);
		                }, function (err) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.DEFAULT_ERROR, err);
		                  if (fn) fn(NOTIFY.DEFAULT_ERROR, err);
		                });
		              }
		            },
		          	getPhoto: function(libItm, fn) { // or LibItm.id
		              if (cordova && cordova.plugin && cordova.plugins.photoLibrary) {
		                cordova.plugins.photoLibrary.getPhoto(libItm, function (libItm) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.DEFAULT_SUCCESS, libItm);
		                  if (fn) fn(NOTIFY.DEFAULT_SUCCESS, libItm);
		                }, function (err) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.DEFAULT_ERROR, err);
		                  if (fn) fn(NOTIFY.DEFAULT_ERROR, err);
		                });
		              }
		            },
		            saveImage: function(album, url, fn) {
		              album = album || App.ProductName;
		              if (cordova && cordova.plugin && cordova.plugins.photoLibrary) {
		                cordova.plugins.photoLibrary.saveImage(url, album, function (libItm) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.SAVEIMAGE_SUCCESS, libItm);
		                  if (fn) fn(NOTIFY.SAVEIMAGE_SUCCESS, libItm);
		                }, function (err) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.SAVEIMAGE_ERROR, err);
		                  if (fn) fn(NOTIFY.SAVEIMAGE_ERROR, err);
		                });
		              }
		            },
		          	saveVideo: function(album, url, fn) {
		              album = album || App.ProductName;
		              if (cordova && cordova.plugin && cordova.plugins.photoLibrary) {
		                cordova.plugins.photoLibrary.saveVideo(url, album, function (libItm) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.SAVEVIDEO_SUCCESS, libItm);
		                  if (fn) fn(NOTIFY.SAVEVIDEO_SUCCESS, libItm);
		                }, function (err) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.SAVEVIDEO_ERROR, err);
		                  if (fn) fn(NOTIFY.SAVEVIDEO_ERROR, err);
		                });
		              }
		            },
		            getlibrary: function(options, fn) {
		              if (cordova && cordova.plugin && cordova.plugins.photoLibrary) {
		                cordova.plugins.photoLibrary.getLibrary(
		                  function (result) {
		                    var library = result.library;
		                    // Send array of library objects to notify.
		                    if (_cfg.notify) _cfg.notify(NOTIFY.GETLIBRARY_SUCCESS, library);
		                    if (fn) fn(NOTIFY.GETLIBRARY_SUCCESS, library);
		                  },
		                  function (err) {
		                    if (_cfg.notify) _cfg.notify(NOTIFY.GETLIBRARY_ERROR, err);
		                    if (fn) fn(NOTIFY.GETLIBRARY_ERROR, err);
		                  },
		                  options || { // optional options
		                    thumbnailWidth: 512,
		                    thumbnailHeight: 384,
		                    quality: 0.8,
		                    includeAlbumData: false // default
		                  }
		                );
		              }
		            },
		            getalbum: function(fn) {
		              if (cordova && cordova.plugin && cordova.plugins.photoLibrary) {
		                cordova.plugins.photoLibrary.getAlbums(
		                  function (albums) {
		                    // Send an array of almbuns to notify.
		                    if (_cfg.notify) _cfg.notify(NOTIFY.GETALBUM_SUCCESS, albums);
		                    if (fn) fn(NOTIFY.GETALBUM_SUCCESS, albums);
		                  }, 
		                  function (err) {
		                    if (_cfg.notify) _cfg.notify(NOTIFY.GETALBUM_ERROR, err);
		                    if (fn) fn(NOTIFY.GETALBUM_ERROR, err);
		                  }
		                );
		              }
		            }
		        };
		        enable.gallery = function() {
		          checkPermission(permissions.WRITE_EXTERNAL_STORAGE, function() {
					self.gallery = Object.assign(self.gallery, _gallery);
				  }, {type: 'gallery', methods: Object.keys(_gallery)});
		        };
		      
		      	var _camera = {
		            getpicture: function(options, fn) {
		              if (navigator.camera) {
		                navigator.camera.getPicture(function(imgURI) {
		                  // var image = document.getElementById('myImage');
		                  // image.src = imageURI;
		                  if (_cfg.notify) _cfg.notify(NOTIFY.CAMERA_SUCCESS, imgURI);
		                  if (fn) fn(NOTIFY.CAMERA_SUCCESS, imgURI);
		                }, function(err) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.CAMERA_ERROR, err);
		                  if (fn) fn(NOTIFY.CAMERA_ERROR, err);
		                }, options);
		              }
		            },
		            cleanup: function(fn) {
		              if (navigator.camera) {
		                navigator.camera.cleanup(function() {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.CAMCLEANUP_SUCCESS);
		                  if (fn) fn(NOTIFY.CAMCLEANUP_SUCCESS);
		                }, function(err) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.CAMCLEANUP_ERROR, err);
		                  if (fn) fn(NOTIFY.CAMCLEANUP_ERROR, err);
		                });
		              }
		            },
		            options: function(quality, srcType) {
		              var options;
		              if (Camera) {
		                options = {
		                    // Some common settings are 20, 50, and 100
		                    // srcType = Camera.PictureSourceType.CAMERA
		                    quality: quality,
		                    destinationType: Camera.DestinationType.FILE_URI,
		                    // In this app, dynamically set the picture source, Camera or photo gallery
		                    sourceType: srcType,
		                    encodingType: Camera.EncodingType.JPEG,
		                    mediaType: Camera.MediaType.PICTURE,
		                    allowEdit: true,
		                    correctOrientation: true
		                };
		              }
		              return options || null;
		            }
		        };
		        enable.camera = function() {
					checkPermission(permissions.CAMERA, function() {
					  checkPermission(permissions.WRITE_EXTERNAL_STORAGE, function() {
						self.camera = Object.assign(self.camera, _camera);
					  }, {type: 'camera', methods: Object.keys(_camera)});
					}, {type: 'camera', methods: Object.keys(_camera)});
				};
		      	// USES: cordova-sms-plugin
		        var _sms = {
					watch: function(fn) {
		              if (window.SMS) SMS.startWatch(function() {
		                if (_cfg.notify) _cfg.notify(NOTIFY.ENABLE_WATCH_SUCCESS);
						if (fn) fn(NOTIFY.ENABLE_WATCH_SUCCESS);
		              }, function() {
		                if (_cfg.notify) _cfg.notify(NOTIFY.ENABLE_WATCH_ERROR);
						if (fn) fn(NOTIFY.ENABLE_WATCH_ERROR);
		              });
					},
					intercept: function(fn) {
		              if (window.SMS) SMS.enableIntercept(true, function() {
		                if (_cfg.notify) _cfg.notify(NOTIFY.ENABLE_INTERCEPT_SUCCESS);
						if (fn) fn(NOTIFY.ENABLE_INTERCEPT_SUCCESS);
		              }, function() {
						if (_cfg.notify) _cfg.notify(NOTIFY.ENABLE_INTERCEPT_ERROR);
						if (fn) fn(NOTIFY.ENABLE_INTERCEPT_ERROR);
		              });
					},
		            send: function (addr, msg, fn) {
		              if (window.SMS) { 
		                SMS.sendSMS(addr, msg, function() {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.SENDMSGS_SUCCESS);
		                  if (fn) fn(NOTIFY.SENDMSGS_SUCCESS);
		                }, function(err) {
		                  if (_cfg.notify) _cfg.notify(NOTIFY.SENDMSGS_ERROR, err);
		                  if (fn) fn(NOTIFY.SENDMSGS_ERROR, err);
		                });
		              } else { alert('SMS is not loaded!'); }
		            },
		            delete: function(filter, fn) {
		              if (window.SMS) SMS.deleteSMS(filter, function( n ) {
		                if (_cfg.notify) _cfg.notify(NOTIFY.DELETEMSGS_SUCCESS, n);
		                if (fn) fn(NOTIFY.DELETEMSGS_SUCCESS, n);
		              }, function(err) {
		                if (_cfg.notify) _cfg.notify(NOTIFY.DELETEMSGS_ERROR, err);
		                if (fn) fn(NOTIFY.DELETEMSGS_ERROR, err);
		              });
		            },
		            list: function(filter, fn) {
		              if (window.SMS) SMS.listSMS(filter, function(data) {
		                // NOTE: data is an array of messages.
		                if (_cfg.notify) _cfg.notify(NOTIFY.LISTMSGS_SUCCESS, data);
		                if (fn) fn(NOTIFY.LISTMSGS_SUCCESS, data);
		              }, function(err) {
		                if (_cfg.notify) _cfg.notify(NOTIFY.LISTMSGS_ERROR, err);
		                if (fn) fn(NOTIFY.LISTMSGS_ERROR, err);
		              });
		            },
		            options: function(options) {
		              if (window.SMS) SMS.setOptions(options);
		            }
		        };
				enable.sms = function() {
		          if (!self.sms) self.sms = {};
		          function requestSMSPermission() {
		            var success = function (hasPermission) { 
		              if (!hasPermission) {
		                sms.requestPermission(function() {
		                  console.log('[OK] Permission accepted');
		                  proceed(true);
		                }, function(error) {
		                  console.info('[WARN] Permission not accepted');
		                  // Handle permission not accepted
		                });
		              }
		            };
		            var error = function (e) { alert('Something went wrong:' + e); };
		            sms.hasPermission(success, error);
		          }
		          function error(err) {
		            alert('Something went wrong:' + e);
		          }
		          function proceed(hasPermission) {
		            if (hasPermission) {
		              self.sms.createSms = function(number, msg, opts, cbk) {
		                sms.send(number, msg, opts, function() {
		                  self.sms._enabled = true;
		                  self.sms._status = 'success';
		                  if (cbk) { cbk(true, 'ok'); }
		                }, function(e) {
		                  if (cbk) { cbk(false, e); }
		                });
		              };
		            } else {
		              requestSMSPermission();
		            }
		          }
		          if (typeof(sms) == 'object') {
		          	sms.hasPermission(proceed, error);
		        	}
		        };
		      	enable.SMS = function() {
		          if (!self.sms) self.sms = {};
		          
		          function onMsg(e) {
		          }
		          function success(action, result, objAry) {
		            // #id = message id for delete
		            // #num = # of messages for restore
		            // true, ary = array for list
		            // t/f for intercept (on/Off)
		            // t/f for send message
		            // t/f for watch messages
		            
		            switch (action) {
		              case 'delete':
		                var idx = smsList.find(function(it) { return it._id == objAry._id; });
		                if (idx > -1) smsList.splice(idx, 1);
		                break;
		                
		              case 'onmsg':
		                smsList.push(result.data);
		                break;
		                
		              case 'list':
		                if (result) {
		                  for (var i in objAry) {
		                    smsList.push(data[i]);
		                  }
		                }
		                break;
		            }
		          }
		          function failed(err) {
		            console.log('Error:');
		            console.log(err);
		          }
		          
		          if (typeof(SMS) == 'object') {
		            self.sms.notify = onMsg;
		            self.sms.sendSms = function(sendto, msg) {
		              if(sendto.indexOf(";") >= 0) {
		                  sendto = sendto.split(";");
		                  for (var i in sendto) {
		                      sendto[i] = sendto[i].trim();
		                  }
		              }
		              SMS.sendSMS(sendto, msg, function() {
		                success('send', true);
		              }, failed);
		            };
		            self.sms.listSms = function(filter) {
		              SMS.listSMS(filter || {}, function(data) {
		                success('list', Array.isArray(data), data);
		              }, failed);
		            };
		            self.sms.deleteSms = function(ary) {
		              ary.forEach(function(sms) {
		                SMS.deleteSMS({_id: sms["_id"]}, function(id) {
		                  success('delete', id, sms);
		                }, failed);
		              });
		            };
		            self.sms.startWatch = function() {
		              SMS.startWatch(function() {
		                success('watch', true);
		              }, failed);
		            };
		            self.sms.stopWatch = function() {
		              SMS.stopWatch(function() {
		                success('watch', false);
		              }, failed);
		            };
		            self.sms.enableIntercept = function(blOnOff) {
		              if (blOnOff) {
		                smsList.length = 0;
		              }
		              SMS.enableIntercept(blOnOff, function() {
		                success('intercept', blOnOff);
		              }, failed);
		            };
		            self.sms.restoreSms = function(msgs) {
		              smsList.length = 0;
		              SMS.restoreSMS(smsList, function(num) {
		                success('restore', num);
		              }, failed);
		            };
		            self.sms.setOptions = function(options) {
		            };
		            document.addEventListener('onSMSArrive', function(e) {
		              success('onmsg', e);
		          });
		          }
		        };
		        var _notify = {
		          	vibrate: function(dur) {
		              if (navigator.notification.vibrate) navigator.notification.vibrate(dur);
		            },
		          	beep: function(times) {
		              if (navigator.notification.beep) navigator.notification.beep(times);
		            },
		            alert: function(msg, cllbk, title, button) {
		              if (navigator.notification.alert) navigator.notification.alert(msg, cllbk, title, button);
		            },
		            confirm: function(msg, cllbk, title, button) {
		              if (navigator.notification.confirm) navigator.notification.confirm(msg, cllbk, title, button);
		            }
		        };
		        enable.notify = function() {
					checkPermission(permissions.POST_NOTIFICATIONS, function() {
					  self.notify = Object.assign(self.notify, _notify);
					}, {type: 'notify', methods: Object.keys(_notify)});
				};
		      	self.init = function(parms) {
		          if (typeof(cordova) == 'undefined') return;
		          
		          _cfg = parms;
		          var plgn = _cfg.plugins || [];
				  
		          // Global Phone Listener/Callback.
		          // parms = {
		          //     plugins: ['sms', 'contact', 'notify'],
		          //     notify: function(result, data) {}
		          // }
		          //
				  // List of plugins to enable.
				  // parms.plugins = ['sms', 'contact', 'notify']
				  // check and enable permissions for each plugin group.
				  plgn.forEach(function(itm) {
					  if (enable && enable[itm] && (typeof(self[itm]) == 'undefined' ||
		                  typeof(self[itm]._status) == 'undefined')) enable[itm]();
				  });
				  
				};
		      	self.destroy = function() {
		          if (SMS) {
		            if (_cfg.watch) {
		              SMS.stopWatch(function() {
		                if (_cfg.notify) _cfg.notify(NOTIFY.DISABLE_WATCH_SUCCESS);
		              }, function() {
		                if (_cfg.notify) _cfg.notify(NOTIFY.DISABLE_WATCH_ERROR);
		              });
		            }
		            
		            if (_cfg.intercept) {
		              SMS.enableIntercept(false, function() {
		                if (_cfg.notify) _cfg.notify(NOTIFY.DISABLE_INTERCEPT_SUCCESS);
		              }, function() {
		                if (_cfg.notify) _cfg.notify(NOTIFY.DISABLE_INTERCEPT_ERROR);
		              });
		              SMS.restoreSMS(smsList, function( n ) {
		                smsList.length = 0;
		                if (_cfg.notify) _cfg.notify(NOTIFY.RESTOREMSGS_SUCCESS, n);
		              }, function(err) {
		                if (_cfg.notify) _cfg.notify(NOTIFY.RESTOREMSGS_ERROR, err);
		              });
		            }
		          }
		        };
		      	// Phone Diagnostic Method.
		        // --------------------------
		      	self.diagnose = function(dlg, ctrl) {
		          if (typeof(cordova) == 'undefined') return;
		          var info = '', cnt = 0;
		          
		          function log(out) {
		            if (dlg && ctrl && $f.type(dlg, ctrl) == 'textarea') {
		              cnt++;
		              out = (typeof(out) != 'string') ? JSON.stringify(out) : out;
		              info += out + '\n';
		              
		              $f.text(dlg, ctrl, info);
		            } else {
		              console.log(out);
		            }
		          }
		          
		          // All generic mobile information.
		          //
		          log('\nDEVICE:');
		          ['cordova', 'model', 'platform', 'uuid',
		           'version', 'serial', 'manufacturer'].forEach(function(it) {
		          	log(it + ' = ' + self.device.get(it));
		          });
		          
		          log('\nAGENT:');
		          log(self.Agent());
		          
		          log('\nVENDOR:');
		          log(self.Vendor());
		          
		          if (self.orientation) {
		            log('\nORIENTATION:');
		            log(self.orientation.get());
		          }
		          
		          if (self.network) {
		            log('\nNETWORK:');
		            self.network.update();
		            log('Network Connection = ' + self.network.get());
		          }
		          
		          if (self.battery) {
		            log('\nBATTERY:');
		            log(self.battery.get());
		          }
		          
		          if (self.compass) {
		            self.compass.getHeading(function(result, data) {
		            	log('\nCOMPASS:');
		            	log(data);
		            });
		          }
		          
		          if (self.motion) {
		            self.motion.getMotion(function(result, data) {
		               	log('\nMOTION:');
		           		log(data);
		            });
		          }
		          
		          if (self.globalize) {
		            log('\nGLOBALIZE:');
		            log('Language = ' + self.globalize.getLanguage());
		            log('LocaleName = ' + self.globalize.getLocaleName());
		          }
		        
		          if (self.statusbar) {
		            log('\nSTATUSBAR:');
		            log(self.statusbar.get());
		          }
		          
		          if (self.vibrate) {
		            log('\nVIBRATE:');
		            log('Vibrate 2 second(s).');
		            self.vibrate.play(2000);
		          }
		          
		          if (self.files) {
		            log('\nFILES:');
		            ['app', 'store', 'temp', 'cache', 'docs', 'shared', 'sync'].forEach(function(itm) {
		              log(' - file.path(' + itm + ') = "' + self.files.path(itm) + '"');
		            });
		            // Write, Read, List, Exists, Delete
		            log('\n1. Write test file "test.txt".');
		            self.files.write('./test.txt', 'This is a test ' + (new Date()).Format('#MM#-#DD#-#YYYY# #hh#:#mm# #AMPM#'), function(msg, res) {
		            if (res) {
		              log('2. Check for wrong file "test.png".');
		              self.files.exists('./test.png', function(msg, res) {
		                if (!res) {
		                  log('3. Test for correct file "test.txt".');
		                  self.files.exists('./test.txt', function(msg, res) {
		                    if (res) {
		                      log('4. Read test file.');
		                      self.files.read('./test.txt', function(msg, res) {
		                        log('\nFILE CONTENT:');
		                        log(res);
		                        
		                        log('\n5. Delete file.');
		                        self.files.delete('./test.txt', function(msg, res) {
		                          if (res) {
		                            log('6. Verify deleted file.');
		                            self.files.exists('./test.txt', function(msg, res) {
		                              if (!res) {
		                                log('\nFILE DELETED! File I/O test completed!');
		                              }
		                            });
		                          }
		                        });
		                      });
		                    }
		                  });
		                }
		              });
		            }
		          });
		          }
		          
		          if (self.geo) {
		            self.geo.get(null, function(result, data) {
		              log('\nGEO:');
		              log({result: result, data: data});
		            });
		          }
		          
		          if (self.media) {
		            log('\nMEDIA:');
		            var media = self.media.init('https://www.nimble-ide.com/media/drums.mp3', function(msg, res) {
		              if (res && media) {
		                log('Playing drums.mp3');
		                self.media.play(media);
		              }
		            });
		          }
		          
		          if (self.notify) {
		            log('\nNOTIFY:');
		            log('Vibrate for 2 secs.');
		            self.notify.vibrate(2);
		            log('Test notification alert.');
		            self.notify.alert('You are a winner', function(idx) {
		              log('Alert has dismissed.');
		            }, "Confirm:", 'Close');
		            log('Test notification confirmation.');
		            self.notify.confirm('Did this popup work?', function(idx) {
		              log('Button ' + idx + ' was pressed.');
		            }, "Confirm:", ['Yes', 'No']);
		          }
		          
		          if (self.gallery) {
		            self.gallery.getLibrary(null, function(result, data) {
		                log('\nGALLERY:');
		                log(' Gallery getLibrary:');
		              	var lib = result.library || [];
		              
		              	lib.forEach(function(itm) {
		                  log(itm);
		                });
		            });
		          }
		          
		          if (self.camera) {
		            log('\nCAMERA:');
		            log(' Camera Enabled: ' + self.camera._status);
		          }
		      
		          // Sms
		        };
		      
				// Attach Phone Features when Device is Ready.
				function onDeviceReady() {
		          // Attach files, vibrate, battery, network & device
		          // by default.
		          if (typeof(cordova) != 'undefined') {
		            enable.files();
		            enable.vibrate();
		            enable.battery();
		            enable.network();
		            if (device.cordova) enable.device();
		          }
				}
				document.addEventListener("deviceready", onDeviceReady, false);
			};
			
		  	Phone.prototype.type = function () {
				return "Phone";
			};
			Phone.prototype.toDto = function () {
				var self = this;
				return { };
			};
			return Phone;
		});
			
	},
	Logon: function(instID) {
	 
	},
	Logoff: function(instID) {
	 
	},
	EndApp: function(instID) {
	 
	},
	StartApp: function(pos) {
	    try {
	        $k.enabled = false;
	        if (typeof($k.fluidDesktop) == "undefined") { DESKTOP.fluidDesktop = globals.fluidDesktop; }
	        if (typeof($k.desktop) == "undefined") { $k.desktop = false; }
	        $k.setuplogo();
	 
	        App.Code.RegisterFactories();
	         if ($fctry.exists("Events")) { AppEvents = $fctry.new("Events"); }
	 
	        /* This function is called before your Startup Dialog is shown. 
	           The KERNEL is disabled until the Startup Dialog is displayed. 
			     You CAN NOT manually display dialog(s) here. */
	    }
	    catch (err) {
	        if ($k.errhandler) {
	            $k.errhandler(err, null);
	        }
	    }
	    finally {
	        $k.enabled = true;
	    }
	    return pos;
	}
	
};
$k.wrapallfunctions($heap.mobilecomponent.Code);
 
/** 
 * Create ALL Dialog Instances -------------------------
 **/
/** Form Template --------------------------------------
 *  NAME: frmmain
 *
 * version: 5.0
 **/
$heap.mobilecomponent['frmmain'] = { };
$heap.mobilecomponent['frmmain'] = {
    _flatten: true,
    _private: false,
    isLoaded: 0,
    isActivated: 0,
    count: 0,
    New: function(pos, show) {
        var instName;
        try {
            if (!KERNEL.enabled) return;
            if (!pos) {
                pos = { left: 0, top: 0, target: FORMS.Target };
            }
            pos.form = pos.form ? pos.form : 'frmmain';
            if (!$heap.mobilecomponent[pos.form]) { pos.form = 'frmmain'; }
            $k.instance.newform(pos.form, App.Dialog['frmmain']);
            instName = $heap.mobilecomponent[pos.form].Load(pos);
        }
        catch (err) {
            if ($k.errhandler) {
                $k.errhandler(err, {type: 'New', target: {id: 'frmmain'}});
            }
        }
        finally {
            if (show) { $heap.mobilecomponent[pos.form].Show(pos); }
            $k.instance.setbyelemid(instName);
            return instName;
        }
    },
    Menu: function(cmd) {
    },
    Load: function(pos) {
        var widgTarget = "", instID = "", options, props, styles, defPos;
        try {
            if (!KERNEL.enabled) return;        
            if (pos && pos.target) { FORMS.Target = pos.target; }
            if (App.Vars.running == false) { App.Vars.running = true; }
            if (App.target) { App.target = FORMS.Target; }
			
			 
			styles = ( null | globals.DlgStyles.shadow | globals.DlgStyles.dragable | globals.DlgStyles.max | globals.DlgStyles.min | globals.DlgStyles.caption | globals.DlgStyles.sizable | globals.DlgStyles.close );
			defPos = {target: 'desktop' + DESKTOP.currentDesktop, dock:'RRRR', left:'0', top:'0', width:'430', height:'815'};
			pos = $k.instance.validatepos(pos, defPos);
			defaults.dialog.back_color = '#ffffff';
			defaults.dialog.doc_color = '#eeeeee';
			instID = $f.plain('frmmain','Mobile Controls',pos.left,pos.top,430,815,styles);
			$f.hide('frmmain');
				props = [{"name":"event-activate","value":"main.activate"},{"name":"body.version","value":"v5.0"},{"name":"autosize","value":"false"},{"name":"disabled","value":false},{"name":"title","value":""},{"name":"caption","value":"Mobile Controls"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"_private","value":"false"},{"name":"bind","value":"false"},{"name":"clipmenu","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"true"},{"name":"flattenonpull","value":"true"},{"name":"ignorezorder","value":"false"},{"name":"output","value":"normal"},{"name":"shadow","value":"true"},{"name":"sizeable","value":"true"},{"name":"theme","value":"nimble-form"},{"name":"toggleonflip","value":"true"},{"name":"useastheme","value":"false"},{"name":"watch","value":"false"}];
				$f.setprop('frmmain','', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"#eeeeee"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"visibility","value":"visible"},{"name":"displaymode","value":""},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"auto"},{"name":"z-index","value":"2"}];
				$f.setstyle('frmmain','', styles);
			
			$f.setprop("frmmain","icon","src","media/icons/on_dot.ico");
			$f.show("frmmain","icon");
			
			$f.add('frmmain','label1','label','','0','0','440','30');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Divider"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('frmmain','label1', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-spacing","value":"1px"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#224466"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"10.2pt"},{"name":"line-height","value":"100%"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.background-color","value":"#224466"},{"name":"div.border-radius","value":"3px"},{"name":"div.border","value":"none"},{"name":"div.box-shadow","value":"rgba(20,20,20,.60) 0px 4px 4px 0px"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"10px 0px 5px 0px"},{"name":"div.padding","value":"8px 8px 8px 8px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','label1', styles);
			$f.add('frmmain','frame1','div','','0','0','425','97');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-frame"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('frmmain','frame1', props);
				styles = [{"name":"left","value":""},{"name":"top","value":""},{"name":"width","value":""},{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"1px solid rgba(20,20,20,.6)"},{"name":"display","value":"block"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"4px"},{"name":"box-shadow","value":"rgba(80,80,80,.20) 2px 2px 5px 0px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"10.2pt"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"}];
				$f.setstyle('frmmain','frame1', styles);
			$f.add('frmmain','label','label','','0','0','440','30');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Label"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('frmmain','label', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-spacing","value":"1px"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#224466"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"10.2pt"},{"name":"line-height","value":"100%"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.background-color","value":"#224466"},{"name":"div.border-radius","value":"3px"},{"name":"div.border","value":"none"},{"name":"div.box-shadow","value":"rgba(20,20,20,.60) 0px 4px 4px 0px"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"10px 0px 5px 0px"},{"name":"div.padding","value":"8px 8px 8px 8px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','label', styles);
			$f.add('frmmain','label4','label','','0','0','105','21');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"New Label"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('frmmain','label4', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"10.2pt"},{"name":"line-height","value":"100%"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','label4', styles);
			$f.add('frmmain','label2','label','','0','0','440','30');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Textbox"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('frmmain','label2', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-spacing","value":"1px"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#224466"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"10.2pt"},{"name":"line-height","value":"100%"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.background-color","value":"#224466"},{"name":"div.border-radius","value":"3px"},{"name":"div.border","value":"none"},{"name":"div.box-shadow","value":"rgba(20,20,20,.60) 0px 4px 4px 0px"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"10px 0px 5px 0px"},{"name":"div.padding","value":"8px 8px 8px 8px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','label2', styles);
			$f.add('frmmain','textbox1','textbox','','0','0','105','31');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"placeholder","value":"Enter value.."},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-textbox"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"db-key","value":"false"},{"name":"db-name","value":"textbox1"},{"name":"db-type","value":"text"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('frmmain','textbox1', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#eaeaea"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0.5px solid #bbb"},{"name":"outline","value":"none"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"2px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"10.2pt"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"block"},{"name":"div.padding","value":"0.5px 5px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','textbox1', styles);
			$f.add('frmmain','label3','label','','0','0','440','30');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Button"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('frmmain','label3', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-spacing","value":"1px"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#224466"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"10.2pt"},{"name":"line-height","value":"100%"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.background-color","value":"#224466"},{"name":"div.border-radius","value":"3px"},{"name":"div.border","value":"none"},{"name":"div.box-shadow","value":"rgba(20,20,20,.60) 0px 4px 4px 0px"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"10px 0px 5px 0px"},{"name":"div.padding","value":"8px 8px 8px 8px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','label3', styles);
			$f.add('frmmain','button1','button','','0','0','105','40');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"New Button"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-button"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('frmmain','button1', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#e2e2e2"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"1px solid #bbb"},{"name":"padding","value":"2px 7.5px"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"2px"},{"name":"font-size","value":"10.2pt"},{"name":"line-height","value":"100%"},{"name":"pointer-events","value":"inherit"},{"name":"caption.position","value":"absolute"},{"name":"caption.text-align","value":"center"},{"name":"caption.top","value":"calc(50% - 0.6em)"},{"name":"caption.width","value":"calc(100% - 15px)"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','button1', styles);
			$f.add('frmmain','label5','label','','0','0','440','30');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Image Button"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('frmmain','label5', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-spacing","value":"1px"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#224466"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"10.2pt"},{"name":"line-height","value":"100%"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.background-color","value":"#224466"},{"name":"div.border-radius","value":"3px"},{"name":"div.border","value":"none"},{"name":"div.box-shadow","value":"rgba(20,20,20,.60) 0px 4px 4px 0px"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"10px 0px 5px 0px"},{"name":"div.padding","value":"8px 8px 8px 8px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','label5', styles);
			options = <LB>
			    caption: 'imgbutton1',
			    image: 'media/img_missing.png'
			    <RB>;
			$f.add('frmmain','imgbutton1','imgbutton',options,'0','0','142','163');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Image Button"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-imgbutton"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('frmmain','imgbutton1', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#f0f0f0"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"10.2pt"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"div.vertical-align","value":"middle"}];
				$f.setstyle('frmmain','imgbutton1', styles);
			options = <LB>
			    caption: 'imgbuttonx1',
			    image: 'media/img_missing.png'
			    <RB>;
			$f.add('frmmain','imgbuttonx1','imgbuttonx',options,'0','0','105','96');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"ImageX Button"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-imgbuttonx"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('frmmain','imgbuttonx1', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#f0f0f0"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"10.2pt"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"div.vertical-align","value":"middle"}];
				$f.setstyle('frmmain','imgbuttonx1', styles);
			$f.add('frmmain','label6','label','','0','0','440','30');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Checkbox <u> </u>Options"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"hotkey","value":"Ctrl+Alt+ ;Alt+"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('frmmain','label6', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-spacing","value":"1px"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#224466"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"10.2pt"},{"name":"line-height","value":"100%"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.background-color","value":"#224466"},{"name":"div.border-radius","value":"3px"},{"name":"div.border","value":"none"},{"name":"div.box-shadow","value":"rgba(20,20,20,.60) 0px 4px 4px 0px"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"10px 0px 5px 0px"},{"name":"div.padding","value":"8px 8px 8px 8px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','label6', styles);
			$f.add('frmmain','checkbox1','checkbox','','0','0','115','20');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"CheckBox"},{"name":"tick.checked","value":false},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-checkbox"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"db-key","value":"false"},{"name":"db-name","value":"checkbox1"},{"name":"db-type","value":"boolean"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('frmmain','checkbox1', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table-cell"},{"name":"padding","value":"0px 0px"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"2px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"10.2pt"},{"name":"line-height","value":"100%"},{"name":"pointer-events","value":"inherit"},{"name":"vertical-align","value":"middle"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','checkbox1', styles);
			$f.add('frmmain','check3box1','checkbox','','0','0','116','20');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Check3Box"},{"name":"tick.checked","value":false},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-check3state"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"db-key","value":"false"},{"name":"db-name","value":"check3box1"},{"name":"db-type","value":"boolean"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('frmmain','check3box1', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table-cell"},{"name":"padding","value":"0px 0px"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"10.2pt"},{"name":"line-height","value":"100%"},{"name":"pointer-events","value":"inherit"},{"name":"vertical-align","value":"middle"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','check3box1', styles);
			var ctlConfig = ''Option Button'';
			$f.add('frmmain','option1','option',ctlConfig,'0','0','111','20');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"OptionBtn"},{"name":"tick.checked","value":false},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-option"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"db-key","value":"false"},{"name":"db-name","value":"option1"},{"name":"db-type","value":"text"},{"name":"lock-pos","value":"!!!!"},{"name":"tick.name","value":"optiongroup"},{"name":"tick.value","value":"option1"}];
				$f.setprop('frmmain','option1', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table-cell"},{"name":"padding","value":"0px 0px"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"10.2pt"},{"name":"line-height","value":"100%"},{"name":"pointer-events","value":"inherit"},{"name":"vertical-align","value":"middle"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','option1', styles);
			$f.add('frmmain','label7','label','','0','0','440','30');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Up/Down and Slider"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('frmmain','label7', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-spacing","value":"1px"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#224466"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"10.2pt"},{"name":"line-height","value":"100%"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.background-color","value":"#224466"},{"name":"div.border-radius","value":"3px"},{"name":"div.border","value":"none"},{"name":"div.box-shadow","value":"rgba(20,20,20,.60) 0px 4px 4px 0px"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"10px 0px 5px 0px"},{"name":"div.padding","value":"8px 8px 8px 8px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','label7', styles);
			var elemParms = ' min=''0'' max=''100'' step=''1'' value=''50'' ';
			$f.add('frmmain','updown1','up-down',elemParms,'0','0','51','33');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-up-down"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"db-key","value":"false"},{"name":"db-name","value":"updown1"},{"name":"db-type","value":"bigint"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('frmmain','updown1', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#f0f0f0"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','updown1', styles);
			var elemParms = ' min=''0'' max=''100'' step=''1'' value=''50'' ';
			$f.add('frmmain','slider1','slider',elemParms,'0','0','192','30');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-slider"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('frmmain','slider1', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#f0f0f0"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 15px 0px 15px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','slider1', styles);
			$f.add('frmmain','label8','label','','0','0','440','30');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Combo and Listbox"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('frmmain','label8', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-spacing","value":"1px"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#224466"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"10.2pt"},{"name":"line-height","value":"100%"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.background-color","value":"#224466"},{"name":"div.border-radius","value":"3px"},{"name":"div.border","value":"none"},{"name":"div.box-shadow","value":"rgba(20,20,20,.60) 0px 4px 4px 0px"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"10px 0px 5px 0px"},{"name":"div.padding","value":"8px 8px 8px 8px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','label8', styles);
			options = <LB>
			    listsize: 5,
			    list: <LK>'ComboItem 1','ComboItem 2','ComboItem 3','ComboItem 4','ComboItem 5'<RK>,
			    value: <LK>'Value1','Value2','Value3','Value4','Value5'<RK>
			    <RB>;
			$f.add('frmmain','combo1','combobox',options,'0','0','139','30');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"placeholder","value":"Select value.."},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-combobox"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"db-key","value":"false"},{"name":"db-name","value":"combo1"},{"name":"db-type","value":"text"},{"name":"lock-pos","value":"!!!!"},{"name":"items.item-dir","value":"vertical"}];
				$f.setprop('frmmain','combo1', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#eaeaea"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0.5px solid #bbb"},{"name":"outline","value":"none"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"2px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"10.2pt"},{"name":"pointer-events","value":"inherit"},{"name":"vertical-align","value":"top"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 15px 0px 0px"},{"name":"div.padding","value":"0.5px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','combo1', styles);
			options = <LB>
			    listsize: 5,
			    list: <LK>'ListItem 1','ListItem 2','ListItem 3','ListItem 4','ListItem 5'<RK>,
			    value: <LK>'Value1','Value2','Value3','Value4','Value5'<RK>
			    <RB>;
			$f.add('frmmain','listbox1','listbox',options,'0','0','160','97');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"placeholder","value":"Select value.."},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-listbox"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"db-key","value":"false"},{"name":"db-name","value":"listbox1"},{"name":"db-type","value":"text"},{"name":"lock-pos","value":"!!!!"},{"name":"items.item-dir","value":"vertical"}];
				$f.setprop('frmmain','listbox1', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#eaeaea"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0.5px solid #bbb"},{"name":"outline","value":"none"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"2px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"10.2pt"},{"name":"pointer-events","value":"inherit"},{"name":"vertical-align","value":"top"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','listbox1', styles);
			$f.add('frmmain','label9','label','','0','0','440','30');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Progress Bar"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('frmmain','label9', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-spacing","value":"1px"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#224466"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"10.2pt"},{"name":"line-height","value":"100%"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.background-color","value":"#224466"},{"name":"div.border-radius","value":"3px"},{"name":"div.border","value":"none"},{"name":"div.box-shadow","value":"rgba(20,20,20,.60) 0px 4px 4px 0px"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"10px 0px 5px 0px"},{"name":"div.padding","value":"8px 8px 8px 8px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','label9', styles);
			var elemParms = ' value=''50'' max=''100'' ';
			$f.add('frmmain','progress1','progress',elemParms,'0','0','187','20');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"bar.min","value":"0"},{"name":"bar.max","value":"100"},{"name":"bar.value","value":"50"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-progress"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"db-key","value":"false"},{"name":"db-name","value":"progress1"},{"name":"db-type","value":"bigint"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('frmmain','progress1', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#f0f0f0"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','progress1', styles);
			$f.add('frmmain','label10','label','','0','0','440','30');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Graphic and GraphicX"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('frmmain','label10', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-spacing","value":"1px"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#224466"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"10.2pt"},{"name":"line-height","value":"100%"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.background-color","value":"#224466"},{"name":"div.border-radius","value":"3px"},{"name":"div.border","value":"none"},{"name":"div.box-shadow","value":"rgba(20,20,20,.60) 0px 4px 4px 0px"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"10px 0px 5px 0px"},{"name":"div.padding","value":"8px 8px 8px 8px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','label10', styles);
			options = 'media/img_missing.png';
			$f.add('frmmain','picture1','imagex',options,'0','0','64','64');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphic"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('frmmain','picture1', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#ffffff"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"10.2pt"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 15px 0px 0px"},{"name":"div.overflow","value":"hidden"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','picture1', styles);
			options = 'media/img_missing.png';
			$f.add('frmmain','picturex1','imagex',options,'0','0','64','64');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphicx"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('frmmain','picturex1', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#ffffff"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"10.2pt"},{"name":"pointer-events","value":"inherit"},{"name":"vertical-align","value":"top"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','picturex1', styles);
			$f.add('frmmain','label11','label','','0','0','440','30');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Canvas Control"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('frmmain','label11', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-spacing","value":"1px"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#224466"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"10.2pt"},{"name":"line-height","value":"100%"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.background-color","value":"#224466"},{"name":"div.border-radius","value":"3px"},{"name":"div.border","value":"none"},{"name":"div.box-shadow","value":"rgba(20,20,20,.60) 0px 4px 4px 0px"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"10px 0px 5px 0px"},{"name":"div.padding","value":"8px 8px 8px 8px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','label11', styles);
			$f.add('frmmain','canvas1','canvas','','0','0','159','88');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-canvas"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('frmmain','canvas1', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#ffffff"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"10.2pt"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','canvas1', styles);
			$f.add('frmmain','label22','label','','0','0','440','30');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"List of Months"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('frmmain','label22', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-spacing","value":"1px"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#224466"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"10.2pt"},{"name":"line-height","value":"100%"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.background-color","value":"#224466"},{"name":"div.border-radius","value":"3px"},{"name":"div.border","value":"none"},{"name":"div.box-shadow","value":"rgba(20,20,20,.60) 0px 4px 4px 0px"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"10px 0px 5px 0px"},{"name":"div.padding","value":"8px 8px 8px 8px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','label22', styles);
			$f.add('frmmain','frmmonth','div','','0','0','1100','48');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-frame"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('frmmain','frmmonth', props);
				styles = [{"name":"left","value":""},{"name":"top","value":""},{"name":"width","value":""},{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px #bbb dotted"},{"name":"display","value":"block"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"10.2pt"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"}];
				$f.setstyle('frmmain','frmmonth', styles);
			options = <LB>
			    listsize: 12,
			    list: <LK>'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'<RK>,
			    value: <LK>'01','02','03','04','05','06','07','08','09','10','11','12'<RK>
			    <RB>;
			$f.add($f.getinstname('frmmain','frmmonth'),'lstmonth','listbox',options,'0','0','382','33');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":"Click to change forum."},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"placeholder","value":"Select value.."},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-listbox"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"db-key","value":"false"},{"name":"db-name","value":"type"},{"name":"db-type","value":"text"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"items.item-dir","value":"horizontal"},{"name":"items.item-style","value":"white-space=nowrap;min-width=10%;width=calc(10% - 30px);background=lightblue;border-radius=10px;margin=2.5px;padding=3px 12px;text-align=center;vertical-align=center"}];
				$f.setprop('frmmain','lstmonth', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"rgba(50,100,150,0.50)"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"arial, helvetica, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0.5px solid #444"},{"name":"margin","value":"0px 0px 0px 0px"},{"name":"outline","value":"none"},{"name":"padding","value":"0px 0px 0px 5px"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"7px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"5px 0px 0px 0px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"items.background-color","value":"transparent"},{"name":"items.overflow","value":"hidden"},{"name":"items.white-space","value":"normal"}];
				$f.setstyle('frmmain','lstmonth', styles);
			$f.add('frmmain','frmmonths1','div','','0','0','382','43');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-frame"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('frmmain','frmmonths1', props);
				styles = [{"name":"left","value":""},{"name":"top","value":""},{"name":"width","value":""},{"name":"color","value":"#000000"},{"name":"border-spacing","value":"1px"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"none"},{"name":"display","value":"block"},{"name":"padding","value":"5px 5px 5px 5px"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"3px"},{"name":"box-shadow","value":"rgba(80,80,80,.40) 0px 2px 2px 0px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"10.2pt"},{"name":"overflow-x","value":"auto"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"white-space","value":"nowrap"}];
				$f.setstyle('frmmain','frmmonths1', styles);
			$f.add($f.getinstname('frmmain','frmmonths1'),'jan','label-right','','0','0','60','26');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Jan"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('frmmain','jan', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#add8e6"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"width","value":"auto"},{"name":"border-radius","value":"9px"},{"name":"font-size","value":"10.2pt"},{"name":"line-height","value":"100%"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.padding","value":"4px 10px 4px 10px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"center"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 2px 0px 2px"},{"name":"div.min-width","value":"60px"},{"name":"div.padding","value":"2px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','jan', styles);
			$f.add($f.getinstname('frmmain','frmmonths1'),'feb','label-right','','0','0','50','25');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Feb"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('frmmain','feb', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#add8e6"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"width","value":"auto"},{"name":"border-radius","value":"9px"},{"name":"font-size","value":"10.2pt"},{"name":"line-height","value":"100%"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.padding","value":"4px 10px 4px 10px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"center"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 2px 0px 2px"},{"name":"div.min-width","value":"60px"},{"name":"div.padding","value":"2px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','feb', styles);
			$f.add($f.getinstname('frmmain','frmmonths1'),'mar','label-right','','0','0','50','25');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Mar"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('frmmain','mar', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#add8e6"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"width","value":"auto"},{"name":"border-radius","value":"9px"},{"name":"font-size","value":"10.2pt"},{"name":"line-height","value":"100%"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.padding","value":"4px 10px 4px 10px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"center"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 2px 0px 2px"},{"name":"div.min-width","value":"60px"},{"name":"div.padding","value":"2px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','mar', styles);
			$f.add($f.getinstname('frmmain','frmmonths1'),'apr','label-right','','0','0','50','25');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Apr"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('frmmain','apr', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#add8e6"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"width","value":"auto"},{"name":"border-radius","value":"9px"},{"name":"font-size","value":"10.2pt"},{"name":"line-height","value":"100%"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.padding","value":"4px 10px 4px 10px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"center"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 2px 0px 2px"},{"name":"div.min-width","value":"60px"},{"name":"div.padding","value":"2px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','apr', styles);
			$f.add($f.getinstname('frmmain','frmmonths1'),'may','label-right','','0','0','50','25');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"May"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('frmmain','may', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#add8e6"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"width","value":"auto"},{"name":"border-radius","value":"9px"},{"name":"font-size","value":"10.2pt"},{"name":"line-height","value":"100%"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.padding","value":"4px 10px 4px 10px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"center"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 2px 0px 2px"},{"name":"div.min-width","value":"60px"},{"name":"div.padding","value":"2px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','may', styles);
			$f.add($f.getinstname('frmmain','frmmonths1'),'jun','label-right','','0','0','63','25');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Jun"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('frmmain','jun', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#add8e6"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"width","value":"auto"},{"name":"border-radius","value":"9px"},{"name":"font-size","value":"10.2pt"},{"name":"line-height","value":"100%"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.padding","value":"4px 10px 4px 10px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"center"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 2px 0px 2px"},{"name":"div.min-width","value":"60px"},{"name":"div.padding","value":"2px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','jun', styles);
			$f.add($f.getinstname('frmmain','frmmonths1'),'jul','label-right','','0','0','50','25');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Jul"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('frmmain','jul', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#add8e6"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"width","value":"auto"},{"name":"border-radius","value":"9px"},{"name":"font-size","value":"10.2pt"},{"name":"line-height","value":"100%"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.padding","value":"4px 10px 4px 10px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"center"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 2px 0px 2px"},{"name":"div.min-width","value":"60px"},{"name":"div.padding","value":"2px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','jul', styles);
			$f.add($f.getinstname('frmmain','frmmonths1'),'aug','label-right','','0','0','50','25');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Aug"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('frmmain','aug', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#add8e6"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"width","value":"auto"},{"name":"border-radius","value":"9px"},{"name":"font-size","value":"10.2pt"},{"name":"line-height","value":"100%"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.padding","value":"4px 10px 4px 10px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"center"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 2px 0px 2px"},{"name":"div.min-width","value":"60px"},{"name":"div.padding","value":"2px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','aug', styles);
			$f.add($f.getinstname('frmmain','frmmonths1'),'sep','label-right','','0','0','50','25');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Sep"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('frmmain','sep', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#add8e6"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"width","value":"auto"},{"name":"border-radius","value":"9px"},{"name":"font-size","value":"10.2pt"},{"name":"line-height","value":"100%"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.padding","value":"4px 10px 4px 10px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"center"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 2px 0px 2px"},{"name":"div.min-width","value":"60px"},{"name":"div.padding","value":"2px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','sep', styles);
			$f.add($f.getinstname('frmmain','frmmonths1'),'oct','label-right','','0','0','50','25');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Oct"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('frmmain','oct', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#add8e6"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"width","value":"auto"},{"name":"border-radius","value":"9px"},{"name":"font-size","value":"10.2pt"},{"name":"line-height","value":"100%"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.padding","value":"4px 10px 4px 10px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"center"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 2px 0px 2px"},{"name":"div.min-width","value":"60px"},{"name":"div.padding","value":"2px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','oct', styles);
			$f.add($f.getinstname('frmmain','frmmonths1'),'nov','label-right','','0','0','50','25');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Nov"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('frmmain','nov', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#add8e6"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"width","value":"auto"},{"name":"border-radius","value":"9px"},{"name":"font-size","value":"10.2pt"},{"name":"line-height","value":"100%"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.padding","value":"4px 10px 4px 10px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"center"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 2px 0px 2px"},{"name":"div.min-width","value":"60px"},{"name":"div.padding","value":"2px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','nov', styles);
			$f.add($f.getinstname('frmmain','frmmonths1'),'dec','label-right','','0','0','50','25');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Dec"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('frmmain','dec', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#add8e6"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"width","value":"auto"},{"name":"border-radius","value":"9px"},{"name":"font-size","value":"10.2pt"},{"name":"line-height","value":"100%"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.padding","value":"4px 10px 4px 10px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"center"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 2px 0px 2px"},{"name":"div.min-width","value":"60px"},{"name":"div.padding","value":"2px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','dec', styles);
			$f.add('frmmain','label13','label','','0','0','440','30');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"RTF Editor"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('frmmain','label13', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-spacing","value":"1px"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#224466"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"10.2pt"},{"name":"line-height","value":"100%"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.background-color","value":"#224466"},{"name":"div.border-radius","value":"3px"},{"name":"div.border","value":"none"},{"name":"div.box-shadow","value":"rgba(20,20,20,.60) 0px 4px 4px 0px"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"10px 0px 5px 0px"},{"name":"div.padding","value":"8px 8px 8px 8px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','label13', styles);
			$f.add('frmmain','rtfeditor1','rtfeditor','','0','0','382','226');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":"rtfeditor1(rtfeditor)"},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':''<RB>"},{"name":"bind","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-rtfeditor"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"ck-mode","value":"mobile"},{"name":"ck-skin","value":"moono-dark"},{"name":"db-key","value":"false"},{"name":"db-name","value":"rtfeditor1"},{"name":"db-type","value":"text"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('frmmain','rtfeditor1', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#ffffff"},{"name":"font-size","value":"inherit"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','rtfeditor1', styles);
			$f.add('frmmain','label14','label','','0','0','440','30');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"You Tube Video"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('frmmain','label14', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-spacing","value":"1px"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#224466"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"10.2pt"},{"name":"line-height","value":"100%"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.background-color","value":"#224466"},{"name":"div.border-radius","value":"3px"},{"name":"div.border","value":"none"},{"name":"div.box-shadow","value":"rgba(20,20,20,.60) 0px 4px 4px 0px"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"10px 0px 5px 0px"},{"name":"div.padding","value":"8px 8px 8px 8px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','label14', styles);
			options = <LB>
			    source: 'https://www.youtube.com/embed/g2ctOFxDBk0',
			    filetype: 'application/x-shockwave-flash'
			    <RB>;
			$f.add('frmmain','custom1','embed',options,'0','0','352','256');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":"custom1(embed)"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-custom"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('frmmain','custom1', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"10.2pt"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','custom1', styles);
			$f.add('frmmain','label12','label','','0','0','440','30');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Tab Control (absolute pos only)"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('frmmain','label12', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-spacing","value":"1px"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#224466"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"10.2pt"},{"name":"line-height","value":"100%"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.background-color","value":"#224466"},{"name":"div.border-radius","value":"3px"},{"name":"div.border","value":"none"},{"name":"div.box-shadow","value":"rgba(20,20,20,.60) 0px 4px 4px 0px"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"10px 0px 5px 0px"},{"name":"div.padding","value":"8px 8px 8px 8px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','label12', styles);
			options = ["Page 1","Page 2","Page 3"];
			$f.createtab('frmmain','tab1',options,'0','0','352','226');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"position","value":"top-left"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-tab"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"lock-display","value":"!!!!"},{"name":"lock-position","value":"!!!!"}];
				$f.setprop('frmmain','tab1', props);
				styles = [{"name":"left","value":""},{"name":"top","value":""},{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#f0f0f0"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"block"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"10.2pt"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','tab1', styles);
				$f.tab.position('frmmain','tab1', 'top-left');
			$f.add('frmmain','label16','label','','0','0','440','30');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Slick Grid"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('frmmain','label16', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-spacing","value":"1px"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#224466"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"10.2pt"},{"name":"line-height","value":"100%"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.background-color","value":"#224466"},{"name":"div.border-radius","value":"3px"},{"name":"div.border","value":"none"},{"name":"div.box-shadow","value":"rgba(20,20,20,.60) 0px 4px 4px 0px"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"10px 0px 5px 0px"},{"name":"div.padding","value":"8px 8px 8px 8px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','label16', styles);
			$f.add('frmmain','custom2','div','','0','0','382','206');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":"custom2(slickgrid)"},{"name":"caption","value":""},{"name":"ctype","value":"slickgrid"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-custom"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('frmmain','custom2', props);
				styles = [{"name":"left","value":""},{"name":"top","value":""},{"name":"width","value":""},{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"block"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"10.2pt"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','custom2', styles);
				$f.html('frmmain','custom2', '<div id="frmmain.custom2.table" dock="!!!!" style="width:100%;height:100%;"></div>');
			$f.add('frmmain','label17','label','','0','0','440','30');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"High Charts - Donut"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('frmmain','label17', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-spacing","value":"1px"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#224466"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"10.2pt"},{"name":"line-height","value":"100%"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.background-color","value":"#224466"},{"name":"div.border-radius","value":"3px"},{"name":"div.border","value":"none"},{"name":"div.box-shadow","value":"rgba(20,20,20,.60) 0px 4px 4px 0px"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"10px 0px 5px 0px"},{"name":"div.padding","value":"8px 8px 8px 8px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','label17', styles);
			$f.add('frmmain','custom3','div','','0','0','400','280');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":"custom3(highcharts-donut3d)"},{"name":"caption","value":""},{"name":"ctype","value":"highcharts"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-custom"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('frmmain','custom3', props);
				styles = [{"name":"left","value":""},{"name":"top","value":""},{"name":"width","value":""},{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"block"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"10.2pt"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','custom3', styles);
				$f.html('frmmain','custom3', '<div id="frmmain-custom3-hchart" class="highcharts-container" style="max-width: 100%; height: 100%;"></div>');
			$f.add('frmmain','label18','label','','0','0','440','30');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"High Charts - Over/Under"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('frmmain','label18', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-spacing","value":"1px"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#224466"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"10.2pt"},{"name":"line-height","value":"100%"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.background-color","value":"#224466"},{"name":"div.border-radius","value":"3px"},{"name":"div.border","value":"none"},{"name":"div.box-shadow","value":"rgba(20,20,20,.60) 0px 4px 4px 0px"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"10px 0px 5px 0px"},{"name":"div.padding","value":"8px 8px 8px 8px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','label18', styles);
			$f.add('frmmain','custom4','div','','0','0','400','280');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":"custom4(highcharts-overunder)"},{"name":"caption","value":""},{"name":"ctype","value":"highcharts"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-custom"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('frmmain','custom4', props);
				styles = [{"name":"left","value":""},{"name":"top","value":""},{"name":"width","value":""},{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"block"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"10.2pt"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','custom4', styles);
				$f.html('frmmain','custom4', '<div id="frmmain-custom4-hchart" class="highcharts-container" style="max-width: 100%; height: 100%;"></div>');
			$f.add('frmmain','label19','label','','0','0','440','30');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"High Charts - 3D Column"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('frmmain','label19', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-spacing","value":"1px"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#224466"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"10.2pt"},{"name":"line-height","value":"100%"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.background-color","value":"#224466"},{"name":"div.border-radius","value":"3px"},{"name":"div.border","value":"none"},{"name":"div.box-shadow","value":"rgba(20,20,20,.60) 0px 4px 4px 0px"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"10px 0px 5px 0px"},{"name":"div.padding","value":"8px 8px 8px 8px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','label19', styles);
			$f.add('frmmain','custom5','div','','0','0','352','280');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":"custom5(highcharts-column3d)"},{"name":"caption","value":""},{"name":"ctype","value":"highcharts"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-custom"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('frmmain','custom5', props);
				styles = [{"name":"left","value":""},{"name":"top","value":""},{"name":"width","value":""},{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"block"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"10.2pt"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','custom5', styles);
				$f.html('frmmain','custom5', '<div id="frmmain-custom5-hchart" class="highcharts-container" style="max-width: 100%; height: 100%;"></div>');
			$f.add('frmmain','label20','label','','0','0','440','30');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"VizJS - Timeline"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('frmmain','label20', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-spacing","value":"1px"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#224466"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"10.2pt"},{"name":"line-height","value":"100%"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.background-color","value":"#224466"},{"name":"div.border-radius","value":"3px"},{"name":"div.border","value":"none"},{"name":"div.box-shadow","value":"rgba(20,20,20,.60) 0px 4px 4px 0px"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"10px 0px 5px 0px"},{"name":"div.padding","value":"8px 8px 8px 8px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','label20', styles);
			$f.add('frmmain','custom6','div','','0','0','382','192');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":"custom6(vizjs)"},{"name":"caption","value":""},{"name":"ctype","value":"vizjs"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-custom"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('frmmain','custom6', props);
				styles = [{"name":"left","value":""},{"name":"top","value":""},{"name":"width","value":""},{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"block"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"10.2pt"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','custom6', styles);
			$f.add('frmmain','label21','label','','0','0','440','30');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Calendar Control"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('frmmain','label21', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-spacing","value":"1px"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#224466"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"10.2pt"},{"name":"line-height","value":"100%"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.background-color","value":"#224466"},{"name":"div.border-radius","value":"3px"},{"name":"div.border","value":"none"},{"name":"div.box-shadow","value":"rgba(20,20,20,.60) 0px 4px 4px 0px"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"10px 0px 5px 0px"},{"name":"div.padding","value":"8px 8px 8px 8px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','label21', styles);
			$f.add('frmmain','custom7','div','','0','0','382','200');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":"custom7(fullcalendar)"},{"name":"caption","value":""},{"name":"ctype","value":"fullcalendar"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-custom"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('frmmain','custom7', props);
				styles = [{"name":"left","value":""},{"name":"top","value":""},{"name":"width","value":""},{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"block"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"10.2pt"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','custom7', styles);
				$f.html('frmmain','custom7', '<div id="<<INST.NAME>>.fullcalendar"></div>');
			$f.add('frmmain','label15','label','','0','0','423','30');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('frmmain','label15', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-spacing","value":"1px"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#224466"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"10.2pt"},{"name":"line-height","value":"100%"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.background-color","value":"#224466"},{"name":"div.border-radius","value":"3px"},{"name":"div.border","value":"none"},{"name":"div.box-shadow","value":"rgba(20,20,20,.60) 0px 4px 4px 0px"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"10px 0px 5px 0px"},{"name":"div.padding","value":"8px 8px 8px 8px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmmain','label15', styles);
			$f.setprop('frmmain','','dock',pos.dock);
				props = [{"name":"version","value":"v5.0"},{"name":"autosize","value":"false"},{"name":"disabled","value":false},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"_private","value":"false"},{"name":"bind","value":"false"},{"name":"clipmenu","value":"true"},{"name":"donottheme","value":"false"},{"name":"flattenonpull","value":"true"},{"name":"ignorezorder","value":"false"},{"name":"output","value":"normal"},{"name":"shadow","value":"true"},{"name":"theme","value":"nimble-form"},{"name":"toggleonflip","value":"true"},{"name":"useastheme","value":"false"},{"name":"watch","value":"false"}];
				$f.setprop($f.getinstname('frmmain','tab1.page1'),'body', props);
				styles = [{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"visibility","value":"visible"},{"name":"displaymode","value":""},{"name":"font-size","value":"14px"},{"name":"font-style","value":"normal"},{"name":"pointer-events","value":"auto"},{"name":"z-index","value":"2"}];
				$f.setstyle($f.getinstname('frmmain','tab1.page1'),'body', styles);
			
				props = [{"name":"version","value":"v5.0"},{"name":"autosize","value":"false"},{"name":"disabled","value":false},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"_private","value":"false"},{"name":"bind","value":"false"},{"name":"clipmenu","value":"true"},{"name":"donottheme","value":"false"},{"name":"flattenonpull","value":"true"},{"name":"ignorezorder","value":"false"},{"name":"output","value":"normal"},{"name":"shadow","value":"true"},{"name":"theme","value":"nimble-form"},{"name":"toggleonflip","value":"true"},{"name":"useastheme","value":"false"},{"name":"watch","value":"false"}];
				$f.setprop($f.getinstname('frmmain','tab1.page2'),'body', props);
				styles = [{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"visibility","value":"visible"},{"name":"displaymode","value":""},{"name":"font-size","value":"14px"},{"name":"font-style","value":"normal"},{"name":"pointer-events","value":"auto"},{"name":"z-index","value":"2"}];
				$f.setstyle($f.getinstname('frmmain','tab1.page2'),'body', styles);
			
				props = [{"name":"version","value":"v5.0"},{"name":"autosize","value":"false"},{"name":"disabled","value":false},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"_private","value":"false"},{"name":"bind","value":"false"},{"name":"clipmenu","value":"true"},{"name":"donottheme","value":"false"},{"name":"flattenonpull","value":"true"},{"name":"ignorezorder","value":"false"},{"name":"output","value":"normal"},{"name":"shadow","value":"true"},{"name":"theme","value":"nimble-form"},{"name":"toggleonflip","value":"true"},{"name":"useastheme","value":"false"},{"name":"watch","value":"false"}];
				$f.setprop($f.getinstname('frmmain','tab1.page3'),'body', props);
				styles = [{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"visibility","value":"visible"},{"name":"displaymode","value":""},{"name":"font-size","value":"14px"},{"name":"font-style","value":"normal"},{"name":"pointer-events","value":"auto"},{"name":"z-index","value":"2"}];
				$f.setstyle($f.getinstname('frmmain','tab1.page3'),'body', styles);
			
            widgTarget = instID;
            $k.instance.setbyelemid(widgTarget);
            // Attach DATABIND Events ----------------
            if ( $f.model('frmmain').enabled ) { $f.model('frmmain').create('frmmain'); }
            $nim.React.build('frmmain');
            $f.refresh('frmmain');
        }
        catch (err) {
            if ($k.errhandler) {
                $k.errhandler(err, {type: 'Load', target: {id: 'frmmain'}});
            }
        }
        finally {
            try {
                // Attach Form Events --------------------
				
				var itm, evnt, evtArr = [
					
				];
				for (var i = 0; i < evtArr.length; i++) {
					itm = evtArr[i]; 
					$f.setevent('frmmain', itm[0], itm[1], $nim.fn.findEvent('mobilecomponent', 'frmmain', evtArr[i]));
				}
				
                if (App.InstName == "") { App.InstName = instID; }
                App.Dialog['frmmain'].isLoaded = 1;
                App.Dialog['frmmain'].isActivated = 0;
                $f.hide('frmmain');
            }
            catch (err) {
                if ($k.errhandler) {
                    $k.errhandler(err, {type: 'Attach Events', target: {id: 'frmmain'}});
                }
            }
            finally {
                // Attach WIDGETS To Dialog ----------------
                var list = $nim.Load32.Clear();
                $nim.Load32.onComplete(function() {
                    var styles, props;
                    $k.instance.setbyelemid(widgTarget);
                    if ('') $f.alter.view.set('frmmain','', false, true);
                    props = [{"name":"body.version","value":"v5.0"}];
                    $f.setprop('frmmain','', props);
                    props = [{"name":"version","value":"v5.0"}];
                    $f.setprop($f.getinstname('frmmain','tab1.page1'),'body', props);
                    props = [{"name":"version","value":"v5.0"}];
                    $f.setprop($f.getinstname('frmmain','tab1.page2'),'body', props);
                    props = [{"name":"version","value":"v5.0"}];
                    $f.setprop($f.getinstname('frmmain','tab1.page3'),'body', props);
                    styles = [{"name":"body.background-color","value":"#f0f0f0"},{"name":"body.box-sizing","value":"border-box"},{"name":"body.color","value":"#000000"},{"name":"body.overflow-y","value":"auto"},{"name":"body.padding","value":"20px 20px 20px 20px"},{"name":"body.text-align","value":""},{"name":"body.vertical-align","value":""}];
                    $f.setstyle('frmmain','', styles);
                    styles = [{"name":"background-color","value":"#f0f0f0"},{"name":"box-sizing","value":"border-box"},{"name":"color","value":"#eeeeee"},{"name":"text-align","value":""},{"name":"vertical-align","value":""}];
                    $f.setstyle($f.getinstname('frmmain','tab1.page1'),'body', styles);
                    styles = [{"name":"background-color","value":"#f0f0f0"},{"name":"box-sizing","value":"border-box"},{"name":"color","value":"#eeeeee"},{"name":"text-align","value":""},{"name":"vertical-align","value":""}];
                    $f.setstyle($f.getinstname('frmmain','tab1.page2'),'body', styles);
                    styles = [{"name":"background-color","value":"#f0f0f0"},{"name":"box-sizing","value":"border-box"},{"name":"color","value":"#eeeeee"},{"name":"text-align","value":""},{"name":"vertical-align","value":""}];
                    $f.setstyle($f.getinstname('frmmain','tab1.page3'),'body', styles);
                    var ctrls = [];
                    ctrls.forEach(function(itm) {
                        if (itm.widget) { $f.hide(itm.name); } else { $f.hide('frmmain', itm.name); }
                    });
                    $f.events('frmmain', 'Load')(widgTarget, widgTarget.resolveName());
                    $nim.Load32.Clear(true);
                    $k.instance.setbyelemid(widgTarget);
                    if ($f.getprop('frmmain','','forceshow').toLowerCase() == 'true') $heap.mobilecomponent['frmmain'].Show(pos);
                    return;
                });
                if ($nim.Load32.list[list].length > 0) {
                    $nim.Load32.ArrayLoad(list, 0);
                    return instID;
                } else { $nim.Load32.Load_Complete(list); }
                $k.instance.setbyelemid(widgTarget);
                return instID;
            }
        }
    },
    Activate: function() {
        var instID = $k.instance.save('frmmain');
        try {
        /*FRMMAIN.LIBSACTIVATE*/
                /*RTFEDITOR.ACTIVATE*/
                try { $f.code('frmmain').initLib_rtfeditor1(); } catch(err) { console.log('RTFEDITOR error: ' + err); };
                /*RTFEDITOR.ACTIVATE*/
                /*SLICKGRID.ACTIVATE*/
                try { $f.code('frmmain').initLib_custom2(); } catch(err) { console.log('SLICKGRID error: ' + err); };
                /*SLICKGRID.ACTIVATE*/
                /*HIGHCHARTS-DONUT3D.ACTIVATE*/
                try { $f.code('frmmain').initLib_custom3(); } catch(err) { console.log('HIGHCHARTS-DONUT3D error: ' + err); };
                /*HIGHCHARTS-DONUT3D.ACTIVATE*/
                /*HIGHCHARTS-OVERUNDER.ACTIVATE*/
                try { $f.code('frmmain').initLib_custom4(); } catch(err) { console.log('HIGHCHARTS-OVERUNDER error: ' + err); };
                /*HIGHCHARTS-OVERUNDER.ACTIVATE*/
                /*HIGHCHARTS-COLUMN3D.ACTIVATE*/
                try { $f.code('frmmain').initLib_custom5(); } catch(err) { console.log('HIGHCHARTS-COLUMN3D error: ' + err); };
                /*HIGHCHARTS-COLUMN3D.ACTIVATE*/
                /*VIZJS.ACTIVATE*/
                try { $f.code('frmmain').initLib_custom6(); } catch(err) { console.log('VIZJS error: ' + err); };
                /*VIZJS.ACTIVATE*/
                /*FULLCALENDAR.ACTIVATE*/
                try { $f.code('frmmain').initLib_custom7(); } catch(err) { console.log('FULLCALENDAR error: ' + err); };
                /*FULLCALENDAR.ACTIVATE*/
        /*~FRMMAIN.LIBSACTIVATE*/
                }
        catch (err) {
            if ($k.errhandler) {
                $k.errhandler(err, {type: 'Activate', target: {id: 'frmmain'}});
            }
        }
        finally {
            $k.instance.setbyelemid(instID);
            $f.events('frmmain', 'Activate')(instID, instID.resolveName());
            App.Dialog['frmmain'].isActivated = 1;
            $k.instance.restore();
        }
    },
    BeforeUnload: function() {
        var blCancel = false;
        var instID = $k.instance.save('frmmain');
        try {
        /*FRMMAIN.LIBSB4UNLOAD*/
                if (typeof(CKEDITOR) != 'undefined') {
                    var page = (('').indexOf('.back') >-1) ? '.' : '';
                    var targ = FORMS.GetInstName('frmmain', page + 'rtfeditor1');
                    if ( document.getElementById(targ) ) { 
                        if (CKEDITOR.instances[targ]) {
                            try {
                                CKEDITOR.instances[targ].destroy(true);
                            } catch(e) { console.log('ckeditor error when destroying previous instance.'); }
                        }
                    }
                }
                var instName = FORMS.GetInstName('frmmain', 'custom3');
                USER.highcharts.forEach(function(chart, index) {
                    if (chart.id == instName && chart.hnd && chart.hnd.destroy) {
                        chart.hnd.destroy();
                        USER.highcharts.splice(index, 1);
                    }
                    var elem = document.getElementById("frmmain-custom3-options");
                    if (elem) elem.parentNode.removeChild(elem);
                });
                var instName = FORMS.GetInstName('frmmain', 'custom4');
                USER.highcharts.forEach(function(chart, index) {
                    if (chart.id == instName && chart.hnd && chart.hnd.destroy) {
                        chart.hnd.destroy();
                        USER.highcharts.splice(index, 1);
                    }
                    var elem = document.getElementById("frmmain-custom4-options");
                    if (elem) elem.parentNode.removeChild(elem);
                });
                var instName = FORMS.GetInstName('frmmain', 'custom5');
                USER.highcharts.forEach(function(chart, index) {
                    if (chart.id == instName && chart.hnd && chart.hnd.destroy) {
                        chart.hnd.destroy();
                        USER.highcharts.splice(index, 1);
                    }
                    var elem = document.getElementById("frmmain-custom5-options");
                    if (elem) elem.parentNode.removeChild(elem);
                });
                if (typeof(vis) != 'undefined') {
                    var page = (('').indexOf('.back') >-1) ? '.' : '';
                    var targ = FORMS.GetInstName('frmmain', page + 'custom6');
                    if ( document.getElementById(targ) ) { 
                    }
                }
        /*~FRMMAIN.LIBSB4UNLOAD*/
                
            if ($k.islastform('frmmain')) { $k.app.unloadwidget('frmmain'); }
			
			var itm, evtArr = [
				
			];
			for (var i = 0; i < evtArr.length; i++) {
				itm = evtArr[i]; $f.setevent('frmmain', itm[0], itm[1], null);
			}
			
        }
        catch (err) {
            if ($k.errhandler) {
                $k.errhandler(err, {type: 'BeforeUnload', target: {id: 'frmmain'}});
            }
        }
        finally {
            $k.instance.setbyelemid(instID);
            blCancel = $f.events('frmmain', 'QueryUnload')(instID, instID.resolveName());
            $k.instance.restore();
        }
        return blCancel;
    },
    UnloadAll: function() {
        try {
            $k.instance.save('frmmain');
            if (App) {
                var dlgItem = App.Dialog['frmmain'], 
                    dlgCount = App.Dialog['frmmain'].count; 
                for (var x = dlgCount; x >= 0; x--) {
                    KERNEL.formInst = x;
                    dlgItem.Unload();
                }
            }
        }
        catch (err) {
            if ($k.errhandler) {
                $k.errhandler(err, {type: 'UnloadAll', target: {id: 'frmmain'}});
            }
        }
        finally {
            App.Dialog['frmmain'].count = 0;
            $k.instance.restore();
            KERNEL.formInst = 0;
        }
    },
    Unload: function() {
        var blCancel = false;
        try {
            var instID = $k.instance.save('frmmain');
            blCancel = $f.events('frmmain', 'QueryUnload')();
            if (blCancel) {
                return blCancel;
            }
            $k.instance.save('frmmain');
            $k.instance.restore();
            $f.events('frmmain', 'Unload')(instID, instID.resolveName());
        }
        catch (err) {
            if ($k.errhandler) {
                $k.errhandler(err, {type: 'Unload', target: {id: 'frmmain'}});
            }
        }
        finally {
            $k.instance.restore();
            if (!blCancel) {
                FORMS.sysUnload("frmmain");
                App.Dialog['frmmain'].isLoaded = 0;
                App.Dialog['frmmain'].isActivated = 0;
                if (App) {
                    $k.instance.setbyelemid(KERNEL.curId);
                    var elem, dlgName = "";
                    if (!$k.isanyformloaded()) {
                        if (!App.App.exiting) { App.End(); }
                    }
                }
            }
        }
    },
    Show: function(pos) {
        var retval = "";
        try {
            if (!KERNEL.enabled) return;
            var instID = $k.instance.save('frmmain');
            if ($k.isformloaded('frmmain') == false) {
                retval = $f.events('frmmain', 'Load')(pos);
            }
            $k.instance.restore();
            $f.show("frmmain");
            // Pull DataModel. 
            $k.instance.save('frmmain');
            if ($f.model('frmmain').enabled) { $f.model('frmmain').pull(); }
        }
        catch(err) { 
            if ($k.errhandler) {
                $k.errhandler(err, {type: 'Show', target: {id: 'frmmain'}});
            }
        }
        finally {
            $k.instance.restore();
            if (!App.Dialog['frmmain'].isActivated) {
                $f.events('frmmain', 'Activate')();
            }
            return retval;
        }
    },
    Code: { 
		initLib_rtfeditor1: function(e, itm) { 
			
			if (typeof(CKEDITOR) != 'undefined') {
				var page = (('').indexOf('.back') >-1) ? '.' : '',
					targ = $f.getinstname('frmmain', page + 'rtfeditor1'),
					size = $f.getsize('frmmain', page + 'rtfeditor1'),
					skin = $f.getprop('frmmain', page + 'rtfeditor1', 'ck-skin') || 'kama',
					mode = $f.getprop('frmmain', page + 'rtfeditor1', 'ck-mode') || 'normal';
				
				CKEDITOR.config.skin = skin; // 'kama' | 'moono-dark' | 'flat'
				CKEDITOR.config.enterMode = CKEDITOR.ENTER_BR;
				CKEDITOR.config.shiftEnterMode = CKEDITOR.ENTER_P;
				CKEDITOR.config.resize_enabled = false;
				CKEDITOR.config.htmlEncodeOutput = true;
				CKEDITOR.config.width = 'calc(100% - 5px)';
				CKEDITOR.config.height = 'calc(100% - ' + ((mode == 'normal') ? '90px)' : '59px)');
				
              	
				var toolbar, buttons = '', plugins = '';
                if (mode == 'normal') {
                    toolbar = [
                        { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
                        { name: 'colors', groups: [ 'colors' ] },
                        { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
                        { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
                        { name: 'insert', groups: [ 'insert' ] },
                        '/',
                        { name: 'styles', groups: [ 'styles' ] },
                        { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
                        { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
                        { name: 'forms', groups: [ 'forms' ] },
                        { name: 'links', groups: [ 'links' ] },
                        { name: 'tools', groups: [ 'tools' ] },
                        { name: 'others', groups: [ 'others' ] },
                        { name: 'about', groups: [ 'about' ] }
                    ];
                    buttons = 'Templates,Save,NewPage,ExportPdf,Preview,Print,ShowBlocks,About,Styles,BidiLtr,' + 
                        'Table,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,Anchor,Language,JustifyRight,' + 
                        'BidiRtl,JustifyCenter,JustifyBlock,JustifyLeft,CreateDiv,CopyFormatting,RemoveFormat,' + 
                        'Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,SelectAll,' + 
                        'Find,Replace,Copy,PasteText,Paste,PasteFromWord,Cut,BGColor,Format';
                    plugins = "html5video,pastetext,pastefromgdocs,pastefromword,wsc,document," + 
                        "youtube,scayt,videodetector,sourcearea";
                } else {
                    toolbar = [
                        { name: 'styles', groups: [ 'styles' ] },
                        { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
                        { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
                        { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
                        { name: 'colors', groups: [ 'colors' ] },
                        { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
                        { name: 'forms', groups: [ 'forms' ] },
                        { name: 'links', groups: [ 'links' ] },
                        { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
                        { name: 'insert', groups: [ 'insert' ] },
                        { name: 'tools', groups: [ 'tools' ] },
                        { name: 'others', groups: [ 'others' ] },
                        { name: 'about', groups: [ 'about' ] }
                    ];
                    buttons = 'Templates,Save,NewPage,Source,ExportPdf,Preview,Print,Maximize,ShowBlocks,About,' + 
                        'Format,Font,FontSize,BidiLtr,Table,Strike,Subscript,Superscript,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,' + 
                        'Anchor,Language,JustifyRight,BidiRtl,JustifyCenter,JustifyBlock,JustifyLeft,CreateDiv,' + 
                        'Indent,Outdent,NumberedList,CopyFormatting,RemoveFormat,BulletedList,Form,Checkbox,Radio,' + 
                        'TextField,Textarea,Select,Button,ImageButton,HiddenField,SelectAll,Find,Replace,Undo,Copy,' + 
                        'PasteText,Paste,Redo,PasteFromWord,Cut,BGColor,Image,Link,Unlink';
                    plugins = "html5video,pastetext,pastefromgdocs,pastefromword,wsc,document," + 
                        "youtube,scayt,videodetector,sourcearea,base64image,codesnippet";
                }
				
				// Apply Configuration.
                CKEDITOR.custConfig = {};
                CKEDITOR.custConfig.toolbarGroups = toolbar;
                CKEDITOR.custConfig.removeButtons = buttons;
                CKEDITOR.custConfig.removePlugins = plugins;
                CKEDITOR.custConfig.extraPlugins = '';
				if ( document.getElementById(targ) ) { 
					if (CKEDITOR.instances[targ]) {
						try {
							CKEDITOR.instances[targ].destroy(true);
						} catch(e) { console.log('ckeditor error when destroying previous instance.'); }
					}
					if (!CKEDITOR.instances[targ]) { 
						CKEDITOR.replace( targ, {contentsCss: "body {font-family: Arial; font-size: 18px;}"} );
					}
				}
			}
			
			
		},//-INITLIB_RTFEDITOR1
		initLib_custom7: function(e, itm) { 
			
			if (typeof(FullCalendar) != 'undefined') {
				var page = (('').indexOf('.back') >-1) ? '.' : '',
					instName = FORMS.GetInstName('frmmain', page + 'custom7'),
					size = FORMS.GetSize('frmmain', page + 'custom7'),
					elem = document.getElementById(instName);
				
				if (elem) { 
					if (!USER._libs) USER._libs = {};
					USER._libs.fullCalendar = new FullCalendar.Calendar(elem, {
			          plugins: [ 'dayGrid' ]
			        });
			        USER._libs.fullCalendar.render();
				}
			}
			
			
		},//-INITLIB_CUSTOM7
		initLib_custom6: function(e, itm) { 
			
			if (typeof(vis) != 'undefined') {
				var page = (('').indexOf('.back') >-1) ? '.' : '';
				var instName = FORMS.GetInstName('frmmain', page + 'custom6');
				var size = FORMS.GetSize('frmmain', page + 'custom6');
				var targ = document.getElementById(instName);
				
				if (!USER._libs) USER._libs = {};
				USER._libs.vizjs = vis;
				
				if ( targ ) { 
					// Create a DataSet (allows two way data-binding)
					  var items = new vis.DataSet([
						{id: 'A', content: 'Period A', start: '2014-01-16', end: '2014-01-22', type: 'background', group: 1},
						{id: 'B', content: 'Period B', start: '2014-01-23', end: '2014-01-26', type: 'background', group: 2},
						{id: 'C', content: 'Period C', start: '2014-01-27', end: '2014-02-03', type: 'background'}, // no group
						{id: 'D', content: 'Period D', start: '2014-01-14', end: '2014-01-20', type: 'background', group: 'non-existing'},
						{id: 1, content: 'item 1<br>start', start: '2014-01-30', group: 1},
						{id: 2, content: 'item 2', start: '2014-01-18', group: 1},
						{id: 3, content: 'item 3', start: '2014-01-21', group: 2},
						{id: 4, content: 'item 4', start: '2014-01-17', end: '2014-01-21', group: 2},
						{id: 5, content: 'item 5', start: '2014-01-28', type:'point', group: 2},
						{id: 6, content: 'item 6', start: '2014-01-25', group: 2}
					  ]);
					  
					// Configuration of Groups  
					  var groups = new vis.DataSet([
						{id: 1, content: 'Group 1'},
						{id: 2, content: 'Group 2'}
					  ]);
					// Configuration for the Timeline
					  var options = {
						start: '2014-01-10',
						end: '2014-02-10',
						editable: true
					  };
					// Create a Timeline
					USER.timeline= new vis.Timeline(targ, items, options);
				}
			}
			
			
		},//-INITLIB_CUSTOM6
		initLib_custom5: function(e, itm) { 
			
			var size = FORMS.GetSize('frmmain', 'custom5');
				var chart = Highcharts.chart('frmmain-custom5-hchart', {
					chart: {
						type: 'column',
						backgroundColor:'transparent',
						options3d: {
							enabled: true,
							alpha: 10,
							beta: 25,
							depth: 70
						},
						width: size.width,
						height: size.height
					},
					exporting: {
						enabled: false
					},
					title: {
						text: '3D chart with null values',
						style: { fontSize: '10pt' }
					},
					subtitle: {
						text: 'Notice the difference between a 0 value and a null point'
					},
					plotOptions: {
						column: {
							depth: 25
						}
					},
					credits: {
						enabled: false
					},
					xAxis: {
						categories: Highcharts.getOptions().lang.shortMonths
					},
					yAxis: {
						title: {
							text: null
						}
					},
					series: [{
						name: 'Sales',
						data: [2, 3, null, 4, 0, 5, 1, 4, 6, 3]
					}]
				});
				
				if (!USER._libs) USER._libs = {};
				if (!USER._libs.highcharts) USER._libs.highcharts = [];
				USER._libs.highcharts.push({id: FORMS.GetInstName('frmmain', 'custom5'), hnd: chart});
			
			
		},//-INITLIB_CUSTOM5
		initLib_custom4: function(e, itm) { 
			
			// Make monochrome colors
				var size = FORMS.GetSize('frmmain', 'custom4');
				var chart = Highcharts.chart('frmmain-custom4-hchart', {
					chart: {
						type: 'column',
						backgroundColor:'transparent'
					},
					exporting: {
						enabled: false
					},
					title: {
						text: 'Column chart',
						style: { fontSize: '10pt' }
					},
					xAxis: {
						categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
					},
					credits: {
						enabled: false
					},
					series: [{
						name: 'John',
						data: [5, 3, 4, 7, 2]
					}, {
						name: 'Jane',
						data: [2, -2, -3, 2, 1]
					}, {
						name: 'Joe',
						data: [3, 4, 4, -2, 5]
					}]
				});
				
				if (!USER._libs) USER._libs = {};
				if (!USER._libs.highcharts) USER._libs.highcharts = [];
				USER._libs.highcharts.push({id: FORMS.GetInstName('frmmain', 'custom4'), hnd: chart});
			
			
		},//-INITLIB_CUSTOM4
		initLib_custom2: function(e, itm) { 
			
			function requiredFieldValidator(value) {
			    if (value == null || value == undefined || !value.length) {
			      return {valid: false, msg: "This is a required field"};
			    } else {
			      return {valid: true, msg: null};
			    }
			  }
			  
			  var grid;
			  var data = [];
			  var columns = [
				{id: "id", name: "id", field: "id", sortable: true, behavior: "select", cssClass: "cell-selection", width: 40, cannotTriggerInsert: true, resizable: false, selectable: false, excludeFromColumnPicker: true },
			    {id: "title", name: "Title", field: "title", sortable: true, width: 120, cssClass: "cell-title", editor: Slick.Editors.Text, validator: requiredFieldValidator},
			    {id: "desc", name: "Description", field: "description", sortable: true, width: 100, editor: Slick.Editors.LongText},
			    {id: "duration", name: "Duration", field: "duration", sortable: true, editor: Slick.Editors.Text},
			    {id: "%", name: "% Complete", field: "percentComplete", sortable: true, width: 80, resizable: false, formatter: Slick.Formatters.PercentCompleteBar, editor: Slick.Editors.PercentComplete},
			    {id: "start", name: "Start", field: "start", sortable: true, minWidth: 60, editor: Slick.Editors.Date},
			    {id: "finish", name: "Finish", field: "finish", sortable: true, minWidth: 60, editor: Slick.Editors.Date},
			    {id: "effort-driven", name: "Effort Driven", sortable: true, width: 80, minWidth: 20, maxWidth: 80, cssClass: "cell-effort-driven", field: "effortDriven", formatter: Slick.Formatters.Checkmark, editor: Slick.Editors.Checkbox}
			  ];
			  var options = {
			    editable: true,
			    enableAddRow: true,
				multiColumnSort: true,
			    enableCellNavigation: true,
			    asyncEditorLoading: false,
			    autoEdit: false
			  };
			  
			  $(function () {
				var targ, osize, resizer, redraw;
				
			    for (var i = 0; i < 500; i++) {
			      var d = (data[i] = {});
			      d["id"] = i;
			      d["title"] = "Task " + i;
			      d["description"] = "This is a sample task description.\n  It can be multiline.";
			      d["duration"] = (Math.floor(10 * Math.random())) + " days";
			      d["percentComplete"] = Math.round(Math.random() * 100);
			      d["start"] = "01/" + (Math.floor(30 * Math.random())) + "/2008";
			      d["finish"] = "01/" + (Math.floor(30 * Math.random())) + "/2009";
			      d["effortDriven"] = (i % 5 == 0);
			    }
				
				targ = 'frmmain.custom2.table';
			    grid = new Slick.Grid('#'+targ.jQryName(), data, columns, options);
			    grid.setSelectionModel(new Slick.RowSelectionModel());
				osize = $f.getcoords(targ);
				// create the Resizer plugin.
				resizer = new Slick.Plugins.Resizer({
					container: '#' + ($f.instname('frmmain', 'custom2').jQryName())
				});
				grid.registerPlugin(resizer);
				resizer.pauseResizer(true);
				function resize() {
					var hdr;
					resizer.resizeGrid(0, {width: osize.width, height: osize.height});
					
					hdr = $('.slick-header')[0];
					if (hdr) {
						hdr.style['border-bottom'] = '2px solid silver';
					}
					hdr = $('.slick-header-columns')[0];
					if (hdr) {
						hdr.style['border-bottom'] = 'none';
					}
				}
							
				redraw = setInterval(function() {
					if (osize.resizing) return;
					
					osize.resizing = true;
					var size = $f.getcoords('frmmain', 'custom2');
					if (size && (size.width != osize.width || size.height != osize.height)) {
						osize = size;
						resize();
					} else { delete osize.resizing; }
				}, 800);
				
			    grid.onAddNewRow.subscribe(function (e, args) {
			      var item = args.item;
			      grid.invalidateRow(data.length);
			      data.push(item);
			      grid.updateRowCount();
			      grid.render();
			    });
			    grid.onSort.subscribe(function (e, args) {
			      var cols = args.sortCols;
			      data.sort(function (dataRow1, dataRow2) {
			        for (var i = 0, l = cols.length; i < l; i++) {
			          var field = cols[i].sortCol.field;
			          var sign = cols[i].sortAsc ? 1 : -1;
			          var value1 = dataRow1[field], value2 = dataRow2[field];
			          var result = (value1 == value2 ? 0 : (value1 > value2 ? 1 : -1)) * sign;
			          if (result != 0) {
			            return result;
			          }
			        }
			        return 0;
			      });
			      grid.invalidate();
			      grid.render();
			    });
				grid.onColumnsResized.subscribe(resize);
				grid.onColumnsReordered.subscribe(resize);
				resize();
				
				if (!USER._libs) USER._libs = {};
				USER._libs.slickGrid = grid;
				
			  });
			
			
		},//-INITLIB_CUSTOM2
		initLib_custom3: function(e, itm) { 
			
			var size = FORMS.GetSize('frmmain', 'custom3');
				var chart = Highcharts.chart('frmmain-custom3-hchart', {
					chart: {
						type: 'pie',
						backgroundColor:'transparent',
						options3d: {
							enabled: true,
							alpha: 45
						},
						width: size.width,
						height: size.height
					},
					exporting: {
						enabled: false
					},
					
					title: {
						text: 'Contents of Highsoft\'s weekly fruit delivery',
						style: { fontSize: '10pt' }
					},
					subtitle: {
						text: '3D donut in Highcharts'
					},
					plotOptions: {
						pie: {
							size: Math.min(400,280) *.95,
							innerSize: 100,
							depth: 45
						}
					},
					credits: {
						enabled: false
					},
					series: [{
						name: 'Delivered amount',
						data: [
							['Bananas', 8],
							['Kiwi', 3],
							['Mixed nuts', 1],
							['Oranges', 6],
							['Apples', 8],
							['Pears', 4],
							['Clementines', 4],
							['Reddish (bag)', 1],
							['Grapes (bunch)', 1]
						]
					}]
				});
				if (!USER._libs) USER._libs = {};
				if (!USER._libs.highcharts) USER._libs.highcharts = [];
				USER._libs.highcharts.push({id: FORMS.GetInstName('frmmain', 'custom3'), hnd: chart});
			
			
		},//-INITLIB_CUSTOM3
    },
    Widgets: { },
    Views: { }, 
    Events: {
		form_Activate: function(event, item) { 
			// Your Code Here.. ---
			// -------------------- 

		},
		highcharts_Resize: function(instName) {
			if (USER.highcharts && !FORMS.isSliding('frmmain')) {
				USER.highcharts.forEach(function(chart) {
					if (chart.id.resolveName('form') == 'frmmain') {
						var size = FORMS.GetSize('frmmain', chart.id.resolveName('control'));
						if (size && chart.hnd) chart.hnd.setSize(size.width, size.height);
					}
				});
			}
		},
		form_Load: function(e, itm) { 
			
		}//-FORM_LOAD
    }
};
$k.wrapallfunctions($heap.mobilecomponent['frmmain'].Code, 'frmmain');
 
/** Form Template --------------------------------------
 *  NAME: frmtitle
 *
 * version: 5.0
 **/
$heap.mobilecomponent['frmtitle'] = { };
$heap.mobilecomponent['frmtitle'] = {
    _flatten: true,
	_private: false,
	isLoaded: 0,
    isActivated: 0,
	count: 0,
	New: function(pos, show) {
		var instName;
		try {
			if (!KERNEL.enabled) return;
			if (!pos) {
				pos = { left: 0, top: 0, target: FORMS.Target };
			}
			pos.form = pos.form ? pos.form : 'frmtitle';
			if (!$heap.mobilecomponent[pos.form]) { pos.form = 'frmtitle'; }
			
			$k.instance.newform(pos.form, App.Dialog['frmtitle']);
			instName = $heap.mobilecomponent[pos.form].Load(pos);
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'New', target: {id: 'frmtitle'}});
			}
		}
		finally {
			if (show) { $heap.mobilecomponent[pos.form].Show(pos); }
			$k.instance.setbyelemid(instName);
			
			return instName;
		}
	},
	Menu: function(cmd) {
	},
    Load: function(pos) {
		var widgTarget = "", instID = "", options, props, styles, defPos;
		try {
			
			if (!KERNEL.enabled) return;		
			if (pos && pos.target) { FORMS.Target = pos.target; }
			if (App.Vars.running == false) { App.Vars.running = true; }
			if (App.target) { App.target = FORMS.Target; }
			
			 
			styles = ( null | globals.DlgStyles.shadow | globals.DlgStyles.dragable | globals.DlgStyles.max | globals.DlgStyles.min | globals.DlgStyles.caption | globals.DlgStyles.sizable | globals.DlgStyles.close );
			defPos = {target: 'desktop' + DESKTOP.currentDesktop, dock:'RRRR', left:'0', top:'0', width:'480', height:'640'};
			pos = $k.instance.validatepos(pos, defPos);
			defaults.dialog.back_color = '#ffffff';
			defaults.dialog.doc_color = '#eeeeee';
			instID = $f.plain('frmtitle','Mobile Control',pos.left,pos.top,480,640,styles);
			$f.hide('frmtitle');
				props = [{"name":"event-activate","value":"title.startup"},{"name":"body.version","value":"v5.0"},{"name":"autosize","value":"false"},{"name":"disabled","value":false},{"name":"title","value":""},{"name":"caption","value":"Mobile Control"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"_private","value":"false"},{"name":"bind","value":"false"},{"name":"clipmenu","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"true"},{"name":"flattenonpull","value":"true"},{"name":"ignorezorder","value":"false"},{"name":"output","value":"normal"},{"name":"shadow","value":"true"},{"name":"sizeable","value":"true"},{"name":"theme","value":"nimble-form"},{"name":"toggleonflip","value":"true"},{"name":"useastheme","value":"false"},{"name":"watch","value":"false"}];
				$f.setprop('frmtitle','', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"#eeeeee"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"visibility","value":"visible"},{"name":"displaymode","value":""},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"auto"},{"name":"z-index","value":"2"}];
				$f.setstyle('frmtitle','', styles);
			
			$f.setprop("frmtitle","icon","src","media/icons/on_dot.ico");
			$f.show("frmtitle","icon");
			
			options = 'media/008-laptop-1.png';
			$f.add('frmtitle','picturex1','imagex',options,'99','164','275','252');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmtitle"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphicx"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('frmtitle','picturex1', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"border","value":"0px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"10.2pt"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"inline-block"},{"name":"div.left","value":"calc(50% - 140px)"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"},{"name":"div.top","value":"calc(50% - 125px)"}];
				$f.setstyle('frmtitle','picturex1', styles);
			$f.setprop('frmtitle','','dock',pos.dock);
			
			widgTarget = instID;
			$k.instance.setbyelemid(widgTarget);
			
			// Attach DATABIND Events ----------------
			if ( $f.model('frmtitle').enabled ) { $f.model('frmtitle').create('frmtitle'); }
			$nim.React.build('frmtitle');
			$f.refresh('frmtitle');
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Load', target: {id: 'frmtitle'}});
			}
		}
		finally {
			try {
				// Attach Form Events --------------------
				
				var itm, evnt, evtArr = [
					
				];
				for (var i = 0; i < evtArr.length; i++) {
					itm = evtArr[i]; 
					$f.setevent('frmtitle', itm[0], itm[1], $nim.fn.findEvent('mobilecomponent', 'frmtitle', evtArr[i]));
				}
				
				if (App.InstName == "") { App.InstName = instID; }
				App.Dialog['frmtitle'].isLoaded = 1;
				App.Dialog['frmtitle'].isActivated = 0;
				$f.hide('frmtitle');
			}
			catch (err) {
				if ($k.errhandler) {
					$k.errhandler(err, {type: 'Attach Events', target: {id: 'frmtitle'}});
				}
			}
			finally {
				// Attach WIDGETS To Dialog ----------------
				var list = $nim.Load32.Clear();
				$nim.Load32.onComplete(function() {
					var styles, props;
					$k.instance.setbyelemid(widgTarget);
					if ('') $f.alter.view.set('frmtitle','', false, true);
				
					props = [{"name":"body.version","value":"v5.0"}];
					$f.setprop('frmtitle','', props);
					styles = [{"name":"body.background-color","value":"#f0f0f0"},{"name":"body.box-sizing","value":"border-box"},{"name":"body.color","value":"#000000"},{"name":"body.text-align","value":""},{"name":"body.vertical-align","value":""}];
					$f.setstyle('frmtitle','', styles);
					
					var ctrls = [];
					ctrls.forEach(function(itm) {
						if (itm.widget) { $f.hide(itm.name); } else { $f.hide('frmtitle', itm.name); }
					});
				
					$f.events('frmtitle', 'Load')(widgTarget, widgTarget.resolveName());
					$nim.Load32.Clear(true);
					$k.instance.setbyelemid(widgTarget);
					if ($f.getprop('frmtitle','','forceshow').toLowerCase() == 'true') $heap.mobilecomponent['frmtitle'].Show(pos);
					return;
				});
				if ($nim.Load32.list[list].length > 0) {
					$nim.Load32.ArrayLoad(list, 0);
					return instID;
				} else { $nim.Load32.Load_Complete(list); }
				
				$k.instance.setbyelemid(widgTarget);
				return instID;
			}
		}
    },
	Activate: function() {
		var instID = $k.instance.save('frmtitle');
		try {
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Activate', target: {id: 'frmtitle'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			$f.events('frmtitle', 'Activate')(instID, instID.resolveName());
			App.Dialog['frmtitle'].isActivated = 1;
			$k.instance.restore();
		}
	},
	BeforeUnload: function() {
		var blCancel = false;
		var instID = $k.instance.save('frmtitle');
		try {
			if ($k.islastform('frmtitle')) { $k.app.unloadwidget('frmtitle'); }
			
			var itm, evtArr = [
				
			];
			for (var i = 0; i < evtArr.length; i++) {
				itm = evtArr[i]; $f.setevent('frmtitle', itm[0], itm[1], null);
			}
			
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'BeforeUnload', target: {id: 'frmtitle'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			blCancel = $f.events('frmtitle', 'QueryUnload')(instID, instID.resolveName());
			$k.instance.restore();
		}
		return blCancel;
	},
	UnloadAll: function() {
		try {
			$k.instance.save('frmtitle');
			if (App) {
				var dlgItem = App.Dialog['frmtitle'], 
					dlgCount = App.Dialog['frmtitle'].count; 
					
				for (var x = dlgCount; x >= 0; x--) {
					KERNEL.formInst = x;
					dlgItem.Unload();
				}
			}
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'UnloadAll', target: {id: 'frmtitle'}});
			}
		}
		finally {
			App.Dialog['frmtitle'].count = 0;
			$k.instance.restore();
			KERNEL.formInst = 0;
		}
	},
	Unload: function() {
		var blCancel = false;
		try {
			var instID = $k.instance.save('frmtitle');
			blCancel = $f.events('frmtitle', 'QueryUnload')();
			if (blCancel) {
				return blCancel;
			}
			
			$k.instance.save('frmtitle');
			$k.instance.restore();
			$f.events('frmtitle', 'Unload')(instID, instID.resolveName());
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Unload', target: {id: 'frmtitle'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!blCancel) {
				FORMS.sysUnload("frmtitle");
				App.Dialog['frmtitle'].isLoaded = 0;
				App.Dialog['frmtitle'].isActivated = 0;
				
				if (App) {
					$k.instance.setbyelemid(KERNEL.curId);
					var elem, dlgName = "";
					
					if (!$k.isanyformloaded()) {
						if (!App.App.exiting) { App.End(); }
					}
				}
			}
		}
	},
    Show: function(pos) {
		var retval = "";
		try {
			if (!KERNEL.enabled) return;
			var instID = $k.instance.save('frmtitle');
			if ($k.isformloaded('frmtitle') == false) {
				retval = $f.events('frmtitle', 'Load')(pos);
			}
			
			$k.instance.restore();
			$f.show("frmtitle");
			
			// Pull DataModel. 
			$k.instance.save('frmtitle');
			if ($f.model('frmtitle').enabled) { $f.model('frmtitle').pull(); }
		}
		catch(err) { 
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Show', target: {id: 'frmtitle'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!App.Dialog['frmtitle'].isActivated) {
				$f.events('frmtitle', 'Activate')();
			}
			return retval;
		}
	},
	Code: { 

	},
	Widgets: { },
	Views: { }, 
	Events: {
		form_Activate: function(event, item) { 
			// Your Code Here.. ---
			// -------------------- 

		},
		form_Load: function(e, itm) { 
			
		}//-FORM_LOAD
    }
};
$k.wrapallfunctions($heap.mobilecomponent['frmtitle'].Code, 'frmtitle');
 
// Create New App Instance -----------------------------
var _config = {
	namespace: 'mobilecomponent',
	login: {id: 'ef127044-689ebd75', email: 'tye.lee@nimble-ide.com'},
	
	multiple: false,
	postbox: false,
	mvc: false,
	
	theme: 'v4.0',
	size: 275206,
	canvas: {width: 2048, height: 1101},
	productname: 'Mobile Components',
	copyright: '(c) 2024',
	compiledon: '12/20/2024 11:10 pm',
	version: '1.0',
	description: 'Created with nimble-ide v5 for Javascript & Cordova',
	author: 'Tyrone W. Lee',
	email: 'nimblejs@gmail.com',
	homepage: 'https://www.nimble-ide.com',
	startform: 'frmtitle',
	palette: '"color50":"#e1f5fe","color100":"#b3e5fc","color200":"#81d4fa","color300":"#4fc3f7","color400":"#29b6f6","color500":"#03a9f4","color600":"#039be5","color700":"#0288d1","color800":"#0277bd","color900":"#01579b","colora100":"#80d8ff","colora200":"#40c4ff","colora400":"#00b0ff","colora700":"#0091ea","b50":"#fafafa","b100":"#f5f5f5","b200":"#eeeeee","b300":"#e0e0e0","b400":"#bdbdbd","b500":"#9e9e9e","b600":"#757575","b700":"#616161","b800":"#424242","b900":"#212121","br50":"#efebe9","br100":"#d7ccc8","br200":"#bcaaa4","br300":"#a1887f","br400":"#8d6e63","br500":"#795548","br600":"#6d4c41","br700":"#5d4037","br800":"#4e342e","br900":"#3e2723","bg50":"#eceff1","bg100":"#cfd8dc","bg200":"#b0bec5","bg300":"#90a4ae","bg400":"#78909c","bg500":"#607d8b","bg600":"#546e7a","bg700":"#455a64","bg800":"#37474f","bg900":"#263238"',
	
	// METHODS
	dialog: {
		'frmmain': $k.instance.newobject($heap.mobilecomponent['frmmain']),
		'frmtitle': $k.instance.newobject($heap.mobilecomponent['frmtitle']),
	},
	onStartup: function(pos) {
		$heap.mobilecomponent[pos.form].Load(pos);
	},
	onLoadLibs: function() {
// --------------------------------------
// Include Custom Javascript Libraries //
// --------------------------------------

    /*ICON*/
$nim.Load32.Add('fa4_css', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css', 'css');
    /*~ICON*/
    /*MOBILE-LISTS*/
$nim.Load32.Add ('mobile_lists', $nim.home_server + 'js/_libs/common-utils/mobile-lists.ctrl.js', 'js');
    /*~MOBILE-LISTS*/
    /*FULLCALENDAR*/
$nim.Load32.Add ('fullcal_core', $nim.home_server + 'js/_libs/fullcalendar/core/main.css', 'css');
$nim.Load32.Add ('fullcal_grid', $nim.home_server + 'js/_libs/fullcalendar/daygrid/main.css', 'css');
$nim.Load32.Add ('fullcaljs_core', $nim.home_server + 'js/_libs/fullcalendar/core/main.js', 'js');
$nim.Load32.Add ('fullcaljs_grif', $nim.home_server + 'js/_libs/fullcalendar/daygrid/main.js', 'js');
    /*~FULLCALENDAR*/
    /*VIZJS*/
$nim.Load32.Add ('vizjs_css', $nim.home_server + 'js/_libs/vizjs/vis-timeline-graph2d.min.css', 'css');
$nim.Load32.Add ('vizjs_lib', $nim.home_server + 'js/_libs/vizjs/vis.js', 'js');
    /*~VIZJS*/
    /*HIGHCHARTS-OVERUNDER*/
$nim.Load32.Add ('jquery3', $nim.home_server + 'js/jquery-3.1.1.min.js', 'js');
$nim.Load32.Add ('highcharts_core', 'https://code.highcharts.com/highcharts.js', 'js');
$nim.Load32.Add ('highcharts_export', 'https://code.highcharts.com/modules/exporting.js', 'js');
$nim.Load32.Add ('highcharts_export-data', 'https://code.highcharts.com/modules/export-data.js', 'js');
    /*~HIGHCHARTS-OVERUNDER*/
    /*SLICKGRID*/
$nim.Load32.Add ('slickgrid_css', $nim.home_server + 'js/_libs/slick/slick.grid.css', 'css');
    $nim.Load32.Add ('slickpager_css', $nim.home_server + 'js/_libs/slick/controls/slick.pager.css', 'css');
    $nim.Load32.Add ('jquerycustom_css', $nim.home_server + 'js/_libs/slick/css/smoothness/jquery-ui.css', 'css');
    // $nim.Load32.Add ('example_css', $nim.home_server + 'js/_libs/slick/examples/examples.css', 'css');
    $nim.Load32.Add ('slickpicker_css', $nim.home_server + 'js/_libs/slick/controls/slick.columnpicker.css', 'css');
    $nim.Load32.Add ('firebug_lib', $nim.home_server + 'js/_libs/slick/lib/firebugx.js', 'js');
    $nim.Load32.Add ('jquery17_lib', $nim.home_server + 'js/_libs/slick/lib/jquery-1.12.4.min.js', 'js');
    $nim.Load32.Add ('jqueryui_lib', $nim.home_server + 'js/_libs/slick/lib/jquery-ui.min.js', 'js');
    $nim.Load32.Add ('jquerydrag_lib', $nim.home_server + 'js/_libs/slick/lib/jquery.event.drag-2.3.0.js', 'js');
    $nim.Load32.Add ('slickcore_lib', $nim.home_server + 'js/_libs/slick/slick.core.js', 'js');
    $nim.Load32.Add ('slickfrmt_lib', $nim.home_server + 'js/_libs/slick/slick.formatters.js', 'js');
    $nim.Load32.Add ('slickedtr_lib', $nim.home_server + 'js/_libs/slick/slick.editors.js', 'js');
    $nim.Load32.Add ('slickrowmodel_lib', $nim.home_server + 'js/_libs/slick/plugins/slick.rowselectionmodel.js', 'js');
    $nim.Load32.Add ('slickresizer_lib', $nim.home_server + 'js/_libs/slick/plugins/slick.resizer.js', 'js');
    $nim.Load32.Add ('slickgrid_lib', $nim.home_server + 'js/_libs/slick/slick.grid.js', 'js');
    $nim.Load32.Add ('slickdata_lib', $nim.home_server + 'js/_libs/slick/slick.dataview.js', 'js');
    $nim.Load32.Add ('slickpager_lib', $nim.home_server + 'js/_libs/slick/controls/slick.pager.js', 'js');
    $nim.Load32.Add ('slickcolumn_lib', $nim.home_server + 'js/_libs/slick/controls/slick.columnpicker.js', 'js');
    /*~SLICKGRID*/
    /*HIGHCHARTS-DONUT3D*/
$nim.Load32.Add ('jquery3', $nim.home_server + 'js/jquery-3.1.1.min.js', 'js');
$nim.Load32.Add ('highcharts_core', 'https://code.highcharts.com/highcharts.js', 'js');
$nim.Load32.Add ('highcharts_3d', 'https://code.highcharts.com/highcharts-3d.js', 'js');
$nim.Load32.Add ('highcharts_export', 'https://code.highcharts.com/modules/exporting.js', 'js');
    /*~HIGHCHARTS-DONUT3D*/
    /*CK5-EDITOR*/
$nim.Load32.Add ('rtfeditor_lib', $nim.home_server + 'js/_libs/ckeditor/ckeditor.js', 'js');
    /*~CK5-EDITOR*/
    // --------------------------------------
	},
	onClose: function(dlgname) {
	},
	onListeners: function(self) {
		self = self || {};
		/**
		* App Listeners
		* version: 5.0
		**/
		self.KeyPress = function(dlg_name) {
		};
		self.KeyUp = function(dlgname) {
			if (DESKTOP.switching) { return; }
			if (KEYBOARD.isAlt && DESKTOP.currentDesktop != KEYBOARD.Char) {
				if (KEYBOARD.Char >= '0' && KEYBOARD.Char <= defaults.preload.workspaces) {
					DESKTOP.Code.SlideDesktop(DESKTOP.currentDesktop, Number(KEYBOARD.Char));
				}
			}
		};
		self.DragStart = function(dlg_name) {
		};
		self.Drag = function(dlg_name) {
		};
		self.Move = function(dlg_name) {
		};
		self.Minimize = function(dlg_name) {
		};
		self.Maximize = function(dlg_name) {
		};
		self.Restore = function(dlg_name) {
		};
		self.Resize = function(dlg_name) {
			try {
			
			} catch(e) {
			
			} finally {
				$k.app.resizewidgets(dlg_name);
			}
		};
		self.OrientationChange = function() {
			
		};
		self.Orientation = function(event) {
			
		};
		return self;
	},
	onDataModel: function() {
		return [];
	},
	onBindLists: function() {
		return [];
	}
};
AppInst = $k.app.createapp(_config, _config.onListeners);
if (AppInst && AppInst.App.id == -1) {
	AppInst.App.isLoaded = true;
	AppInst.App.isWidget = false;
	AppInst.App.id = $k.instance.getappid();
	AppInst.App.guid = 'c4bb473c-a0da';
	AppInst.App.name = 'mobilecomponent';
	AppInst.App.startfrm = _config.startform;
	AppInst.App.query = _config.query || {};
	AppInst.App.icon = 'media/icons/app.gif';
	AppInst.New();
	if (!DESKTOP.Code) { DESKTOP.Code = $heap.mobilecomponent.Code; }
}
