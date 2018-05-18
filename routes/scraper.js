var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var cheerio = require('cheerio')

/**
 * PATH '/api/scraper'
 */

//  Scrape new articles
router.route('/scrape')
  // Remove all staged articles, scrape website, render new articles scraped
  .get((req, res, next) => {
    // ...
  })

// Save or delete articles
router.route('/article/:_id')
  // Add article to 'savedArticle' collection
  .post((req, res, next) => {
    // ...
  })
  // Delete article from 'savedArticle' collection
  .delete((req, res, next) => {
    // ...
  })

router.route('/article/:_id/comment')
  // Add comment to article
  .post((req, res, next) => {
    // ...
  })
  // Delete comment from article
  .delete((req, res, next) => {
    // ...
  })

module.exports = router
