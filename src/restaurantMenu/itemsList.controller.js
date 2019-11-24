(function(){
	'use strict';
	angular.module("RestaurantApp")
	.controller('ItemDetailController', ItemDetailController);

	// 'item' is injected through state's resolve
	ItemDetailController.$inject = ['itemsList'];
	function ItemDetailController(itemsList) {
	  var itemDetail = this;
	  itemDetail.sortedItems=itemsList;
		itemDetail.display=function (){
			console.log("In display");
		};
	}
})();
