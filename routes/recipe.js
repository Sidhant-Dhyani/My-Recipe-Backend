const express = require('express');
const router = express.Router();

const {
    GETALL, GETMINE, POSTMINE
} = require('../controllers/recipe');

router.get('/all', GETALL);
// router.get('/my', GETMINE);
// router.post('/new', POSTMINE);

module.exports = router;