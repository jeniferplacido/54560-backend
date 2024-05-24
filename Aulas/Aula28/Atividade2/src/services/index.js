// Importa a classe ProdutoDAO do arquivo '../dao/produtoDAO'
const ProdutoDAO = require('../dao/produtoDAO');

// Importa a classe ProdutoRepository do arquivo '../repositories/produtoRepository'
const ProdutoRepository = require('../repositories/produtoRepository');

// Cria uma nova instância da classe ProdutoDAO
const produtoDAO = new ProdutoDAO();

// Cria uma nova instância da classe ProdutoRepository, passando a instância de ProdutoDAO como argumento para o construtor
const produtoRepository = new ProdutoRepository(produtoDAO);

// Exporta um objeto com a propriedade produtoRepository
// Isso permite que outras partes do código importem este módulo e acessem a instância de ProdutoRepository através da propriedade produtoRepository
module.exports = {
    produtoRepository
};