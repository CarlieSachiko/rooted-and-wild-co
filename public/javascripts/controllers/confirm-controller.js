angular.module('app')
  .controller('ConfirmController', ConfirmController);

ConfirmController.$inject = ['OrderService', 'CartService'];

function ConfirmController(OrderService, CartService) {
  var vm = this;
}
