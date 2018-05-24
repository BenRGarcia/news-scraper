$(function () {
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
