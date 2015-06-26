$(function () {
	$('#buta-huruf-map').highcharts('Map', {
		chart: {
			animation: true,
			backgroundColor: '#FFFFFF',
			borderColor: '#78C49F',
            spacingBottom: 20
		},

		title: {
			text: 'Angka Melek Huruf di Indonesia'
		},

		/* colors: ['rgba(19,64,117,0.05)', 'rgba(19,64,117,0.2)', 'rgba(19,64,117,0.4)',
            'rgba(19,64,117,0.5)', 'rgba(19,64,117,0.6)', 'rgba(19,64,117,0.8)', 'rgba(19,64,117,1)'], */

        colors: ['rgb(255,237,238)', 'rgb(245,157,160)', 'rgb(219,81,85)', 'rgb(230,85,90)', 'rgb(153,50,54)', 'rgb(56,8,10)'],


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
            mapData: Highcharts.maps['countries/id/id-all'],
            name: 'peta',
            showInLegend: false
        }, {
            type: 'mappoint',
            name: 'Kota',
            data: melekHurufKabupaten,

        }]
	});
     chart = $('#buta-huruf-map').highcharts();
});