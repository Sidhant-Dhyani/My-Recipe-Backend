const express = require('express');
const router = express.Router();

const { GETONE } = require('../controllers/users');

router.get('/:id', GETONE);

module.exports = router;