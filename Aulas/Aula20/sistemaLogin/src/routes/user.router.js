const express = require('express');
const router = express.Router();
const User = require('../model/User'); // Importa o modelo User do banco de dados
const { checkAuthenticated } = require('../middleware/auth'); // Middleware para verificar autenticação
const { createHash, isValidPassword } = require('../utils'); // Funções auxiliares para lidar com senhas

// Rota para página de registro (GET)
router.get('/registro', (req, res) => {
    res.render('registro'); // Renderiza o formulário de registro (supondo que exista um arquivo de template chamado 'registro')
});

// Rota para registrar um novo usuário (POST)
router.post('/registro', async (req, res) => {
    try {
        const { primeiro_nome, segundo_nome, email, idade, senha } = req.body;
        // Verifica se todos os campos necessários foram preenchidos
        if (!primeiro_nome || !segundo_nome || !email || !idade || !senha) {
            return res.status(400).send('Preencha todos os campos');
        }

        // Criptografa a senha antes de salvar o usuário
        const hashedPassword = createHash(senha);

        // Cria um novo usuário com a senha criptografada
        const newUser = new User({
            primeiro_nome,
            segundo_nome,
            email,
            idade,
            senha: hashedPassword // Salva a senha criptografada no banco de dados
        });

        // Salva o novo usuário no banco de dados
        await newUser.save();
        console.log('Registro bem-sucedido!');
        
        // Define o usuário na sessão após o registro
        req.session.user = newUser;

        // Redireciona para a página de login após o registro com mensagem de sucesso
        res.render('login', { message: 'Registro bem-sucedido! Faça login para continuar.' });
    } catch (error) {
        console.error('Erro no registro:', error);
        res.status(500).send('Erro interno ao registrar usuário');
    }
});

// Rota para a página de perfil (GET), verifica se o usuário está autenticado antes de acessar
router.get('/perfil', checkAuthenticated, (req, res) => {
    const { primeiro_nome, segundo_nome, email, idade } = req.session.user; // Obtém os dados do usuário da sessão
    res.render('perfil', { primeiro_nome, segundo_nome, email, idade }); // Renderiza a página de perfil com os dados do usuário
});

// Rota para atualizar um usuário (PUT), verifica autenticação antes de permitir a atualização
router.put('/perfil/:id', checkAuthenticated, async (req, res) => {
    const { id } = req.params;
    const { primeiro_nome, segundo_nome, email, idade, senha } = req.body;
    try {
        // Busca e atualiza os dados do usuário no banco de dados
        const updatedUser = await User.findByIdAndUpdate(id, { primeiro_nome, segundo_nome, email, idade, senha }, { new: true });
        // Renderiza a página de perfil atualizada do usuário
        res.render('perfil', { user: updatedUser });
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        res.status(500).send('Erro interno ao atualizar usuário');
    }
});

// Rota para excluir um usuário (DELETE), verifica autenticação antes de permitir a exclusão
router.delete('/perfil/:id', checkAuthenticated, async (req, res) => {
    const { id } = req.params;
    try {
        // Busca e exclui o usuário do banco de dados
        await User.findByIdAndDelete(id);
        // Redireciona para a página de perfil após excluir o usuário
        res.redirect('/perfil');
    } catch (error) {
        console.error('Erro ao excluir usuário:', error);
        res.status(500).send('Erro interno ao excluir usuário');
    }
});

module.exports = router; // Exporta as rotas do usuário para utilização em outros arquivos
