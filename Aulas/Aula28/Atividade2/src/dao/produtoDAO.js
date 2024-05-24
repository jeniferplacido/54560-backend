// Define a classe ProdutoDAO
class ProdutoDAO {
    // Construtor da classe, que inicializa a propriedade produtos como um array vazio
    // Esta propriedade será usada para armazenar os produtos em memória
    constructor() {
        // Inicializa a propriedade produtos como um array vazio
        this.produtos = [];
    }

    // Método assíncrono get que retorna os produtos armazenados na propriedade produtos
    // descomenta o código abaixo para retornar o array com produtos
    // constructor() {
    //     this.produtos = [
    //         { id: 1, nome: 'Produto 1', preco: 10 },
    //         { id: 2, nome: 'Produto 2', preco: 20 },
    //         { id: 3, nome: 'Produto 3', preco: 30 }
    //     ];
    // }
    
    // Método assíncrono get que retorna os produtos armazenados na propriedade produtos
    // Como a propriedade produtos está em memória, não há necessidade de esperar por uma operação de I/O, então a palavra-chave async é opcional aqui
    async get() {
        return this.produtos;
    }
}

// Exporta a classe ProdutoDAO para que ela possa ser usada em outros módulos
module.exports = ProdutoDAO;