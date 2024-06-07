function login(username, password) {
    const correctUsername = 'coderUser';
    const correctPassword = '123';
  
    if (!username) {
      return 'Nenhum usuário fornecido';
    }
  
    if (!password) {
      return 'Sem senha fornecida';
    }
  
    if (username !== correctUsername) {
      return 'Credenciais incorretas';
    }
  
    if (password !== correctPassword) {
      return 'Senha Errada';
    }
  
    return 'conectado';
  }
  
  module.exports = login;
  