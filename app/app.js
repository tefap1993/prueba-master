webApp = angular.module('WebApp', ['ngRoute', 'ui.bootstrap']);

webApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		otherwise({
			templateUrl: '/views/item-list.html',
			controller: 'itemList'
		});
}]);