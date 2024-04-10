const mongoose = require('mongoose');
const CONFIG = require('../config/config');

const connectDB = () => {
    mongoose.connect(CONFIG.MongodbURI);

    mongoose.connection.on('connected', () => console.log('Connected to DB'));

    mongoose.connection.on('disconnected', () => console.log('Disconnected from DB'));

    mongoose.connection.on('error', (err) => console.log('Error connecting to DB', err));
}
module.exports = connectDB;