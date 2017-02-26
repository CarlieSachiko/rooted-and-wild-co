var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new mongoose.Schema({
  user: [{type: Schema.Types.ObjectId, ref:"User"}],
  total_price: Number,
  shipping_address: String,
  bouquets: [{type: Schema.Types.ObjectId, ref:"Bouquet"}]
})


module.exports = mongoose.model('Order', orderSchema);
