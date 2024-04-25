const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    // Simulando um login
    req.session.username = 'Jenifer';
    req.session.admin = true;

    console.log('Data de expiração da sessão:', new Date(req.session.cookie.expires));
    res.send('Login efetuado com sucesso!');
});

router.get('/privado', (req, res) => {
    if (req.session?.username && req.session?.admin) {
        res.send('Se souber o que é isso, é porque você está logado!');
    } else {
        res.send('Usuário ou senha inválidos!');
    }
});

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.send('Logout efetuado com sucesso!');
})

module.exports = router;