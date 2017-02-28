angular.module('shopApp')
  .controller('BouquetController', BouquetController);

BouquetController.$inject = ['$http', 'BouquetService'];

function BouquetController($http, BouquetService) {
  var vm = this;
  vm.bouquets = BouquetService.query();
}
