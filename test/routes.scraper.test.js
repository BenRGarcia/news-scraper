/* eslint-disable no-unused-expressions */
var scraperRouter = require('../routes/scraper.js')
var Article = require('../models').Article
var Comment = require('../models').Comment
var expect = require('chai').expect
var sinon = require('sinon')

describe('Routes: `scraper.js` path `/scrape` `GET`', function () {
  it('should return array of objects', function () {

  })

  it('should have props `title`, `preview` and `link` in array objects', function () {

  })

  it('should return server status code `200`', function () {

  })
})

describe('Routes: `scraper.js` path `/article/save` `POST`', function () {
  it('should create article document in `Article` collection', function () {

  })

  it('should return server status code `201`', function () {

  })
})

describe('Routes: `scraper.js` path `/article/:id` DELETE', function () {
  it('should delete article document in `Article` collection', function () {

  })

  it('should delete comment documents in `Comment` collection', function () {

  })

  it('should return server status code `204`', function () {

  })
})

describe('Routes: `scraper.js` path `/article/:id/comment/add` `POST`', function () {
  it('should add comment document to `Comment` collection', function () {

  })

  it('should return server status code `201`', function () {

  })
})

describe('Routes: `scraper.js` path `/article/:id/comment/:commentId` `DELETE`', function () {
  it('should delete `Comment` objectId from `Article` document', function () {

  })

  it('should delete comment document from `Comment` collection', function () {

  })

  it('should return server status code `204`', function () {

  })
})
