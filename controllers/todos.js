const express = require('express');
const verifyToken = require('../middleware/verify-token.js');
const Todo = require('../models/todos.js');
const router = express.Router();

router.use(verifyToken);

module.exports = router;