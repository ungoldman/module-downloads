var express = require('express')
var ls = require('npm-list-author-packages')
var router = express.Router()

/* GET home page. */
router.get('/:username?', function (req, res, next) {
  const { username } = req.params

  if (username == null) return res.render('module-stats', { username: null, list: null })

  ls({ username }, (err, list) => {
    if (err) {
      res.locals.message = err.message
      res.locals.status = err.status || 500
      res.locals.stack = req.app.get('env') === 'development' ? err.stack : null
      return res.render('error')
    }
    res.render('module-stats', { username, list })
  })
})

module.exports = router
