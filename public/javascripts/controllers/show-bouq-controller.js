angular.module('app')
  .controller('ShowBouqController', ShowBouqController);

ShowBouqController.$inject = ['$http', 'BouquetService', '$stateParams', 'CartService'];

function ShowBouqController($http, BouquetService, $stateParams, CartService) {
  var vm = this;

  if ($stateParams.bouqId) {
    BouquetService.get({id: $stateParams.bouqId}, function(bouquet) {
      vm.bouquet = bouquet;
    });
  }

  vm.addItemFromShow = function() {
    CartService.addItemFromShow(vm.bouquet, vm.qty);
    toastr.success('Added to cart!');
  }
}
