(function(){
	'use strict';
	angular.module("RestaurantApp")
	.controller('ItemDetailController', ItemDetailController);

	// 'item' is injected through state's resolve
	ItemDetailController.$inject = ['listItems']
	function ItemDetailController(listItems) {
		var itemDetail = this;
		itemDetail.sortedItems=listItems;
	}

})();
