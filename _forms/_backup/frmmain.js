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
