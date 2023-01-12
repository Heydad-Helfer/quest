var express = require('express');
const StatusCodes = require('http-status-codes');
var controllers = require('../../controllers/index');
var router = express.Router();

// GET question data
router.get('/:questionId', function(req, res, next) {
  const ctl = controllers[res.locals.type];
  let question = ctl.getQuestion(req.params.questionId);
  if(question == null){
    res
      .status(StatusCodes.StatusCodes.NOT_FOUND)
      .json({message: `Question ${req.params.questionId} of type ${res.locals.type} was not found.`});
    return;
  }
  res.json(question);
});

module.exports = router;
