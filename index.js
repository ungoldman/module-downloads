const fs = require('fs')
const path = require('path')
const morgan = require('morgan')
const express = require('express')
const browserify = require('browserify-middleware')
const listAuthorPkgs = require('npm-list-author-packages')
const hyperstream = require('hyperstream')
const open = require('opn')
const client = require('./client')

const port = process.env.PORT || 3000
const isProd = process.env.NODE_ENV === 'production'
const app = express()

// settings

app.set('port', port)

// middleware

app.use(morgan(isProd ? 'tiny' : 'dev'))
app.use(express.static('static'))

// API routes

app.get('/api/:username', (req, res) => {
  const { username } = req.params

  listAuthorPkgs({ username }, (err, list) => {
    if (err) {
      const payload = {}
      payload.message = err.message
      payload.status = err.status || 500
      payload.stack = req.app.get('env') === 'development' ? err.stack : null

      return res.json(payload)
    }

    res.json({ username, list })
  })
})

// App routes

// code bundle
// TODO: generate and cache on startup in prod
app.get('/bundle.js', browserify(path.join(__dirname, '/client.js')))

// choo SSR
// NOTE: catch-all route (*) must be last
app.get('*', (req, res) => {
  const html = hyperstream({ '#root': client.toString(req.url) })
  const index = fs.createReadStream(path.join(__dirname, 'index.html'))
  index.pipe(html).pipe(res)
})

// start the server

app.listen(port, () => {
  console.log(`Listening on ${port}`)
  if (!isProd) open(`http://localhost:${port}`)
})
