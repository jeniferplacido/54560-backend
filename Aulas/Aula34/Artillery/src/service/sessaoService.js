const Usuario = require('../models/Usuario');
const { hashSenha, comparaSenha } = require('../utils/hashSenha');
const jwt = require('jsonwebtoken');


const registroUsuario = async (nome, sobrenome, email, senha) => {
    let usuario = await Usuario.findOne({ email });
    if (usuario) throw new Error('Usuário já existe');

    const hashedPassword = await hashSenha(senha);
    usuario = new Usuario({ nome, sobrenome, email, senha: hashedPassword });
    await usuario.save();

    const payload = { user: { id: usuario.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 360000 });
    return token;
};

const loginUsuario = async (email, senha) => {
    const usuario = await Usuario.findOne({ email });
    if (!usuario) throw new Error('Usuário não encontrado');

    const isMatch = await comparaSenha(senha, usuario.senha);
    if (!isMatch) throw new Error('Credenciais inválidas');

    const payload = { user: { id: usuario.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 360000 });
    return token;
};

module.exports = {
    registroUsuario,
    loginUsuario
};
