// model/Usuario.js
const fs = require('fs');
const path = require('path');
const usuarioPath = path.join(__dirname, '../data/usuarios.json');

// Função para ler os dados dos usuários do arquivo JSON
const readUsuarios = () => {
    try {
        const data = fs.readFileSync(usuarioPath, 'utf-8');
        if (data) {
            return JSON.parse(data);
        }
        return [];
    } catch (error) {
        return [];
    }
};

// Função para escrever os dados dos usuários no arquivo JSON
const writeUsuarios = (usuarios) => {
    fs.writeFileSync(usuarioPath, JSON.stringify(usuarios, null, 2));
};

// Função para obter todos os usuários
const find = () => {
    return readUsuarios();
};

// Função para obter um usuário por ID
const findById = (id) => {
    const usuarios = readUsuarios();
    return usuarios.find((usuario) => usuario.id === id);
};

// Função para criar um novo usuário
const create = (usuario) => {
    const usuarios = readUsuarios();
    usuario.id = (usuarios.length + 1).toString();
    usuarios.push(usuario);
    writeUsuarios(usuarios);
    return usuario;
};

// Função para atualizar um usuário existente
const findByIdAndUpdate = (id, updatedUsuario) => {
    const usuarios = readUsuarios();
    const index = usuarios.findIndex((user) => user.id === id);
    if (index !== -1) {
        usuarios[index] = { ...usuarios[index], ...updatedUsuario };
        writeUsuarios(usuarios);
        return usuarios[index];
    }
    return null;
};

// Função para deletar um usuário por ID
const findByIdAndDelete = (id) => {
    const usuarios = readUsuarios();
    const index = usuarios.findIndex((user) => user.id === id);
    if (index !== -1) {
        const deleted = usuarios.splice(index, 1);
        writeUsuarios(usuarios);
        return deleted[0];
    }
    return null;
};

module.exports = {
    find,
    findById,
    create,
    findByIdAndUpdate,
    findByIdAndDelete,
};
 