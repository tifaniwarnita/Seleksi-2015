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

		/* colors: ['rgba(19,64,117,0.05)', 'rgba(19,64,117,0.2)', 'rgba(19,64,117,0.4)',
            'rgba(19,64,117,0.5)', 'rgba(19,64,117,0.6)', 'rgba(19,64,117,0.8)', 'rgba(19,64,117,1)'], */

        colors: ['rgb(255,237,238)', 'rgb(245,157,160)', 'rgb(219,81,85)', 'rgb(230,85,90)', 'rgb(153,50,54)', 'rgb(56,8,10)'],

        colorAxis: {
            dataClassColor: 'category',
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
                from: 72,
                to: 74
            }, {
                from:74
            }]
        },

        exporting: {
            enabled: false,
            buttons: { 
                exportButton: {
                    enabled:false
                },
                printButton: {
                    enabled:false
                }

            }
        },
        tooltip: {
            formatter: function () {
                return this.point.nama_provinsi + '<br>IPM: ' + this.point.value + '%';
            }
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
                nullColor: 'white'
			}
		},


        series : [{
            data : IPM,
            mapData: Highcharts.maps['countries/id/id-all'],
            joinBy: ['hc-key','kode_provinsi'],
            name: 'peta',
            showInLegend: false,
            events: {
                        click: function (e) {

                        window.chart = new Highcharts.Chart({
                            chart: {
                                type: 'pie',
                                width: 370,
                                height: 240
                            },
                            title: {
                                text: null
                            },
                            series: [{
                                name: 'Votes',
                                data: [{
                                    name: 'Obama',
                                    color: '#0200D0',
                                    y: parseInt(columns[3][row], 10)
                                }, {
                                    name: 'McCain',
                                    color: '#C40401',
                                    y: parseInt(columns[4][row], 10)
                                }],
                                dataLabels: {
                                    format: '<b>{point.name}</b> {point.percentage:.1f}%'
                                }
                            }]
                        });
                        }
                    }
        }/*, {
            type: 'mappoint',
            name: 'Cities',
            data: IPMCities,
        }*/]
	});
     chart = $('#overview-map').highcharts();
});