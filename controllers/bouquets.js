var Bouquet = require('../models/bouquet');
var ObjectId = require('mongoose').Schema.Types.ObjectId;

module.exports = {
  addBouquetToCart,
  getAllBouquets,
  getBouquet
};

function addBouquetToCart(req, res, next) {
  Bouquet.create(req.body).then(bouquet => {
    res.json({msg: 'successfully added bouquet'});
  }).catch( err => res.status(400).json(err) );
}

function getAllBouquets(req, res, next) {
  Bouquet.find().then(bouquets => {
    res.json(bouquets);
  }).catch(err => res.status(400).json(err));
}

function getBouquet(req, res, next) {
  Bouquet.findById(req.params.id).then(bouquet => {
    res.json(bouquet);
  }).catch(err => res.status(400).json(err));
}

// function getFavorites(req, res, next) {
//   Bouquet.find({user: req.user._id}).exec().then(bouquets => {
//     res.json(bouquets);
//   }).catch(err => res.status(500).json(err));
// }

// function addBouquetToFav(req, res, next) {
//   req.body.user = req.user._id;
//   Bouquet.create(req.body).then(newbouquet => {
//     res.status(201).json(newbouquet);
//   }).catch(err => res.status(400).json(err));
// }

// function removeBouquetFromFav(req, res, next) {
//   Bouquet.findByIdAndRemove(req.params.id).then(deletedbouquet => {
//     res.json(deletedbouquet);
//   }).catch(err => res.status(400).json(err));
// }

