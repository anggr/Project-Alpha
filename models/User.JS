const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    usernamme: {
        type: String,
        required: [true, "please provide a username"]
    },
    email: {
        type: String,
        required: [true, "please provide an email"],
        unique: true,
        match: [
            /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/,
            "please provide a valid email"
        ]

    },
    password: {
        type: String,
        required: [true, "please add a password"],
        minlength: 6,
        select: false

    },
    resetPasswordToken: String,
    resetPasswordExpire: Date


})

const User = mongoose.model("User", UserSchema)

module.exports = User;