$(function () {
  /**
   * Scrape and Render Articles
   */
  const scrapeArticles = async () => $.get('/api/scraper/scrape', articles => articles)

  const toHTML = articles => {
    const formattedArticles = []
    articles.forEach(article => {
      let wrapper = $('<div class="card my-3">')
      const title = `<a href="${article.link}" target="_blank"><h3>${article.title}</h3></a>`
      const preview = `<p>${article.preview}</p>`
      const button = `<button class="btn btn-danger" data-save="" data-title="${article.title}" data-link="${article.link}" data-preview="${article.preview}">Save Article</button>`
      wrapper.append(title, preview, button)
      formattedArticles.push(wrapper)
    })
    return formattedArticles
  }

  const renderArticles = articles => {
    $('#js-append-articles-scraped').empty()
    $('#js-append-articles-scraped').append(articles)
  }

  $('body').on('click', '#js-scrape-articles', () => {
    scrapeArticles()
      .then(articles => toHTML(articles))
      .then(html => renderArticles(html))
      .catch(err => console.error(err))
  })

  /**
   * Save Scraped Article
   */

  const makePostObject = e => {
    const title = $(e.target).data('title')
    const link = $(e.target).data('link')
    const preview = $(e.target).data('preview')
    return { title, link, preview }
  }

  const postArticle = async article => {
    $.post('/api/scraper/article/save', article)
      .then(() => console.log(`article saved`))
      .catch(err => console.error(err))
  }

  $('body').on('click', 'button[data-save]', e => {
    const postObject = makePostObject(e)
    postArticle(postObject)
      .then(() => console.log(`woohoo`))
      .catch(err => console.error(err))
  })
})
