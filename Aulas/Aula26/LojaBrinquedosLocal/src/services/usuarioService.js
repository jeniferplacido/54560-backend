// services/usuarioService.js
const usuarios = require('../model/Usuario');

const getUsuarios = async () => {
    return usuarios.find();
};

const getUsuarioById = async (id) => {
    return usuarios.findById(id);
};

const createUsuario = async (usuario) => {
    return usuarios.create(usuario);
};

const updateUsuario = async (id, usuario) => {
    return usuarios.findByIdAndUpdate(id, usuario);
};

const deleteUsuario = async (id) => {
    return usuarios.findByIdAndDelete(id);
};

module.exports = {
    getUsuarios,
    getUsuarioById,
    createUsuario,
    updateUsuario,
    deleteUsuario,
};
