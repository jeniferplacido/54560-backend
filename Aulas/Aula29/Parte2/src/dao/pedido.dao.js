// Importa o modelo Pedido
const Pedido = require('../models/Pedido');

// Define a classe PedidoDAO
class PedidoDAO {
    // Método para listar todos os pedidos
    static async listarPedidos() {
        // Retorna todos os pedidos encontrados na base de dados
        return await Pedido.find();
    }

    // Método para buscar um pedido por ID
    static async buscarPedidoPorId(id) {
        // Retorna o pedido com o ID especificado
        return await Pedido.findById(id);
    }

    // Método para criar um novo pedido
    static async criarPedido(pedido) {
        // Cria um novo pedido na base de dados com os dados especificados e retorna o pedido criado
        return await Pedido.create(pedido);
    }

    // Método para atualizar um pedido
    static async atualizarPedido(id, pedidoAtualizado) {
        // Atualiza o pedido com o ID especificado na base de dados com os novos dados e retorna o pedido atualizado
        return await Pedido.findByIdAndUpdate(id, pedidoAtualizado, { new: true });
    }

    // Método para deletar um pedido
    static async deletarPedido(id) {
        // Deleta o pedido com o ID especificado da base de dados e retorna o pedido deletado
        return await Pedido.findByIdAndDelete(id);
    }
}

// Exporta a classe PedidoDAO para que possa ser usada em outros módulos
module.exports = PedidoDAO;