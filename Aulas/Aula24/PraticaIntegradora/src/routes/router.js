// Importando o módulo express
const express = require('express');

// Definindo a classe Router
class Router {
    // Construtor da classe
    constructor() {
        this.router = express.Router(); // Inicializa o roteador do Express
        this.init(); // Chama o método init para configurar as rotas
    }

    // Método para retornar o roteador
    getRouter() {
        return this.router; // Retorna o roteador do Express
    }

    // Método para inicializar as rotas
    init() {
        // Define uma rota GET para a raiz ('/')
        // Esta rota é comum a todos os tipos de usuários ou configurações iniciais
        this.router.get('/', (req, res) => {
            res.send('Bem-vindo à página principal'); // Envia uma mensagem de boas-vindas como resposta
        });
    }
}

// Exportando a classe Router
module.exports = Router;