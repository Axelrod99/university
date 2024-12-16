const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGODB_URI

const connectToMongo = async() => {
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(mongoURI);
        console.log("Successfully connected to university!");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectToMongo;