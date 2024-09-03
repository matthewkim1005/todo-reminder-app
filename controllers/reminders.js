const express = require('express');
const verifyToken = require('../middleware/verify-token.js');
const Reminder = require('../models/reminders.js');
const router = express.Router();

router.use(verifyToken);

router.post('/', async (req, res) => {
    try {
        const reminder = await Reminder.create(req.body);
        res.status(201).json(reminder);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.get('/', async (req, res) => {
    try {
        const reminders = await Reminder.find({})
        res.status(200).json(reminders);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/:reminderId', async (req, res) => {
    try {
        const reminder = await Reminder.findById(req.params.reminderId);
        res.status(200).json(reminder);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.delete('/:reminderId', async (req, res) => {
    try {
        const reminder = await Reminder.findById(req.params.reminderId);

        const deletedReminder = await Reminder.findByIdAndDelete(req.params.reminderId);
        res.status(200).json(deletedReminder);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;