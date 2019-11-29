(function(){
	'use strict';
	angular.module("RestaurantApp")
	.controller('ItemDetailController', ItemDetailController);

	// 'item' is injected through state's resolve
	ItemDetailController.$inject = ['fetchItemCategories','$stateParams']
	function ItemDetailController(fetchItemCategories,$stateParams) {
		var itemDetail = this;
		itemDetail.sortedItems=[];
		var promise = fetchItemCategories.getMenuForCategory($stateParams.itemId);
		promise.then(function(itemCategories){
			itemDetail.sortedItems=itemCategories.data.menu_items;
		}).catch(function(){
			console.log("Failed to fetch restuarant menu");
		});
		itemDetail.removeItem=function(index){
			itemDetail.sortedItems.splice(index,1);
		};
	}

})();
