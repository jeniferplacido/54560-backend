// Importa a classe ContactDAO do arquivo './contactDAO'
const ContactDAO = require('./contactDAO');

// Define a classe MemoryDAO que estende a classe ContactDAO
class MemoryDAO extends ContactDAO {
    // Construtor da classe, que inicializa a propriedade contacts como um array vazio e a propriedade currentId como 1
    constructor() {
        super(); // Chama o construtor da classe pai ContactDAO
        this.contacts = []; // Armazena os contatos em memória
        this.currentId = 1; // Usado para atribuir IDs aos contatos
    }

    // Método assíncrono create que cria um novo contato
    // Atribui um ID ao contato, incrementa o currentId e adiciona o contato ao array de contatos
    async create(contact) {
        contact.id = this.currentId++;
        this.contacts.push(contact);
        return contact;
    }

    // Método assíncrono read que lê um contato pelo ID
    // Usa o método find do array para encontrar o contato com o ID especificado
    async read(contactId) {
        return this.contacts.find(contact => contact.id === parseInt(contactId));
    }

    // Método assíncrono update que atualiza um contato pelo ID
    // Encontra o índice do contato com o ID especificado e atualiza o contato nesse índice
    async update(contactId, contact) {
        const index = this.contacts.findIndex(c => c.id === parseInt(contactId));
        if (index !== -1) {
            this.contacts[index] = { ...this.contacts[index], ...contact };
            return this.contacts[index];
        }
        return null;
    }

    // Método assíncrono delete que deleta um contato pelo ID
    // Encontra o índice do contato com o ID especificado e remove o contato desse índice
    async delete(contactId) {
        const index = this.contacts.findIndex(c => c.id === parseInt(contactId));
        if (index !== -1) {
            const deletedContact = this.contacts.splice(index, 1);
            return deletedContact[0];
        }
        return null;
    }

    // Método assíncrono list que lista todos os contatos
    // Retorna o array de contatos
    async list() {
        return this.contacts;
    }
}

// Exporta a classe MemoryDAO para que ela possa ser usada em outros módulos
module.exports = MemoryDAO;