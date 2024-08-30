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
            type: String
        },
    }
);

const Reminder = mongoose.model('Reminder', reminderSchema);
module.exports = Reminder;