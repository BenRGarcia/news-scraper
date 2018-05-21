var expect = require('chai').expect
var sinon = require('sinon')
var db = require('../routes/utils/query.js')
var getSavedArticles = db.getSavedArticles
var saveArticle = db.saveArticle
var deleteArticle = db.deleteArticle
var addComment = db.addComment
var deleteComment = db.deleteComment

describe('getSavedArticles()', function () {
  it('should return and array', function () {
    // expect(getSavedArticles()).to.be.an('object')
  })
})
