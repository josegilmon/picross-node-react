const https = require('https')
const md5 = require('md5')

const marvelConfig = {
  host: 'gateway.marvel.com',
  path: '/v1/public/characters',
  publicKey: '5b19ff35a6b2a9a58fe860448cc82161',
  privateKey: '7f2d73992caae0b0563c716172f39ecb546672b4'
}

function formUrl (heroName, limit = 10, actualPage = 0) {

  const ts = new Date().getTime().toString()
  const hash = md5(`${ts}${marvelConfig.privateKey}${marvelConfig.publicKey}`)
  const apikey = marvelConfig.publicKey

  let finalUrl = `${marvelConfig.path}?nameStartsWith=${heroName}&limit=${limit}&offset=${actualPage * limit}`
  finalUrl = `${finalUrl}&ts=${ts}&hash=${hash}&apikey=${apikey}`

  return finalUrl
}

module.exports = {

  search: (callback) => {

    const options = {
      host: marvelConfig.host,
      path: formUrl('Black'),
      method: 'GET'
    }

    let req = https.request(options, (res) => {

      let responseString = ''

      res.on('data', function (data) {
        responseString += data
        // save all the data from response
      })
      res.on('end', function () {
        console.log(responseString)
        callback(responseString)
        // print to console when response ends
      })
    })

    req.end()
  }
}