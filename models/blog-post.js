var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogPostSchema = new mongoose.Schema({
  title: String,
  url_title: String,
  paragraphs: [String],
  comments: [{type: Schema.Types.ObjectId, ref:"Comment"}],
  likes: Number,
  images:[String],
  date: String,
  createdAt: {type: Date, default: Date.now}
});


module.exports = mongoose.model('Post', blogPostSchema);
