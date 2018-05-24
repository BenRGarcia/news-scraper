var cheerio = require('cheerio')

module.exports = html => {
  var results = []
  var $ = cheerio.load(html)
  $('div.latestnewsitem').each((i, el) => {
    var article = $(el).children().children('.col-lg-8')
    var link = $(article).children('h4').children('a').attr('href').trim()
    var title = $(article).children('h4').children('a').text()
    var preview = $(article).children('p').text().trim()
    results.push({ title, link, preview })
  })
  return results
}
