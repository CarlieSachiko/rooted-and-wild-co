var express = require('express');
var router = express.Router();
// var Cart = require('../models/cart');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Rooted & Wild' });
});

router.get('/shop/', function(req, res, next) {
  res.render('shop', { title: 'Rooted & Wild' });
});

router.get('/home/', function(req, res, next) {
  res.render('main', { title: 'Rooted & Wild' });
});

// router.get('/add-to-cart/:id', function(req, res, next) {
//   var productId = req.params.id;
//   var cart = new Cart(req.session.cart ? req.session.cart : {});

//   Product.findById(productId, function(err, product) {
//     if (err) {
//       return res.redirect('/');
//     }
//     cart.add(product, product.id);
//     req.session.cart = cart;
//     console.log(req.session.cart);
//     res.redirect('/');
//   });
// });


module.exports = router;
