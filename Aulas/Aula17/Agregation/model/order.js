const moongoose = require ('mongoose')

const orderCollection = 'orders'

const orderSchema = moongoose.Schema({
    nome: String,
    tamanho:{
        type: String,
        enum: ['pequena', 'media', 'grande'],
        default: 'media'
    },
    preco: Number,
    quantidade: Number,
    data: Date
})

const orderModel = moongoose.model(orderCollection, orderSchema)

module.exports = orderModel

