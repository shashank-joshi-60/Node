const express = require('express');
const router = express.Router();

const { getTransactions, addTransactions, deleteTransactions } = require('../controllers/transaction.controller');
// router.get('/', (req, res) => res.send('Hello'));

// 1st way

// router.route('/').get(getTransactions);
// router.route('/').post(addTransactions);

// OR 2nd Way
router.route('/').get(getTransactions).post(addTransactions);

router.route('/:id').delete(deleteTransactions);


module.exports = router;
