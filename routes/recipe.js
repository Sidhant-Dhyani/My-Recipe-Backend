const express = require('express');
const router = express.Router();

const {
    GETALL, GETONE, GETMINE, POSTMINE
} = require('../controllers/recipe');

router.get('/all', GETALL);
router.get('/:id', GETONE);
// router.get('/my', GETMINE);
// router.post('/new', POSTMINE);

module.exports = router;