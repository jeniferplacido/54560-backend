// Declaração da função 'soma' que recebe um número variável de parâmetros
// Se não receber nenhum parâmetro, retorna 0
// Se algum dos parâmetros não for um número, retorna null
// Caso contrário, retorna a soma de todos os parâmetros
const soma = (...numeros) => {
    if(numeros.length === 0) return 0;
    if(!numeros.every(num => typeof num === 'number')) return null;
    return numeros.reduce((prev, current) => prev + current);
}

// Inicialização das variáveis que irão contar os testes aprovados e o total de testes
let testesAprovados = 0;
let testesTotais = 4;

// Teste 1: Verifica se a função retorna 'null' quando um dos parâmetros não é numérico
console.log('Teste 1: A função deve retornar nulo se algum parâmetro não for numérico');
let resultadoTeste1 = soma("2",2);
if (resultadoTeste1 === null) {
    console.log('Teste 1 passou');
    testesAprovados++;
} else console.log(`Falha no teste 1, ${typeof resultadoTeste1} recebido, mas esperado nulo`);

// Teste 2: Verifica se a função retorna '0' quando nenhum parâmetro é passado
console.log('Teste 2: A função deve retornar 0 se nenhum parâmetro for passado');
let resultadoTeste2 = soma();
if(resultadoTeste2 === 0) {
    console.log('Teste 2 passou');
    testesAprovados++;
} else console.log(`Falha no teste 2, recebeu ${typeof resultadoTeste2}, mas esperava 0`);

// Teste 3: Verifica se a função realiza a soma corretamente
console.log('Teste 3: A função deve ser capaz de fazer a soma corretamente');
let resultadoTeste3 = soma(2,3);
if (resultadoTeste3 === 5) {
    console.log('Teste 3 passou');
    testesAprovados++;
} else console.log(`Falha no teste 3, ${typeof resultadoTeste3} recebido, mas esperava 6`);

// Teste 4: Verifica se a função realiza a soma corretamente quando passados mais de dois parâmetros
let resultadoTeste4 = soma(1,2,3,4,5);
if (resultadoTeste4 === 15) {
    console.log('Teste 4 passou');
    testesAprovados++;
} else console.log(`Falha no teste 4, ${typeof resultadoTeste4} recebido, mas esperava 15`);

// Verifica se todos os testes passaram
if(testesAprovados === testesTotais) console.log('Todos os testes passaram com sucesso');
else console.log(`${testesAprovados} testes aprovados de um total de ${testesTotais} testes`);