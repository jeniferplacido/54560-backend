const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    primeiro_nome: String,
    segundo_nome: String,
    email:{
        type: String, unique: true},
    idade: Number,
    senha: String
})

const User = mongoose.model('User', userSchema);

module.exports = User
