// Importar a biblioteca mongoose, que é uma biblioteca do Node.js para modelar objetos MongoDB
const mongoose = require('mongoose');

// Definir o nome da coleção no banco de dados onde os usuários serão armazenados
const userCollection = 'users';

// Definir o esquema de usuário usando o mongoose.Schema
// Um esquema é uma descrição da estrutura dos documentos em uma coleção MongoDB
const userSchema = new mongoose.Schema({
  // Campo first_name do tipo String para armazenar o primeiro nome do usuário
  first_name: String,
  // Campo last_name do tipo String para armazenar o último nome do usuário
  last_name: String,
  // Campo email do tipo String para armazenar o email do usuário
  email: String,
  // Campo gender do tipo String para armazenar o gênero do usuário
  gender: String
});

// Criar um modelo de usuário usando o mongoose.model
// Um modelo é uma classe que representa uma coleção no banco de dados
// Ele permite criar, ler, atualizar e excluir documentos da coleção
// O primeiro argumento é o nome da coleção no banco de dados
// O segundo argumento é o esquema que define a estrutura dos documentos na coleção
const userModel = mongoose.model(userCollection, userSchema);

// Exportar o modelo de usuário para que ele possa ser usado em outros arquivos
module.exports = userModel;
