(function(){
	'use strict';
	angular.module("RestaurantApp")
	.controller('CategoriesAppController',CategoriesAppController)
	.service('fetchItemCategories',fetchItemCategories);
	
	CategoriesAppController.$inject=['fetchItemCategories'];
	function CategoriesAppController(fetchItemCategories){
		var CategoriesItems = this;

		// List of shopping items
		CategoriesItems.items = [];

		// Pre-populate a no cookie list
		CategoriesItems.items.push({
			name: "Sugar",
			quantity: "2 bags",
			description: "Sugar used for baking delicious umm... baked goods."
		});
		CategoriesItems.items.push({
			name: "flour",
			quantity: "1 bags",
			description: "High quality wheat flour. Mix it with water, sugar, 2 raw eggs."
		});
		CategoriesItems.items.push({
			name: "Chocolate Chips",
			quantity: "3 bags",
			description: "Put these in the dough. No reason, really. Gotta store them somewhere!"
		});

		CategoriesItems.getItems = function () {
			console.log("In getItems");
			fetchItemCategories.getCategories();
			// return items;
		}
	}

	fetchItemCategories.$inject=['$q','$http'];
	function fetchItemCategories($q,$http){
		var service = this;
		service.getCategories = function () {
			console.log("In fetchItemCategories");
			// body...
		}
	}

})();