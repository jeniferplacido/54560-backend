// Importando os módulos necessários
const Router = require('./router'); // Importa a classe Router definida em 'router.js'
const express = require('express'); // Express é um framework para construir aplicações web em Node.js
const passport = require('passport'); // Passport é um middleware de autenticação para Node.js
const Usuario = require('./../model/Usuario'); // Importa o modelo de Usuário definido em 'model/Usuario.js'

// Definindo a classe UsersRouter que estende a classe Router
class UsersRouter extends Router {
    // Construtor da classe
    constructor() {
        super(); // Chama o construtor da classe pai (Router)
    }

    // Método para inicializar as rotas
    init() {
        // Rota para registrar um novo usuário
        this.router.post('/registro', async (req, res) => {
            try {
                const { nome, sobrenome, email, idade, senha } = req.body; // Extrai os dados do usuário do corpo da requisição
                const newUser = new Usuario({ nome, sobrenome, email, idade, senha }); // Cria um novo usuário com os dados extraídos
                await newUser.save(); // Salva o novo usuário no banco de dados
                res.send('Usuário registrado com sucesso'); // Envia uma resposta de sucesso
            } catch (error) {
                res.status(500).send('Erro ao registrar usuário'); // Em caso de erro, envia uma resposta de erro
            }
        });

        // Rota para fazer login de um usuário
        this.router.post('/login', passport.authenticate('user', { session: false }), (req, res) => {
            res.send('Login de usuário bem-sucedido'); // Envia uma resposta de sucesso
        });

        // Rota para a página inicial dos usuários
        this.router.get('/home', (req, res) => {
            res.send('Página inicial dos usuários'); // Envia uma mensagem de boas-vindas como resposta
        });

        // Rota para listar todos os usuários
        this.router.get('/usuarios', async (req, res) => {
            try {
                const usuarios = await Usuario.find(); // Busca todos os usuários no banco de dados
                res.json(usuarios); // Envia a lista de usuários como resposta em formato JSON
            } catch (error) {
                res.status(500).send('Erro ao listar usuários'); // Em caso de erro, envia uma resposta de erro
            }
        });
    }
}

// Exportando a classe UsersRouter
module.exports = UsersRouter;