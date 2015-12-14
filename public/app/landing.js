angular.module('photo.controllers', [])

.controller('contentCtrl', function (Content) {
	var vm = this
	vm.options = [];


	vm.get = function(tag) {
		Content.get(tag).then(function(data) {
			vm.options = data;
		});
	};

})