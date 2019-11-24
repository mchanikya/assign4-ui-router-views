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
				CategoriesItems.items=itemCategories.data.menu_items
			if (CategoriesItems.cats.length==0) {
				 var ct1 = 'A';
				 CategoriesItems.cats = [];
				 CategoriesItems.cats.push(ct1);
				 for (var i = 0; i < itemCategories.data.menu_items.length; i++) {
				 		if ( itemCategories.data.menu_items[i].short_name[0] !== ct1)
						{
							if (CategoriesItems.cats.indexOf(ct1) == -1) {
								CategoriesItems.cats.push(ct1);
							}
							ct1 = itemCategories.data.menu_items[i].short_name[0];
						}
				 }
		 }
		fetchItemCategories.setDetails(CategoriesItems.cats,CategoriesItems.items);
		}).catch(function(){
			console.log("Failed to fetch restuarant menu");
		});
	}
})();
