const express = require('express');
const User = require('../model/User');
const router = express.Router();

// Middleware para disponibilizar usuário da sessão em todas as views
router.use((req, res, next) => {
    if (req.session.user) {
        res.locals.user = req.session.user;
    }
    next();
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', async (req, res) => {
    const { email, senha } = req.body;
    const user = await User.findOne({ email, senha });
    if (user) {
        req.session.user = user;
        res.redirect('/perfil'); // Redireciona diretamente para a página de perfil
    } else {
        res.status(401).send('Usuário não encontrado.');
    }
});

router.get('/perfil', (req, res) => {
  console.log(req.session.user); 
  if (!req.session.user) {
      res.redirect('/login');
  } else {
      const { primeiro_nome, segundo_nome, email, idade } = req.session.user;
      res.render('perfil', { primeiro_nome, segundo_nome, email, idade });
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
      if (err) {
          console.error('Erro ao destruir sessão:', err);
          res.status(500).send('Erro ao realizar logout');
      } else {
          res.redirect('/login'); // Redireciona para a página de login após o logout
      }
  });
});


module.exports = router;
