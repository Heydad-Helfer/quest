var express = require('express');
var controllers = require('../controllers/index');
const statusCodes = require('http-status-codes');

var router = express.Router();

// GET question data
router.get('/:questionId', (req, res) => {
    const ctl = controllers[res.locals.type];
    let question = ctl.getQuestion(req.params.questionId);
    if(question == null){
        res
        	.status(statusCodes.StatusCodes.NOT_FOUND)
        	.json({message: `Question ${req.params.questionId} of type ${res.locals.type} was not found.`});
      	return;
    }
    res.json(question);
});

// Add a new question
router.post('/', (req, res) => {
    const ctl = controllers[res.locals.type];
    if(ctl.validateNewQuestion(req.body)){
        let questionId = ctl.createQuestion(req.body);
        res
            .status(statusCodes.StatusCodes.CREATED)
            .json({questionId});
    }
    else {
        res
            .status(statusCodes.StatusCodes.BAD_REQUEST)
            .json({message: `Bad structure for question type ${res.locals.type}.`})
    }
	
});

// Add a new answer to a question
router.post('/:questionId/:answerNum', (req, res) => {
    const ctl = controllers[res.locals.type];
    let correct = typeof ctl.validateAnswer === 'function'? ctl.validateAnswer(req.params.questionId, req.params.answerNum):null;
    let answers = ctl.answer(req.params.questionId, req.params.answerNum);
    // Answers is an array with the distribution of the answers' counts.

    if(correct !== null){
        res.json({correct, answers});
    }
    else{
        res.json({answers});
    }
});
  
module.exports = router;

