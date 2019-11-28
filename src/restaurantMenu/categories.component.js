(function () {
  'use strict';

  angular.module('RestaurantApp')
  .component('categoriesList', {
    templateUrl: 'src/restaurantMenu/templates/categories.template.html',
    bindings: {
      categories: '<',
      }
  });

})();
