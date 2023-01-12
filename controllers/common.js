const db = require("../db");

const controller = {
    // Returns a question
    getQuestion: (questionId) => {
        let coll = db.getColl();
        coll.
        return null;
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