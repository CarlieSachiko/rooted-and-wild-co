angular.module('app')
  .controller('CheckoutController', CheckoutController);

CheckoutController.$inject = ['CartService', 'UserService', 'OrderService', '$state'];

function CheckoutController(CartService, UserService, OrderService, $state) {
  var vm = this;

  vm.cart = CartService.getCart();

  vm.getTotal = function(){
    var total = 0;
    for(var i = 0; i < vm.cart.length; i++){
        var item = vm.cart[i];
        total += (item.price * item.qty);
    }
    return total;
  }

  vm.tax = vm.getTotal() * .0725

  vm.totalPrice = vm.getTotal() + (vm.getTotal() * .0725);

  vm.submitOrder = function() {
    // if (vm.address, vm.city, vm.state, vm.zipcode, vm.payMethod){
      var user = UserService.getUser();
      OrderService.save({
        items: vm.cart,
        customer_id: user,
        delivery_address: vm.address,
        delivery_city: vm.city,
        delivery_state: vm.state,
        delivery_zipcode: vm.zipcode,
        total_price: vm.totalPrice,
        payment_method: vm.payMethod
      }, function(order) {
        console.log(order);
        $state.go('shop.confirm-order', {orderId: order._id});
        UserService.addOrder(user, order._id, function(data) {
          console.log(data);
        });
      });
      CartService.clearCart();
      vm.cart = [];
    }
  // }

}
