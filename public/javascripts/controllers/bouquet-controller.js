angular.module('app')
  .controller('BouquetController', BouquetController);

BouquetController.$inject = ['$http', 'BouquetService', 'CartService', '$timeout'];

function BouquetController($http, BouquetService, CartService, $timeout) {
  var vm = this;
  vm.bouquets = BouquetService.query();

  vm.addItem = function(item) {
    CartService.addItem(item);
    toastr.success('Added to cart!');
  }

}
