angular.module('app')
  .controller('ShowBlogController', ShowBlogController);

ShowBlogController.$inject = ['$http', '$stateParams', 'BlogService', 'CommentService'];

function ShowBlogController($http, $stateParams, BlogService, CommentService) {
  var vm = this;

  if ($stateParams.postId) {
    BlogService.get({id: $stateParams.postId}, function(post) {
      vm.post = post;
    });
  }

  vm.addLike = function(post) {
    post.likes++;
    post.$update({id: post._id});
  }

  vm.addComment = function(post) {
    CommentService.newForPost({
      id: post._id,
      author: vm.name,
      content: vm.comment
    }, function(comment) {
      console.log(comment);
      post.comments.push(comment);
    });
    vm.name = '';
    vm.comment = '';
  }

}
