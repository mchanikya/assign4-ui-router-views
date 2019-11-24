(function(){
  'use strict';

  angular.module("RestaurantApp")
	.service('fetchItemCategories',fetchItemCategories);

  fetchItemCategories.$inject=['$http'];
  function fetchItemCategories($http){
  	var service = this;
    service.Catlog = [];
    service.items=[];
    service.list=[];

    service.getItems=function(){
        return service.items;
  	}

    service.setDetails=function(cats,itemsList){
      service.Catlog=cats;
      service.items=itemsList;
    }
  	service.getMenuItems = function(){
  		var response= $http({
  			method: 'GET',
  			url: ('http://davids-restaurant.herokuapp.com/menu_items.json')
  		});
  		return response;
  	};
  }

})();
