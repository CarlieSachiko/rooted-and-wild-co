var Post = require('../models/blog-post');

module.exports = {
  addPost,
  getAllPosts,
  getPost,
  updatePost
};

function addPost(req, res, next) {
  Post.create(req.body).then(post => {
    res.json({msg: 'successfully added post'});
  }).catch( err => res.status(400).json(err) );
}

function getAllPosts(req, res, next) {
  Post.find().then(posts => {
    res.json(posts);
  }).catch(err => res.status(400).json(err));
}

function getPost(req, res, next) {
  Post.findById(req.params.id).populate('comments').exec(function(err, post) {
    res.json(post);
  }).catch(err => res.status(400).json(err));
}

function updatePost(req, res, next) {
  Post.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, post) {
      if (err) return res.status(404).json({msg: 'Could not update post'});
      res.status(200).json(post);
    });
}

