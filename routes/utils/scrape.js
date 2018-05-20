const axios = require('axios')

module.exports = url => {
  try {
    return new Promise((resolve, reject) => {
      axios(/* ... */)
    })
  } catch (err) {
    console.error(err)
  }
}
