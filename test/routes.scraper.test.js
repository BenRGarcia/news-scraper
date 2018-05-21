/* eslint-disable no-unused-expressions, handle-callback-err */
var chai = require('chai')
var expect = chai.expect
var chaiHttp = require('chai-http')
chai.use(chaiHttp)

describe('Routes: `scraper.js` path `/scrape` `GET`', function () {
  it('should return JSON array with server status code `200`', function (done) {
    chai.request('localhost:8080')
      .get('/api/scraper/scrape')
      .end(function (err, res) {
        expect(res).to.have.status(200)
        expect(res).to.be.json
        expect(res.body).to.be.an('array')
        done()
      })
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
