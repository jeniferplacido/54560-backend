const mongoose = require('mongoose');

// Define o esquema do usuário utilizando o Mongoose Schema
const userSchema = new mongoose.Schema({
    primeiro_nome: String,
    segundo_nome: String,
    email: {
        type: String,
        unique: true  // Garante que cada e-mail seja único no banco de dados
    },
    idade: Number,
    senha: String
});

// Cria o modelo User usando o esquema definido acima
const User = mongoose.model('User', userSchema);

// Exporta o modelo User para que possa ser utilizado em outros arquivos da aplicação
module.exports = User;
