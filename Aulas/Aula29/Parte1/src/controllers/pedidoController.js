// Importa o modelo Pedido
const Pedido = require('../models/Pedido');

// Array que armazena os pedidos
let pedidos = [];

// Função que retorna todos os pedidos
const getPedidos = async (req, res) => {
    res.send({status:"sucess", result:pedidos});
}

// Função que cria um novo pedido com os dados do corpo da requisição
// Em seguida, adiciona o novo pedido ao array de pedidos
// Finalmente, retorna o novo pedido
const postPedido = async (req, res) => {
    const { id, usuarioId, comercioId, produtos, status } = req.body;
    const novoPedido = new Pedido(id, usuarioId, comercioId, produtos, status);
    pedidos.push(novoPedido);
    res.send({status:"sucess", result:novoPedido});
}

// Função que retorna todos os pedidos, independentemente do ID especificado
// Isso parece ser um erro, pois normalmente você esperaria que essa função retornasse apenas o pedido com o ID especificado
const getPedidoById = async (req, res) => {
    res.send({status:"sucess", result:pedidos});
}

// Função que atualiza o status do pedido com o ID especificado
// Se o pedido não for encontrado, isso causará um erro, pois estamos tentando acessar a propriedade 'status' de 'undefined'
const putPedido = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const pedido = pedidos.find(pedido => pedido.id == id);
    pedido.status = status;
    res.send({status:"sucess", result:pedido});
}

// Exporta as funções para que possam ser usadas em outros módulos
module.exports = { getPedidos, postPedido, getPedidoById, putPedido }