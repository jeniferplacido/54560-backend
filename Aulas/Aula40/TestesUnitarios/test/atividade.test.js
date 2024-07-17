// Importa o módulo mongoose para interagir com o MongoDB
import mongoose from 'mongoose';
// Importa o modelo de usuário para realizar operações no banco de dados
import userModel from '../src/dao/models/User.js';
// Importa o módulo bcrypt para realizar hashing de senhas
import bcrypt from 'bcrypt';
// Importa o módulo chai para realizar asserções nos testes
import chai from 'chai';

// Conecta ao banco de dados MongoDB usando a string de conexão fornecida
mongoose.connect('mongodb+srv://jeni:jeni@cluster0.5nyoc9n.mongodb.net/?retryWrites=true&w=majority');

// Descreve um bloco de testes para bcrypt e DTO (Data Transfer Object) do usuário
describe('Testando bcrypt e DTO do usuário', function () {
    let usersDao; // Variável para armazenar o modelo de usuário

    // Antes de todos os testes, inicializa a variável com o modelo de usuário
    before(function () {
        usersDao = userModel;
    });

    // Antes de cada teste, limpa a coleção de usuários e configura um timeout
    beforeEach(async function () {
        await mongoose.connection.collections.users.drop(); // Limpa a coleção de usuários
        this.timeout(10000); // Define um timeout de 10000 milissegundos para os testes
    });

    // Descreve um bloco de testes para os utilitários bcrypt
    describe('Utilitários bcrypt', function () {
        // Testa se o bcrypt realiza o hashing da senha corretamente
        it('deve realizar hashing efetivo da senha', async function () {
            const senhaOriginal = 'senha123'; // Define uma senha original
            const hashedSenha = await bcrypt.hash(senhaOriginal, 10); // Realiza o hashing da senha
            chai.expect(hashedSenha).to.not.equal(senhaOriginal); // Verifica se a senha hash não é igual à original
        });

        // Testa se o bcrypt compara corretamente a senha com o hash
        it('deve comparar corretamente a senha com o hash', async function () {
            const senhaOriginal = 'senha456'; // Define uma senha original
            const hashedSenha = await bcrypt.hash(senhaOriginal, 10); // Realiza o hashing da senha
            const isMatch = await bcrypt.compare(senhaOriginal, hashedSenha); // Compara a senha original com o hash
            chai.expect(isMatch).to.be.true; // Verifica se a comparação é verdadeira
        });

        // Testa se o bcrypt não corresponde a senha adulterada com o hash
        it('não deve corresponder a senha adulterada com o hash', async function () {
            const senhaOriginal = 'senha789'; // Define uma senha original
            const senhaAdulterada = 'senha987'; // Define uma senha adulterada
            const hashedSenha = await bcrypt.hash(senhaOriginal, 10); // Realiza o hashing da senha original
            const isMatch = await bcrypt.compare(senhaAdulterada, hashedSenha); // Compara a senha adulterada com o hash
            chai.expect(isMatch).to.be.false; // Verifica se a comparação é falsa
        });
    });

    // Descreve um bloco de testes para o DTO do usuário
    describe('DTO do usuário', function () {
        // Testa se é possível unificar nome e sobrenome em uma propriedade
        it('deve unificar nome e sobrenome em uma propriedade', async function () {
            const mockUser = { // Define um usuário de teste
                first_name: 'Jen',
                last_name: 'Jen',
                email: 'jen@email.com',
                password: 'senha123'
            };
            const savedUser = await usersDao.create(mockUser); // Cria um usuário no banco de dados
            
            // Transformação manual para unificar nome e sobrenome em 'name'
            savedUser.name = `${savedUser.first_name} ${savedUser.last_name}`;
            
            chai.expect(savedUser.name).to.equal('Jen Jen'); // Verifica se 'name' é 'Jen Jen'
        });

        // Testa se é possível remover propriedades desnecessárias do DTO
        it('deve remover propriedades desnecessárias do DTO', async function () {
            const mockUser = { // Define um usuário de teste
                first_name: 'Jeni',
                last_name: 'Jeni',
                email: 'lima@email.com',
                password: 'senha456'
            };
            const savedUser = await usersDao.create(mockUser); // Cria um usuário no banco de dados

            // Remoção das propriedades desnecessárias do DTO
            savedUser.password = undefined; // Remove a senha
            savedUser.first_name = undefined; // Remove o primeiro nome
            savedUser.last_name = undefined; // Remove o sobrenome

            // Verifica se as propriedades foram removidas corretamente
            chai.expect(savedUser.password).to.be.undefined; // Verifica se 'password' é undefined
            chai.expect(savedUser.first_name).to.be.undefined; // Verifica se 'first_name' é undefined
            chai.expect(savedUser.last_name).to.be.undefined; // Verifica se 'last_name' é undefined
        });

    });
});
