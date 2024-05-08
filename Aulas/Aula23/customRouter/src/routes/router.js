const Router = require('express'); // Importa o módulo express para criar rotas

class customRouter { // Define a classe customRouter
    constructor() { // Método construtor da classe
        this.router = Router(); // Inicializa o router do express
        this.init(); // Chama o método init para configurar as rotas
    }

    getRouter() { // Método para obter o router configurado
        return this.router; // Retorna o router
    }

    init() { // Método para configurar as rotas
        // A lógica das rotas será definida posteriormente aqui
    }

    get(path, ...callbacks) { // Método para definir uma rota GET
        this.router.get(path,this.generateCustomResponses, this.applyCallbacks(callbacks)); // Configura a rota GET com os callbacks
    }

    applyCallbacks(callbacks) { // Método para aplicar callbacks às rotas
        return callbacks.map(callback => async (...params) => { // Mapeia os callbacks para funções assíncronas
            try {
                await callback.apply(this, params); // Executa os callbacks passando os parâmetros
            } catch (error) {
                console.log(error); // Loga qualquer erro ocorrido
                params[1].status(500).send(error); // Retorna um status 500 em caso de erro
            }
        });
    }

    generateCustomResponses = (req, res, next) => {
        res.sendSucess = payload => res.send({ status: 'success', payload });
        res.sendError = error => res.status(500).send({ status: 'error', error });
        res.sendUserError = error => res.status(400).send({ status: 'error', error });
        next();
    }
}

module.exports = customRouter; // Exporta a classe customRouter para uso em outros arquivos
