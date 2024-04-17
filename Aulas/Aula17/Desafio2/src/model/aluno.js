const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const alunosCollection = 'alunos'

const userSchema = mongoose.Schema({
    primeiroNome: String,
    ultimoNome: String,
    email: String,
    genero: String,
    grade: Number,
    grupo: String
})

userSchema.plugin(mongoosePaginate)
const userModel = mongoose.model(alunosCollection, userSchema)

module.exports = userModel
