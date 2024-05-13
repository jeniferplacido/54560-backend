// Importando as dependências necessárias
const Router = require('./router'); // Importa a classe Router para criar as rotas
const express = require('express'); // Importa o framework Express para criar as rotas
const passport = require('passport'); // Importa o Passport para autenticação
const Admin = require('./../model/Admin'); // Importa o modelo Admin para interagir com o banco de dados
const jwt = require('jsonwebtoken'); // Importa o pacote jsonwebtoken para gerar tokens JWT

// Classe que representa as rotas relacionadas aos admins
class AdminRouter extends Router {
    constructor() {
        super(); // Chama o construtor da classe Router
    }

    // Método para inicializar as rotas do admin
    init() {
        // Rota para renderizar a página de cadastro de admin
        this.router.get('/cadastro', (req, res) => {
            res.render('/admin'); // Renderiza a página de cadastro de admin
        });

        // Rota de registro de admin
        this.router.post('/register', async (req, res) => {
            try {
                // Extrai os dados do corpo da requisição
                const { nome, sobrenome, email, senha } = req.body;
                // Cria um novo admin com os dados fornecidos
                const newAdmin = new Admin({ nome, sobrenome, email, senha });
                // Salva o admin no banco de dados
                await newAdmin.save();
                // Envia a mensagem de sucesso ao cliente
                res.send('Admin registrado com sucesso');
                // Redireciona para a página de login
                res.render('/login');
            } catch (error) {
                // Em caso de erro, envia uma mensagem de erro ao cliente
                res.status(500).send('Erro ao registrar admin');
            }
        });

        // Rota de login de admin
        this.router.post('/login', passport.authenticate('admin', { session: false }), (req, res) => {
            // Cria o payload do token com as informações do usuário logado
            const payload = {
                sub: req.user._id, // ID do usuário
                email: req.user.email, // Email do usuário
                role: req.user.role // Papel/Permissão do usuário
            };
            // Gera o token JWT com base no payload e um segredo
            const token = jwt.sign(payload, 'seu-segredo', { expiresIn: '1h' });
            // Envia o token como resposta em formato JSON
            res.json({ token });
        });

        // Rota de painel do admin
        this.router.get('/painel', passport.authenticate('jwt', { session: false }), (req, res) => {
            // Rota protegida por autenticação JWT, exibe o painel do administrador
            res.send('Painel do administrador');
        });

        // Rota para listar admin
        this.router.get('/admins', async (req, res) => {
            try {
                // Busca todos os admins no banco de dados
                const admins = await Admin.find();
                // Retorna os admins encontrados como resposta em formato JSON
                res.json(admins);
            } catch (error) {
                // Em caso de erro, envia uma mensagem de erro ao cliente
                res.status(500).send('Erro ao listar administradores');
            }
        });
    }
}

module.exports = AdminRouter; // Exporta a classe AdminRouter para ser utilizada em outras partes do código
