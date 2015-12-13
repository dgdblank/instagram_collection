var app = angular.module('insta', 
[
'ui.router'
])

app.config(function ($stateProvider, $urlRouterProvider) {

	$stateProvider

	.state('landing', {
	url: '/',
	templateUrl: 'app/landing.html'
	});

	$urlRouterProvider.otherwise('/');
});