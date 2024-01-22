const database = require('../db/connect');
const jwt = require('jsonwebtoken');
const feedbackDataSchema = new database.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
        lowercase: true
    },
    question1: {
        type: String,
        require: true,
        trim: true,
        lowercase: true
    },
    question2: {
        type: String,
        require: true,
        trim: true,
        lowercase: true
    },
    answer1: {
        type: String,
        require: true,
        trim: true,
        lowercase: true
    },
    answer2: {
        type: String,
        require: true,
        trim: true,
        lowercase: true
    }

}, { timestamps: true })
const feedbackDatamodel = database.model('feedback', feedbackDataSchema);
module.exports = feedbackDatamodel;