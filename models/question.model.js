const mongoose = require("mongoose");

var questionSchema = new mongoose.Schema({
    questionText: {
        type: String,
        required: 'This is required'
    },
    correctAnswerNum: {
        type: Number,
    },
    answers: [{
        answerText: String,
        answerCount: Number
    }]
}, {collection: 'Questions'});

mongoose.model("Question", questionSchema);