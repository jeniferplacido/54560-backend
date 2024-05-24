class ProdutoRepository {
    constructor(produtoDAO) {
        this.produtoDAO = produtoDAO;
    }

    async get() {
        return await this.produtoDAO.get();
    }
}

module.exports = ProdutoRepository;
