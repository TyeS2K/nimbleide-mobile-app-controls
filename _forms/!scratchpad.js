		highcharts_Resize: function(instName) {
			if (USER.highcharts && !FORMS.isSliding('!scratchpad')) {
				USER.highcharts.forEach(function(chart) {
					if (chart.id.resolveName('form') == '!scratchpad') {
						var size = FORMS.GetSize('!scratchpad', chart.id.resolveName('control'));
						if (size && chart.hnd) chart.hnd.setSize(size.width, size.height);
					}
				});
			}
		},
