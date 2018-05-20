var express = require('express')
var router = express.Router()
var getSavedArticles = require('./utils/query').getSavedArticles

/**
 * PATH '/'
 */

// 'HOME' page
router.get('/', (req, res, next) => {
  // Retrieve articles from 'stagedArticles' collection (if any)...
  // ...then render results to page
  res.render('index', {})
})

// 'SAVED ARTICLES' page
router.get('/saved', (req, res, next) => {
  // Retrieve articles from 'savedArticles' collection (if any)...
  // ...then render results to page
  res.render('saved', {})
})

module.exports = router
