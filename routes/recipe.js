const express = require('express');
const router = express.Router();

const { GETALL, GETONE, } = require('../controllers/recipe');

router.get('/all', GETALL);
router.get('/:id', GETONE);

module.exports = router;