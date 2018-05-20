/* eslint-disable no-unused-expressions */
var expect = require('chai').expect
var Comment = require('../models').Comment

describe('Model: Comment', function () {
  it('should be invalid if `text` is empty', function (done) {
    var c = new Comment()
    c.validate(function (err) {
      expect(err.errors.text).to.exist
      done()
    })
  })
})
