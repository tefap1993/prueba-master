
webApp.filter('slice', function () {
	return function (arr, startFilter, endFilter) {
		return arr.slice(startFilter, endFilter);
	};
});
webApp.controller('itemList', ['$scope', function($scope){
	$scope.tableContent = [
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 200.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 100.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 50.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 200.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 100.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 50.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 200.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 100.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 50.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 100.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 100.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 50.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 100.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 200.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 100.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 50.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 200.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 100.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 50.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 200.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 100.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 50.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 100.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 100.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 50.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 100.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 200.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 100.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 50.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 200.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 100.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 50.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 200.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 100.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 50.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 100.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 100.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 50.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 100.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 200.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 100.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 50.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 200.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 100.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 50.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 200.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 100.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 50.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 100.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 100.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 50.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 100.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 200.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 100.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 50.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 200.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 100.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 50.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 200.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 100.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 50.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 100.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 100.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 50.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 100.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 200.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 100.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 50.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 200.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 100.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 50.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 200.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 100.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 50.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 100.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 100.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 50.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 100.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 200.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 100.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 50.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 200.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 100.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 50.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 200.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 100.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 50.000'
		},
		{
			Lorem: 'xxxxxx',
			Ipsum: 'xxxxxx',
			Dolor: 'xxxxxx',
			Sit: 'xxxxxx',
			Amet: '$ 100.000'
		}
	];

	$scope.startFilter = 0;
  $scope.endFilter = 9;
	$scope.totalItems = $scope.tableContent.length;
	$scope.currentPage = 1;
	$scope.itemsPerPage = 10,

	$scope.$watch('currentPage', function() {
		var begin = ($scope.currentPage - 1) * $scope.itemsPerPage;
    var end = begin + $scope.itemsPerPage;
		$scope.startFilter = begin;
		$scope.endFilter = end;

  });
	$scope.closedPanel = true;
	$scope.togglePanel = function () {
		this.closedPanel = !this.closedPanel;
	};	
	
}]);