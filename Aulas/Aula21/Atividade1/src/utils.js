const jwt = require('jsonwebtoken');

const PRIVATE_KEY = 'cod3rs3cr3tk3y';

const generateToken = (user) => {
    const token = jwt.sign({ user }, PRIVATE_KEY, { expiresIn: '24h' });
    return token;
};

const authToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send({
            error: 'Você não tem autorização para acessar esse recurso'
        });
    }

    const token = authHeader.split(' ')[1];
    jwt.verify(token, PRIVATE_KEY, (error, credentials) => {
        if (error) {
            return res.status(403).send({
                error: 'Token inválido'
            });
        }
        req.user = credentials.user;
        next();
    });
};

module.exports = { generateToken, authToken };
