angular.module('app')
  .controller('CartController', CartController);

CartController.$inject = ['CartService', 'UserService'];

function CartController(CartService, UserService) {
  var vm = this;

  vm.isLoggedIn = UserService.isLoggedIn;

  vm.cart = CartService.getCart();

  vm.isLoggedIn = UserService.isLoggedIn;

  vm.changeItemQty = function (item, newQty) {
    CartService.changeItemQty(item, newQty);
    item.qty = newQty;
  };

  vm.getTotal = function(){
    var total = 0;
    for(var i = 0; i < vm.cart.length; i++){
        var item = vm.cart[i];
        total += (item.price * item.qty);
    }
    return total;
  }

  vm.removeItem = function(item) {
    CartService.removeItem(item);
    var itemIdx = vm.cart.findIndex(i => i._id === item._id);
    if(itemIdx != -1) {
      vm.cart.splice(itemIdx, 1);
    };
  }

}
