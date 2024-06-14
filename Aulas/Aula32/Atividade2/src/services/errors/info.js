// Define uma função chamada 'generateUserErrorInfo'. Esta função aceita um objeto 'user' como parâmetro.
const generateUserErrorInfo = (user) => {
    // Retorna uma string formatada que contém uma mensagem de erro e os valores das propriedades 'name', 'lastName' e 'email' do objeto 'user'.
    return `Uma ou mais informações estão incorretas. Verifique os campos:
        name: ${user.name}
        lastName: ${user.lastName}
        email: ${user.email}
        `
}
const generateInvalidParamErrorInfo = (param) => {
    return `O parâmetro fornecido é inválido: ${param}`;
}

// Exporta a função 'generateUserErrorInfo'. Isso permite que outros módulos importem 'generateUserErrorInfo' e usem essa função para gerar mensagens de erro.
module.exports = {generateUserErrorInfo, generateInvalidParamErrorInfo}