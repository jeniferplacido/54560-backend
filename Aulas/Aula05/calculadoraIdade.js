// Importe a biblioteca Moment.js
const moment = require('moment');

// Variável para armazenar a data atual
const dataAtual = moment();

// Variável para armazenar a data do seu nascimento
const dataNascimento = moment('1990-04-07'); 

// Valide se a data de nascimento é válida
if (!dataNascimento.isValid()) {
    console.log('Data de nascimento inválida.');
} else {
    // Calcule a diferença em dias entre a data de nascimento e a data atual
    const diasDesdeNascimento = dataAtual.diff(dataNascimento, 'days');

    console.log(`Passaram-se ${diasDesdeNascimento} dias desde o seu nascimento.`);
}
