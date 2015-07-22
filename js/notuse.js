	
//

	/*$('#btn_address').click(function(){
		$.ajax({
			url: 'https://maps.googleapis.com/maps/api/geocode/json',
			type: 'get',
			dataType: 'json',
			data: {
				'address': $('#address').val()	
			},
			success: function(data){
				console.log( data);

				$('.map').tinyMap({
					'center': [data.results[0].geometry.location.lat, data.results[0].geometry.location.lng],
				 	'zoom': 14,
				})
			}
		});
	});*/