const mongoose = require('mongoose');

const alunosCollection = 'alunos'

const userSchema = mongoose.Schema({
    primeiroNome: String,
    ultimoNome: String,
    email: String,
    genero: String,
    grade: Number,
    grupo: String
})


const userModel = mongoose.model(alunosCollection, userSchema)

module.exports = userModel
