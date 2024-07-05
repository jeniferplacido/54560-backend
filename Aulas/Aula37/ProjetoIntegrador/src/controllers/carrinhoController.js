const carrinhoService = require('../services/carrinhoService');

const getCarrinho = async (req, res) => {
    try {
        const cart = await carrinhoService.getCarrinho(req.user.id);
        res.render('cart', { cart });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const addCarrinho = async (req, res) => {
    try {
        const { productId, quantidade } = req.body;
        await carrinhoService.addCarrinho(req.user.id, productId, parseInt(quantidade));
        res.redirect('/carrinho');
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const removeCarrinho = async (req, res) => {
    try {
        const { productId } = req.body;
        await carrinhoService.removeCarrinho(req.user.id, productId);
        res.redirect('/carrinho');
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = { getCarrinho, addCarrinho, removeCarrinho };
