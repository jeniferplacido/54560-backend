const Usuario = require('../models/Usuario');

const criarUsuario = async (dadosUsuario) => {
    const usuario = new Usuario(dadosUsuario);
    await usuario.save();
    return usuario;
};

const gerarUsuarios = async () => {
    for (let i = 0; i < 10; i++) {
        const usuario = new Usuario({ nome: `Usuario${i}`, email: `usuario${i}@exemplo.com` });
        await usuario.save();
    }
    return '10 usuários gerados com sucesso';
};

module.exports = {
    criarUsuario,
    gerarUsuarios
};
