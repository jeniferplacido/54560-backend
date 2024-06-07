// Aqui estamos criando uma "função" chamada 'soma'. Funções são como receitas que o computador pode seguir.
// Nossa função 'soma' precisa de dois ingredientes (ou "parâmetros"): 'num1' e 'num2'.
// Se 'num1' ou 'num2' não forem números, a função retorna 'null', que é um jeito de dizer "nada" ou "vazio".
const soma = (num1, num2) => {
   if (typeof num1 !== 'number' || typeof num2 !== 'number') return null;
}

// Aqui estamos criando duas "caixas" (ou "variáveis") para guardar informações.
// Uma caixa chamada 'testesAprovados' para contar quantos testes passaram e outra chamada 'testesTotais' para contar o total de testes.
let testesAprovados = 0;
let testesTotais = 4;

// Agora vamos testar nossa função 'soma' para ver se ela está funcionando corretamente.

// Teste 1: Verificamos se a função retorna 'null' quando um dos ingredientes não é um número.
let resultadoTeste1 = soma("2",2);
if (resultadoTeste1 === null) {
    console.log('Teste 1 passou');
    testesAprovados++;
} else console.log(`Falha no teste 1, esperava 'null' mas recebi ${typeof resultadoTeste1}`);

// Teste 2: Verificamos se a função retorna '0' quando não damos nenhum ingrediente para ela.
let resultadoTeste2 = soma();
if(resultadoTeste2 === 0) {
    console.log('Teste 2 passou');
    testesAprovados++;
} else console.log(`Falha no teste 2, esperava '0' mas recebi ${typeof resultadoTeste2}`);

// Teste 3: Verificamos se a função consegue somar '2' e '3' corretamente.
let resultadoTeste3 = soma(2,3);
if (resultadoTeste3 === 5) {
    console.log('Teste 3 passou');
    testesAprovados++;
} else console.log(`Falha no teste 3, esperava '5' mas recebi ${typeof resultadoTeste3}`);

// Teste 4: Verificamos se a função consegue somar mais de dois números.
// Mas nossa função 'soma' só sabe lidar com dois números, então este teste não é válido.
let resultadoTeste4 = soma(1,2,3,4,5);
if (resultadoTeste4 === 15) {
    console.log('Teste 4 passou');
    testesAprovados++;
} else console.log(`Falha no teste 4, esperava '15' mas recebi ${typeof resultadoTeste4}`);

// No final, verificamos se todos os testes passaram e mostramos uma mensagem apropriada.
if(testesAprovados === testesTotais) console.log('Todos os testes passaram com sucesso');
else console.log(`${testesAprovados} testes aprovados de um total de ${testesTotais} testes`);