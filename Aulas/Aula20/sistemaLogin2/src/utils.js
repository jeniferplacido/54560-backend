// Importando o módulo bcrypt para criptografia de senhas
const bcrypt = require('bcrypt');

// Importando o modelo de usuário
const User = require('./model/User');

// Função para criar hash de senha
const createHash = (password) => {
    // bcrypt.genSaltSync(10) gera um salt aleatório com fator de custo 10
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

// Função para validar senha
const isValidPassword = async (email, password) => {
    try {
        // Busca o usuário no banco de dados pelo email fornecido
        const user = await User.findOne({ email });
        if (!user) {
            console.error('Usuário não encontrado para o email:', email);
            return false; // Usuário não encontrado
        }
        // Verifica se a senha fornecida corresponde ao hash armazenado no banco de dados
        return bcrypt.compareSync(password, user.senha);
    } catch (error) {
        console.error('Erro ao verificar a senha:', error);
        return false;
    }
}

// Configuração da estratégia de autenticação local para o registro
passport.use('registro', new LocalStrategy({
    usernameField: 'email', // Campo do formulário que contém o email
    passwordField: 'senha', // Campo do formulário que contém a senha
    passReqToCallback: true // Permite passar a requisição para o callback
  },
  async (req, email, senha, done) => { // Função de callback para o registro
    try {
        // Extrai os dados do corpo da requisição
        const { primeiro_nome, segundo_nome, idade } = req.body;
        // Cria o hash da senha
        const hashedSenha = createHash(senha);
        // Cria um novo usuário com os dados fornecidos
        const newUser = new User({
            primeiro_nome,
            segundo_nome,
            email,
            idade,
            senha: hashedSenha // Salva a senha criptografada
        });
        // Salva o novo usuário no banco de dados
        await newUser.save();
        // Chama a função done para indicar que o registro foi bem-sucedido
        return done(null, newUser);
    } catch (error) {
        // Em caso de erro, chama a função done com o erro
        return done(error);
    }
  }
));
// Exportando as funções necessárias para uso em outros arquivos
module.exports = { createHash, isValidPassword };
