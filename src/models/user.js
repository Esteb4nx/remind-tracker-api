const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    session:[{
        type: mongoose.Schema.ObjectId,
        ref: "Session"
    }]
});

module.exports = mongoose.model('User', userSchema);