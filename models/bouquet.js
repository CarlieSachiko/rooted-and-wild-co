var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bouquetSchema = new mongoose.Schema({
  name: String,
  tags: [String],
  price: Number,
  image: String
})


module.exports = mongoose.model('Bouquet', bouquetSchema);
