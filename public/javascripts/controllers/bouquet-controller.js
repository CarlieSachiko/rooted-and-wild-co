angular.module('shopApp')
  .controller('BouquetController', BouquetController);

BouquetController.$inject = ['$http', 'BouquetService', 'CartService'];

function BouquetController($http, BouquetService, CartService) {
  var vm = this;
  vm.bouquets = BouquetService.query();
  vm.addItem = CartService.addItem;
}
