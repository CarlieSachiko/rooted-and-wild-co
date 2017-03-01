var express = require('express');
var router = express.Router();
// var Cart = require('../models/cart');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Rooted & Wild' });
});

module.exports = router;
