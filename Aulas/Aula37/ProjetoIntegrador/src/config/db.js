const mongoose = require('mongoose');
require('dotenv').config();

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
 
    });
    console.log('MongoDB conectado com sucesso');
  } catch (err) {
    console.error(err.message,'Não foi possível conectar ao MongoDB');
    process.exit(1);
  }
};

module.exports = connection;
