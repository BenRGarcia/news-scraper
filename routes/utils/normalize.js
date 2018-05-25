const cheerio = require('cheerio')

module.exports = html => {
  const results = []
  const $ = cheerio.load(html)
  $('div.latestnewsitem').each((i, el) => {
    const article = $(el).children().children('.col-lg-8')
    const link = $(article).children('h4').children('a').attr('href').trim()
    const title = $(article).children('h4').children('a').text()
    const preview = $(article).children('p').text().trim()
    results.push({ title, link, preview })
  })
  return results
}
