var Comment = require('../models/comment');
var Blog = require('../models/blog-post');

module.exports = {
  addComment
};

function addComment(req, res, next) {
  Comment.create(req.body).then(comment => {
    res.json(comment);
  }).catch( err => res.status(400).json(err) );
}
