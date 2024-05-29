const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Definindo o esquema do Mongoose para Usuario
const usuarioSchema = new mongoose.Schema({
    nome: {
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
    },
    ordens: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pedido'
    }]
});

// Método para comparar senha
usuarioSchema.methods.compararSenha = async function(senha) {
    return bcrypt.compare(senha, this.senha);
};

// Hook pré-save para hash da senha antes de salvar o usuário
usuarioSchema.pre('save', async function(next) {
    if (this.isModified('senha') || this.isNew) {
        const salt = await bcrypt.genSalt(10);
        this.senha = await bcrypt.hash(this.senha, salt);
    }
    next();
});

// Criando e exportando o modelo do Mongoose
const Usuario = mongoose.model('Usuario', usuarioSchema);
module.exports = Usuario;
