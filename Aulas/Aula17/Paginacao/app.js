const userModel = require('./model/usuarios')
const mongoose = require('mongoose')


const environment = async () => {
    await mongoose.connect('mongodb+srv://pag:pag@cluster0.srs49pv.mongodb.net/')
    console.log('Conectado ao mongoDb')
    let usuarios = await userModel.paginate({genero:'Feminino'}, {limit: 20, page: 1})
    console.log('Usuários: ', usuarios)
}
environment()