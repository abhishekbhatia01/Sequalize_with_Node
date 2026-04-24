const express = require('express');
const { insert, getById } = require('../controllers/userController');
const { createUser, getUser, createBlog, getUserWithPost } = require('../controllers/createUser');
const router = express.Router();


router.post('/insert', insert);
router.get('/getById', getById);

router.post('/create', createUser);
router.get('/getUsers', getUser);
router.post('/createBlog', createBlog);
router.get('/getUserPost', getUserWithPost)

module.exports = router;