const database = require('../db/connect');
const jwt = require('jsonwebtoken');
const feedbackDataSchema = new database.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
        lowercase: true
    },
    feedback: {
        type: String,
        require: true,
        trim: true,
        lowercase: true
    }

}, { timestamps: true })
const feedbackDatamodel = database.model('feedback', feedbackDataSchema);
module.exports = feedbackDatamodel;