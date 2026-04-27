const express = require('express');
const { unmanagedTransactionExample, managedTransactionExample } = require('../controllers/UserTrController');
const router = express.Router();


router.get("/createTransaction", unmanagedTransactionExample);
router.get("/createTransaction1", managedTransactionExample);

module.exports = router;
