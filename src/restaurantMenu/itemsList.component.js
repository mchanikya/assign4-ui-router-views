(function () {
  'use strict';

  angular.module('RestaurantApp')
  .component('items', {
    templateUrl: 'src/restaurantMenu/templates/items.template.html',
    bindings: {
      items: '<'
    }
  });

})();