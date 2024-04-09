const mongoose = require('mongoose');
const CONFIG = require('../config/config');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(CONFIG.MongodbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
module.exports = connectDB;