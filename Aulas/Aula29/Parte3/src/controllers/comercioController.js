// Importa o DAO de comércio
const ComercioDAO = require('../dao/comercio.dao');

// Define a função para obter todos os comércios
const getComercios = async (req, res) => {
    try {
        // Chama a função listarComercios do DAO de comércio
        const comercios = await ComercioDAO.listarComercios();
        // Envia a resposta com o status "success" e a lista de comércios
        res.send({ status: "success", result: comercios });
    } catch (error) {
        // Em caso de erro, envia a resposta com o status "error" e a mensagem de erro
        res.status(500).send({ status: "error", message: error.message });
    }
};

// Define a função para obter um comércio pelo ID
const getComercioById = async (req, res) => {
    // Extrai o ID dos parâmetros da requisição
    const { id } = req.params;
    try {
        // Chama a função buscarComercioPorId do DAO de comércio com o ID
        const comercio = await ComercioDAO.buscarComercioPorId(id);
        // Se o comércio existir, envia a resposta com o status "success" e o comércio
        // Se não, envia a resposta com o status "error" e a mensagem "Comércio não encontrado"
        if (comercio) {
            res.send({ status: "success", result: comercio });
        } else {
            res.status(404).send({ status: "error", message: "Comércio não encontrado" });
        }
    } catch (error) {
        // Em caso de erro, envia a resposta com o status "error" e a mensagem de erro
        res.status(500).send({ status: "error", message: error.message });
    }
};

// Define a função para criar um comércio
const criarComercio = async (req, res) => {
    // Extrai o nome e os produtos do corpo da requisição
    const { nome, produtos } = req.body;
    try {
        // Chama a função criarComercio do DAO de comércio com o nome e os produtos
        const novoComercio = await ComercioDAO.criarComercio({ nome, produtos });
        // Envia a resposta com o status "success" e o novo comércio
        res.send({ status: "success", result: novoComercio });
    } catch (error) {
        // Em caso de erro, envia a resposta com o status "error" e a mensagem de erro
        res.status(500).send({ status: "error", message: error.message });
    }
};

// Define a função para atualizar um comércio
const atualizarComercio = async (req, res) => {
    // Extrai o ID dos parâmetros da requisição e o nome e os produtos do corpo da requisição
    const { id } = req.params;
    const { nome, produtos } = req.body;
    try {
        // Chama a função atualizarComercio do DAO de comércio com o ID, o nome e os produtos
        const comercioAtualizado = await ComercioDAO.atualizarComercio(id, { nome, produtos });
        // Se o comércio foi atualizado, envia a resposta com o status "success" e o comércio atualizado
        // Se não, envia a resposta com o status "error" e a mensagem "Comércio não encontrado"
        if (comercioAtualizado) {
            res.send({ status: "success", result: comercioAtualizado });
        } else {
            res.status(404).send({ status: "error", message: "Comércio não encontrado" });
        }
    } catch (error) {
        // Em caso de erro, envia a resposta com o status "error" e a mensagem de erro
        res.status(500).send({ status: "error", message: error.message });
    }
};

// Define a função para deletar um comércio
const deletarComercio = async (req, res) => {
    // Extrai o ID dos parâmetros da requisição
    const { id } = req.params;
    try {
        // Chama a função deletarComercio do DAO de comércio com o ID
        const comercioDeletado = await ComercioDAO.deletarComercio(id);
        // Se o comércio foi deletado, envia a resposta com o status "success" e a mensagem "Comércio deletado com sucesso"
        // Se não, envia a resposta com o status "error" e a mensagem "Comércio não encontrado"
        if (comercioDeletado) {
            res.send({ status: "success", message: "Comércio deletado com sucesso" });
        } else {
            res.status(404).send({ status: "error", message: "Comércio não encontrado" });
        }
    } catch (error) {
        // Em caso de erro, envia a resposta com o status "error" e a mensagem de erro
        res.status(500).send({ status: "error", message: error.message });
    }
};

// Exporta as funções
module.exports = { getComercios, getComercioById, criarComercio, atualizarComercio, deletarComercio };