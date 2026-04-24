const express = require('express');
const { insert, getById } = require('../controllers/userController');
const { createUser, getUser } = require('../controllers/createUser');
const router = express.Router();


router.post('/insert', insert);
router.get('/getById', getById);

router.post('/create', createUser);
router.get('/getUsers', getUser);

module.exports = router;