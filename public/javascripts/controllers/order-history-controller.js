angular.module('app')
  .controller('OrderHistoryController', OrderHistoryController);

OrderHistoryController.$inject = ['OrderService', 'UserService'];

function OrderHistoryController(OrderService, UserService) {
  var vm = this;

  vm.user = UserService.getUser();

  UserService.getOrders(vm.user._id).then(function(res) {
    vm.orders = res.data.orders;
  })

}
