const express = require('express')
const path = require('path')

const marvel = require('./marvel')

const app = express()

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that search for Marvel heroes
app.get('/api/search', (req, res) => {
  console.log('Search heroes')
  marvel.search((data) => res.json(JSON.parse(data)))
  //res.json(list)
})

// An api endpoint that returns a short list of items
app.get('/api/getList', (req, res) => {
  var list = ['item1', 'item2', 'item3']
  res.json(list)
  console.log('Sent list of items')
})

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'))
})

const port = process.env.PORT || 5000
app.listen(port)

console.log('App is listening on port ' + port)