var mongoose = require('mongoose')
var Schema = mongoose.Schema

var CommentSchema = new Schema({
  text: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
})

var Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment
