var Comment = require('../models/comment');
var Blog = require('../models/blog-post');

module.exports = {
  addComment
};

function addComment(req, res, next) {
  req.body.blogId = req.params.id;

console.log('req.body', req.body)

  Comment.create(req.body).then(comment => {
    Blog.findById(req.body.blogId).then(blog => {
      blog.comments.push(comment._id);
      blog.save().then(blog => {
        res.json(comment);
      })
    })
  }).catch( err => res.status(400).json(err) );
}
