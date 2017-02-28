angular.module('shopApp')
  .controller('DetailController', DetailController);

DetailController.$inject = ['$http', 'BouquetService', '$stateParams'];

function DetailController($http, BouquetService, $stateParams) {
  var vm = this;

  if ($stateParams.bouqId) {
    BouquetService.get({id: $stateParams.bouqId}, function(bouquet) {
      vm.bouquet = bouquet;
    });
  }
}
