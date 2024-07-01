const usuarioService = require('../service/usuarioService');

const exibirFormularioCriarUsuario = (req, res) => {
    res.render('usuario');
};

const criarUsuario = async (req, res) => {
    const { nome, email } = req.body;
    try {
        const usuario = await usuarioService.criarUsuario({ nome, email });
        res.send('Usuário criado com sucesso');
    } catch (err) {
        res.status(500).send('Erro ao criar usuário: ' + err.message);
    }
};

const gerarUsuarios = async (req, res) => {
    try {
        const mensagem = await usuarioService.gerarUsuarios();
        res.send(mensagem);
    } catch (err) {
        res.status(500).send('Erro ao gerar usuários: ' + err.message);
    }
};

module.exports = {
    exibirFormularioCriarUsuario,
    criarUsuario,
    gerarUsuarios
};
