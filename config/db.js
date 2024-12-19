const mongoose = require('mongoose');

const conn = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI);
            mongoose.connection.once('open', () => {
                console.log('MongoDB connection established');
            });
        
    } catch (error) {
        console.log('MongoDB connection failed');
    }
}

module.exports = conn;