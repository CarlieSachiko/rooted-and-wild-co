angular.module('app')
  .controller('BlogController', BlogController);

BlogController.$inject = ['BlogService'];

function BlogController(BlogService) {
  var vm = this;
  vm.posts = BlogService.query();
  vm.addLike = function(post) {
    post.likes++;
    post.$update({id: post._id});
  }

}
