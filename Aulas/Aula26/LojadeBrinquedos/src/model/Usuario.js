const mongoose = require('mongoose');

// Cria um esquema para o usuario
const usuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  sobrenome: { type: String, required: true },
  email: { type: String, required: true },
  senha: { type: String, required: true }
});

// Cria um modelo para o usuario
const Usuario = mongoose.model('Usuario', usuarioSchema);

// Exporta o modelo
module.exports = Usuario;
