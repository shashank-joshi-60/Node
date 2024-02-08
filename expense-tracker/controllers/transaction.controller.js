const Transaction = require('../models/Transaction');

// @desc Get All Transactions
// @route GET /api/v1/transactions
// @access Public

exports.getTransactions = async (req, res, next) => {
    // res.send('GET Transactions');

    try {
        const transactions = await Transaction.find();

        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Server Error",
        });

    }
}

// @desc Add Transactions
// @route Post /api/v1/transactions
// @access Public

exports.addTransactions = async (req, res, next) => {

    try {
        // const { text, amount } = req.body;

        const transaction = await Transaction.create(req.body)

        return res.status(201).json({
            success: true,
            data: transaction
        });
    } catch (error) {
        // console.log('error', error);
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(500).json({
                success: false,
                error: messages,
            });
        } else {
            return res.status(500).json({
                success: false,
                error: error,
            });
        }
    }

}

// @desc delete Transactions
// @route delete /api/v1/transactions/:id
// @access Public

exports.deleteTransactions = async (req, res, next) => {
    // res.send('delete Transactions');

    try {

        console.log('req.param.id', req.params.id)
        // const transaction = await Transaction.findById(req.params.id);
        // console.log('transaction', transaction)

        // if (!transaction) {
        //     return res.status(400).json({
        //         success: false,
        //         error: 'No Transaction Found'
        //     })
        // }
        const transaction = await Transaction.findByIdAndRemove(req.params.id)
        console.log('transaction', transaction)
        if (!transaction) {
            return res.status(400).json({
                success: false,
                error: 'No Transaction Found'
            })
        } else {
            return res.status(200).json({
                success: true,
                data: {},
            })
        }

    } catch (error) {
        console.log('error', error)
        return res.status(500).json({
            success: false,
            error: 'No Transaction Found'
        })
    }
}