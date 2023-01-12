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
        answerText: {
            type: String,
            required: "This is required"
        },
        answerCount: Number
    }]
}, {collection: 'Questions'});

mongoose.model("Question", questionSchema);