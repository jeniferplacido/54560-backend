// Define a classe Comercio
class Comercio {
    // O construtor é chamado quando um novo objeto Comercio é criado
    constructor(id, nome, produtos) {
        // Define as propriedades do objeto Comercio
        // 'this' se refere ao objeto Comercio que está sendo criado
        this.id = id; // O ID do comércio
        this.nome = nome; // O nome do comércio
        this.produtos = produtos; // A lista de produtos que o comércio vende
    }
}

// Exporta a classe Comercio para que possa ser usada em outros módulos
module.exports = Comercio;