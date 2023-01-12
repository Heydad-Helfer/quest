const commonCtl = require('./common');

const controller = {
    ...commonCtl,
    validateNewQuestion: (questionData) => {

    },
    validateAnswer: (questionId, answerNum) => {
        let question = commonCtl.getQuestion(questionId);
        let metadata = question.metadata;
        if(metadata.correctAnswerNum == null){
            throw new Error(`Question ${questionId} doesn't have a correct answer.`);
        }
        return metadata.correctAnswerNum == answerNum;
    },
    
}


module.exports = controller;