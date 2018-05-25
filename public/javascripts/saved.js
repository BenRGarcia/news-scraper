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
   * Show article notes modal
   */
  const clearModal = () => {
    $('#js-new-comment').empty()
    $('#js-append-comments').empty()
  }

  const addArticleIdToButton = _id => $('#js-save-new-comment').attr('data-id', _id)

  const getArticleComments = async _id => $.get(`/api/scraper/article/${_id}/comments`)

  const renderComments = comments => {
    comments.forEach(comment => {
      console.log(`trying to render comment: ${comment}`)
      $('#js-append-comments').append(`<p>${comment}</p>`)
    })
    return comments
  }

  const showModal = () => $('#js-modal-comments').modal('show')
  const hideModal = () => $('#js-modal-comments').modal('hide')

  $('body').on('click', 'button[data-comments]', e => {
    clearModal()
    const _id = $(e.target).data('id')
    getArticleComments(_id)
      .then(comments => renderComments(comments))
      .then(() => addArticleIdToButton(_id))
      .then(() => showModal())
      .catch(err => console.error(err))
  })

  /**
   * Add note to article
   */

  $('body').on('click', '#js-save-new-comment', e => {
    const _id = $(e.target).data('id')
    const postObj = { _id, text: $('#js-new-comment').val().trim() }
    $.post(`/api/scraper/article/${_id}/comments`, postObj)
      .then(() => hideModal())
      .catch(err => console.error(err))
  })
})
