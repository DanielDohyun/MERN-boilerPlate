const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: string,
        maxlength: 50
    },
    email: {
        type: string,
        trim: true,
        unique: 1
    },
    password: {
        type: string,
        minlength: 5
    },
    lastname: {
        type: string,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    token: {
        type: string,
    },
    tokenExp: {
        type: Number
    }
})

const User = mongoose.model('User', userSchema);

module.exports = { User };