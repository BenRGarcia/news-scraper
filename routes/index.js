var express = require('express')
var router = express.Router()
var getSavedArticles = require('./utils/query').getSavedArticles

/**
 * PATH '/'
 */

// 'HOME' page
router.get('/', (req, res, next) => res.render('index'))

// 'SAVED ARTICLES' page
router.get('/articles/saved', (req, res, next) => {
  // Retrieve articles from 'savedArticles' collection (if any)...
  getSavedArticles()
    // ...then render results to page
    .then(savedArticles => res.render('saved', { savedArticles }))
    .catch(err => next(err))
})

module.exports = router
