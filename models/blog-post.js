var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogPostSchema = new mongoose.Schema({
  title: String,
  paragraphs: [String],
  comments: [{type: Schema.Types.ObjectId, ref:"Comment"}],
  likes: Number,
  images:[String],
  createdAt: {type: Date, default: Date.now}
});


module.exports = mongoose.model('Post', blogPostSchema);
