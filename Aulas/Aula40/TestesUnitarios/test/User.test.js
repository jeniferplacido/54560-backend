// Importa o módulo mongoose para interagir com o MongoDB
import mongoose from "mongoose";
// Importa o modelo de usuário definido em User.js para realizar operações no banco de dados
import userModel from "../src/dao/models/User.js"; 
// Importa o módulo assert para realizar asserções nos testes
import Assert from "assert";

mongoose.connect('mongodb+srv://jeni:jeni@cluster0.5nyoc9n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true, // Usa o novo parser de URL do MongoDB
    useUnifiedTopology: true // Usa a nova engine de descoberta e monitoramento do servidor
});

const assert = Assert.strict;

describe('Testando usuarios DAO', function () {
    let usersDao; // Declara uma variável para armazenar o modelo de usuário

    // Antes de todos os testes, inicializa a variável com o modelo de usuário
    before(function () {
        usersDao = userModel;
    });

    // Antes de cada teste, limpa a coleção de usuários para garantir um estado consistente
    beforeEach(async function () {
        this.timeout(10000); // Define um timeout para a operação, considerando operações que podem demorar
        await userModel.deleteMany({}); // Deleta todos os documentos da coleção de usuários
    });

    // Testa se o DAO pode retornar os usuários em um array
    it('Dao deve poder retornar os usuarios em um array', async function () {
        try {
            const result = await usersDao.find(); // Tenta encontrar todos os usuários
            console.log(result); // Loga o resultado no console
            assert.strictEqual(Array.isArray(result), true); // Verifica se o resultado é um array
        } catch (error) {
            console.error(error); // Loga qualquer erro que ocorra
            throw error; // Lança o erro para falhar o teste se necessário
        }
    });

    // Testa se o DAO pode adicionar um usuário corretamente na base de dados
    it('Dao deve adicionar um usuário corretamente na base de dados', async function () {
        let mockUser = { // Define um usuário de teste
            first_name: 'Coder',
            last_name: 'House',
            email: 'email@email.com',
            password: '1234'
        }
        try {
            const result = await usersDao.create(mockUser); // Tenta criar um novo usuário com os dados de teste
            assert.ok(result._id); // Verifica se o novo usuário tem um _id, indicando sucesso na criação
        } catch (error) {
            console.error(error); // Loga qualquer erro que ocorra
            throw error; // Lança o erro para falhar o teste se necessário
        }
    }); 

    // Testa se o DAO adiciona uma matriz de pets vazia por padrão ao documento inserido
    it('O Dao adicionará ao documento inserido uma matriz de pets vazia por padrão', async function () {
        let mockUser = { // Define outro usuário de teste
            first_name: 'Coder',
            last_name: 'House',
            email: 'email1@email.com',
            password: '1234'
        }
        try {
            const result = await usersDao.create(mockUser); // Tenta criar um novo usuário com os dados de teste
            assert.deepStrictEqual(result.pets, []); // Verifica se o campo pets do novo usuário é uma matriz vazia
        } catch (error) {
            console.error(error); // Loga qualquer erro que ocorra
            throw error; // Lança o erro para falhar o teste se necessário
        }
    });

    // // Testa se o DAO pode obter um usuário pelo email
    // it('O Dao pode obter um usuário pelo email', async function () {
    //     let mockUser = {
    //         first_name: 'Coder',
    //         last_name: 'House',
    //         email: 'email2@email.com',
    //         password: '1234'
    //     }
    //     try {
    //         const result = await usersDao.getBy(mockUser.email);
    //         assert.strictEqual(result.email, mockUser.email);
    //     } catch (error) {
    //         console.error(error);
    //         throw error;
    //     }
    // });
});
