var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/:hi', function (req, res, next) {
  res.json({
    sup: req.params.hi || '?'
  })
})

module.exports = router
