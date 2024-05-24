// Importa o módulo de contatos, que provavelmente contém o modelo Mongoose para a coleção de contatos
const contacts = require('./model/contatos');

// Define a classe Contacts
class Contacts {
    // Construtor da classe, que não faz nada neste caso
    constructor() {
    }

    // Método assíncrono get que busca todos os contatos na coleção de contatos
    // O método find do Mongoose retorna uma promessa, então usamos await para esperar a promessa ser resolvida
    // Quando a promessa é resolvida, ela retorna os contatos encontrados
    get = async() => {
        let contatos = await contacts.find();
        return contatos;
    }
}