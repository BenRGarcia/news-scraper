/* eslint-disable no-unused-expressions, handle-callback-err */
var chai = require('chai')
var expect = chai.expect
var chaiHttp = require('chai-http')
chai.use(chaiHttp)

describe('`index.js` routes, path `/`', function () {
  it('should return server status code `200`', function (done) {
    chai.request('http://localhost:8080')
      .get('/')
      .end(function (err, res) {
        expect(res).to.have.status(200)
        done()
      })
  })
})

describe('`index.js` routes, path `/saved`', function () {
  it('should return server status code `200`', function (done) {
    chai.request('http://localhost:8080')
      .get('/saved')
      .end(function (err, res) {
        expect(res).to.have.status(200)
        done()
      })
  })
})

describe('`index.js` routes, path `nonexistent`', function () {
  it('should return server status code `404`', function (done) {
    chai.request('http://localhost:8080')
      .get('/nonexistent')
      .end(function (err, res) {
        expect(res).to.have.status(404)
        done()
      })
  })
})
