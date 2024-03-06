const fs = require('fs');
const crypto = require('crypto');

// Função para criar hash de senha
function criarHashSenha(senha, salt) {
    return crypto.pbkdf2Sync(senha, salt, 10000, 64, 'sha512').toString('hex');
}

// Função para validar um usuário e senha
function validarUsuario(nomeUsuario, senha) {
    try {
        let usuarios = [];

        if (fs.existsSync('Usuarios.json')) {
            const data = fs.readFileSync('Usuarios.json', 'utf8');
            if (data.trim() !== '') {
                usuarios = JSON.parse(data);
            }
        }

        const usuario = usuarios.find(usuario => usuario.nomeUsuario === nomeUsuario);
        if (!usuario) {
            throw new Error('Usuário não encontrado.');
        }

        const hashSenhaDigitada = criarHashSenha(senha, usuario.salt);
        if (hashSenhaDigitada !== usuario.hashSenha) {
            throw new Error('Senha incorreta.');
        }

        console.log('Usuário logado:', nomeUsuario); // Adiciona esta linha para indicar que o usuário está logado

    } catch (error) {
        console.error('Erro ao validar usuário:', error.message);
    }
}

module.exports = validarUsuario;

// Chamada da função removida
