var express = require('express');
const statusCodes = require('http-status-codes');

var questionRouter    = require('./question');

var router = express.Router();

router.get('/', function(req, res, next) {
    res.status(statusCodes.StatusCodes.BAD_REQUEST).send({message:'Please select an action'});
});

router.use("/poll", injectType('poll'), questionRouter)
router.use("/trivia", injectType('trivia'), questionRouter)

module.exports = router;

// Currying for injection of question type
function injectType(type) {
    return function(req, res, next){
        res.locals.type = type;
        next();
    }
}