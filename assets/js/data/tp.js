$(function () {
	//Instanciate the map
	$('#indonesia-map').highcharts('Map', {
		chart: {
			animation: true,
			backgroundColor: '#FFFFFF',
			borderColor: '#78C49F',
            spacingBottom: 20
		},

		title: {
			text: 'Tingkat Pendidikan di Indonesia'
		},

		mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

		colors: ['rgba(19,64,117,0.05)', 'rgba(19,64,117,0.2)', 'rgba(19,64,117,0.4)',
            'rgba(19,64,117,0.5)', 'rgba(19,64,117,0.6)', 'rgba(19,64,117,0.8)', 'rgba(19,64,117,1)'],

		legend: {
			enabled: true,
            title: {
                text: 'Kucing Terbang',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            },
            align: 'left',
            verticalAlign: 'bottom',
            floating: true,
            layout: 'vertical',
            valueDecimals: 0,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 'rgba(255, 255, 255, 0.85)',
            symbolRadius: 0,
            symbolHeight: 14
        },

        colorAxis: {
            dataClasses: [{
                to: 5
            }, {
                from: 5,
                to: 10
            }, {
                from: 10,
                to: 15
            }, {
                from: 15,
                to: 20
            }, {
                from: 20,
                to: 25
            }, {
                from: 25,
                to: 30
            }, {
                from: 30
            }]
        },

        tooltip: {
            formatter: function () {
                return this.point.capital + ', ' + this.point.parentState + '<br>Lat: ' + this.point.lat + ' Lon: ' + this.point.lon + '<br>Population: ' + this.point.population;
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
					enabled: true,
					color: 'white',
					format: '{point.name}',
					style: {
						fontWeight: 'bold'
					}
                }
			}
		},

        mapNavigation: {
            enabled: true
        },

        series: [{
            name: 'Basemap',
            mapData: Highcharts.maps['countries/id/id-all'],
            borderColor: '#606060',
            nullColor: 'rgba(200, 200, 200, 0.2)',
            showInLegend: false,
            joinBy: ['postal-code','kode_provinsi']
        }, {
            type: 'mapbubble',
            dataLabels: {
                enabled: true,
                format: '{point.kode_provinsi}'
            },
            name: 'Cities',
            data: tingkatPendidikan,
            maxSize: '12%',
        }]
	});
     chart = $('#indonesia-map').highcharts();

     $('#indonesia-map').mousemove(function (e) {
        var position;

        if (chart) {
            if (!chart.lab) {
                chart.lab = chart.renderer.text('', 0, 0)
                    .attr({
                    zIndex: 5
                })
                    .css({
                    color: '#505050'
                })
                    .add();
            }

            e = chart.pointer.normalize(e);
            position = chart.fromPointToLatLon({
                x: chart.xAxis[0].toValue(e.chartX),
                y: chart.yAxis[0].toValue(e.chartY)
            });

            chart.lab.attr({
                x: e.chartX + 5,
                y: e.chartY - 22,
                text: 'Lat: ' + position.lat.toFixed(2) + '<br>Lon: ' + position.lon.toFixed(2)
            });
        }
    });

    $('#container').mouseout(function (e) {
        if (chart && chart.lab) {
            chart.lab.destroy();
            chart.lab = null;
        };
    });
});