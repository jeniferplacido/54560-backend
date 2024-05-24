// Importa o módulo Mongoose, que é uma biblioteca para interagir com o MongoDB
const mongoose = require('mongoose');

// Define um novo esquema para os contatos usando o método Schema do Mongoose
// Este esquema especifica que cada contato tem um nome e um email, ambos do tipo String
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
});

// Cria um modelo Mongoose a partir do esquema de contato
// Este modelo é usado para criar e ler documentos da coleção 'Contact' no MongoDB
const Contact = mongoose.model('Contact', contactSchema);

// Exporta o modelo Contact para que ele possa ser usado em outros módulos
module.exports = Contact;