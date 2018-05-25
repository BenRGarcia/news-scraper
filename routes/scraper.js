const express = require('express')
const router = express.Router()
const scrape = require('./utils/scrape.js')
const normalize = require('./utils/normalize.js')
const db = require('./utils/query')

/**
 * PATH '/api/scraper'
 */

router.route('/scrape')
  // Return array of scraped articles
  .get((req, res, next) => {
    scrape('https://sdtimes.com/')
      .then(resp => normalize(resp.data))
      .then(articles => res.json(articles))
      .catch(err => res.json(err))
  })

router.route('/article/save')
  // Add article to 'savedArticle' collection
  .post((req, res, next) => {
    db.saveArticle(req.body)
      .then(savedArticle => res.status(201).send())
      .catch(err => next(err))
  })

router.route('/article/:_id')
  // Delete article from 'savedArticle' collection
  .delete((req, res, next) => {
    db.deleteArticle({ _id: req.params._id })
      .then(() => res.status(204).send())
      .catch(err => next(err))
  })

router.route('/article/:_id/comments')
  // Retrieve article comments
  .get((req, res, next) => {
    db.getArticleComments({ _id: req.params._id })
      .then(article => res.json(article.comments))
      .catch(err => next(err))
  })
  // Add comment to article
  .post((req, res, next) => {
    db.addComment({ _id: req.params._id, text: req.body.text })
      .then(() => res.status(201).send())
      .catch(err => next(err))
  })

router.route('/article/:id/comment/:commentId')
  // Delete comment from article
  .delete((req, res, next) => {
    db.deleteComment({ _idComment: req.params.commentId, _idArticle: req.params.id })
      .then(() => res.status(204).send())
      .catch(err => next(err))
  })

module.exports = router
