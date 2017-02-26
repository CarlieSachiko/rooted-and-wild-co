var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var bcrypt = require('bcrypt');

// const SALT_ROUNDS = 6;

var userSchema = new mongoose.Schema({
  name: String,
  email: {type: String, lowercase: true, unique: true},
  password: String,
  favorites: [{type: Schema.Types.ObjectId, ref:"Bouquet"}],
  basket: [{type: Schema.Types.ObjectId, ref:"Bouquet"}],
  orders: [{type: Schema.Types.ObjectId, ref:"Order"}]
})

userSchema.set('toJSON', {
  transform: function(doc, ret) {
    // remove the password property when serializing doc to JSON
    delete ret.password;
    return ret;
  }
});

module.exports = mongoose.model('User', userSchema);
