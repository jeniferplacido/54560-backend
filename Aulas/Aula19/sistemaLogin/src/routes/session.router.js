const express = require('express');
const User = require('../model/User');
const router = express.Router();

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', async (req, res) => {
  const { email, senha } = req.body;
  const user = await User.findOne({ email, senha });
  if (user) {
    req.session.user = user;
    res.redirect('/perfil');
  } else {
    res.status(401).send('Usuário não encontrado.');
  }
});

router.get('/perfil', (req, res) => {
  if (!req.session.user) {
    res.redirect('/login');
  } else {
    const { primeiro_nome, segundo_nome, email, idade } = req.session.user;
    res.render('perfil', { primeiro_nome, segundo_nome, email, idade });
  }
});



module.exports = router;
