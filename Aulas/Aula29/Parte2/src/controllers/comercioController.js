// Importa a classe ComercioDAO do módulo '../dao/comercio.dao'
const ComercioDAO = require('../dao/comercio.dao');

// Define a função assíncrona getComercios
// Esta função é um controlador que lida com requisições para obter todos os comércios
const getComercios = async (req, res) => {
    try {
        // Chama o método listarComercios de ComercioDAO para obter todos os comércios
        const comercios = await ComercioDAO.listarComercios();
        // Envia uma resposta com status "success" e os comércios obtidos
        res.send({ status: "success", result: comercios });
    } catch (error) {
        // Se ocorrer um erro, envia uma resposta com status 500 e status "error"
        res.status(500).send({ status: "error", message: error.message });
    }
};

// Define a função assíncrona getComercioById
// Esta função é um controlador que lida com requisições para obter um comércio pelo seu ID
const getComercioById = async (req, res) => {
    // Extrai o ID do comércio dos parâmetros da requisição
    const { id } = req.params;
    try {
        // Chama o método buscarComercioPorId de ComercioDAO para obter o comércio com o ID especificado
        const comercio = await ComercioDAO.buscarComercioPorId(id);
        // Se o comércio existir, envia uma resposta com status "success" e o comércio obtido
        // Se o comércio não existir, envia uma resposta com status 404 e status "error"
        if (comercio) {
            res.send({ status: "success", result: comercio });
        } else {
            res.status(404).send({ status: "error", message: "Comércio não encontrado" });
        }
    } catch (error) {
        // Se ocorrer um erro, envia uma resposta com status 500 e status "error"
        res.status(500).send({ status: "error", message: error.message });
    }
};

// Define a função assíncrona criarComercio
// Esta função é um controlador que lida com requisições para criar um novo comércio
const criarComercio = async (req, res) => {
    // Extrai o nome e os produtos do corpo da requisição
    const { nome, produtos } = req.body;
    try {
        // Chama o método criarComercio de ComercioDAO para criar um novo comércio com o nome e os produtos especificados
        const novoComercio = await ComercioDAO.criarComercio({ nome, produtos });
        // Envia uma resposta com status "success" e o novo comércio criado
        res.send({ status: "success", result: novoComercio });
    } catch (error) {
        // Se ocorrer um erro, envia uma resposta com status 500 e status "error"
        res.status(500).send({ status: "error", message: error.message });
    }
};

// Define a função assíncrona atualizarComercio
// Esta função é um controlador que lida com requisições para atualizar um comércio existente
const atualizarComercio = async (req, res) => {
    // Extrai o ID do comércio dos parâmetros da requisição e o nome e os produtos do corpo da requisição
    const { id } = req.params;
    const { nome, produtos } = req.body;
    try {
        // Chama o método atualizarComercio de ComercioDAO para atualizar o comércio com o ID, nome e produtos especificados
        const comercioAtualizado = await ComercioDAO.atualizarComercio(id, { nome, produtos });
        // Se o comércio existir e for atualizado, envia uma resposta com status "success" e o comércio atualizado
        // Se o comércio não existir, envia uma resposta com status 404 e status "error"
        if (comercioAtualizado) {
            res.send({ status: "success", result: comercioAtualizado });
        } else {
            res.status(404).send({ status: "error", message: "Comércio não encontrado" });
        }
    } catch (error) {
        // Se ocorrer um erro, envia uma resposta com status 500 e status "error"
        res.status(500).send({ status: "error", message: error.message });
    }
};

// Define a função assíncrona deletarComercio
// Esta função é um controlador que lida com requisições para deletar um comércio existente
const deletarComercio = async (req, res) => {
    // Extrai o ID do comércio dos parâmetros da requisição
    const { id } = req.params;
    try {
        // Chama o método deletarComercio de ComercioDAO para deletar o comércio com o ID especificado
        const comercioDeletado = await ComercioDAO.deletarComercio(id);
        // Se o comércio existir e for deletado, envia uma resposta com status "success" e uma mensagem de sucesso
        // Se o comércio não existir, envia uma resposta com status 404 e status "error"
        if (comercioDeletado) {
            res.send({ status: "success", message: "Comércio deletado com sucesso" });
        } else {
            res.status(404).send({ status: "error", message: "Comércio não encontrado" });
        }
    } catch (error) {
        // Se ocorrer um erro, envia uma resposta com status 500 e status "error"
        res.status(500).send({ status: "error", message: error.message });
    }
};

// Exporta as funções getComercios, getComercioById, criarComercio, atualizarComercio e deletarComercio
// Isso permite que elas sejam usadas em outros módulos, como rotas express
module.exports = { getComercios, getComercioById, criarComercio, atualizarComercio, deletarComercio };