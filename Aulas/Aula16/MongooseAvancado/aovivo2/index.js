const mongoose = require('mongoose');
const userModel = require('./models/users');

const environment = async () => {
  await mongoose.connect('mongodb+srv://coders:coders@users.dqlbfvu.mongodb.net/')
.then(() => console.log('Conexão com o MongoDB estabelecida'))
.catch(err => console.error('Erro ao conectar com o MongoDB:', err));  
let response = await userModel.find({first_name: 'Aline'}).explain('executionStats');
console.log(response);
};

environment();

