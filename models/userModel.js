const mongoose = require('mongoose');

const userModel = mongoose.Schema({
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const UserModel = mongoose.model("UserModel", userModel);

module.exports = UserModel;