const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UsuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  sobrenome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  senha: {
    type: String,
    required: true
  }
});

// Encriptar a senha antes de salvar
UsuarioSchema.pre('save', async function(next) {
  if (!this.isModified('senha')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.senha = await bcrypt.hash(this.senha, salt);
  next();
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
