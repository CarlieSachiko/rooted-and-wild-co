angular.module('shopApp')
.controller('ShopNavController', ShopNavController);

ShopController.$inject = ['$state', 'UserService'];

function ShopNavController($state, UserService) {
  var vm = this;

  vm.logout = function() {
    UserService.logout();
    $state.go('shop-home');
  };

  vm.getUser = UserService.getUser;
  vm.isLoggedIn = UserService.isLoggedIn;

}
