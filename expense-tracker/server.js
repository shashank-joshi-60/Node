const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
var cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
dotenv.config({ path: './config/config.env' });

// app.get('/', (req, res) => res.send('Hello'));

const transactions = require("./routes/transactions");

app.use('/api/v1/transactions', transactions);


if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

const Port = process.env.PORT || 1000;

connectDB();

app.listen(Port, console.log(`Server is Running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`.yellow.bold));
