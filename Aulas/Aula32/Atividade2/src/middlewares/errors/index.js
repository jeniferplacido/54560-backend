// Importa o módulo 'enums' do diretório 'services/errors'. Este módulo provavelmente contém constantes para diferentes tipos de erros.
const enums = require('../../services/errors/enums');

// Exporta uma função middleware para o Express. Esta função será chamada sempre que um erro for passado para o próximo middleware no Express.
module.exports = (error, req, res, next) => {
    // Se o erro tiver uma propriedade 'cause', imprime essa propriedade no console.
    if (error.cause) {
        console.log(error.cause);
    } else {
        // Se o erro não tiver uma propriedade 'cause', imprime o erro inteiro no console.
        console.log(error);
    }
    // Verifica o código do erro
    switch (error.code) {
        // Se o código do erro for 'INVALID_TYPES_ERROR', envia uma resposta HTTP com o status 400 e uma mensagem de erro.
        case enums.INVALID_TYPES_ERROR:
            res.status(400).send({status: 'error', error: 'Um ou mais campos obrigatórios não foram preenchidos'})
            break;
        // Se o código do erro não for nenhum dos casos acima, envia uma resposta HTTP com o status 500 e uma mensagem de erro.
        default:
            res.status(500).send({status: 'error', error: 'Erro interno do servidor'})
    }
}