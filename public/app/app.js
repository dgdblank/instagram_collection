var app = angular.module('photo', 
[
'ui.router',
'photo.config',
'photo.factories',
'photo.controllers'
])

app.config(function ($stateProvider, $urlRouterProvider) {

	// Enable cross-domain calls
	// $httpProvider.defaults.useXDomain = true;
	//Remove the header used to identify ajax call  that would prevent CORS from working
    // delete $httpProvider.defaults.headers.common['X-Requested-With'];

	$stateProvider
		.state('landing', {
		url: '/',
		templateUrl: 'app/landing.html'
		});

	$urlRouterProvider.otherwise('/');
});