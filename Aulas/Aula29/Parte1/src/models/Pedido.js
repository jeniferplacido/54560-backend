// Define a classe Pedido
class Pedido {
    // O construtor é chamado quando um novo objeto Pedido é criado
    constructor(id, usuarioId, comercioId, produtos, status) {
        // Define as propriedades do objeto Pedido
        // 'this' se refere ao objeto Pedido que está sendo criado
        this.id = id; // O ID do pedido
        this.usuarioId = usuarioId; // O ID do usuário que fez o pedido
        this.comercioId = comercioId; // O ID do comércio onde o pedido foi feito
        this.produtos = produtos; // A lista de produtos no pedido
        this.status = status; // O status do pedido
    }
}

// Exporta a classe Pedido para que possa ser usada em outros módulos
module.exports = Pedido;