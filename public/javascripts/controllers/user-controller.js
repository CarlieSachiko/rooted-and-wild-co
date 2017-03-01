angular.module('app')
.controller('UserController', UserController);

UserController.$inject = ['$state', 'UserService'];

function UserController($state, UserService) {
  var vm = this;
  vm.signupErrMsg = false;
  vm.loginErrMsg = false;

  vm.signup = function() {
    UserService.signup(vm.user).then(function() {
      $state.go('shop.index');
    }, function() {
      $state.go('shop.signup');
      vm.signupErrMsg = true;
    });
    vm.user = {};
  };

  vm.login = function() {
    UserService.login(vm.user).then(function() {
      $state.go('shop.index');
    }, function() {
      $state.go('shop.login');
      vm.loginErrMsg = true;
    });
    vm.user = {};
  };

}
