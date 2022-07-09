const mongoose = require("mongoose");

const sessionSchema = mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    duration:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Session', sessionSchema);