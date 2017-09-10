var choo = require('choo')
var stats = require('./pages/npm-download-stats')

var app = choo()

// middleware & stores
app.use(require('choo-devtools')())
app.use(require('choo-log')())
app.use(stats.store)

// routes
app.route('/', require('./pages/index'))
app.route('/npm-download-stats', stats.view)
app.route('/npm-download-stats/:username', stats.view)
app.route('*', require('./pages/404'))

if (!module.parent) app.mount('#root') // client
else module.exports = app // server
