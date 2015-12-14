angular.module('photo.controllers', [])

.controller('contentCtrl', function (Content) {
	var vm = this;
	vm.tags = [];


	vm.get = function(tag) {
		vm.tags = Content.get(tag);
	};

})