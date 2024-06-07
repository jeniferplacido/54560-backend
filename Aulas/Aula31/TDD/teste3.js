// Declaração da função 'soma' que recebe dois parâmetros: 'num1' e 'num2'
// Se algum dos parâmetros não for fornecido ou não for um número, a função retorna 0 ou null, respectivamente
// Caso contrário, a função retorna a soma de 'num1' e 'num2'
const soma = (num1, num2) => {
    if(!num1 || !num2) return 0;
    if(typeof num1 !== 'number' || typeof num2 !== 'number') return null;
    let resultado = num1 + num2;
    return resultado;
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
} else console.log(`Falha no teste 3, ${typeof resultadoTeste3} recebido, mas esperava 5`);

// Teste 4: Verifica se a função realiza a soma corretamente quando passados mais de dois parâmetros
// Este teste está incorreto, pois a função 'soma' só aceita dois parâmetros
console.log('Teste 4: A função deve ser capaz de fazer a soma corretamente quando passados mais de dois parâmetros');
let resultadoTeste4 = soma(1,2,3,4,5);
if (resultadoTeste4 === 15) {
    console.log('Teste 4 passou');
    testesAprovados++;
} else console.log(`Falha no teste 4, ${typeof resultadoTeste4} recebido, mas esperava 15`);

// Verifica se todos os testes passaram
if(testesAprovados === testesTotais) console.log('Todos os testes passaram com sucesso');
else console.log(`${testesAprovados} testes aprovados de um total de ${testesTotais} testes`);