// Importa a biblioteca mongoose, que é usada para interagir com o MongoDB
const mongoose = require('mongoose');

// Define a classe MongoSingleton
class MongoSingleton {
    // Campo estático privado que armazenará a única instância da classe
    static #instance;

    // Construtor da classe, que se conecta ao MongoDB usando mongoose
    constructor() {
        mongoose.connect('Url', { //Substitua 'Url' pelo link do seu MongoDB
            // Aqui você pode adicionar opções de conexão, se necessário
        });
    }

    // Método estático que retorna a instância única da classe MongoSingleton
    static getInstance() {
        // Verifica se a instância já existe
        if(this.#instance){
            // Se a instância já existe, imprime uma mensagem no console e retorna a instância existente
            console.log('Ja existe uma instância');
            return this.#instance;
        }

        // Se a instância ainda não existe, cria uma nova instância, imprime uma mensagem no console e retorna a nova instância
        this.#instance = new MongoSingleton();
        console.log('Mongodb conectado com sucesso');
        return this.#instance;
    }
}

// Exporta a classe MongoSingleton para que possa ser usada em outros módulos
module.exports = MongoSingleton;