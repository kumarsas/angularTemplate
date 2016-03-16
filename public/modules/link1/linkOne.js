var app = angular.module( 'angularApp.modules.link1', []);

app.config( ['$routeProvider', function( $routeProvider ){
	$routeProvider
		.when('/link1', {
			templateUrl:'modules/link1/linkOne.html',
			//controller: 'link1Ctrl'
		});
}]);

app.controller('link1Ctrl', function( $scope ){
	$scope.title='Home'
})
