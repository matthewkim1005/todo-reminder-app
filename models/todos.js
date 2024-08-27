const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            required: true
        },
        commentor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    },
    { timestamps: true }
);

const todoSchema = new mongoose.Schema(
    {
        task: {
            type: String,
            required: true,
        },
        details: {
            type: [String]
        },
        comments: [commentSchema],
        creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    }
);

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;