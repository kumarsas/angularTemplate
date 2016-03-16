var app = angular.module( 'angularApp.modules.link2', []);

app.config( ['$routeProvider', function( $routeProvider ){
	$routeProvider
		.when('/link2', {
			templateUrl:'modules/link2/linkTwo.html'
		});
}]);

app.controller('link2Ctrl', function( $scope ){
	$scope.title='About'
})