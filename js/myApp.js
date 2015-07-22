$(document).ready(function() {
	// location;

	$.ajax({
		url:'http://lab.dennyhuang.me/ubike.php',
		type: 'GET',
		dataType: 'json',
		success: function(data, textStatus, jqXMR) {
			console.log(data);
			console.log( data.retVal[0].lat);
			console.log( data.retVal[0].lng);

			// location = {
			// 	lat: data.retVal[0].lat,
			// 	lng: data.retVal[0].lng
			// }

			$('.map').tinyMap({
				'center': [data.retVal[0].lng, data.retVal[0].lat],
				'zoom': 14,
			})
		}
	})
});
