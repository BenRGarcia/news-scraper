const request = require('request')

module.exports = url => {
  try {
    return new Promise((resolve, reject) => {
      request(url, (err, res, html) => {
        if (err) reject(err)
        resolve(html)
      })
    })
  } catch (err) {
    console.error(err)
  }
}
