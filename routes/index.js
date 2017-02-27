var express = require('express');
var router = express.Router();

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


module.exports = router;
