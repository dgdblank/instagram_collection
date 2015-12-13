
angular.module('insta.services', ['insta.config'])

.factory('Content', 'INSTAGRAM_TOKEN', function ($http) {
	var post = function (content) {
		return $http({
			method: "POST",
			url: "/collections",
			data: content
		}).then(function(res) {

		});
	};

	var get = function(tag) {
		var tagName = tag.split(' ').join('+');
		return $http({
			method: "GET",
			url: 'https://api.instagram.com/v1/tags/'+tagName+'/media/recent?access_token='+INSTAGRAM_TOKEN
		}).then(function(tags) {
			return tags.data;
		});
	};
});