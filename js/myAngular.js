var youBike = angular.module('uBike', []);

youBike.controller('BikeListCtrl', function ($scope, $http) {
	$http.get("http://lab.dennyhuang.me/ubike.php").success(function(response) {$scope.stationData = response.retVal;}),
	console.log("Success!");
});
