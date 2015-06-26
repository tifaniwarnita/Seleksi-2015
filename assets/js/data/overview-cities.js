$(function () {
			
	IPMCities = [
		{
			"nama_kabkota":"Kab. Simeulue",
			"value":"69.280037",
			"lat":2.62818,
			"lon":96.0898
		),
		{
			"nama_kabkota":"Kab. Aceh Singkil",
			"value":"68.576192",
			"lat":2.439",
			"lon":97.9244
		),
		{
			"nama_kabkota":"Kab. Aceh Selatan",
			"value":"69.973966",
			"lat":3.25638",
			"lon":97.213
		),
		{
			"nama_kabkota":"Kab. Aceh Tenggara",
			"value":"71.595074",
			"lat":3.59968",
			"lon":97.6619
		),
		{
			"nama_kabkota":"Kab. Aceh Timur",
			"value":"70.545995",
			"lat":4.56983",
			"lon":97.7723
		),
		{
			"nama_kabkota":"Kab. Aceh Tengah",
			"value":"73.693829",
			"lat":4.56693",
			"lon":96.8147
		),
		{
			"nama_kabkota":"Kab. Aceh Barat",
			"value":"70.785262",
			"lat":4.49032",
			"lon":96.041
		),
		{
			"nama_kabkota":"Kab. Aceh Besar",
			"value":"73.318207",
			"lat":5.35887",
			"lon":95.5144
		),
		{
			"nama_kabkota":"Kab. Pidie",
			"value":"71.924794",
			"lat":5.1152",
			"lon":95.9574
		),
		{
			"nama_kabkota":"Kab. Bireuen",
			"value":"73.074698",
			"lat":5.081",
			"lon":96.5974
		),
		{
			"nama_kabkota":"Kab. Aceh Utara",
			"value":"72.464539",
			"lat":4.99764",
			"lon":97.1454
		),
		{
			"nama_kabkota":"Kab. Aceh Barat Daya",
			"value":"70.286047",
			"lat":3.78325",
			"lon":96.9143
		),
		{
			"nama_kabkota":"Kab. Gayo Lues",
			"value":"67.860058",
			"lat":3.97798",
			"lon":97.323
		),
		{
			"nama_kabkota":"Kab. Aceh Tamiang",
			"value":"70.787418",
			"lat":4.20756",
			"lon":98.0029
		),
		{
			"nama_kabkota":"Kab. Nagan Raya",
			"value":"69.180832",
			"lat":4.15452",
			"lon":96.5184
		),
		{
			"nama_kabkota":"Kab. Aceh Jaya",
			"value":"69.625016",
			"lat":4.8271",
			"lon":95.6491
		),
		{
			"nama_kabkota":"Kab. Bener Meriah",
			"value":"70.978527",
			"lat":4.76923",
			"lon":96.9901
		),
		{
			"nama_kabkota":"Kab. Pidie Jaya",
			"value":"72.382141",
			"lat":5.13828",
			"lon":96.2004
		),
		{
			"nama_kabkota":"Kota Banda Aceh",
			"value":"77.449931",
			"lat":5.54215",
			"lon":95.3431
		),
		{
			"nama_kabkota":"Kota Sabang",
			"value":"75.977556",
			"lat":5.83886",
			"lon":95.2953
		),
		{
			"nama_kabkota":"Kota Langsa",
			"value":"73.850156",
			"lat":4.48157",
			"lon":97.9214
		),
		{
			"nama_kabkota":"Kota Lhokseumawe",
			"value":"76.100293",
			"lat":5.12941",
			"lon":97.0654
		),
		{
			"nama_kabkota":"Kota Subulussalam",
			"value":"69.260089",
			"lat":2.65359",
			"lon":97.9101
		),
		{
			"nama_kabkota":"Kab. Nias",
			"value":"68.664244",
			"lat":1.12946",
			"lon":97.7191
		),
		{
			"nama_kabkota":"Kab. Mandailing Natal",
			"value":"70.604418",
			"lat":0.716284",
			"lon":99.4183
		),
		{
			"nama_kabkota":"Kab. Tapanuli Selatan",
			"value":"74.017599",
			"lat":1.52419",
			"lon":99.2215
		),
		{
			"nama_kabkota":"Kab. Tapanuli Tengah",
			"value":"71.205832",
			"lat":1.86878",
			"lon":98.6094
		),
		{
			"nama_kabkota":"Kab. Tapanuli Utara",
			"value":"74.308001",
			"lat":2.0633",
			"lon":98.8284
		),
		{
			"nama_kabkota":"Kab. Toba Samosir",
			"value":"76.547743",
			"lat":2.50027",
			"lon":99.0042
		),
		{
			"nama_kabkota":"Kab. Labuhan Batu",
			"value":"74.033643",
			"lat":2.14783",
			"lon":99.9218
		),
		{
			"nama_kabkota":"Kab. Asahan",
			"value":"72.544166",
			"lat":2.98305",
			"lon":99.531
		),
		{
			"nama_kabkota":"Kab. Simalungun",
			"value":"73.497262",
			"lat":2.95304",
			"lon":99.2713
		),
		{
			"nama_kabkota":"Kab. Dairi",
			"value":"72.862254",
			"lat":2.82712",
			"lon":98.2783
		),
		{
			"nama_kabkota":"Kab. Karo",
			"value":"75.33674",
			"lat":3.09635",
			"lon":98.2514
		),
		{
			"nama_kabkota":"Kab. Deli Serdang",
			"value":"75.282238",
			"lat":3.46231",
			"lon":98.888
		),
		{
			"nama_kabkota":"Kab. Langkat",
			"value":"73.177298",
			"lat":3.766",
			"lon":98.2307
		),
		{
			"nama_kabkota":"Kab. Nias Selatan",
			"value":"67.149983",
			"lat":0.786682",
			"lon":97.7166
		),
		{
			"nama_kabkota":"Kab. Humbang Hasundutan",
			"value":"71.93651",
			"lat":2.23062",
			"lon":98.5734
		),
		{
			"nama_kabkota":"Kab. Pakpak Bharat",
			"value":"70.799447",
			"lat":2.55478",
			"lon":98.2762
		),
		{
			"nama_kabkota":"Kab. Samosir",
			"value":"73.696813",
			"lat":2.50894",
			"lon":98.6264
		),
		{
			"nama_kabkota":"Kab. Serdang Bedagai",
			"value":"73.254838",
			"lat":3.34975",
			"lon":99.0295
		),
		{
			"nama_kabkota":"Kab. Batu Bara",
			"value":"71.615209",
			"lat":3.23175",
			"lon":99.5003
		),
		{
			"nama_kabkota":"Kab. Padang Lawas Utara",
			"value":"72.522156",
			"lat":1.61899",
			"lon":99.6822
		),
		{
			"nama_kabkota":"Kab. Padang Lawas",
			"value":"71.977539",
			"lat":1.2403",
			"lon":99.9102
		),
		{
			"nama_kabkota":"Kab. Labuhan Batu Selatan",
			"value":"73.838999",
			"lat":1.8468",
			"lon":100.077
		),
		{
			"nama_kabkota":"Kab. Labuhan Batu Utara",
			"value":"73.451387",
			"lat":2.42728",
			"lon":99.7271
		),
		{
			"nama_kabkota":"Kab. Nias Utara",
			"value":"67.752578",
			"lat":1.30584",
			"lon":97.3029
		),
		{
			"nama_kabkota":"Kab. Nias Barat",
			"value":"66.460718",
			"lat":1.01902",
			"lon":97.5242
		),
		{
			"nama_kabkota":"Kota Sibolga",
			"value":"75.081985",
			"lat":1.72715",
			"lon":98.7986
		),
		{
			"nama_kabkota":"Kota Tanjung Balai",
			"value":"74.138528",
			"lat":2.94164",
			"lon":99.7784
		),
		{
			"nama_kabkota":"Kota Pematang Siantar",
			"value":"77.512313",
			"lat":2.9676",
			"lon":99.0514
		),
		{
			"nama_kabkota":"Kota Tebing Tinggi",
			"value":"76.491115",
			"lat":3.33108",
			"lon":99.1414
		),
		{
			"nama_kabkota":"Kota Medan",
			"value":"77.361863",
			"lat":3.6686",
			"lon":98.6712
		),
		{
			"nama_kabkota":"Kota Binjai",
			"value":"76.414749",
			"lat":3.61904",
			"lon":98.4846
		),
		{
			"nama_kabkota":"Kota Padangsidimpuan",
			"value":"75.210501",
			"lat":1.30299",
			"lon":99.2289
		),
		{
			"nama_kabkota":"Kota Gunungsitoli",
			"value":"71.672986",
			"lat":1.26105",
			"lon":97.5949
		),
		{
			"nama_kabkota":"Kab. Kepulauan Mentawai",
			"value":"68.751858",
			"lat":-1.34643",
			"lon":98.9409
		),
		{
			"nama_kabkota":"Kab. Pesisir Selatan",
			"value":"71.145897",
			"lat":-1.74602",
			"lon":100.844
		),
		{
			"nama_kabkota":"Kab. Solok",
			"value":"70.92729",
			"lat":-0.933584",
			"lon":100.83
		),
		{
			"nama_kabkota":"Kab. Sijunjung",
			"value":"70.921644",
			"lat":-0.650064",
			"lon":101.147
		),
		{
			"nama_kabkota":"Kab. Tanah Datar",
			"value":"74.002619",
			"lat":-0.470079",
			"lon":100.582
		),
		{
			"nama_kabkota":"Kab. Padang Pariaman",
			"value":"71.452902",
			"lat":-0.59275",
			"lon":100.257
		),
		{
			"nama_kabkota":"Kab. Agam",
			"value":"73.280758",
			"lat":-0.266132",
			"lon":100.15
		),
		{
			"nama_kabkota":"Kab. Lima Puluh Kota",
			"value":"71.222123",
			"lat":-0.000848",
			"lon":100.563
		),
		{
			"nama_kabkota":"Kab. Pasaman",
			"value":"72.707164",
			"lat":0.39956",
			"lon":100.083
		),
		{
			"nama_kabkota":"Kab. Solok Selatan",
			"value":"68.982458",
			"lat":-1.35893",
			"lon":101.276
		),
		{
			"nama_kabkota":"Kab. Dharmas Raya",
			"value":"69.126036",
			"lat":-1.00085",
			"lon":101.342
		),
		{
			"nama_kabkota":"Kab. Pasaman Barat",
			"value":"70.183033",
			"lat":0.186779",
			"lon":99.5962
		),
		{
			"nama_kabkota":"Kota Padang",
			"value":"77.810503",
			"lat":-1.00273",
			"lon":100.451
		),
		{
			"nama_kabkota":"Kota Solok",
			"value":"75.646377",
			"lat":-0.759189",
			"lon":100.599
		),
		{
			"nama_kabkota":"Kota Sawah Lunto",
			"value":"74.962997",
			"lat":-0.677574",
			"lon":100.788
		),
		{
			"nama_kabkota":"Kota Padang Panjang",
			"value":"77.445221",
			"lat":-0.453913",
			"lon":100.423
		),
		{
			"nama_kabkota":"Kota Bukittinggi",
			"value":"78.256279",
			"lat":-0.271348",
			"lon":100.372
		),
		{
			"nama_kabkota":"Kota Payakumbuh",
			"value":"75.811903",
			"lat":-0.239505",
			"lon":100.641
		),
		{
			"nama_kabkota":"Kota Pariaman",
			"value":"74.464142",
			"lat":-0.626203",
			"lon":100.145
		),
		{
			"nama_kabkota":"Kab. Kuantan Singingi",
			"value":"73.699466",
			"lat":-0.491978",
			"lon":101.47
		),
		{
			"nama_kabkota":"Kab. Indragiri Hulu",
			"value":"74.177395",
			"lat":-0.522681",
			"lon":102.243
		),
		{
			"nama_kabkota":"Kab. Indragiri Hilir",
			"value":"75.240602",
			"lat":-0.287854",
			"lon":103.183
		),
		{
			"nama_kabkota":"Kab. Pelalawan",
			"value":"73.179105",
			"lat":0.124485",
			"lon":102.427
		),
		{
			"nama_kabkota":"Kab. Siak",
			"value":"76.458218",
			"lat":0.761717",
			"lon":101.846
		),
		{
			"nama_kabkota":"Kab. Kampar",
			"value":"74.433112",
			"lat":0.27116",
			"lon":101.089
		),
		{
			"nama_kabkota":"Kab. Rokan Hulu",
			"value":"72.664348",
			"lat":0.821098",
			"lon":100.506
		),
		{
			"nama_kabkota":"Kab. Bengkalis",
			"value":"75.106907",
			"lat":1.24641",
			"lon":101.523
		),
		{
			"nama_kabkota":"Kab. Rokan Hilir",
			"value":"72.432639",
			"lat":1.86948",
			"lon":100.838
		),
		{
			"nama_kabkota":"Kab. Kepulauan Meranti",
			"value":"70.62358",
			"lat":0.907379",
			"lon":102.726
		),
		{
			"nama_kabkota":"Kota Pekanbaru",
			"value":"78.273881",
			"lat":0.557415",
			"lon":101.462
		),
		{
			"nama_kabkota":"Kota Dumai",
			"value":"77.752024",
			"lat":1.74798",
			"lon":101.264
		),
		{
			"nama_kabkota":"Kab. Kerinci",
			"value":"74.257278",
			"lat":-2.06012",
			"lon":101.478
		),
		{
			"nama_kabkota":"Kab. Merangin",
			"value":"71.954372",
			"lat":-2.20381",
			"lon":102.056
		),
		{
			"nama_kabkota":"Kab. Sarolangun",
			"value":"72.464543",
			"lat":-2.33009",
			"lon":102.649
		),
		{
			"nama_kabkota":"Kab. Batang Hari",
			"value":"72.868059",
			"lat":-1.85729",
			"lon":103.015
		),
		{
			"nama_kabkota":"Kab. Muaro Jambi",
			"value":"72.686982",
			"lat":-1.64549",
			"lon":103.746
		),
		{
			"nama_kabkota":"Kab. Tanjung Jabung Timur",
			"value":"71.493356",
			"lat":-1.30035",
			"lon":103.98
		),
		{
			"nama_kabkota":"Kab. Tanjung Jabung Barat",
			"value":"72.785679",
			"lat":-1.12062",
			"lon":103.142
		),
		{
			"nama_kabkota":"Kab. Tebo",
			"value":"71.672523",
			"lat":-1.39386",
			"lon":102.317
		),
		{
			"nama_kabkota":"Kab. Bungo",
			"value":"71.952579",
			"lat":-1.50943",
			"lon":101.958
		),
		{
			"nama_kabkota":"Kota Jambi",
			"value":"76.065162",
			"lat":-1.62225",
			"lon":103.641
		),
		{
			"nama_kabkota":"Kota Sungai Penuh",
			"value":"76.758827",
			"lat":-2.09008",
			"lon":101.339
		),
		{
			"nama_kabkota":"Kab. Ogan Komering Ulu",
			"value":"73.135297",
			"lat":-4.01787",
			"lon":104.146
		),
		{
			"nama_kabkota":"Kab. Ogan Komering Ilir",
			"value":"70.614128",
			"lat":-3.32657",
			"lon":105.198
		),
		{
			"nama_kabkota":"Kab. Muara Enim",
			"value":"70.805599",
			"lat":-3.71069",
			"lon":104.044
		),
		{
			"nama_kabkota":"Kab. Lahat",
			"value":"71.299158",
			"lat":-3.8887",
			"lon":103.196
		),
		{
			"nama_kabkota":"Kab. Musi Rawas",
			"value":"67.886006",
			"lat":-2.95853",
			"lon":102.861
		),
		{
			"nama_kabkota":"Kab. Musi Banyuasin",
			"value":"71.807283",
			"lat":-2.44468",
			"lon":104.293
		),
		{
			"nama_kabkota":"Kab. Banyu Asin",
			"value":"69.775256",
			"lat":-2.41036",
			"lon":104.787
		),
		{
			"nama_kabkota":"Kab. Ogan Komering Ulu Selatan",
			"value":"71.41587",
			"lat":-4.56882",
			"lon":103.97
		),
		{
			"nama_kabkota":"Kab. Ogan Komering Ulu Timur",
			"value":"69.682944",
			"lat":-4.08204",
			"lon":104.568
		),
		{
			"nama_kabkota":"Kab. Ogan Ilir",
			"value":"69.508781",
			"lat":-3.42967",
			"lon":104.575
		),
		{
			"nama_kabkota":"Kab. Empat Lawang",
			"value":"68.614939",
			"lat":-3.72128",
			"lon":102.917
		),
		{
			"nama_kabkota":"Kota Palembang",
			"value":"76.23494",
			"lat":-3.0036",
			"lon":104.728
		),
		{
			"nama_kabkota":"Kota Prabumulih",
			"value":"74.270021",
			"lat":-3.49761",
			"lon":104.22
		),
		{
			"nama_kabkota":"Kota Pagar Alam",
			"value":"73.191369",
			"lat":-4.14946",
			"lon":103.34
		),
		{
			"nama_kabkota":"Kota Lubuklinggau",
			"value":"70.556324",
			"lat":-3.25947",
			"lon":102.821
		),
		{
			"nama_kabkota":"Kab. Bengkulu Selatan",
			"value":"72.319167",
			"lat":-4.31242",
			"lon":103.031
		),
		{
			"nama_kabkota":"Kab. Rejang Lebong",
			"value":"71.086357",
			"lat":-3.44252",
			"lon":102.687
		),
		{
			"nama_kabkota":"Kab. Bengkulu Utara",
			"value":"71.499963",
			"lat":-3.0694",
			"lon":101.834
		),
		{
			"nama_kabkota":"Kab. Kaur",
			"value":"69.992936",
			"lat":-4.59173",
			"lon":103.427
		),
		{
			"nama_kabkota":"Kab. Seluma",
			"value":"66.856132",
			"lat":-4.07019",
			"lon":102.72
		),
		{
			"nama_kabkota":"Kab. Mukomuko",
			"value":"70.553597",
			"lat":-2.73128",
			"lon":101.448
		),
		{
			"nama_kabkota":"Kab. Lebong",
			"value":"70.048135",
			"lat":-3.05177",
			"lon":102.219
		),
		{
			"nama_kabkota":"Kab. Kepahiang",
			"value":"68.077087",
			"lat":-3.64761",
			"lon":102.658
		),
		{
			"nama_kabkota":"Kab. Bengkulu Tengah",
			"value":"68.513209",
			"lat":-3.67487",
			"lon":102.424
		),
		{
			"nama_kabkota":"Kota Bengkulu",
			"value":"77.617016",
			"lat":-3.85375",
			"lon":102.297
		),
		{
			"nama_kabkota":"Kab. Lampung Barat",
			"value":"69.278427",
			"lat":-5.36361",
			"lon":104.125
		),
		{
			"nama_kabkota":"Kab. Tanggamus",
			"value":"71.309103",
			"lat":-5.51669",
			"lon":104.76
		),
		{
			"nama_kabkota":"Kab. Lampung Selatan",
			"value":"70.06181",
			"lat":-5.51469",
			"lon":105.379
		),
		{
			"nama_kabkota":"Kab. Lampung Timur",
			"value":"70.732056",
			"lat":-5.11625",
			"lon":105.586
		),
		{
			"nama_kabkota":"Kab. Lampung Tengah",
			"value":"70.74043",
			"lat":-4.86672",
			"lon":105.176
		),
		{
			"nama_kabkota":"Kab. Lampung Utara",
			"value":"70.357964",
			"lat":-4.83168",
			"lon":104.814
		),
		{
			"nama_kabkota":"Kab. Way Kanan",
			"value":"69.924997",
			"lat":-4.57554",
			"lon":104.648
		),
		{
			"nama_kabkota":"Kab. Tulangbawang",
			"value":"70.337951",
			"lat":-4.54332",
			"lon":105.097
		),
		{
			"nama_kabkota":"Kab. Pesawaran",
			"value":"69.768274",
			"lat":-5.4532",
			"lon":105.098
		),
		{
			"nama_kabkota":"Kab. Pringsewu",
			"value":"71.974575",
			"lat":-5.36191",
			"lon":104.927
		),
		{
			"nama_kabkota":"Kab. Mesuji",
			"value":"67.491579",
			"lat":-4.03268",
			"lon":105.413
		),
		{
			"nama_kabkota":"Kab. Tulangbawang Barat",
			"value":"68.981789",
			"lat":-4.27498",
			"lon":105.423
		),
		{
			"nama_kabkota":"Kota Bandar Lampung",
			"value":"75.698121",
			"lat":-5.42396",
			"lon":105.251
		),
		{
			"nama_kabkota":"Kota Metro",
			"value":"76.24773",
			"lat":-5.11165",
			"lon":105.309
		),
		{
			"nama_kabkota":"Kab. Bangka",
			"value":"72.497405",
			"lat":-1.93481",
			"lon":105.952
		),
		{
			"nama_kabkota":"Kab. Belitung",
			"value":"73.360851",
			"lat":-2.88028",
			"lon":107.753
		),
		{
			"nama_kabkota":"Kab. Bangka Barat",
			"value":"70.066886",
			"lat":-1.83743",
			"lon":105.451
		),
		{
			"nama_kabkota":"Kab. Bangka Tengah",
			"value":"71.215183",
			"lat":-2.49897",
			"lon":106.335
		),
		{
			"nama_kabkota":"Kab. Bangka Selatan",
			"value":"66.968589",
			"lat":-2.79221",
			"lon":106.319
		),
		{
			"nama_kabkota":"Kab. Belitung Timur",
			"value":"71.955349",
			"lat":-2.8935",
			"lon":107.874
		),
		{
			"nama_kabkota":"Kota Pangkal Pinang",
			"value":"75.827772",
			"lat":-2.22588",
			"lon":106.128
		),
		{
			"nama_kabkota":"Kab. Karimun",
			"value":"73.637435",
			"lat":0.768402",
			"lon":103.426
		),
		{
			"nama_kabkota":"Kab. Bintan",
			"value":"74.44194",
			"lat":1.01851",
			"lon":104.574
		),
		{
			"nama_kabkota":"Kab. Natuna",
			"value":"70.562152",
			"lat":3.93073",
			"lon":108.188
		),
		{
			"nama_kabkota":"Kab. Lingga",
			"value":"71.34849",
			"lat":-0.155833",
			"lon":104.713
		),
		{
			"nama_kabkota":"Kab. Kepulauan Anambas",
			"value":"68.596025",
			"lat":2.93874",
			"lon":105.76
		),
		{
			"nama_kabkota":"Kota Batam",
			"value":"77.79658",
			"lat":1.08657",
			"lon":104.023
		),
		{
			"nama_kabkota":"Kota Tanjung Pinang",
			"value":"74.594483",
			"lat":1.04902",
			"lon":104.49
		),
		{
			"nama_kabkota":"Kab. Kepulauan Seribu",
			"value":"70.817152",
			"lat":-5.77769",
			"lon":106.504
		),
		{
			"nama_kabkota":"Kab. Kodya Jakarta Selatan",
			"value":"79.468043",
			"lat":-6.28461",
			"lon":106.794
		),
		{
			"nama_kabkota":"Kab. Kodya Jakarta Timur",
			"value":"78.953214",
			"lat":-6.26223",
			"lon":106.907
		),
		{
			"nama_kabkota":"Kab. Kodya Jakarta Pusat",
			"value":"78.411723",
			"lat":-6.18367",
			"lon":106.836
		),
		{
			"nama_kabkota":"Kab. Kodya Jakarta Barat",
			"value":"78.842127",
			"lat":-6.15971",
			"lon":106.755
		),
		{
			"nama_kabkota":"Kab. Kodya Jakarta Utara",
			"value":"77.626708",
			"lat":-6.1354",
			"lon":106.841
		),
		{
			"nama_kabkota":"Kab. Bogor",
			"value":"72.163365",
			"lat":-6.54412",
			"lon":107.002
		),
		{
			"nama_kabkota":"Kab. Sukabumi",
			"value":"70.65779",
			"lat":-7.07493",
			"lon":106.717
		),
		{
			"nama_kabkota":"Kab. Cianjur",
			"value":"69.135513",
			"lat":-7.05156",
			"lon":107.126
		),
		{
			"nama_kabkota":"Kab. Bandung",
			"value":"74.053461",
			"lat":-7.07311",
			"lon":107.592
		),
		{
			"nama_kabkota":"Kab. Garut",
			"value":"71.360478",
			"lat":-7.3425",
			"lon":107.778
		),
		{
			"nama_kabkota":"Kab. Tasikmalaya",
			"value":"72.001874",
			"lat":-7.42885",
			"lon":108.164
		),
		{
			"nama_kabkota":"Kab. Ciamis",
			"value":"71.373572",
			"lat":-7.4369",
			"lon":108.486
		),
		{
			"nama_kabkota":"Kab. Kuningan",
			"value":"70.888225",
			"lat":-6.98826",
			"lon":108.591
		),
		{
			"nama_kabkota":"Kab. Cirebon",
			"value":"68.893884",
			"lat":-6.75547",
			"lon":108.576
		),
		{
			"nama_kabkota":"Kab. Majalengka",
			"value":"70.25284",
			"lat":-6.81747",
			"lon":108.228
		),
		{
			"nama_kabkota":"Kab. Sumedang",
			"value":"72.420174",
			"lat":-6.81018",
			"lon":107.979
		),
		{
			"nama_kabkota":"Kab. Indramayu",
			"value":"67.748486",
			"lat":-6.44806",
			"lon":108.198
		),
		{
			"nama_kabkota":"Kab. Subang",
			"value":"71.137457",
			"lat":-6.4939",
			"lon":107.726
		),
		{
			"nama_kabkota":"Kab. Purwakarta",
			"value":"71.17021",
			"lat":-6.58964",
			"lon":107.431
		),
		{
			"nama_kabkota":"Kab. Karawang",
			"value":"69.792512",
			"lat":-6.28699",
			"lon":107.364
		),
		{
			"nama_kabkota":"Kab. Bekasi",
			"value":"72.927768",
			"lat":-6.20242",
			"lon":107.135
		),
		{
			"nama_kabkota":"Kab. Bandung Barat",
			"value":"73.345354",
			"lat":-6.90356",
			"lon":107.464
		),
		{
			"nama_kabkota":"Kota Bogor",
			"value":"75.746599",
			"lat":-6.59621",
			"lon":106.794
		),
		{
			"nama_kabkota":"Kota Sukabumi",
			"value":"74.906172",
			"lat":-6.94092",
			"lon":106.906
		),
		{
			"nama_kabkota":"Kota Bandung",
			"value":"76.057054",
			"lat":-6.90992",
			"lon":107.647
		),
		{
			"nama_kabkota":"Kota Cirebon",
			"value":"74.928166",
			"lat":-6.74773",
			"lon":108.555
		),
		{
			"nama_kabkota":"Kota Bekasi",
			"value":"76.356536",
			"lat":-6.28521",
			"lon":106.973
		),
		{
			"nama_kabkota":"Kota Depok",
			"value":"79.088539",
			"lat":-6.39243",
			"lon":106.825
		),
		{
			"nama_kabkota":"Kota Cimahi",
			"value":"75.509155",
			"lat":-6.88191",
			"lon":107.549
		),
		{
			"nama_kabkota":"Kota Tasikmalaya",
			"value":"74.403907",
			"lat":-7.36021",
			"lon":108.218
		),
		{
			"nama_kabkota":"Kota Banjar",
			"value":"71.375341",
			"lat":-7.36996",
			"lon":108.559
		),
		{
			"nama_kabkota":"Kab. Cilacap",
			"value":"71.730298",
			"lat":-7.4436",
			"lon":108.815
		),
		{
			"nama_kabkota":"Kab. Banyumas",
			"value":"72.602613",
			"lat":-7.45231",
			"lon":109.168
		),
		{
			"nama_kabkota":"Kab. Purbalingga",
			"value":"72.07349",
			"lat":-7.32767",
			"lon":109.409
		),
		{
			"nama_kabkota":"Kab. Banjarnegara",
			"value":"69.914269",
			"lat":-7.35284",
			"lon":109.639
		),
		{
			"nama_kabkota":"Kab. Kebumen",
			"value":"71.120908",
			"lat":-7.63749",
			"lon":109.611
		),
		{
			"nama_kabkota":"Kab. Purworejo",
			"value":"72.548148",
			"lat":-7.70103",
			"lon":109.969
		),
		{
			"nama_kabkota":"Kab. Wonosobo",
			"value":"70.518902",
			"lat":-7.39755",
			"lon":109.903
		),
		{
			"nama_kabkota":"Kab. Magelang",
			"value":"72.077618",
			"lat":-7.51056",
			"lon":110.247
		),
		{
			"nama_kabkota":"Kab. Boyolali",
			"value":"70.72378",
			"lat":-7.38235",
			"lon":110.709
		),
		{
			"nama_kabkota":"Kab. Klaten",
			"value":"73.830361",
			"lat":-7.67597",
			"lon":110.609
		),
		{
			"nama_kabkota":"Kab. Sukoharjo",
			"value":"73.573164",
			"lat":-7.68287",
			"lon":110.831
		),
		{
			"nama_kabkota":"Kab. Wonogiri",
			"value":"71.334088",
			"lat":-7.96073",
			"lon":111.035
		),
		{
			"nama_kabkota":"Kab. Karanganyar",
			"value":"73.19348",
			"lat":-7.61315",
			"lon":110.984
		),
		{
			"nama_kabkota":"Kab. Sragen",
			"value":"70.999371",
			"lat":-7.39103",
			"lon":110.962
		),
		{
			"nama_kabkota":"Kab. Grobogan",
			"value":"70.83003",
			"lat":-7.10693",
			"lon":110.894
		),
		{
			"nama_kabkota":"Kab. Blora",
			"value":"70.612937",
			"lat":-7.11381",
			"lon":111.361
		),
		{
			"nama_kabkota":"Kab. Rembang",
			"value":"72.070108",
			"lat":-6.76817",
			"lon":111.464
		),
		{
			"nama_kabkota":"Kab. Pati",
			"value":"72.963554",
			"lat":-6.70743",
			"lon":111.034
		),
		{
			"nama_kabkota":"Kab. Kudus",
			"value":"72.952936",
			"lat":-6.79816",
			"lon":110.87
		),
		{
			"nama_kabkota":"Kab. Jepara",
			"value":"72.635091",
			"lat":-6.60681",
			"lon":110.789
		),
		{
			"nama_kabkota":"Kab. Demak",
			"value":"72.579063",
			"lat":-6.92854",
			"lon":110.637
		),
		{
			"nama_kabkota":"Kab. Semarang",
			"value":"74.095064",
			"lat":-7.28739",
			"lon":110.456
		),
		{
			"nama_kabkota":"Kab. Temanggung",
			"value":"74.112804",
			"lat":-7.24573",
			"lon":110.137
		),
		{
			"nama_kabkota":"Kab. Kendal",
			"value":"70.407544",
			"lat":-7.02297",
			"lon":110.142
		),
		{
			"nama_kabkota":"Kab. Batang",
			"value":"70.412679",
			"lat":-7.03709",
			"lon":109.88
		),
		{
			"nama_kabkota":"Kab. Pekalongan",
			"value":"71.400514",
			"lat":-7.04079",
			"lon":109.657
		),
		{
			"nama_kabkota":"Kab. Pemalang",
			"value":"69.888816",
			"lat":-7.00981",
			"lon":109.392
		),
		{
			"nama_kabkota":"Kab. Tegal",
			"value":"70.587812",
			"lat":-7.04973",
			"lon":109.157
		),
		{
			"nama_kabkota":"Kab. Brebes",
			"value":"68.20206",
			"lat":-7.04457",
			"lon":108.945
		),
		{
			"nama_kabkota":"Kota Magelang",
			"value":"76.600677",
			"lat":-7.4917",
			"lon":110.226
		),
		{
			"nama_kabkota":"Kota Surakarta",
			"value":"77.86181",
			"lat":-7.55914",
			"lon":110.824
		),
		{
			"nama_kabkota":"Kota Salatiga",
			"value":"76.534952",
			"lat":-7.34305",
			"lon":110.5
		),
		{
			"nama_kabkota":"Kota Semarang",
			"value":"77.107478",
			"lat":-7.02842",
			"lon":110.389
		),
		{
			"nama_kabkota":"Kota Pekalongan",
			"value":"74.466163",
			"lat":-6.90084",
			"lon":109.689
		),
		{
			"nama_kabkota":"Kota Tegal",
			"value":"73.894739",
			"lat":-6.87444",
			"lon":109.108
		),
		{
			"nama_kabkota":"Kab. Kulon Progo",
			"value":"74.487269",
			"lat":-7.81337",
			"lon":110.148
		),
		{
			"nama_kabkota":"Kab. Bantul",
			"value":"74.528876",
			"lat":-7.90749",
			"lon":110.358
		),
		{
			"nama_kabkota":"Kab. Gunung Kidul",
			"value":"70.453902",
			"lat":-7.99321",
			"lon":110.585
		),
		{
			"nama_kabkota":"Kab. Sleman",
			"value":"78.196404",
			"lat":-7.69031",
			"lon":110.387
		),
		{
			"nama_kabkota":"Kota Yogyakarta",
			"value":"79.516753",
			"lat":-7.80279",
			"lon":110.376
		),
		{
			"nama_kabkota":"Kab. Pacitan",
			"value":"72.069876",
			"lat":-8.10083",
			"lon":111.161
		),
		{
			"nama_kabkota":"Kab. Ponorogo",
			"value":"70.285628",
			"lat":-7.97311",
			"lon":111.531
		),
		{
			"nama_kabkota":"Kab. Trenggalek",
			"value":"73.238863",
			"lat":-8.13936",
			"lon":111.617
		),
		{
			"nama_kabkota":"Kab. Tulungagung",
			"value":"73.336498",
			"lat":-8.0756",
			"lon":111.916
		),
		{
			"nama_kabkota":"Kab. Blitar",
			"value":"73.667934",
			"lat":-8.1394",
			"lon":112.215
		),
		{
			"nama_kabkota":"Kab. Kediri",
			"value":"71.752097",
			"lat":-7.80293",
			"lon":112.059
		),
		{
			"nama_kabkota":"Kab. Malang",
			"value":"70.536056",
			"lat":-8.09136",
			"lon":112.622
		),
		{
			"nama_kabkota":"Kab. Lumajang",
			"value":"67.820876",
			"lat":-8.12431",
			"lon":113.139
		),
		{
			"nama_kabkota":"Kab. Jember",
			"value":"64.945544",
			"lat":-8.26315",
			"lon":113.673
		),
		{
			"nama_kabkota":"Kab. Banyuwangi",
			"value":"68.886785",
			"lat":-8.33103",
			"lon":114.218
		),
		{
			"nama_kabkota":"Kab. Bondowoso",
			"value":"62.938244",
			"lat":-7.94327",
			"lon":113.933
		),
		{
			"nama_kabkota":"Kab. Situbondo",
			"value":"64.258793",
			"lat":-7.79577",
			"lon":114.261
		),
		{
			"nama_kabkota":"Kab. Probolinggo",
			"value":"62.994043",
			"lat":-7.86336",
			"lon":113.276
		),
		{
			"nama_kabkota":"Kab. Pasuruan",
			"value":"67.614564",
			"lat":-7.74862",
			"lon":112.83
		),
		{
			"nama_kabkota":"Kab. Sidoarjo",
			"value":"76.349179",
			"lat":-7.45533",
			"lon":112.663
		),
		{
			"nama_kabkota":"Kab. Mojokerto",
			"value":"73.38868",
			"lat":-7.54086",
			"lon":112.496
		),
		{
			"nama_kabkota":"Kab. Jombang",
			"value":"72.701006",
			"lat":-7.55994",
			"lon":112.257
		),
		{
			"nama_kabkota":"Kab. Nganjuk",
			"value":"70.761025",
			"lat":-7.61615",
			"lon":111.945
		),
		{
			"nama_kabkota":"Kab. Madiun",
			"value":"70.180961",
			"lat":-7.61259",
			"lon":111.647
		),
		{
			"nama_kabkota":"Kab. Magetan",
			"value":"72.723997",
			"lat":-7.65453",
			"lon":111.347
		),
		{
			"nama_kabkota":"Kab. Ngawi",
			"value":"68.821856",
			"lat":-7.4286",
			"lon":111.394
		),
		{
			"nama_kabkota":"Kab. Bojonegoro",
			"value":"66.919547",
			"lat":-7.22605",
			"lon":111.791
		),
		{
			"nama_kabkota":"Kab. Tuban",
			"value":"68.312569",
			"lat":-6.95912",
			"lon":111.893
		),
		{
			"nama_kabkota":"Kab. Lamongan",
			"value":"69.632776",
			"lat":-7.12486",
			"lon":112.312
		),
		{
			"nama_kabkota":"Kab. Gresik",
			"value":"74.469804",
			"lat":-7.12652",
			"lon":112.517
		),
		{
			"nama_kabkota":"Kab. Bangkalan",
			"value":"64.505912",
			"lat":-7.04863",
			"lon":112.909
		),
		{
			"nama_kabkota":"Kab. Sampang",
			"value":"59.699452",
			"lat":-7.05851",
			"lon":113.262
		),
		{
			"nama_kabkota":"Kab. Pamekasan",
			"value":"64.600652",
			"lat":-7.07227",
			"lon":113.5
		),
		{
			"nama_kabkota":"Kab. Sumenep",
			"value":"65.597574",
			"lat":-7.00034",
			"lon":113.852
		),
		{
			"nama_kabkota":"Kota Kediri",
			"value":"76.284354",
			"lat":-7.82422",
			"lon":112.016
		),
		{
			"nama_kabkota":"Kota Blitar",
			"value":"77.416101",
			"lat":-8.09311",
			"lon":112.165
		),
		{
			"nama_kabkota":"Kota Malang",
			"value":"77.19951",
			"lat":-7.97649",
			"lon":112.627
		),
		{
			"nama_kabkota":"Kota Probolinggo",
			"value":"74.334617",
			"lat":-7.78127",
			"lon":113.209
		),
		{
			"nama_kabkota":"Kota Pasuruan",
			"value":"73.450914",
			"lat":-7.65633",
			"lon":112.905
		),
		{
			"nama_kabkota":"Kota Mojokerto",
			"value":"77.021434",
			"lat":-7.46807",
			"lon":112.438
		),
		{
			"nama_kabkota":"Kota Madiun",
			"value":"76.609601",
			"lat":-7.63149",
			"lon":111.53
		),
		{
			"nama_kabkota":"Kota Surabaya",
			"value":"77.279493",
			"lat":-7.27981",
			"lon":112.711
		),
		{
			"nama_kabkota":"Kota Batu",
			"value":"74.453841",
			"lat":-7.83708",
			"lon":112.531
		),
		{
			"nama_kabkota":"Kab. Pandeglang",
			"value":"68.285623",
			"lat":-6.55064",
			"lon":105.715
		),
		{
			"nama_kabkota":"Kab. Lebak",
			"value":"67.66957",
			"lat":-6.65249",
			"lon":106.189
		),
		{
			"nama_kabkota":"Kab. Tangerang",
			"value":"71.764176",
			"lat":-6.18755",
			"lon":106.472
		),
		{
			"nama_kabkota":"Kab. Serang",
			"value":"68.672918",
			"lat":-6.10998",
			"lon":106.281
		),
		{
			"nama_kabkota":"Kota Tangerang",
			"value":"75.165018",
			"lat":-6.17562",
			"lon":106.652
		),
		{
			"nama_kabkota":"Kota Cilegon",
			"value":"75.293839",
			"lat":-6.00466",
			"lon":106.005
		),
		{
			"nama_kabkota":"Kota Serang",
			"value":"70.612317",
			"lat":-6.11908",
			"lon":106.159
		),
		{
			"nama_kabkota":"Kota Tangerang Selatan",
			"value":"75.380163",
			"lat":-6.30593",
			"lon":106.681
		),
		{
			"nama_kabkota":"Kab. Jembrana",
			"value":"72.690909",
			"lat":-8.31199",
			"lon":114.68
		),
		{
			"nama_kabkota":"Kab. Tabanan",
			"value":"74.566979",
			"lat":-8.43686",
			"lon":115.063
		),
		{
			"nama_kabkota":"Kab. Badung",
			"value":"75.022755",
			"lat":-8.54082",
			"lon":115.167
		),
		{
			"nama_kabkota":"Kab. Gianyar",
			"value":"72.734665",
			"lat":-8.47876",
			"lon":115.297
		),
		{
			"nama_kabkota":"Kab. Klungkung",
			"value":"70.537866",
			"lat":-8.74418",
			"lon":115.536
		),
		{
			"nama_kabkota":"Kab. Bangli",
			"value":"70.711096",
			"lat":-8.33395",
			"lon":115.347
		),
		{
			"nama_kabkota":"Kab. Karang Asem",
			"value":"66.417631",
			"lat":-8.3598",
			"lon":115.554
		),
		{
			"nama_kabkota":"Kab. Buleleng",
			"value":"70.692673",
			"lat":-8.21916",
			"lon":114.944
		),
		{
			"nama_kabkota":"Kota Denpasar",
			"value":"77.939219",
			"lat":-8.66035",
			"lon":115.227
		),
		{
			"nama_kabkota":"Kab. Lombok Barat",
			"value":"61.709241",
			"lat":-8.55654",
			"lon":116.157
		),
		{
			"nama_kabkota":"Kab. Lombok Tengah",
			"value":"60.729809",
			"lat":-8.68115",
			"lon":116.283
		),
		{
			"nama_kabkota":"Kab. Lombok Timur",
			"value":"62.675251",
			"lat":-8.58374",
			"lon":116.558
		),
		{
			"nama_kabkota":"Kab. Sumbawa",
			"value":"66.0671",
			"lat":-8.73956",
			"lon":117.523
		),
		{
			"nama_kabkota":"Kab. Dompu",
			"value":"65.50892",
			"lat":-8.51802",
			"lon":118.325
		),
		{
			"nama_kabkota":"Kab. Bima",
			"value":"65.178343",
			"lat":-8.56522",
			"lon":118.816
		),
		{
			"nama_kabkota":"Kab. Sumbawa Barat",
			"value":"66.474478",
			"lat":-8.80847",
			"lon":116.911
		),
		{
			"nama_kabkota":"Kab. Lombok Utara",
			"value":"58.955107",
			"lat":-8.33728",
			"lon":116.267
		),
		{
			"nama_kabkota":"Kota Mataram",
			"value":"72.324766",
			"lat":-8.58142",
			"lon":116.117
		),
		{
			"nama_kabkota":"Kota Bima",
			"value":"68.555294",
			"lat":-8.45275",
			"lon":118.807
		),
		{
			"nama_kabkota":"Kab. Sumba Barat",
			"value":"63.845198",
			"lat":-9.57957",
			"lon":119.457
		),
		{
			"nama_kabkota":"Kab. Sumba Timur",
			"value":"61.799818",
			"lat":-9.7967",
			"lon":120.249
		),
		{
			"nama_kabkota":"Kab. Kupang",
			"value":"66.000437",
			"lat":-9.85561",
			"lon":123.84
		),
		{
			"nama_kabkota":"Kab. Timor Tengah Selatan",
			"value":"65.926989",
			"lat":-9.82707",
			"lon":124.425
		),
		{
			"nama_kabkota":"Kab. Timor Tengah Utara",
			"value":"67.487636",
			"lat":-9.35684",
			"lon":124.476
		),
		{
			"nama_kabkota":"Kab. Belu",
			"value":"64.338758",
			"lat":-9.3837",
			"lon":124.928
		),
		{
			"nama_kabkota":"Kab. Alor",
			"value":"68.480921",
			"lat":-8.29574",
			"lon":124.74
		),
		{
			"nama_kabkota":"Kab. Lembata",
			"value":"67.661177",
			"lat":-8.37541",
			"lon":123.566
		),
		{
			"nama_kabkota":"Kab. Flores Timur",
			"value":"68.177242",
			"lat":-8.346",
			"lon":122.819
		),
		{
			"nama_kabkota":"Kab. Sikka",
			"value":"67.871871",
			"lat":-8.59524",
			"lon":122.569
		),
		{
			"nama_kabkota":"Kab. Ende",
			"value":"67.108719",
			"lat":-8.66889",
			"lon":121.695
		),
		{
			"nama_kabkota":"Kab. Ngada",
			"value":"69.45361",
			"lat":-8.65213",
			"lon":121.153
		),
		{
			"nama_kabkota":"Kab. Manggarai",
			"value":"67.164441",
			"lat":-8.53765",
			"lon":120.438
		),
		{
			"nama_kabkota":"Kab. Rote Ndao",
			"value":"66.176339",
			"lat":-10.6796",
			"lon":123.119
		),
		{
			"nama_kabkota":"Kab. Manggarai Barat",
			"value":"65.328527",
			"lat":-8.60214",
			"lon":120.09
		),
		{
			"nama_kabkota":"Kab. Sumba Tengah",
			"value":"60.990157",
			"lat":-9.54585",
			"lon":119.186
		),
		{
			"nama_kabkota":"Kab. Sumba Barat Daya",
			"value":"60.802437",
			"lat":-9.59047",
			"lon":119.681
		),
		{
			"nama_kabkota":"Kab. Nagekeo",
			"value":"66.310902",
			"lat":-8.68125",
			"lon":121.292
		),
		{
			"nama_kabkota":"Kab. Manggarai Timur",
			"value":"65.924294",
			"lat":-8.56284",
			"lon":120.711
		),
		{
			"nama_kabkota":"Kab. Sabu Raijua",
			"value":"55.543263",
			"lat":-10.5219",
			"lon":121.846
		),
		{
			"nama_kabkota":"Kota Kupang",
			"value":"77.309613",
			"lat":-10.225",
			"lon":123.603
		),
		{
			"nama_kabkota":"Kab. Sambas",
			"value":"64.932646",
			"lat":1.51623",
			"lon":109.329
		),
		{
			"nama_kabkota":"Kab. Bengkayang",
			"value":"67.550802",
			"lat":1.03394",
			"lon":109.487
		),
		{
			"nama_kabkota":"Kab. Landak",
			"value":"67.552734",
			"lat":0.516649",
			"lon":109.697
		),
		{
			"nama_kabkota":"Kab. Pontianak",
			"value":"68.750314",
			"lat":0.359825",
			"lon":109.165
		),
		{
			"nama_kabkota":"Kab. Sanggau",
			"value":"68.553183",
			"lat":0.285377",
			"lon":110.577
		),
		{
			"nama_kabkota":"Kab. Ketapang",
			"value":"67.892245",
			"lat":-1.68179",
			"lon":110.539
		),
		{
			"nama_kabkota":"Kab. Sintang",
			"value":"68.308527",
			"lat":-0.119481",
			"lon":112.107
		),
		{
			"nama_kabkota":"Kab. Kapuas Hulu",
			"value":"70.034315",
			"lat":0.830991",
			"lon":112.915
		),
		{
			"nama_kabkota":"Kab. Sekadau",
			"value":"66.993973",
			"lat":0.055962",
			"lon":110.953
		),
		{
			"nama_kabkota":"Kab. Melawi",
			"value":"68.674906",
			"lat":-0.725618",
			"lon":111.783
		),
		{
			"nama_kabkota":"Kab. Kayong Utara",
			"value":"65.38366",
			"lat":-1.07557",
			"lon":110.088
		),
		{
			"nama_kabkota":"Kab. Kubu Raya",
			"value":"67.555425",
			"lat":-0.402846",
			"lon":109.51
		),
		{
			"nama_kabkota":"Kota Pontianak",
			"value":"72.955774",
			"lat":-0.089018",
			"lon":109.351
		),
		{
			"nama_kabkota":"Kota Singkawang",
			"value":"68.859434",
			"lat":0.879057",
			"lon":109.019
		),
		{
			"nama_kabkota":"Kab. Kotawaringin Barat",
			"value":"73.79157",
			"lat":-2.3877",
			"lon":111.415
		),
		{
			"nama_kabkota":"Kab. Kotawaringin Timur",
			"value":"74.343481",
			"lat":-2.0018",
			"lon":112.62
		),
		{
			"nama_kabkota":"Kab. Kapuas",
			"value":"73.595122",
			"lat":-1.86886",
			"lon":114.279
		),
		{
			"nama_kabkota":"Kab. Barito Selatan",
			"value":"73.597043",
			"lat":-1.92739",
			"lon":114.699
		),
		{
			"nama_kabkota":"Kab. Barito Utara",
			"value":"75.145958",
			"lat":-0.757642",
			"lon":115.13
		),
		{
			"nama_kabkota":"Kab. Sukamara",
			"value":"71.980038",
			"lat":-2.53044",
			"lon":111.24
		),
		{
			"nama_kabkota":"Kab. Lamandau",
			"value":"72.318933",
			"lat":-1.69264",
			"lon":111.237
		),
		{
			"nama_kabkota":"Kab. Seruyan",
			"value":"72.554986",
			"lat":-2.1676",
			"lon":112.166
		),
		{
			"nama_kabkota":"Kab. Katingan",
			"value":"72.646223",
			"lat":-1.86207",
			"lon":113.319
		),
		{
			"nama_kabkota":"Kab. Pulang Pisau",
			"value":"71.525583",
			"lat":-2.77247",
			"lon":113.98
		),
		{
			"nama_kabkota":"Kab. Gunung Mas",
			"value":"73.43207",
			"lat":-0.895158",
			"lon":113.491
		),
		{
			"nama_kabkota":"Kab. Barito Timur",
			"value":"73.004443",
			"lat":-1.93246",
			"lon":115.088
		),
		{
			"nama_kabkota":"Kab. Murung Raya",
			"value":"72.835657",
			"lat":-0.062238",
			"lon":114.204
		),
		{
			"nama_kabkota":"Kota Palangka Raya",
			"value":"78.299926",
			"lat":-1.77978",
			"lon":113.809
		),
		{
			"nama_kabkota":"Kab. Tanah Laut",
			"value":"71.158178",
			"lat":-3.84194",
			"lon":114.947
		),
		{
			"nama_kabkota":"Kota Baru",
			"value":"71.199255",
			"lat":-2.78339",
			"lon":116.064
		),
		{
			"nama_kabkota":"Kab. Banjar",
			"value":"70.94485",
			"lat":-3.28048",
			"lon":115.056
		),
		{
			"nama_kabkota":"Kab. Barito Kuala",
			"value":"67.537963",
			"lat":-3.02419",
			"lon":114.609
		),
		{
			"nama_kabkota":"Kab. Tapin",
			"value":"70.577515",
			"lat":-2.85058",
			"lon":114.994
		),
		{
			"nama_kabkota":"Kab. Hulu Sungai Selatan",
			"value":"70.833694",
			"lat":-2.70676",
			"lon":115.232
		),
		{
			"nama_kabkota":"Kab. Hulu Sungai Tengah",
			"value":"70.766196",
			"lat":-2.63117",
			"lon":115.421
		),
		{
			"nama_kabkota":"Kab. Hulu Sungai Utara",
			"value":"68.891164",
			"lat":-2.42087",
			"lon":115.101
		),
		{
			"nama_kabkota":"Kab. Tabalong",
			"value":"70.001341",
			"lat":-1.82989",
			"lon":115.448
		),
		{
			"nama_kabkota":"Kab. Tanah Bumbu",
			"value":"69.74205",
			"lat":-3.32087",
			"lon":115.695
		),
		{
			"nama_kabkota":"Kab. Balangan",
			"value":"66.738463",
			"lat":-2.29685",
			"lon":115.567
		),
		{
			"nama_kabkota":"Kota Banjarmasin",
			"value":"73.838765",
			"lat":-3.32828",
			"lon":114.573
		),
		{
			"nama_kabkota":"Kota Banjar Baru",
			"value":"74.740645",
			"lat":-3.46166",
			"lon":114.786
		),
		{
			"nama_kabkota":"Kab. Pasir",
			"value":"74.660544",
			"lat":-1.62224",
			"lon":116.229
		),
		{
			"nama_kabkota":"Kab. Kutai Barat",
			"value":"72.901044",
			"lat":0.189887",
			"lon":115.19
		),
		{
			"nama_kabkota":"Kab. Kutai Kartanegara",
			"value":"72.892444",
			"lat":0.245719",
			"lon":117.041
		),
		{
			"nama_kabkota":"Kab. Kutai Timur",
			"value":"72.050618",
			"lat":1.02225",
			"lon":117.53
		),
		{
			"nama_kabkota":"Kab. Berau",
			"value":"73.844352",
			"lat":1.80806",
			"lon":117.584
		),
		{
			"nama_kabkota":"Kab. Malinau",
			"value":"72.648392",
			"lat":2.59453",
			"lon":115.698
		),
		{
			"nama_kabkota":"Kab. Bulungan",
			"value":"75.109294",
			"lat":2.92062",
			"lon":117.022
		),
		{
			"nama_kabkota":"Kab. Nunukan",
			"value":"73.894269",
			"lat":3.87444",
			"lon":116.679
		),
		{
			"nama_kabkota":"Kab. Penajam Paser Utara",
			"value":"73.589151",
			"lat":-1.21871",
			"lon":116.612
		),
		{
			"nama_kabkota":"Kab. Tana Tidung",
			"value":"71.423234",
			"lat":3.4432",
			"lon":117.168
		),
		{
			"nama_kabkota":"Kota Balikpapan",
			"value":"78.328359",
			"lat":-1.15958",
			"lon":116.887
		),
		{
			"nama_kabkota":"Kota Samarinda",
			"value":"77.047908",
			"lat":-0.430184",
			"lon":117.174
		),
		{
			"nama_kabkota":"Kota Tarakan",
			"value":"76.742878",
			"lat":3.33426",
			"lon":117.593
		),
		{
			"nama_kabkota":"Kota Bontang",
			"value":"76.882413",
			"lat":0.209815",
			"lon":117.348
		),
		{
			"nama_kabkota":"Kab. Bolaang Mongondow",
			"value":"72.993901",
			"lat":0.709545",
			"lon":124.067
		),
		{
			"nama_kabkota":"Kab. Minahasa",
			"value":"75.735495",
			"lat":1.299",
			"lon":124.87
		),
		{
			"nama_kabkota":"Kab. Kepulauan Sangihe",
			"value":"75.58183",
			"lat":3.54841",
			"lon":125.539
		),
		{
			"nama_kabkota":"Kab. Kepulauan Talaud",
			"value":"75.302588",
			"lat":4.26898",
			"lon":126.79
		),
		{
			"nama_kabkota":"Kab. Minahasa Selatan",
			"value":"74.676283",
			"lat":1.0733",
			"lon":124.528
		),
		{
			"nama_kabkota":"Kab. Minahasa Utara",
			"value":"76.08111",
			"lat":1.507",
			"lon":124.998
		),
		{
			"nama_kabkota":"Kab. Bolaang Mongondow Utara",
			"value":"72.634462",
			"lat":0.686082",
			"lon":123.431
		),
		{
			"nama_kabkota":"Kab. Siau Tagulandang Biaro",
			"value":"73.301839",
			"lat":2.72134",
			"lon":125.383
		),
		{
			"nama_kabkota":"Kab. Minahasa Tenggara",
			"value":"72.707684",
			"lat":0.999949",
			"lon":124.733
		),
		{
			"nama_kabkota":"Kab. Bolaang Mongondow Selatan",
			"value":"70.362783",
			"lat":0.410792",
			"lon":123.879
		),
		{
			"nama_kabkota":"Kab. Bolaang Mongondow Timur",
			"value":"72.269929",
			"lat":0.673946",
			"lon":124.467
		),
		{
			"nama_kabkota":"Kota Manado",
			"value":"78.020267",
			"lat":1.50213",
			"lon":124.852
		),
		{
			"nama_kabkota":"Kota Bitung",
			"value":"75.517637",
			"lat":1.47772",
			"lon":125.134
		),
		{
			"nama_kabkota":"Kota Tomohon",
			"value":"76.385392",
			"lat":1.31403",
			"lon":124.815
		),
		{
			"nama_kabkota":"Kota Kotamobagu",
			"value":"75.532308",
			"lat":0.717768",
			"lon":124.246
		),
		{
			"nama_kabkota":"Kab. Banggai Kepulauan",
			"value":"67.605358",
			"lat":-1.39914",
			"lon":123.169
		),
		{
			"nama_kabkota":"Kab. Banggai",
			"value":"71.354031",
			"lat":-1.09963",
			"lon":122.619
		),
		{
			"nama_kabkota":"Kab. Morowali",
			"value":"70.947518",
			"lat":-2.27987",
			"lon":121.645
		),
		{
			"nama_kabkota":"Kab. Poso",
			"value":"70.28021",
			"lat":-1.6695",
			"lon":120.48
		),
		{
			"nama_kabkota":"Kab. Donggala",
			"value":"69.784779",
			"lat":0.001503",
			"lon":119.89
		),
		{
			"nama_kabkota":"Kab. Tolitoli",
			"value":"68.525548",
			"lat":0.968331",
			"lon":120.874
		),
		{
			"nama_kabkota":"Kab. Buol",
			"value":"69.78574",
			"lat":0.999847",
			"lon":121.558
		),
		{
			"nama_kabkota":"Kab. Parigi Moutong",
			"value":"68.829302",
			"lat":-0.238456",
			"lon":119.968
		),
		{
			"nama_kabkota":"Kab. Tojo Unauna",
			"value":"68.831643",
			"lat":-1.2185",
			"lon":121.345
		),
		{
			"nama_kabkota":"Kab. Sigi",
			"value":"67.609714",
			"lat":-1.45968",
			"lon":119.811
		),
		{
			"nama_kabkota":"Kota Palu",
			"value":"76.403669",
			"lat":-0.820163",
			"lon":119.9
		),
		{
			"nama_kabkota":"Kab. Kepulauan Selayar",
			"value":"69.339836",
			"lat":-6.14249",
			"lon":120.479
		),
		{
			"nama_kabkota":"Kab. Bulukumba",
			"value":"71.187209",
			"lat":-5.46549",
			"lon":120.19
		),
		{
			"nama_kabkota":"Kab. Bantaeng",
			"value":"70.098986",
			"lat":-5.48126",
			"lon":119.983
		),
		{
			"nama_kabkota":"Kab. Jeneponto",
			"value":"64.920154",
			"lat":-5.57381",
			"lon":119.699
		),
		{
			"nama_kabkota":"Kab. Takalar",
			"value":"68.621505",
			"lat":-5.41331",
			"lon":119.494
		),
		{
			"nama_kabkota":"Kab. Gowa",
			"value":"70.66857",
			"lat":-5.354",
			"lon":119.687
		),
		{
			"nama_kabkota":"Kab. Sinjai",
			"value":"69.528984",
			"lat":-5.20395",
			"lon":120.131
		),
		{
			"nama_kabkota":"Kab. Maros",
			"value":"71.115052",
			"lat":-4.97008",
			"lon":119.717
		),
		{
			"nama_kabkota":"Kab. Pangkajene Dan Kepulauan",
			"value":"69.429645",
			"lat":-4.75434",
			"lon":119.641
		),
		{
			"nama_kabkota":"Kab. Barru",
			"value":"70.855653",
			"lat":-4.43319",
			"lon":119.698
		),
		{
			"nama_kabkota":"Kab. Bone",
			"value":"70.174742",
			"lat":-4.68324",
			"lon":120.097
		),
		{
			"nama_kabkota":"Kab. Soppeng",
			"value":"71.891217",
			"lat":-4.31902",
			"lon":119.9
		),
		{
			"nama_kabkota":"Kab. Wajo",
			"value":"70.223017",
			"lat":-3.97811",
			"lon":120.16
		),
		{
			"nama_kabkota":"Kab. Sidenreng Rappang",
			"value":"72.365915",
			"lat":-3.80789",
			"lon":119.994
		),
		{
			"nama_kabkota":"Kab. Pinrang",
			"value":"73.211399",
			"lat":-3.6456",
			"lon":119.611
		),
		{
			"nama_kabkota":"Kab. Enrekang",
			"value":"74.554523",
			"lat":-3.53501",
			"lon":119.891
		),
		{
			"nama_kabkota":"Kab. Luwu",
			"value":"73.975986",
			"lat":-3.34763",
			"lon":120.21
		),
		{
			"nama_kabkota":"Kab. Tana Toraja",
			"value":"71.835299",
			"lat":-2.99152",
			"lon":119.734
		),
		{
			"nama_kabkota":"Kab. Luwu Utara",
			"value":"74.320525",
			"lat":-2.41617",
			"lon":120.131
		),
		{
			"nama_kabkota":"Kab. Luwu Timur",
			"value":"72.792542",
			"lat":-2.48105",
			"lon":120.695
		),
		{
			"nama_kabkota":"Kab. Toraja Utara",
			"value":"69.564805",
			"lat":-3.0116",
			"lon":119.952
		),
		{
			"nama_kabkota":"Kota Makassar",
			"value":"78.787086",
			"lat":-5.15306",
			"lon":119.453
		),
		{
			"nama_kabkota":"Kota Parepare",
			"value":"77.780951",
			"lat":-4.01652",
			"lon":119.665
		),
		{
			"nama_kabkota":"Kota Palopo",
			"value":"76.548585",
			"lat":-2.99277",
			"lon":120.14
		),
		{
			"nama_kabkota":"Kab. Buton",
			"value":"68.795761",
			"lat":-5.38816",
			"lon":122.899
		),
		{
			"nama_kabkota":"Kab. Muna",
			"value":"67.453195",
			"lat":-4.91909",
			"lon":122.538
		),
		{
			"nama_kabkota":"Kab. Konawe",
			"value":"69.771269",
			"lat":-3.85577",
			"lon":122.067
		),
		{
			"nama_kabkota":"Kab. Kolaka",
			"value":"70.828202",
			"lat":-3.67976",
			"lon":121.431
		),
		{
			"nama_kabkota":"Kab. Konawe Selatan",
			"value":"69.418592",
			"lat":-4.2602",
			"lon":122.397
		),
		{
			"nama_kabkota":"Kab. Bombana",
			"value":"67.200616",
			"lat":-4.62735",
			"lon":121.813
		),
		{
			"nama_kabkota":"Kab. Wakatobi",
			"value":"67.202923",
			"lat":-5.32294",
			"lon":123.582
		),
		{
			"nama_kabkota":"Kab. Kolaka Utara",
			"value":"68.929126",
			"lat":-3.25263",
			"lon":121.129
		),
		{
			"nama_kabkota":"Kab. Buton Utara",
			"value":"68.074062",
			"lat":-4.74096",
			"lon":122.975
		),
		{
			"nama_kabkota":"Kab. Konawe Utara",
			"value":"68.381051",
			"lat":-3.28607",
			"lon":121.915
		),
		{
			"nama_kabkota":"Kota Kendari",
			"value":"75.655198",
			"lat":-4.0035",
			"lon":122.553
		),
		{
			"nama_kabkota":"Kota Baubau",
			"value":"73.475109",
			"lat":-5.4266",
			"lon":122.682
		),
		{
			"nama_kabkota":"Kab. Boalemo",
			"value":"68.689594",
			"lat":0.692982",
			"lon":122.33
		),
		{
			"nama_kabkota":"Kab. Gorontalo",
			"value":"70.06984",
			"lat":0.740238",
			"lon":122.558
		),
		{
			"nama_kabkota":"Kab. Pohuwato",
			"value":"69.77161",
			"lat":0.70044",
			"lon":121.652
		),
		{
			"nama_kabkota":"Kab. Bone Bolango",
			"value":"71.707865",
			"lat":0.559517",
			"lon":123.303
		),
		{
			"nama_kabkota":"Kab. Gorontalo Utara",
			"value":"68.808744",
			"lat":0.892006",
			"lon":122.625
		),
		{
			"nama_kabkota":"Kota Gorontalo",
			"value":"73.082112",
			"lat":0.531953",
			"lon":123.088
		),
		{
			"nama_kabkota":"Kab. Majene",
			"value":"71.338679",
			"lat":-3.21487",
			"lon":118.87
		),
		{
			"nama_kabkota":"Kab. Polewali Mandar",
			"value":"67.377477",
			"lat":-3.30966",
			"lon":119.195
		),
		{
			"nama_kabkota":"Kab. Mamasa",
			"value":"70.818351",
			"lat":-3.10129",
			"lon":119.265
		),
		{
			"nama_kabkota":"Kab. Mamuju",
			"value":"69.318342",
			"lat":-2.35397",
			"lon":119.332
		),
		{
			"nama_kabkota":"Kab. Mamuju Utara",
			"value":"69.992505",
			"lat":-1.34188",
			"lon":119.377
		),
		{
			"nama_kabkota":"Kab. Maluku Tenggara Barat",
			"value":"68.829899",
			"lat":-7.56859",
			"lon":131.413
		),
		{
			"nama_kabkota":"Kab. Maluku Tenggara",
			"value":"72.452527",
			"lat":-5.63475",
			"lon":133.02
		),
		{
			"nama_kabkota":"Kab. Maluku Tengah",
			"value":"70.864639",
			"lat":-3.32153",
			"lon":129.356
		),
		{
			"nama_kabkota":"Kab. Buru",
			"value":"69.356508",
			"lat":-3.34065",
			"lon":126.639
		),
		{
			"nama_kabkota":"Kab. Kepulauan Aru",
			"value":"70.085205",
			"lat":-6.55316",
			"lon":134.291
		),
		{
			"nama_kabkota":"Kab. Seram Bagian Barat",
			"value":"69.636404",
			"lat":-3.16",
			"lon":128.29
		),
		{
			"nama_kabkota":"Kab. Seram Bagian Timur",
			"value":"68.091297",
			"lat":-3.42318",
			"lon":130.347
		),
		{
			"nama_kabkota":"Kab. Maluku Barat Daya",
			"value":"66.597167",
			"lat":-7.7893",
			"lon":126.313
		),
		{
			"nama_kabkota":"Kab. Buru Selatan",
			"value":"68.784773",
			"lat":-3.52835",
			"lon":126.615
		),
		{
			"nama_kabkota":"Kota Ambon",
			"value":"78.561524",
			"lat":-3.67265",
			"lon":128.234
		),
		{
			"nama_kabkota":"Kota Tual",
			"value":"76.506501",
			"lat":-5.6088",
			"lon":132.783
		),
		{
			"nama_kabkota":"Kab. Halmahera Barat",
			"value":"66.98906",
			"lat":1.51616",
			"lon":127.624
		),
		{
			"nama_kabkota":"Kab. Halmahera Tengah",
			"value":"69.131142",
			"lat":0.406088",
			"lon":128.463
		),
		{
			"nama_kabkota":"Kab. Kepulauan Sula",
			"value":"67.961326",
			"lat":-1.83272",
			"lon":124.834
		),
		{
			"nama_kabkota":"Kab. Halmahera Selatan",
			"value":"67.98078",
			"lat":-1.54092",
			"lon":127.787
		),
		{
			"nama_kabkota":"Kab. Halmahera Utara",
			"value":"67.977118",
			"lat":1.5173",
			"lon":127.793
		),
		{
			"nama_kabkota":"Kab. Halmahera Timur",
			"value":"67.898506",
			"lat":1.02798",
			"lon":128.238
		),
		{
			"nama_kabkota":"Kab. Pulau Morotai",
			"value":"64.610202",
			"lat":2.31688",
			"lon":128.449
		),
		{
			"nama_kabkota":"Kota Ternate",
			"value":"76.584795",
			"lat":0.809597",
			"lon":127.339
		),
		{
			"nama_kabkota":"Kota Tidore Kepulauan",
			"value":"69.621039",
			"lat":0.406088",
			"lon":127.662
		),
		{
			"nama_kabkota":"Kab. Fakfak",
			"value":"71.457608",
			"lat":-3.31843",
			"lon":132.872
		),
		{
			"nama_kabkota":"Kab. Kaimana",
			"value":"70.133005",
			"lat":-3.5477",
			"lon":134.443
		),
		{
			"nama_kabkota":"Kab. Teluk Wondama",
			"value":"65.755747",
			"lat":-2.58788",
			"lon":134.557
		),
		{
			"nama_kabkota":"Kab. Teluk Bintuni",
			"value":"66.580096",
			"lat":-2.0977",
			"lon":133.322
		),
		{
			"nama_kabkota":"Kab. Manokwari",
			"value":"67.185385",
			"lat":-1.80035",
			"lon":133.968
		),
		{
			"nama_kabkota":"Kab. Sorong Selatan",
			"value":"66.310336",
			"lat":-1.66473",
			"lon":132.197
		),
		{
			"nama_kabkota":"Kab. Sorong",
			"value":"68.502792",
			"lat":-0.946039",
			"lon":131.859
		),
		{
			"nama_kabkota":"Kab. Raja Ampat",
			"value":"64.581561",
			"lat":-0.229671",
			"lon":131.037
		),
		{
			"nama_kabkota":"Kab. Tambrauw",
			"value":"50.510681",
			"lat":-0.719501",
			"lon":132.355
		),
		{
			"nama_kabkota":"Kab. Maybrat",
			"value":"65.995493",
			"lat":-1.43974",
			"lon":132.338
		),
		{
			"nama_kabkota":"Kota Sorong",
			"value":"77.17925",
			"lat":-0.927203",
			"lon":131.366
		),
		{
			"nama_kabkota":"Kab. Merauke",
			"value":"65.729166",
			"lat":-7.9868",
			"lon":139.839
		),
		{
			"nama_kabkota":"Kab. Jayawijaya",
			"value":"56.237574",
			"lat":-3.95492",
			"lon":139.031
		),
		{
			"nama_kabkota":"Kab. Jayapura",
			"value":"72.247664",
			"lat":-3.0866",
			"lon":140.033
		),
		{
			"nama_kabkota":"Kab. Nabire",
			"value":"66.814458",
			"lat":-3.46936",
			"lon":135.302
		),
		{
			"nama_kabkota":"Kab. Yapen Waropen",
			"value":"69.690748",
			"lat":-1.75587",
			"lon":136.161
		),
		{
			"nama_kabkota":"Kab. Biak Numfor",
			"value":"69.947538",
			"lat":-0.912187",
			"lon":135.872
		),
		{
			"nama_kabkota":"Kab. Paniai",
			"value":"59.897791",
			"lat":-3.78484",
			"lon":136.459
		),
		{
			"nama_kabkota":"Kab. Puncak Jaya",
			"value":"68.26943",
			"lat":-3.39141",
			"lon":138.025
		),
		{
			"nama_kabkota":"Kab. Mimika",
			"value":"69.089592",
			"lat":-4.45002",
			"lon":136.341
		),
		{
			"nama_kabkota":"Kab. Boven Digoel",
			"value":"50.205518",
			"lat":-6.18709",
			"lon":140.378
		),
		{
			"nama_kabkota":"Kab. Mappi",
			"value":"50.452048",
			"lat":-6.31382",
			"lon":139.264
		),
		{
			"nama_kabkota":"Kab. Asmat",
			"value":"51.548444",
			"lat":-5.44092",
			"lon":138.728
		),
		{
			"nama_kabkota":"Kab. Yahukimo",
			"value":"49.585002",
			"lat":-4.44653",
			"lon":139.463
		),
		{
			"nama_kabkota":"Kab. Pegunungan Bintang",
			"value":"48.988612",
			"lat":-4.54753",
			"lon":140.526
		),
		{
			"nama_kabkota":"Kab. Tolikara",
			"value":"51.995232",
			"lat":-3.53772",
			"lon":138.863
		),
		{
			"nama_kabkota":"Kab. Sarmi",
			"value":"66.835433",
			"lat":-2.58306",
			"lon":139.134
		),
		{
			"nama_kabkota":"Kab. Keerom",
			"value":"69.256426",
			"lat":-3.24333",
			"lon":140.545
		),
		{
			"nama_kabkota":"Kab. Waropen",
			"value":"63.265996",
			"lat":-2.68118",
			"lon":136.578
		),
		{
			"nama_kabkota":"Kab. Supiori",
			"value":"68.459186",
			"lat":-0.75568",
			"lon":135.558
		),
		{
			"nama_kabkota":"Kab. Mamberamo Raya",
			"value":"59.387899",
			"lat":-2.39784",
			"lon":137.878
		),
		{
			"nama_kabkota":"Kab. Nduga",
			"value":"48.022359",
			"lat":-4.34969",
			"lon":138.305
		),
		{
			"nama_kabkota":"Kab. Lanny Jaya",
			"value":"49.902824",
			"lat":-3.85485",
			"lon":138.37
		),
		{
			"nama_kabkota":"Kab. Mamberamo Tengah",
			"value":"48.95891",
			"lat":-3.61216",
			"lon":139.172
		),
		{
			"nama_kabkota":"Kab. Yalimo",
			"value":"48.549962",
			"lat":-3.79591",
			"lon":139.555
		),
		{
			"nama_kabkota":"Kab. Puncak",
			"value":"48.995891",
			"lat":-3.5955",
			"lon":137.472
		),
		{
			"nama_kabkota":"Kab. Dogiyai",
			"value":"50.02619",
			"lat":-3.72869",
			"lon":135.997
		),
		{
			"nama_kabkota":"Kab. Intan Jaya",
			"value":"48.415707",
			"lat":-4.07561",
			"lon":136.341
		),
		{
			"nama_kabkota":"Kab. Deiyai",
			"value":"48.569486",
			"lat":-3.59701",
			"lon":136.599
		),
		{
			"nama_kabkota":"Kota Jayapura",
			"value":"75.757261",
			"lat":-2.6529",
			"lon":140.772
		)
	];
});

