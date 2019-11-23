(function(){
	'use strict';

	// angular.module('RestaurantApp',['ui.router']);

	angular.module('RestaurantApp')
	.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
	function RoutesConfig($stateProvider,$urlRouterProvider){
		// Redirect to home page if no other URL matches
		$urlRouterProvider.otherwise('/');

		// *** Set up UI states ***
		$stateProvider

		.state('/',{
			url: '/',
			templateUrl:'src/restaurantMenu/templates/home.template.html'
		})
		.state('categories',{
			url: '/categories',
			templateUrl:'src/restaurantMenu/templates/categories.template.html',
			controller: 'CategoriesAppController as ctrl'
		})
		.state('items',{
			url: '/items/{itemId}',
			templateUrl:'src/restaurantMenu/templates/itemsList.template.html',
			controller: 'ItemDetailController as itemDetail',
			resolve:{
				itemsList: ['$stateParams','fetchItemCategories',function($stateParams, fetchItemCategories){
					console.log("itemsList:",fetchItemCategories.getItems($stateParams.itemId));
					// var index = ctrl.getItemFilter($stateParams.itemId);
					// console.log("index:",index);
						return fetchItemCategories.getItems($stateParams.itemId);
				}]
			}
		});

	}

})();
