var express = require('express')
var router = express.Router()
var scrape = require('./utils/scrape.js')
var normalize = require('./utils/normalize.js')
var db = require('./utils/query')
var saveArticle = db.saveArticle
var deleteArticle = db.deleteArticle
var addComment = db.addComment
var deleteComment = db.deleteComment

/**
 * PATH '/api/scraper'
 */

//  Scrape new articles
router.route('/scrape')
  // Scrape news website, render articles scraped
  .get((req, res, next) => {
    // ...
  })

// Save articles
router.route('/article/save')
  // Add article to 'savedArticle' collection
  .post((req, res, next) => {
    // ...
  })

router.route('/article/:id')
  // Delete article from 'savedArticle' collection
  .delete((req, res, next) => {
    // ...
  })

router.route('/article/:id/comment')
  // Add comment to article
  .post((req, res, next) => {
    // ...
  })

router.route('/article/:id/comment/:commentId')
  // Delete comment from article
  .delete((req, res, next) => {
    // ...
  })

module.exports = router
