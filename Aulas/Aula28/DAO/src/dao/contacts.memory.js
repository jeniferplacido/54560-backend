// Define a classe Contacts
class Contacts {
    // Construtor da classe, que inicializa a propriedade data como um array vazio
    // Esta propriedade será usada para armazenar os contatos em memória
    constructor() {
        this.data = [];
    }

    // Método assíncrono get que retorna os contatos armazenados na propriedade data
    // Como a propriedade data está em memória, não há necessidade de esperar por uma operação de I/O, então a palavra-chave async é opcional aqui
    async get() {
        return this.data;
    }
}

// Exporta a classe Contacts para que ela possa ser usada em outros módulos
module.exports = Contacts;