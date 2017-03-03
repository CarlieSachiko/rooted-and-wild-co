angular.module('app')
  .factory('CommentService', CommentService);

CommentService.$inject = ['$resource'];

function CommentService($resource) {
  return $resource(
    '/api/comments/:id',
    {id: '@_id'},
    {
      newForPost: {
        method: 'POST',
        url: '/api/blog-posts/:id/comments',
        params: {id: '@id'}
      }
    }
  );
}
