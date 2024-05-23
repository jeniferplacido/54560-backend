// Define a classe ContactDAO
class ContactDAO {
    // Método assíncrono create que deve criar um novo contato
    // Como este método não foi implementado, ele lança um erro
    async create(contato) {
        throw new Error('Method não implementado');
    }

    // Método assíncrono read que deve ler um contato pelo ID
    // Como este método não foi implementado, ele lança um erro
    async read(contactId) {
        throw new Error('Method não implementado');
    }

    // Método assíncrono update que deve atualizar um contato pelo ID
    // Como este método não foi implementado, ele lança um erro
    async update(contactId, contact) {
        throw new Error('Method não implementado');
    }

    // Método assíncrono delete que deve deletar um contato pelo ID
    // Como este método não foi implementado, ele lança um erro
    async delete(contactId) {
        throw new Error('Method não implementado');
    }

    // Método assíncrono list que deve listar todos os contatos
    // Como este método não foi implementado, ele lança um erro
    async list() {
        throw new Error('Method não implementado');
    }
}

// Exporta a classe ContactDAO para que ela possa ser usada em outros módulos
module.exports = ContactDAO;