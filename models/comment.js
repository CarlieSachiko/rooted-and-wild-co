var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new mongoose.Schema({
  author: String,
  content: String,
  createdAt: {type: Date, default: Date.now},
  blogId: {type: Schema.Types.ObjectId, ref:"Post"}
});


module.exports = mongoose.model('Comment', commentSchema);
