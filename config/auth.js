var User = require('../models/user');

// Export a middleware function that checks if there
// is a user's _id in the session and, if there is,
// fetch the user from the db and add to the req.
module.exports = function(req, res, next) {
  if (!req.session.userId) return next();
  User.findById(req.session.userId).then(user => {
    req.user = user;
    next();
  }).catch(err => req.status(500).json(err));
}
