// Importa o módulo mongoose para interagir com o MongoDB
import mongoose from "mongoose";
// Importa o modelo de usuário definido em User.js para realizar operações no banco de dados
import userModel from "./../src/dao/models/User.js";
// Importa o módulo chai para realizar asserções nos testes
import chai from "chai";

// Conecta ao banco de dados MongoDB usando mongoose com a string de conexão fornecida
mongoose.connect('mongodb+srv://jeni:jeni@cluster0.5nyoc9n.mongodb.net/?retryWrites=true&w=majority')

// Descreve um bloco de testes para o DAO de usuários
describe('Testando usuarios DAO', function () {
    // Antes de todos os testes, define uma função para inicializar o DAO de usuários
    before(function(){
        // Atribui o modelo de usuário à propriedade usersDao do contexto de testes
        this.usersDao = userModel;
    })

    // Antes de cada teste, define uma função para limpar a coleção de usuários e configurar um timeout
    beforeEach(function () {
        // Limpa a coleção de usuários no banco de dados
        mongoose.connection.collections.users.drop();
        // Define um timeout de 10000 milissegundos para os testes, permitindo operações demoradas
        this.timeout(10000);
    });

    // Define um teste para verificar se o DAO pode retornar os usuários em um array
    it('Dao deve poder retornar os usuarios em um array', async function () {
        // Chama o método find do DAO de usuários para obter todos os usuários
        const result = await this.usersDao.find();
        // Usa o chai para verificar se o resultado é igual a um array vazio, como esperado para uma coleção limpa
        chai.expect(result).to.be.deep.equal([]);
    });
})
