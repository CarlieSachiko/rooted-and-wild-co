angular.module('app')
  .factory('Bouquet', bouquetService);

bouquetService.$inject = ['$resource'];

function bouquetService($resource) {
  // return $resource('/api/bouquets/:id', {id: '@_id'});
}
