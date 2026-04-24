const express = require('express');
const router = express.Router();
const {insert, fetch} = require('../controller/userController.controller');


router.post('/', insert);
router.get('/', fetch);

module.exports = router;