const express = require('express');
const router = express.Router();
const Produto = require('../models/Produto');

// Rota para a página inicial
router.get('/', async (req, res) => {
  try {
    const produtos = await Produto.find();
    console.log(produtos)
    res.render('index', { produtos });
  } catch (err) {
    console.error('Erro ao buscar produtos:', err);
    res.status(500).send('Erro ao buscar produtos');
  }
});

// Rota para adicionar um novo produto
// Rota para adicionar um novo produto
router.post('/produto', async (req, res) => {
    try {
      const { nome, preco, descricao, categoria } = req.body;
      // Convertendo o campo disponivel para um valor booleano
      const disponivel = req.body.disponivel === 'on'; // Se o checkbox estiver marcado, será true; caso contrário, será false
      const novoProduto = new Produto({ nome, preco, descricao, categoria, disponivel });
      await novoProduto.save();
      res.redirect('/');
    } catch (err) {
      console.error('Erro ao criar produto:', err);
      res.status(500).send('Erro ao criar produto');
    }
  });
  

// Rota para atualizar um produto
router.put('/produto/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Produto.findByIdAndUpdate(id, req.body);
    res.redirect('/');
  } catch (err) {
    console.error('Erro ao atualizar produto:', err);
    res.status(500).send('Erro ao atualizar produto');
  }
});

// Rota para excluir um produto
router.delete('/produto/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Produto.findByIdAndDelete(id);
    res.redirect('/');
  } catch (err) {
    console.error('Erro ao excluir produto:', err);
    res.status(500).send('Erro ao excluir produto');
  }
});

module.exports = router;
