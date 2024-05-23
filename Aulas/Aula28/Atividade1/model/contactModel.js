const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    nome: String,
    email: String,
  
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
