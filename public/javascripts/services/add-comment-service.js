angular.module('app')
  .factory('AddCommentService', AddCommentService);

AddCommentService.$inject = ['$resource'];

function AddCommentService($resource) {
  return $resource(
    '/api/blog-posts/:id',
    {id: '@_id'},
    {
      'update': { method: 'PUT'}
    }
  );
}
