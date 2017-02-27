var express = require('express');
var router = express.Router();
var bouquetCtrl = require('../controllers/bouquets');
var userCtrl = require('../controllers/users');

// Public routes (no auth required)
router.post('/users/login', userCtrl.login);
router.get('/users/logout', userCtrl.logout);
router.post('/users', userCtrl.create);
router.get('/users/me', userCtrl.me);

// router.get()


// Auth middleware (routes below need authentication)
router.use(function(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'not authenticated'});
});

// // Protected routes (authentication required)
router.get('/users/:id/favorite', userCtrl.addFavorite);
// router.post('/todos', todoCtrl.createTodo);
router.delete('/users/:id/favorite/delete', userCtrl.deleteFavorite);

module.exports = router;
