$(function () {
	//Instanciate the map
	$('#overview-map').highcharts('Map', {
		chart: {
			animation: true,
			backgroundColor: '#FFFFFF',
			borderColor: '#78C49F',
            spacingBottom: 20
		},

		title: {
			text: 'IPM di Indonesia pada tahun 2010'
		},

		mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

		/* colors: ['rgba(19,64,117,0.05)', 'rgba(19,64,117,0.2)', 'rgba(19,64,117,0.4)',
            'rgba(19,64,117,0.5)', 'rgba(19,64,117,0.6)', 'rgba(19,64,117,0.8)', 'rgba(19,64,117,1)'], */

        colors: ['rgb(255,237,238)', 'rgb(247,173,175)', 'rgb(230,85,90)', 'rgb(153,50,54)'],

        colorAxis: {
            dataClasses: [{
                to: 66
            }, {
                from: 66,
                to: 68
            }, {
                from: 68,
                to: 70
            }, {
                from: 70,
                to: 72
            }, {
                from:72
            }]
        },

        tooltip: {
            formatter: function () {
                return this.point.nama_provinsi + '<br>IPM: ' + this.point.value + '%';
            },
            crosshairs: [{
                zIndex: 5,
                dashStyle: 'dot',
                snap: false,
                color: 'gray'
            }, {
                zIndex: 5,
                dashStyle: 'dot',
                snap: false,
                color: 'gray'
            }],
        },

		plotOptions: {
			map: {
				allAreas: true,
				dataLabels: {
					enabled: false,
					color: 'white',
					format: '{point.nama_provinsi}',
					style: {
						fontWeight: 'bold'
					}
                },
			}
		},


        series : [{
            data : IPM,
            mapData: Highcharts.maps['countries/id/id-all'],
            joinBy: ['hc-key','kode_provinsi'],
            name: 'Random data',
            states: {
                hover: {
                    color: '#FFAD6E'
                }
            },
            dataLabels: {
                enabled: false,
                format: '{point.nama_provinsi}'
            }
        }]
	});
     chart = $('#overview-map').highcharts();
});