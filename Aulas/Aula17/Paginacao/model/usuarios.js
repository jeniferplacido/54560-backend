const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const userCollection = 'usuarios'

const userSchema = mongoose.Schema({
    primeiroNome: String,
    ultimoNome: String,
    email: String,
    genero: String
})

userSchema.plugin(mongoosePaginate)
const userModel = mongoose.model(userCollection, userSchema)

module.exports = userModel
