		highcharts_Resize: function(instName) {
			if (USER.highcharts && !FORMS.isSliding('form3')) {
				USER.highcharts.forEach(function(chart) {
					if (chart.id.resolveName('form') == 'form3') {
						var size = FORMS.GetSize('form3', chart.id.resolveName('control'));
						if (size && chart.hnd) chart.hnd.setSize(size.width, size.height);
					}
				});
			}
		},
		form_Load: function(e, itm) { 
			
		}//-FORM_LOAD
