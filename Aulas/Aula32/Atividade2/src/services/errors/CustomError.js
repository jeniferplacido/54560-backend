// Define uma classe chamada 'CustomError'.
class CustomError{
    // Define um método estático chamado 'createError'. Este método aceita um objeto como parâmetro.
    // O objeto pode ter as propriedades 'name', 'cause', 'message' e 'code'. Se 'name' e 'code' não forem fornecidos, eles terão valores padrão 'Error' e 1, respectivamente.
    static createError ({name= 'Error', cause, message, code=1}){
        // Cria um novo objeto Error com a mensagem fornecida.
        const error = new Error(message);
        // Define a propriedade 'name' do erro com o nome fornecido.
        error.name = name;
        // Define a propriedade 'code' do erro com o código fornecido.
        error.code = code;
        // Define a propriedade 'cause' do erro com a causa fornecida.
        error.cause = cause;
        // Lança o erro.
        throw error;
    }
}

// Exporta a classe 'CustomError'.
module.exports = CustomError;