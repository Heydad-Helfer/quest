const mongoose = require("mongoose");
const Question = mongoose.model("Question");

var ObjectId = require('mongoose').Types.ObjectId;

// This returns the common controller functions in the context of the specific controller (regarding the MongoDB find)

const controller = {
    getQuestions: async () => {
        return (await Question.find()).map((q) => {
            return {
                id: q._id,
                text: q.questionText
            }
        });
    },
    // Returns a question
    getQuestion: async (questionId) => {
        if(!ObjectId.isValid(questionId)){
            return null;
        }
        let doc = await Question.findOne({_id: questionId});
        return doc;
    },

    // Creates a new question and returns the question's ID
    createQuestion: async (questionData) => {
        let question = new Question();
        question.questionText = questionData.questionText;
        question.correctAnswerNum = questionData.correctAnswerNum || null;
        question.answers = questionData.answers.map(ans => {
            return {
                answerText: ans.answerText,
                answerCount: ans.answerCount || 0,
            }
        });

        await question.save();
        return question._id;
    },

    // Answers an existing question by increasing the answer's count
    answer: async (questionId, answerNum) => {
        if(!ObjectId.isValid(questionId)){
            return null;
        }
        let question = await controller.getQuestion(questionId);
        if(answerNum > question.answers.length || answerNum < 0){
            return null;
        }

        question.answers[answerNum].answerCount++;
        await question.save();
        return question.answers;
    }
}

module.exports = controller