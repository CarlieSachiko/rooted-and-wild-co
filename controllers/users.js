var User = require('../models/user');

module.exports = {
  create,
  login,
  logout,
  me,
  addFavorite,
  deleteFavorite
};

function create(req, res, next) {
  User.create(req.body).then(user => {
    // auto-login new user
    req.session.userId = user._id;
    res.json(user);
  }).catch( err => res.status(400).json(err) );
}

function login(req, res, next) {
  User.findOne({email: req.body.email, password: req.body.password}).exec().then(user => {
    if (!user) return res.status(401).json({err: 'bad credentials'});
    // using sessions to "remember" the logged in user's _id
    req.session.userId = user._id;
    res.json(user);
  }).catch(err => res.status(401).json(err));
}

function logout(req, res, next) {
  req.session.userId = null;
  res.status(200).json({});
}

// Called by client to get logged in user doc
// Won't be needed with JWT auth
function me(req, res, next) {
  res.json(req.user);
}

function addFavorite(req, res, next) {
  console.log('Add to Favorites')
}

function deleteFavorite(req, res, next) {
  console.log('delete from favorites')
}

