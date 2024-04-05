const mongoose = require('mongoose');
const userCollection = 'alunos';
const userSchema = new mongoose.Schema({
    nome: String,
    sobrenome: String,
    idade: Number,
    dni:{
        type: String,
        unique: true,
        required: true
    },
    curso: String,
    nota: Number,
    email:{
        type: String,
        unique: true,
        required: true
    }
})

module.exports = mongoose.model(userCollection, userSchema)