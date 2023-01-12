const commonCtl = require('./common');

const controller = {
    ...commonCtl,
    validateNewQuestion: (questionData) => {
        if(questionData.questionText == undefined || questionData.questionText == null) {
            return false;
        }
        if(!(questionData.answers instanceof Array) || questionData.answers.length == 0) {
            return false;
        }
        // Make sure there's no correct answer for this type of questions.
        if(questionData.correctAnswerNum !== undefined) {
            return false
        }
        for(let ans_id in questionData.answers) {
            let ans = questionData.answers[ans_id];
            if(ans.answerText == undefined || ans.answerText == null){
                return false;
            }
            // We initially only need an empty count, or the field omitted.
            if(ans.answerCount !== undefined && (ans.answerCount !== null || ans.answerCount != 0) ){
                return false;
            }
        }
        

        return true; 
    },
}


module.exports = controller;