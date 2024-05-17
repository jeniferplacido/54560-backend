const usuarioService = require('../services/usuarioService');

const getUsuarios = async (req, res) => {
    const usuarios = await usuarioService.getUsuarios();
    res.json(usuarios);
}

const getUsuarioById = async (req, res) => {
    const usuario = await usuarioService.getUsuarioById(req.params.id);
    if (usuario) {
        res.json(usuario);
    }else{
        res.status(404).json({ message: 'Usuário não encontrado' });
        res.send('Usuário não encontrado');
    }
}

const createUsuario = async (req, res) => {
    const usuario = await usuarioService.createUsuario(req.body);
    res.status(201).json(usuario);
}

const updateUsuario = async (req, res) => {
    const usuario = await usuarioService.updateUsuario(req.params.id, req.body);
    if (usuario) {
        res.json(usuario);
    }else{
        res.status(404).json({ message: 'Usuário não encontrado' });
        res.send('Usuário não encontrado');
    }
}

const deleteUsuario = async (req, res) => {
    const usuario = await usuarioService.deleteUsuario(req.params.id);
    if (usuario) {
        res.json(usuario);
    }else{
        res.status(404).json({ message: 'Usuário não encontrado' });
        res.send('Usuário não encontrado');
    }
}

module.exports = {
    getUsuarios,
    getUsuarioById,
    createUsuario,
    updateUsuario,
    deleteUsuario
}