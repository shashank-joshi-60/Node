const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // console.log('process.env.MONGO_URI', process.env.NODE_ENV)
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            // useNewUrlParser: true,
            // useCreateIndex: true,
            // useUnifiedTopology: true
        })
        console.log(`MongoDB Connected : ${conn.connection.host}`.cyan.underline.bold)
    } catch (error) {
        console.log(`Error: ${error.message}`.red);
        process.exit(1);
    }
}

module.exports = connectDB;