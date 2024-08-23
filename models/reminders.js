const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema(
    {
        event: {
            type: String,
            required: true,
        },
        date: {
            type: Date
        },
        time: {
            type: Number
        },
    },
    { timestamps: true }
);

const Reminder = mongoose.model('Reminder', reminderSchema);
module.exports = Reminder;