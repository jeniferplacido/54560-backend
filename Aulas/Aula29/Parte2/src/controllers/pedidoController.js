// Importa o módulo pedidoDAO
const pedidoDAO = require('../dao/pedido.dao');

// Define a função assíncrona criarPedido
// Esta função cria um novo pedido com os dados do corpo da requisição
// Em caso de sucesso, retorna o pedido criado com o status 201
// Em caso de erro, retorna uma mensagem de erro com o status 400
const criarPedido = async (req, res) => {
    try {
        const { usuarioId, comercioId, produtos, status } = req.body;

        const numeroOrdem = 'ORD-' + Date.now();

        const pedido = await pedidoDAO.criarPedido({
            numeroOrdem,
            usuario: usuarioId,
            comercio: comercioId,
            produtos,
            status: status || 'pendente'
        });

        res.status(201).send({ status: 'success', result: pedido });
    } catch (error) {
        res.status(400).send({ status: 'error', message: error.message });
    }
};

// Define a função assíncrona obterPedidos
// Esta função retorna todos os pedidos
// Em caso de sucesso, retorna os pedidos com o status 200
// Em caso de erro, retorna uma mensagem de erro com o status 400
const obterPedidos = async (req, res) => {
    try {
        const pedidos = await pedidoDAO.obterPedidos();
        res.status(200).send({ status: 'success', result: pedidos });
    } catch (error) {
        res.status(400).send({ status: 'error', message: error.message });
    }
};

// Define a função assíncrona obterPedidoPorId
// Esta função retorna o pedido com o ID especificado
// Em caso de sucesso, retorna o pedido com o status 200
// Se o pedido não for encontrado, retorna uma mensagem de erro com o status 404
// Em caso de outro erro, retorna uma mensagem de erro com o status 400
const obterPedidoPorId = async (req, res) => {
    try {
        const pedido = await pedidoDAO.obterPedidoPorId(req.params.id);
        if (pedido) {
            res.status(200).send({ status: 'success', result: pedido });
        } else {
            res.status(404).send({ status: 'error', message: 'Pedido não encontrado' });
        }
    } catch (error) {
        res.status(400).send({ status: 'error', message: error.message });
    }
};

// Define a função assíncrona atualizarPedido
// Esta função atualiza o pedido com o ID e os dados especificados
// Em caso de sucesso, retorna o pedido atualizado com o status 200
// Se o pedido não for encontrado, retorna uma mensagem de erro com o status 404
// Em caso de outro erro, retorna uma mensagem de erro com o status 400
const atualizarPedido = async (req, res) => {
    try {
        const pedido = await pedidoDAO.atualizarPedido(req.params.id, req.body);
        if (pedido) {
            res.status(200).send({ status: 'success', result: pedido });
        } else {
            res.status(404).send({ status: 'error', message: 'Pedido não encontrado' });
        }
    } catch (error) {
        res.status(400).send({ status: 'error', message: error.message });
    }
};

// Define a função assíncrona excluirPedido
// Esta função exclui o pedido com o ID especificado
// Em caso de sucesso, retorna o pedido excluído com o status 200
// Se o pedido não for encontrado, retorna uma mensagem de erro com o status 404
// Em caso de outro erro, retorna uma mensagem de erro com o status 400
const excluirPedido = async (req, res) => {
    try {
        const pedido = await pedidoDAO.excluirPedido(req.params.id);
        if (pedido) {
            res.status(200).send({ status: 'success', result: pedido });
        } else {
            res.status(404).send({ status: 'error', message: 'Pedido não encontrado' });
        }
    } catch (error) {
        res.status(400).send({ status: 'error', message: error.message });
    }
};

// Exporta as funções para que possam ser usadas em outros módulos
module.exports = { criarPedido, obterPedidos, obterPedidoPorId, atualizarPedido, excluirPedido };