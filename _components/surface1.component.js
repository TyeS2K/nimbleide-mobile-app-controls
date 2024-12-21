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