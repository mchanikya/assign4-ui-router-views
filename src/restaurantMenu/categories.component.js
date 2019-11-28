(function () {
'use strict';

angular.module('RestaurantApp')
.component('categories', {
  templateUrl: 'src/restaurantMenu/templates/categories.template.html',
  bindings: {
    categories: '<'
  }
});

})();