$(function () {
  /**
   * Delete Article
   */
  const deleteArticle = async _id => $.ajax({ method: 'DELETE', url: `/api/scraper/article/${_id}` })

  $('body').on('click', 'a[data-delete-article]', e => {
    let _id = $(e.target).data('id')
    deleteArticle(_id)
      .then(() => window.location.reload())
      .catch(err => console.error(err))
  })

  /**
   * Show article notes modal
   */
  const clearModal = () => {
    $('#js-new-comment').val('')
    $('#js-append-comments').empty()
  }

  const addArticleIdToButton = _id => {
    $('#js-save-new-comment').attr('data-id', '')
    $('#js-save-new-comment').attr('data-id', _id)
  }

  const getArticleComments = async _id => $.get(`/api/scraper/article/${_id}/comments`)

  const renderComments = ({ comments, _id }) => {
    comments.forEach(comment => {
      let wrapper = $('<div class="position-relative">')
      let text = `<p class="text-left">${comment.text}</p>`
      let deleteButton = `
<a
  href='#'
  data-comment-id='${comment._id}'
  data-article-id='${_id}'
  data-comment-delete=''
  style='color: initial;'
>
  <i
    data-comment-id='${comment._id}'
    data-article-id='${_id}'
    class='material-icons position-absolute'
    style='top: 0; right: 0;'
  >
    delete
  </i>
</a>
`
      wrapper.append(text, deleteButton)
      $('#js-append-comments').append(wrapper)
    })
    return comments
  }

  const showModal = () => $('#js-modal-comments').modal('show')
  const hideModal = () => $('#js-modal-comments').modal('hide')

  $('body').on('click', 'button[data-comments]', e => {
    clearModal()
    let _id = $(e.target).data('id')
    getArticleComments(_id)
      .then(comments => renderComments({ comments, _id }))
      .then(() => addArticleIdToButton(_id))
      .then(() => showModal())
      .catch(err => console.error(err))
  })

  /**
   * Add note to article
   */

  $('body').on('click', '#js-save-new-comment', e => {
    let articleId = $(e.target).data('id')
    let postObj = { text: $('#js-new-comment').val().trim() }
    $.post(`/api/scraper/article/${articleId}/comments`, postObj)
      .then(() => window.location.reload())
      .catch(err => console.error(err))
  })

  /**
   * Delete note for article
   */

  const deleteComment = async ({ articleId, commentId }) => {
    return $.ajax({ method: 'DELETE', url: `/api/scraper/article/${articleId}/comment/${commentId}` })
  }

  $('body').on('click', 'a[data-comment-delete]', e => {
    let commentId = $(e.target).data('comment-id')
    let articleId = $(e.target).data('article-id')
    deleteComment({ commentId, articleId })
      .then(() => hideModal())
      .catch(err => console.error(err))
  })
})
