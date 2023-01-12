var express = require('express');
var controllers = require('../../controllers/index');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
