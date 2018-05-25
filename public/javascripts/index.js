$(function () {
  /**
   * Scrape and Render Articles
   */
  const scrapeArticles = async () => $.get('/api/scraper/scrape', articles => articles)

  const toHTML = articles => {
    const formattedArticles = []
    articles.forEach(article => {
      let wrapper = $('<div class="card my-3 border-dark">')
      const title = `<div class="card-header"><h3><a href="${article.link}" style="color: initial;" target="_blank">${article.title}</a></h3></div>`
      const preview = `<div class="card-body"><p class="card-text">${article.preview}</p></div>`
      const button = `
<div
  class="card-footer p-1"
>
  <a 
    class="btn btn-danger w-50 mx-auto" 
    tabindex="0"
    role="button"
    data-save="" 
    data-title="${article.title}" 
    data-link="${article.link}" 
    data-preview="${article.preview}"
    data-trigger="focus"
    data-toggle="popover" 
    data-placement="top"
    title="Article Saved!" 
  >
    Save Article
  </a>
</div>
`
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
      .catch(err => console.error(err))
  }

  $('body').on('click', 'a[data-save]', e => {
    const postObject = makePostObject(e)
    postArticle(postObject)
      .then(() => $(e.target).popover('show'))
      .catch(err => console.error(err))
  })
})
