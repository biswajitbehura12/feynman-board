const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Register',
        required: true,
    },
})

module.exports = mongoose.model('Blog', BlogSchema);

