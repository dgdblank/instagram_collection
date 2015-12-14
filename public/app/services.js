angular.module('photo.factories', [])

.factory('Content', function ($http, CONFIG) {
	
	var contentFactory = {};

	contentFactory.post = function (content) {
		return $http({
			method: "POST",
			url: "/collections",
			data: content
		}).then(function(res) {

		});
	};

	contentFactory.get = function(tag) {
		var tagName = tag.split(' ').join('+');
		return $http({
			method: "GET",
			url: 'https://api.instagram.com/v1/tags/'+tagName+'/media/recent?access_token='+CONFIG.INSTAGRAM_TOKEN,
		}).then(function(tags) {
			return tags.data;
		});
	};

	return contentFactory;
});