(function(){
  'use strict';

  angular.module("RestaurantApp")
	.service('fetchItemCategories',fetchItemCategories);

  fetchItemCategories.$inject=['$http'];
  function fetchItemCategories($http){
  	var service = this;
  	service.getMenuItems = function(){
  		var response= $http({
  			method: 'GET',
  			url: ('https://davids-restaurant.herokuapp.com/categories.json')
  		});
  		return response;
  	};
    
  service.getMenuForCategory = function (shortName) {
    var response = $http({
      method: "GET",
      url: 'https://davids-restaurant.herokuapp.com/menu_items.json',
      params: {
        category: shortName
      }
    });
    return response;
  };

  }



})();
