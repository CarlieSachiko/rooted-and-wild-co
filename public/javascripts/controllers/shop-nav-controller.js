angular.module('shopApp')
.controller('ShopNavController', ShopNavController);

ShopNavController.$inject = ['$state', 'UserService', 'CartService'];

function ShopNavController($state, UserService, CartService) {
  var vm = this;

  vm.logout = function() {
    UserService.logout();
    $state.go('shop-home');
  };

  vm.getUser = UserService.getUser;
  vm.isLoggedIn = UserService.isLoggedIn;
  vm.getCart = CartService.getCart;

}
