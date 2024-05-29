// Importa o DAO de pedido
const pedidoDAO = require('../dao/pedido.dao');

// Define a função para criar um pedido
const criarPedido = async (req, res) => {
    try {
        // Extrai o ID do usuário, o ID do comércio, os produtos e o status do corpo da requisição
        const { usuarioId, comercioId, produtos, status } = req.body;

        // Cria um número de ordem com o prefixo "ORD-" e a data e hora atual
        const numeroOrdem = 'ORD-' + Date.now();

        // Chama a função criarPedido do DAO de pedido com o número de ordem, o ID do usuário, o ID do comércio, os produtos e o status (ou "pendente" se o status não for fornecido)
        const pedido = await pedidoDAO.criarPedido({
            numeroOrdem,
            usuario: usuarioId,
            comercio: comercioId,
            produtos,
            status: status || 'pendente'
        });

        // Envia a resposta com o status "success" e o novo pedido
        res.status(201).send({ status: 'success', result: pedido });
    } catch (error) {
        // Em caso de erro, envia a resposta com o status "error" e a mensagem de erro
        res.status(400).send({ status: 'error', message: error.message });
    }
};

// Define a função para obter todos os pedidos
const obterPedidos = async (req, res) => {
    try {
        // Chama a função obterPedidos do DAO de pedido
        const pedidos = await pedidoDAO.obterPedidos();
        // Envia a resposta com o status "success" e a lista de pedidos
        res.status(200).send({ status: 'success', result: pedidos });
    } catch (error) {
        // Em caso de erro, envia a resposta com o status "error" e a mensagem de erro
        res.status(400).send({ status: 'error', message: error.message });
    }
};

// Define a função para obter um pedido pelo ID
const obterPedidoPorId = async (req, res) => {
    try {
        // Chama a função obterPedidoPorId do DAO de pedido com o ID dos parâmetros da requisição
        const pedido = await pedidoDAO.obterPedidoPorId(req.params.id);
        // Se o pedido existir, envia a resposta com o status "success" e o pedido
        // Se não, envia a resposta com o status "error" e a mensagem "Pedido não encontrado"
        if (pedido) {
            res.status(200).send({ status: 'success', result: pedido });
        } else {
            res.status(404).send({ status: 'error', message: 'Pedido não encontrado' });
        }
    } catch (error) {
        // Em caso de erro, envia a resposta com o status "error" e a mensagem de erro
        res.status(400).send({ status: 'error', message: error.message });
    }
};

// Define a função para atualizar um pedido
const atualizarPedido = async (req, res) => {
    try {
        // Chama a função atualizarPedido do DAO de pedido com o ID dos parâmetros da requisição e o corpo da requisição
        const pedido = await pedidoDAO.atualizarPedido(req.params.id, req.body);
        // Se o pedido foi atualizado, envia a resposta com o status "success" e o pedido atualizado
        // Se não, envia a resposta com o status "error" e a mensagem "Pedido não encontrado"
        if (pedido) {
            res.status(200).send({ status: 'success', result: pedido });
        } else {
            res.status(404).send({ status: 'error', message: 'Pedido não encontrado' });
        }
    } catch (error) {
        // Em caso de erro, envia a resposta com o status "error" e a mensagem de erro
        res.status(400).send({ status: 'error', message: error.message });
    }
};

// Define a função para excluir um pedido
const excluirPedido = async (req, res) => {
    try {
        // Chama a função excluirPedido do DAO de pedido com o ID dos parâmetros da requisição
        const pedido = await pedidoDAO.excluirPedido(req.params.id);
        // Se o pedido foi excluído, envia a resposta com o status "success" e o pedido excluído
        // Se não, envia a resposta com o status "error" e a mensagem "Pedido não encontrado"
        if (pedido) {
            res.status(200).send({ status: 'success', result: pedido });
        } else {
            res.status(404).send({ status: 'error', message: 'Pedido não encontrado' });
        }
    } catch (error) {
        // Em caso de erro, envia a resposta com o status "error" e a mensagem de erro
        res.status(400).send({ status: 'error', message: error.message });
    }
};

// Exporta as funções
module.exports = { criarPedido, obterPedidos, obterPedidoPorId, atualizarPedido, excluirPedido };