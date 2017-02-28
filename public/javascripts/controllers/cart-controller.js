angular.module('shopApp')
  .controller('CartController', CartController);

CartController.$inject = ['$http', 'BouquetService', '$stateParams'];

function CartController($http, BouquetService, $stateParams) {
  var vm = this;

  vm.addToCart = function(id) {
    console.log(id);
  }

}
