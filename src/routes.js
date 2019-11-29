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
			templateUrl:'src/restaurantMenu/templates/main-categories.template.html',
			controller: 'CategoriesAppController as ctrl'
		})
		.state('items',{
			url: '/items/{itemId}',
			templateUrl:'src/restaurantMenu/templates/main-itemsList.template.html',
			controller: 'ItemDetailController as itemDetail',
			resolve:{
				listItems:['fetchItemCategories','$q','$timeout',function(fetchItemCategories,$q,$timeout){
					var deferred=$q.defer();
					var iList=[]
					fetchItemCategories.getMenuForCategory().then(function(data){
						iList=data.data.menu_items;
					})
					.catch(function () {
						console.log("Error");
					});
				    // Wait 2 seconds before returning
				    $timeout(function () {
				      // deferred.reject(items);
				      deferred.resolve(iList);
				    }, 800);
					return deferred.promise;
				}]
			}
		});

	}

})();
