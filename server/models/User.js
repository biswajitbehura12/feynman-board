const mongoose = require('mongoose');

const Data1 = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Register', Data1);

