(function () {
  'use strict';

  angular.module('RestaurantApp')
  .component('itemsList', {
    templateUrl: 'src/restaurantMenu/templates/itemsList.template.html',
    bindings: {
      itemdetails: '<',
      heading:'<'
    }
  });

})();
