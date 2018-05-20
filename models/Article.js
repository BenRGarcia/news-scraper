var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true
  },
  link: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }]
})

var Article = mongoose.model('Article', ArticleSchema)

module.exports = Article
