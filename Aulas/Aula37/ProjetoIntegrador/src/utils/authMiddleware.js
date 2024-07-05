const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

const authMiddleware = async (req, res, next) => {
    const token = req.cookies.token; // Supondo que o token esteja no cookie

    try {
        if (!token) {
            throw new Error('Token não fornecido');
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const usuario = await Usuario.findById(decodedToken.id);

        if (!usuario) {
            throw new Error('Usuário não encontrado');
        }

        req.usuarioId = usuario._id; // Define req.usuarioId para uso posterior
        next();
    } catch (error) {
        res.status(401).send({ error: 'Autenticação falhou' });
    }
};

module.exports = authMiddleware;
