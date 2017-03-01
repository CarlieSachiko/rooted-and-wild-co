(function() {
'use strict';

angular.module('app')
  .filter('flowerType', function() {
    return function(bouquet, flower) {
      if (bouquet.flowers_used.includes(flower)){
        return bouquet;
      };
    };
  });

})();
