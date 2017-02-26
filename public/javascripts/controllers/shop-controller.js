angular.module('app')
.controller('ShopController', ShopController);

ShopController.$inject = ['$state', 'UserService'];

function ShopController($state, UserService) {
  var vm = this;

  vm.logout = function() {
    UserService.logout().then(function() {
      $state.go('shop-home');
    });
  };

  vm.getUser = UserService.getUser;
  vm.isLoggedIn = UserService.isLoggedIn;

}
