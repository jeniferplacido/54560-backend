const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
    
        });
        console.log('MongoDB conectado com sucesso!');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connection;
