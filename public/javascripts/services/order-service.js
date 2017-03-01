angular.module('app')
  .factory('OrderService', OrderService);

OrderService.$inject = ['UserService', 'CartService', '$resource'];

function OrderService(UserService, CartService, $resource) {
  return $resource('/api/orders/:id', {id: '@_id'});
}
