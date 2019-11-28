(function(){
	'use strict';
	angular.module("RestaurantApp")
	.controller('CategoriesAppController',CategoriesAppController);

	CategoriesAppController.$inject=['fetchItemCategories'];
	function CategoriesAppController(fetchItemCategories){
		var ctrl = this;
		ctrl.cats=[];
		// List of shopping items
		ctrl.items = [];

		var promise = fetchItemCategories.getMenuItems();
		promise.then(function(itemCategories){
			ctrl.cats =itemCategories.data;
		}).catch(function(){
			console.log("Failed to fetch restuarant menu");
		});
	}
})();
