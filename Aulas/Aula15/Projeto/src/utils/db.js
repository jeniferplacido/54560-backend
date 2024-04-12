const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://coders:coders123@ecommercecoders.fcliubr.mongodb.net/')
.then(() => console.log('Conexão com o MongoDB estabelecida'))
.catch(err => console.error('Erro ao conectar com o MongoDB:', err));
