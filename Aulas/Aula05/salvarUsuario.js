const fs = require('fs');
const crypto = require('crypto');

// Função para criar hash de senha
function criarHashSenha(senha, salt) {
    return crypto.pbkdf2Sync(senha, salt, 10000, 64, 'sha512').toString('hex');
}

// Função para salvar um usuário com senha criptografada
function salvarUsuario(nomeUsuario, senha) {
    try {
        let usuarios = [];

        if (fs.existsSync('Usuarios.json')) {
            const data = fs.readFileSync('Usuarios.json', 'utf8');
            if (data.trim() !== '') {
                usuarios = JSON.parse(data);
            }
        }

        const usuarioExistente = usuarios.find(usuario => usuario.nomeUsuario === nomeUsuario);
        if (usuarioExistente) {
            throw new Error('Usuário já existe.');
        }

        const salt = crypto.randomBytes(16).toString('hex');
        const hashSenha = criarHashSenha(senha, salt);

        usuarios.push({ nomeUsuario, hashSenha, salt });

        fs.writeFileSync('Usuarios.json', JSON.stringify(usuarios, null, 2));

        console.log('Usuário salvo com sucesso.');
    } catch (error) {
        console.error('Erro ao salvar usuário:', error.message);
    }
}

module.exports = salvarUsuario;

// Chamada da função removida
