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
