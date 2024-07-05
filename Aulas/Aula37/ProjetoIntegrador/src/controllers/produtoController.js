// controllers/productController.js
const Produto = require('../models/Produto');

const getProdutos = async (req, res) => {
    try {
        const products = await Produto.find();
        res.render('home', { products });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = { getProdutos };
