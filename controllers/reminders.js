const express = require('express');
const verifyToken = require('../middleware/verify-token.js');
const Reminder = require('../models/reminders.js');
const router = express.Router();

router.use(verifyToken);

module.exports = router;