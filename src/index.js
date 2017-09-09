var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

var index = require('./routes/index')
var api = require('./routes/api')
var moduleStats = require('./routes/module-stats')

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// middleware setup
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// routes
app.use('/', index)
app.use('/api', api)
app.use('/module-stats', moduleStats)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Page Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.status = err.status || 500
  res.locals.stack = req.app.get('env') === 'development' ? err.stack : null

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
