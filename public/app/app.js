var app = angular.module('photo', 
[
'ui.router',
'photo.config',
'photo.factories',
'photo.controllers'
])

app.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

	$stateProvider
		.state('landing', {
		url: '/',
		templateUrl: 'app/landing.html'
		});

	$urlRouterProvider.otherwise('/');
});