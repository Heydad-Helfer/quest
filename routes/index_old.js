var express = require('express');

var insertRouter  = require('./questions/insert');
var getRouter     = require('./questions/get');
var voteRouter    = require('./questions/vote');

const statusCodes = require('http-status-codes');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(statusCodes.StatusCodes.BAD_REQUEST).send({message:'Please select an action'});
});

router.use("/poll", injectType("poll"));
router.use("/poll/insert", insertRouter);
router.use("/poll/get", getRouter);
router.use("/poll/vote", voteRouter);

router.use("/trivia", injectType("trivia"));
router.use("/trivia/insert", insertRouter);
router.use("/trivia/get", getRouter);
router.use("/trivia/vote", voteRouter);

module.exports = router;

// Currying for injection of question type
function injectType(type) {
  return function(req, res, next){
    res.locals.type = type;
    next();
  }
}