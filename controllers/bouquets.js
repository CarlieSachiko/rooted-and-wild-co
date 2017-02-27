var Bouquet = require('../models/bouquet');
var ObjectId = require('mongoose').Schema.Types.ObjectId;

// module.exports = {
//   getAllBouquets,
//   addBouquetToFav,
//   removeBouquetFromFav
// };

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

