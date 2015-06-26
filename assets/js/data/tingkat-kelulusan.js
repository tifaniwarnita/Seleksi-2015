$(function () {
    var nama_prov = [];
    $.each(jumlahLulusSD, function(i,v){
        nama_prov.push(v.nama_provinsi);
    });

    var val_belumlulussd = [];
    $.each(jumlahBelumLulusSD, function(i,v){
        val_belumlulussd.push(v.persen_tidak_lulus_SD*100);
    });

    var val_lulussd = [];
    $.each(jumlahLulusSD, function(i,v){
        val_lulussd.push(v.persen_lulus_SD*100);
    });

    var val_lulussmp = [];
    $.each(jumlahLulusSMP, function(i,v){
        val_lulussmp.push(v.persen_lulus_SMP*100);
    });

    var val_lulussma = [];
    $.each(jumlahLulusSMA, function(i,v){
        val_lulussma.push(v.persen_lulus_SMA*100);
    });

    var val_luluspt = [];
    $.each(jumlahLulusPT, function(i,v){
        val_luluspt.push(v.persen_lulus_PT*100);
    });


    $('#tingkat-kelulusan').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Tingkat Kelulusan Pendidikan Masyarakat Indonesia'
        },
        xAxis: {
            categories: ['Aceh','Sumut','Sumbar','Riau','Jambi','Sumsel','Bengkulu','Lampung','Babel','Riau','Jakarta','Jabar','Jateng','Yogyakarta','Jatim','Banten','Bali','NTB','NTT','Kalbar','Kalteng','Kalsel','Kaltim','Sulut','Sulteng','Sulsel','Sultra','Gorontalo','Sulbar','Maluku','Malut','Pabar','Papua'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            max:100,
            title: {
                text: 'Tingkat Kelulusan'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' %'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        textShadow: '0 0 3px black'
                    }
                }
            }
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
            name: 'Belum Lulus SD',
            data: val_belumlulussd
        }, {
            name: 'Lulus SD',
            data: val_lulussd
        }, {
            name: 'Lulus SMP',
            data: val_lulussmp
        }, {
            name: 'Lulus SMA',
            data: val_lulussma
        }, {
            name: 'Lulus PT',
            data: val_luluspt
        }]
    });
});