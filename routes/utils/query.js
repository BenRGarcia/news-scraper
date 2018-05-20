var db = require('../../models')

// Returns all saved articles from database
function getSavedArticles () {

}

// Adds article document to `Article` collection
function saveArticle ({ title, preview, link }) {

}

// Deletes article document from `Article` collection (and comments)
function deleteArticle ({ _id }) {

}

// Adds comment document to `Comment` collection and
// updates article.comments document with comment ObjectId
function addComment ({ text }) {

}

// Delete comment document from `Comment` collection and
// updates article.comments document, removing comment ObjectId
function deleteComment ({ _id }) {

}

module.exports = {
  getSavedArticles,
  saveArticle,
  deleteArticle,
  addComment,
  deleteComment
}
