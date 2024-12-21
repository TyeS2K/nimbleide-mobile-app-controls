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
