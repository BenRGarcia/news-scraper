/* eslint-disable no-unused-expressions */
var expect = require('chai').expect
var Article = require('../models').Article

describe('Model: Article', function () {
  it('should be invalid if `title` is empty', function (done) {
    var a = new Article()
    a.validate(function (err) {
      expect(err.errors.title).to.exist
      done()
    })
  })

  it('should be invalid if `link` is empty', function (done) {
    var a = new Article()
    a.validate(function (err) {
      expect(err.errors.link).to.exist
      done()
    })
  })

  it('should be valid if `comments` is empty', function (done) {
    var a = new Article()
    a.validate(function (err) {
      expect(err.errors.comments).to.not.exist
      done()
    })
  })
})
