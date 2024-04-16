const mongoose = require('mongoose');
const orderModel = require('./model/order');
 
const environment = async () => {
  try {
    await mongoose.connect('mongodb+srv://agre:agre@cluster0.9xfjfdm.mongodb.net/');
    //parte 2
     let result = await orderModel.find();
    console.log('Dados no banco de dados: ', result)

    let orders = await orderModel.aggregate([
        {
            $match: {tamanho: 'media'}
        },
        {
            $group:{_id:'$nome', quantidadeTotal:{$sum: '$quantidade'}}
        },
        {
            $sort:{quantidadeTotal: -1}
        },
        {
            $group:{_id:1, orders:{$push: '$$ROOT'}}
        },
        {
            $project:{
                '_id': 0,
                orders: "$orders",
            }
        },

        {
            $merge:{
                into:'reports'
            }
        }
       
    ])
 console.log('Resultado da agregação: ', orders)
    //parte 1
    // const result = await orderModel.insertMany([
    //     {
    //         nome: 'Pizza de Calabresa',
    //         tamanho: 'pequena',
    //         preco: 25,
    //         quantidade: 3,
    //         data: new Date('2024-04-21')
    //       },
    //       {
    //         nome: 'Pizza de Frango com Catupiry',
    //         tamanho: 'grande',
    //         preco: 35,
    //         quantidade: 1,
    //         data: new Date('2024-04-22')
    //       },
    //       {
    //         nome: 'Pizza de Marguerita',
    //         tamanho: 'media',
    //         preco: 30,
    //         quantidade: 4,
    //         data: new Date('2024-04-23')
    //       },
    //       {
    //         nome: 'Pizza de Pepperoni',
    //         tamanho: 'grande',
    //         preco: 35,
    //         quantidade: 2,
    //         data: new Date('2024-04-24')
    //       },
    //       {
    //         nome: 'Pizza de Frango com Catupiry',
    //         tamanho: 'pequena',
    //         preco: 25,
    //         quantidade: 5,
    //         data: new Date('2024-04-25')
    //       },
    //       {
    //         nome: 'Pizza de Calabresa',
    //         tamanho: 'media',
    //         preco: 30,
    //         quantidade: 2,
    //         data: new Date('2024-04-26')
    //       },
    //       {
    //         nome: 'Pizza de Mussarela',
    //         tamanho: 'grande',
    //         preco: 35,
    //         quantidade: 3,
    //         data: new Date('2024-04-27')
    //       },
    //       {
    //         nome: 'Pizza de Pepperoni',
    //         tamanho: 'media',
    //         preco: 30,
    //         quantidade: 4,
    //         data: new Date('2024-04-28')
    //       },
    //       {
    //         nome: 'Pizza de Calabresa',
    //         tamanho: 'grande',
    //         preco: 35,
    //         quantidade: 2,
    //         data: new Date('2024-04-29')
    //       }
      
    // ]);


//     console.log('Pizzas inseridas no banco de dados com sucesso:', result);
//   } catch (err) {
//     console.error('Erro ao inserir pizzas no banco de dados:', err);
  } finally {
    mongoose.disconnect(); // Fecha a conexão após a operação
  }
};

environment(); // Chama a função para executar o código
