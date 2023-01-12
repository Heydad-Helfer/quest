const mongoose = require("mongoose");
const ObjectId = require('mongodb').ObjectId
const Question = mongoose.model("Question");

const controller = {
    // Returns a question
    getQuestion: async (questionId) => {
        console.log(questionId);
        let docs = await Question.find({_id: new ObjectId(questionId)});
        console.log(docs);
        return true;
    },

    // Creates a new question and returns the question's ID
    createQuestion: (questionData) => {

    },

    // Answers an existing question by increasing the answer's count
    answer: (questionId, answerNum) => {
        return null;
    }
}



module.exports = controller;