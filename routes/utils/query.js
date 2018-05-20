var db = require('../../models')

async function getSavedArticles () {
  await db.Article.find({})
    .populate('comments')
    .then(articles => articles)
    .catch(err => err)
}

async function saveArticle ({ title, preview, link }) {
  await db.Article.create({ title, preview, link })
    .then(newArticle => newArticle)
    .catch(err => err)
}

async function deleteArticle ({ _id }) {
  await db.Article.findOneAndDelete({ _id })
    .then(deletedArticle => db.Comments.deleteMany({ _id: { $in: deletedArticle.comments } }))
    .catch(err => err)
}

async function addComment ({ text, _id }) {
  await db.Comment.create({ text })
    .then(newComment => db.Article.findOneAndUpdate({ _id }, { $push: { comments: newComment._id } }))
    .catch(err => err)
}

// Delete comment document from `Comment` collection and
// updates article.comments document, removing comment ObjectId
async function deleteComment ({ _idComment, _idArticle }) {
  await db.Comment.findOneAndRemove({ _idComment })
    .then(() => db.Article.update({/* _idArticle: { $pull: { Article.comments: _idComment } } */}))
    .catch(err => err)
}

module.exports = {
  getSavedArticles,
  saveArticle,
  deleteArticle,
  addComment,
  deleteComment
}
