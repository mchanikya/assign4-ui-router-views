(function(){
	'use strict';
	angular.module("RestaurantApp")
	.controller('CategoriesAppController',CategoriesAppController);

	CategoriesAppController.$inject=['fetchItemCategories'];
	function CategoriesAppController(fetchItemCategories){
		var CategoriesItems = this;
		CategoriesItems.cats=[];
		// List of shopping items
		CategoriesItems.items = [];

		var promise = fetchItemCategories.getMenuItems();
		promise.then(function(itemCategories){
			CategoriesItems.cats =itemCategories.data;
		}).catch(function(){
			console.log("Failed to fetch restuarant menu");
		});
	}
})();
