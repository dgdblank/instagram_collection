angular.module('photo.factories', [])

.factory('Content', function ($http, CONFIG) {
	
	var contentFactory = {};

	function callback(input) {
		console.log(input);
	}

	contentFactory.post = function (content) {
		return $http({
			method: "POST",
			url: "/collections",
			dataType: 'jsonp',
			data: content
		}).then(function(res) {

		});
	};

	contentFactory.get = function(tag) {
		var tagName = tag.split(' ').join('+');
		return $http.jsonp('https://api.instagram.com/v1/tags/'+tagName+'/media/recent?access_token='+CONFIG.INSTAGRAM_TOKEN+'&callback=JSON_CALLBACK'
		).then(function(tags) {
			return tags.data.data;

		});
	};

	return contentFactory;
});