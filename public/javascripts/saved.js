$(function () {
  /**
   * Delete Article
   */
  const deleteArticle = async _id => $.ajax({ method: 'DELETE', url: `/api/scraper/article/${_id}` })

  $('body').on('click', 'a[data-delete-article]', e => {
    const _id = $(e.target).data('id')
    deleteArticle(_id)
      .then(() => window.location.reload())
      .catch(err => console.error(err))
  })

  /**
   * Article notes modal
   */
  const clearModal = () => $('#js-new-comment').empty()

  const getArticleComments = async _id => $.get(`/api/scraper/article/${_id}/comments`)

  const showModal = () => $('#js-modal-comments').modal('show')

  $('body').on('click', 'button[data-comments]', e => {
    clearModal()
    const _id = $(e.target).data('id')
    getArticleComments(_id)
      .then(comments => console.log(comments))
      .then(() => showModal())
      .catch(err => console.error(err))
  })
})
