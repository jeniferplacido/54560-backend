// services/cartService.js
const Carrinho = require('../models/Carrinho');
const Produto = require('../models/Produto');

const getCarrinho = async (userId) => {
    return await Carrinho.findOne({ userId }).populate('items.productId');
};

const addCarrinho = async (userId, productId, quantity) => {
    let cart = await Carrinho.findOne({ userId });

    if (!cart) {
        cart = new Cart({ userId, items: [{ productId, quantity }] });
    } else {
        const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
        if (itemIndex > -1) {
            cart.items[itemIndex].quantity += quantity;
        } else {
            cart.items.push({ productId, quantity });
        }
    }

    await cart.save();
    return cart;
};

const removeCarrinho = async (userId, productId) => {
    let cart = await Carrinho.findOne({ userId });

    if (!cart) {
        throw new Error('Carrinho não encontrado');
    }

    cart.items = cart.items.filter(item => item.productId.toString() !== productId);
    await cart.save();
    return cart;
};

module.exports = { getCarrinho, addCarrinho, removeCarrinho };
