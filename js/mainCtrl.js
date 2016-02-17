
app.controller('mainCtrl', function($scope, dataService){
	$scope.quotes = dataService.getData();
	$scope.addQuote = function() {
		dataService.addData($scope.inputQuote);
		//$scope.quotes = dataService.getData();
	}
	$scope.removeQuote = function() {
		dataService.removeData($scope.removeMe);
		$scope.quotes = dataService.getData();
	}
});

