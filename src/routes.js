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
					var rList=fetchItemCategories.getItems();
					var sList=[];
					if (rList.length>0) {
						for (var i = 0; i<rList.length; i++){
							if (rList[i].short_name[0]==$stateParams.itemId) {
								sList.push(rList[i]);
							}
						}
						return rList;
					}else{
						return ['1','2','5','3'];
					}
				}]
			}
		});

	}

})();
