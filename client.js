var choo = require('choo')
var stats = require('./pages/index')

var app = choo()

// middleware & stores
app.use(require('choo-devtools')())
app.use(stats.store)

// routes
app.route('/', stats.view)
app.route('/:username', stats.view)

if (!module.parent) app.mount('#root') // client
else module.exports = app // server
