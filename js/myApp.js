$(document).ready(function() {
    // location;
    myLocation = {};
    var w = new OpenWeatherMap();
    w.getGeoLocation(function(pos) {
        bikeInfo = []
        myLocation.myLat = pos.coords.latitude,
            myLocation.myLng = pos.coords.longitude,
            $.ajax({
                url: 'http://lab.dennyhuang.me/ubike.php',
                type: 'GET',
                dataType: 'json',
                success: function(data, textStatus, jqXMR) {
                    for (var i = 0; i <= data.retVal.length - 1; i++) {
                        bikeInfo[i] = {
                            'addr': [data.retVal[i].lat, data.retVal[i].lng],
                            'text': '<p class="lead">' + data.retVal[i].sna + '</p>' +
                            		'<p>剩餘車輛：' + data.retVal[i].sbi + '</p>' +
                            		'<p>總車位：' + data.retVal[i].tot + '</p>'
                        }
                    }
                    $('.map').tinyMap({
                        'center': [myLocation.myLat, myLocation.myLng],
                        'zoom': 14,
                        'marker': [bikeInfo[0],bikeInfo[1],bikeInfo[2],bikeInfo[3],bikeInfo[4],bikeInfo[5],bikeInfo[6],bikeInfo[7],bikeInfo[8],bikeInfo[9],bikeInfo[10],bikeInfo[11],bikeInfo[12],bikeInfo[13],bikeInfo[14],bikeInfo[15],bikeInfo[16],bikeInfo[17],bikeInfo[18],bikeInfo[19],bikeInfo[20],bikeInfo[21],bikeInfo[22],bikeInfo[23],bikeInfo[24],bikeInfo[25],bikeInfo[26],bikeInfo[27],bikeInfo[28],bikeInfo[29],bikeInfo[30],bikeInfo[31],bikeInfo[32],bikeInfo[33],bikeInfo[34],bikeInfo[35],bikeInfo[36],bikeInfo[37],bikeInfo[38],bikeInfo[39],bikeInfo[40],bikeInfo[41],bikeInfo[42],bikeInfo[43],bikeInfo[44],bikeInfo[45],bikeInfo[46],bikeInfo[47],bikeInfo[48],bikeInfo[49],bikeInfo[50],bikeInfo[51],bikeInfo[52],bikeInfo[53],bikeInfo[54],bikeInfo[55],bikeInfo[56],bikeInfo[57],bikeInfo[58],bikeInfo[59],bikeInfo[60],bikeInfo[61],bikeInfo[62],bikeInfo[63],bikeInfo[64],bikeInfo[65],bikeInfo[66],bikeInfo[67],bikeInfo[68],bikeInfo[69],bikeInfo[70],bikeInfo[71],bikeInfo[72],bikeInfo[73],bikeInfo[74],bikeInfo[75],bikeInfo[76],bikeInfo[77],bikeInfo[78],bikeInfo[79],bikeInfo[80],bikeInfo[81],bikeInfo[82],bikeInfo[83],bikeInfo[84],bikeInfo[85],bikeInfo[86],bikeInfo[87],bikeInfo[88],bikeInfo[89],bikeInfo[90],bikeInfo[91],bikeInfo[92],bikeInfo[93],bikeInfo[94],bikeInfo[95],bikeInfo[96],bikeInfo[97],bikeInfo[98],bikeInfo[99],bikeInfo[100],bikeInfo[101],bikeInfo[102],bikeInfo[103],bikeInfo[104],bikeInfo[105],bikeInfo[106],bikeInfo[107],bikeInfo[108],bikeInfo[109],bikeInfo[110],bikeInfo[111],bikeInfo[112],bikeInfo[113],bikeInfo[114],bikeInfo[115],bikeInfo[116],bikeInfo[117],bikeInfo[118],bikeInfo[119],bikeInfo[120],bikeInfo[121],bikeInfo[122],bikeInfo[123],bikeInfo[124],bikeInfo[125],bikeInfo[126],bikeInfo[127],bikeInfo[128],bikeInfo[129],bikeInfo[130],bikeInfo[131],bikeInfo[132],bikeInfo[133],bikeInfo[134],bikeInfo[135],bikeInfo[136],bikeInfo[137],bikeInfo[138],bikeInfo[139],bikeInfo[140],bikeInfo[141],bikeInfo[142],bikeInfo[143],bikeInfo[144],bikeInfo[145],bikeInfo[146],bikeInfo[147],bikeInfo[148],bikeInfo[149],bikeInfo[150],bikeInfo[151],bikeInfo[152],bikeInfo[153],bikeInfo[154],bikeInfo[155],bikeInfo[156],bikeInfo[157],bikeInfo[158],bikeInfo[159],bikeInfo[160],bikeInfo[161],bikeInfo[162],bikeInfo[163],bikeInfo[164],bikeInfo[165],bikeInfo[166],bikeInfo[167],bikeInfo[168],bikeInfo[169],bikeInfo[170],bikeInfo[171],bikeInfo[172],bikeInfo[173],bikeInfo[174],bikeInfo[175],bikeInfo[176],bikeInfo[177],bikeInfo[178],bikeInfo[179],bikeInfo[180],bikeInfo[181],bikeInfo[182],bikeInfo[183],bikeInfo[184],bikeInfo[185],bikeInfo[186],bikeInfo[187],bikeInfo[188],bikeInfo[189],bikeInfo[190],bikeInfo[191],bikeInfo[192],bikeInfo[193],bikeInfo[194],bikeInfo[195],bikeInfo[196],bikeInfo[197],bikeInfo[198],bikeInfo[199],bikeInfo[200],bikeInfo[201],bikeInfo[202],bikeInfo[203],bikeInfo[204],bikeInfo[205],bikeInfo[206],bikeInfo[207],bikeInfo[208],bikeInfo[209],bikeInfo[210],bikeInfo[211],bikeInfo[212],bikeInfo[213],bikeInfo[214],bikeInfo[215],bikeInfo[216],bikeInfo[217],bikeInfo[218],bikeInfo[219],bikeInfo[220],bikeInfo[221],bikeInfo[222],bikeInfo[223],bikeInfo[224],bikeInfo[225],bikeInfo[226],bikeInfo[227],bikeInfo[228],bikeInfo[229],bikeInfo[230],bikeInfo[231],bikeInfo[232],bikeInfo[233],bikeInfo[234],bikeInfo[235],bikeInfo[236],bikeInfo[237],bikeInfo[238],bikeInfo[239],bikeInfo[240],bikeInfo[241],bikeInfo[242],bikeInfo[243],bikeInfo[244],bikeInfo[245],bikeInfo[246],bikeInfo[247],bikeInfo[248],bikeInfo[249],bikeInfo[250],bikeInfo[251],bikeInfo[252],bikeInfo[253],bikeInfo[254],bikeInfo[255],bikeInfo[256],bikeInfo[257],bikeInfo[258],bikeInfo[259],bikeInfo[260],bikeInfo[261],bikeInfo[262],bikeInfo[263],bikeInfo[264],bikeInfo[265],bikeInfo[266],bikeInfo[267],bikeInfo[268],bikeInfo[269],bikeInfo[270],bikeInfo[271],bikeInfo[272],bikeInfo[273],bikeInfo[274],bikeInfo[275],bikeInfo[276],bikeInfo[277],bikeInfo[278],bikeInfo[279],bikeInfo[280],bikeInfo[281],bikeInfo[282],bikeInfo[283],bikeInfo[284],bikeInfo[285],bikeInfo[286],bikeInfo[287],bikeInfo[288],bikeInfo[289],bikeInfo[290],bikeInfo[291],bikeInfo[292],bikeInfo[293],bikeInfo[294],bikeInfo[295],bikeInfo[296],bikeInfo[297],bikeInfo[298],bikeInfo[299],bikeInfo[300],bikeInfo[301],bikeInfo[302],bikeInfo[303],bikeInfo[304],bikeInfo[305],bikeInfo[306],bikeInfo[307],bikeInfo[308],bikeInfo[309],bikeInfo[310],bikeInfo[311],bikeInfo[312],bikeInfo[313],bikeInfo[314],bikeInfo[315],bikeInfo[316],bikeInfo[317],bikeInfo[318],bikeInfo[319],bikeInfo[320],bikeInfo[321],bikeInfo[322],bikeInfo[323],bikeInfo[324],bikeInfo[325],bikeInfo[326],bikeInfo[327],bikeInfo[328],bikeInfo[329],bikeInfo[330],bikeInfo[331],bikeInfo[332],bikeInfo[333],bikeInfo[334],bikeInfo[335],bikeInfo[336],bikeInfo[337],bikeInfo[338],bikeInfo[339],bikeInfo[340],bikeInfo[341],bikeInfo[342],bikeInfo[343],bikeInfo[344],bikeInfo[345],bikeInfo[346],bikeInfo[347],bikeInfo[348]]
                    })
                }
            })
    });


    $.fn.tinyMapConfigure({
        'api': 'https://maps.google.com/maps/api/js',
        'sensor': true,
        'language': 'zh-TW',
        'key': 'AIzaSyBjfyvS-HtNqzI8A2s6-KD_w0YlK_ejPOE',
    });
});
