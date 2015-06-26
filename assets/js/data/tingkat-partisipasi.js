$(function () {

    var val_partisipasisd = [];
    $.each(partisipasiSD, function(i,v){
        val_partisipasisd.push(v.persen_partisipasi_murni_sd);
    });

    var val_partisipasismp = [];
    $.each(partisipasiSMP, function(i,v){
        val_partisipasismp.push(v.persen_partisipasi_murni_smp);
    });

    var val_partisipasisma = [];
    $.each(partisipasiSMA, function(i,v){
        val_partisipasisma.push(v.persen_partisipasi_murni_sma);
    });


    $('#tingkat-partisipasi').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Angka Partisipasi Masyarakat Indonesia'
        },
        xAxis: {
            categories: ['Aceh','Sumut','Sumbar','Riau','Jambi','Sumsel','Bengkulu','Lampung','Babel','Riau','Jakarta','Jabar','Jateng','Yogyakarta','Jatim','Banten','Bali','NTB','NTT','Kalbar','Kalteng','Kalsel','Kaltim','Sulut','Sulteng','Sulsel','Sultra','Gorontalo','Sulbar','Maluku','Malut','Pabar','Papua'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Angka Partisipasi'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' %'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'SD',
            data: val_partisipasisd
        }, {
            name: 'SMP',
            data: val_partisipasismp
        }, {
            name: 'SMA',
            data: val_partisipasisma
        }]
    });
});