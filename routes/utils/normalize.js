var cheerio = require('cheerio')

module.exports = (html) => {
  var $ = cheerio.load(html)
}
