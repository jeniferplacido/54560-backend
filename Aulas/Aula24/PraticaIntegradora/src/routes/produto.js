// Importando os módulos necessários
const express = require('express'); // Express é um framework para construir aplicações web em Node.js
const passport = require('passport'); // Passport é um middleware de autenticação para Node.js
const Produto = require('../model/Produto'); // Importando o modelo de Produto do diretório 'model'
const { autorizacao } = require('../middlewares/auth'); // Importando o middleware de autorização do diretório 'middlewares'

// Definindo a classe ProdutosRouter
class ProdutosRouter {
    // Construtor da classe
    constructor() {
        this.router = express.Router(); // Inicializando o roteador do Express
        this.init(); // Chamando o método init
    }

    // Método para retornar o roteador
    getRouter() {
        return this.router; // Retorna o roteador do Express
    }

    // Método para inicializar as rotas
    init() {
        // Rota para adicionar um novo produto
        this.router.post('/add', async (req, res) => { // Define uma rota POST para '/add'
            try {
                console.log(autorizacao) // Loga o middleware de autorização
                const { nome, descricao, preco } = req.body; // Extrai nome, descrição e preço do corpo da requisição
                const newProduct = new Produto({ nome, descricao, preco }); // Cria um novo produto com os dados extraídos
                await newProduct.save(); // Salva o novo produto no banco de dados
                res.send('Produto adicionado com sucesso'); // Envia uma resposta de sucesso
            } catch (error) {
                res.status(500).send('Erro ao adicionar produto'); // Em caso de erro, envia uma resposta de erro
            }
        });

        // Rota para listar todos os produtos
        this.router.get('/list', async (req, res) => { // Define uma rota GET para '/list'
            try {
                const products = await Produto.find(); // Busca todos os produtos no banco de dados
                res.json(products); // Envia a lista de produtos como resposta
            } catch (error) {
                res.status(500).send('Erro ao obter lista de produtos'); // Em caso de erro, envia uma resposta de erro
            }
        });
    }
}

// Exportando a classe ProdutosRouter
module.exports = ProdutosRouter;