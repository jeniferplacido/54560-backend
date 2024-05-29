// Define a classe Usuario
class Usuario {
    // O construtor é chamado quando um novo objeto Usuario é criado
    constructor(id, nome, email, senha) {
        // Define as propriedades do objeto Usuario
        // 'this' se refere ao objeto Usuario que está sendo criado
        this.id = id; // O ID do usuário
        this.nome = nome; // O nome do usuário
        this.email = email; // O email do usuário
        this.senha = senha; // A senha do usuário
    }
}

// Exporta a classe Usuario para que possa ser usada em outros módulos
module.exports = Usuario;