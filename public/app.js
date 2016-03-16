var app = angular.module( 'angularApp', [
	'ngRoute',
	'angularApp.modules.link1',
	'angularApp.modules.link2'
]);

/*app.config( ['$routeProvider', function( $routeProvider ){
	$routeProvider
		.otherwise({
			redirectTo: '/'
		})
}]);*/


app.controller('appCtrl', function( $scope ){
	$scope.title1='Home'
})


