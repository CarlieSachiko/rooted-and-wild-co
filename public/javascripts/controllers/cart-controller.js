angular.module('shopApp')
  .controller('CartController', CartController);

CartController.$inject = ['$http', 'BouquetService', '$stateParams', 'CartService'];

function CartController($http, BouquetService, $stateParams, CartService) {
  var vm = this;

  vm.cart = CartService.getCart();

  vm.changeItemQty = function (item, newQty) {
    CartService.changeItemQty(item, newQty);
    item.qty = newQty;
  };

}
