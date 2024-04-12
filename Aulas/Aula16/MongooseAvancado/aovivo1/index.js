// Importar a biblioteca mongoose, que é uma biblioteca do Node.js para modelar objetos MongoDB
const mongoose = require('mongoose');

// Importar o modelo de usuário definido anteriormente
const userModel = require('./models/users');

// Definir uma função assíncrona chamada environment
const environment = async () => {
  // Aguardar a conexão com o banco de dados MongoDB
  await mongoose.connect('mongodb+srv://coders:coders@users.dqlbfvu.mongodb.net/')
    .then(() => console.log('Conexão com o MongoDB estabelecida')) // Se a conexão for bem-sucedida, exibir uma mensagem
    .catch(err => console.error('Erro ao conectar com o MongoDB:', err));  // Se ocorrer um erro durante a conexão, exibir o erro
  
  // Usar o método find do modelo de usuário para encontrar documentos na coleção "users" que correspondam ao filtro especificado
  // Neste caso, estamos procurando por usuários com o primeiro nome 'Aline'
  // O método explain('executionStats') é usado para retornar estatísticas de execução da consulta
  let response = await userModel.find({first_name: 'Aline'}).explain('executionStats');
  
  // Exibir as estatísticas de execução da consulta
  console.log(response);
};

// Chamar a função environment para executar o código
environment();
