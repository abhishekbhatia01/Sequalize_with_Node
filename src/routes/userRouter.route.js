const express = require('express');
const { insert, getById } = require('../controllers/userController');
const router = express.Router();

router.post('/insert', insert);
router.get('/getById', getById);

module.exports = router;