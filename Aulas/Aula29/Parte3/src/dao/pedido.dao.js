// Importa o modelo de Pedido
const Pedido = require('../models/Pedido');

// Define a função para criar um pedido
const criarPedido = async (dados) => {
    // Cria um novo pedido com os dados fornecidos
    const pedido = new Pedido(dados);
    // Salva o pedido no banco de dados e retorna o resultado
    return await pedido.save();
};

// Define a função para obter todos os pedidos
const obterPedidos = async () => {
    // Retorna todos os pedidos do banco de dados, populando os campos 'usuario' e 'comercio'
    return await Pedido.find().populate('usuario').populate('comercio');
};

// Define a função para obter um pedido pelo ID
const obterPedidoPorId = async (id) => {
    // Retorna o pedido com o ID fornecido, populando os campos 'usuario' e 'comercio'
    return await Pedido.findById(id).populate('usuario').populate('comercio');
};

// Define a função para atualizar um pedido
const atualizarPedido = async (id, dadosAtualizados) => {
    // Atualiza o pedido com o ID fornecido com os dados atualizados e retorna o resultado
    // A opção { new: true } garante que o pedido atualizado seja retornado
    return await Pedido.findByIdAndUpdate(id, dadosAtualizados, { new: true });
};

// Define a função para excluir um pedido
const excluirPedido = async (id) => {
    // Exclui o pedido com o ID fornecido e retorna o resultado
    return await Pedido.findByIdAndDelete(id);
};

// Exporta as funções
module.exports = { criarPedido, obterPedidos, obterPedidoPorId, atualizarPedido, excluirPedido };