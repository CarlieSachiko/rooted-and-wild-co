// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var cartSchema = new mongoose.Schema({
//   user: [{type: Schema.Types.ObjectId, ref:"User"}],
//   items: [{
//     item_id: [{type: Schema.Types.ObjectId, ref:"Bouquet"}],
//     quantity: Number
//   }]
// })

// module.exports = mongoose.model('Cart', cartSchema);

// module.exports = function Cart(oldCart) {
//   this.items = oldCart.items;
//   this.totalQty = oldCart.totalQty;
//   this.totalPrice = oldCart.totalPrice;

//   this.add = function(item, id) {
//     var storedItem = this.items[id];
//     if (!storedItem) {
//       storedItem = this.items[id] = {item: item, qty: 0, price: 0};
//     }
//     storedItem.qty++;
//     storedItem.price = storeditem.item.price * storedItem.qty;
//     this.totalQty++;
//     this.totalPrice += storedItem.price;
//   }

//   this.generateArray = function() {
//     var arr = [];
//     for (var id in this.items) {
//       arr.push(this.items[id]);
//     }
//     return arr;
//   };
// };
