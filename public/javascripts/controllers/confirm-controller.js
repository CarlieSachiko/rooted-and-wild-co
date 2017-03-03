angular.module('app')
  .controller('ConfirmController', ConfirmController);

ConfirmController.$inject = ['OrderService', '$stateParams'];

function ConfirmController(OrderService, $stateParams) {
  var vm = this;

  if ($stateParams.orderId) {
    OrderService.get({id: $stateParams.orderId}, function(order) {
      vm.order = order;
    });
  }

}
