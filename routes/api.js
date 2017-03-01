var express = require('express');
var router = express.Router();
var bouquetCtrl = require('../controllers/bouquets');
var userCtrl = require('../controllers/users');
var orderCtrl = require('../controllers/orders');

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


// Auth middleware (routes below need authentication)
router.use(function(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'not authenticated'});
});

// Protected routes (authentication required)
router.get('/users/:id/orders', userCtrl.getOrders);
router.put('/users/:id', userCtrl.addOrder);
// router.get('/users/:id/favorite', bouquetCtrl.getFavorite);
// router.post('/users/:id/favorite', bouquetCtrl.saveToBasket);
// router.delete('/users/:id/favorite/:id/delete', bouquetCtrl.deleteFavorite);

module.exports = router;
