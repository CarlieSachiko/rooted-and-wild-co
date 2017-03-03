var express = require('express');
var router = express.Router();
var bouquetCtrl = require('../controllers/bouquets');
var userCtrl = require('../controllers/users');
var orderCtrl = require('../controllers/orders');
var contactCtrl = require('../controllers/contact');
var blogCtrl = require('../controllers/blog');
var commentCtrl = require('../controllers/comments');

// Public routes (no auth required)
router.post('/users/login', userCtrl.login);
router.get('/users/logout', userCtrl.logout);
router.post('/users', userCtrl.create);
router.get('/users/me', userCtrl.me);

router.get('/bouquets', bouquetCtrl.getAllBouquets);
router.get('/bouquets/:id', bouquetCtrl.getBouquet);
router.post('/bouquets', bouquetCtrl.addBouquet);

router.get('/orders', orderCtrl.getAllOrders);
router.post('/orders', orderCtrl.submitOrder);
router.get('/orders/:id', orderCtrl.getOrder);

router.get('/blog-posts', blogCtrl.getAllPosts);
router.get('/blog-posts/:id', blogCtrl.getPost);
router.post('/blog-posts', blogCtrl.addPost);
router.put('/blog-posts/:id', blogCtrl.updatePost);

router.post('/blog-posts/:id/comments', commentCtrl.addComment);

router.post('/contact', contactCtrl.sendMail);


// Auth middleware (routes below need authentication)
router.use(function(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'not authenticated'});
});

// Protected routes (authentication required)
router.get('/users/:id/orders', userCtrl.getOrders);
router.put('/users/:id', userCtrl.addOrder);

module.exports = router;
