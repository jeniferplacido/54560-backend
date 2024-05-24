// Importa o módulo mongoose, que é uma biblioteca para trabalhar com MongoDB
// Importa o módulo mongoose, que é uma biblioteca para trabalhar com MongoDB
const mongoose = require('mongoose');

// Importa a classe ContactDAO do arquivo './contactDAO'
const ContactDAO = require('./contactDAO');

// Importa o modelo de contato do arquivo '../model/contactModel'
const Contact = require('../model/contactModel');

// Define a classe MongoDAO que estende a classe ContactDAO
class MongoDAO extends ContactDAO {
    // Construtor da classe, que conecta ao MongoDB usando mongoose
    constructor() {
        super(); // Chama o construtor da classe pai ContactDAO
        mongoose.connect('URL', {});
        console.log('Conectado ao MongoDB');
    }

    // Método assíncrono create que cria um novo contato no MongoDB
    // Cria uma nova instância do modelo Contact com os dados do contato e salva no MongoDB
    async create(contact) {
        const newContact = new Contact(contact);
        return await newContact.save();
    }

    // Método assíncrono read que lê um contato pelo ID no MongoDB
    // Usa o método findById do modelo Contact para encontrar o contato com o ID especificado
    async read(contactId) {
        return await Contact.findById(contactId);
    }

    // Método assíncrono update que atualiza um contato pelo ID no MongoDB
    // Usa o método findByIdAndUpdate do modelo Contact para atualizar o contato com o ID especificado
    async update(contactId, contact) {
        return await Contact.findByIdAndUpdate(contactId, contact, { new: true });
    }

    // Método assíncrono delete que deleta um contato pelo ID no MongoDB
    // Usa o método findByIdAndDelete do modelo Contact para deletar o contato com o ID especificado
    async delete(contactId) {
        return await Contact.findByIdAndDelete(contactId);
    }

    // Método assíncrono list que lista todos os contatos no MongoDB
    // Usa o método find do modelo Contact para encontrar todos os contatos
    async list() {
        return await Contact.find();
    }
}

// Exporta a classe MongoDAO para que ela possa ser usada em outros módulos
module.exports = MongoDAO;