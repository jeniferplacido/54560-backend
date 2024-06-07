const login = require('./login');

// Função auxiliar para capturar a saída do console
function capturarSaidaConsole(callback) {
  const originalConsoleLog = console.log;
  let output = '';
  console.log = function(message) {
    output += message + '\n';
  };
  callback();
  console.log = originalConsoleLog;
  return output.trim();
}

// Inicialização das variáveis que irão contar os testes aprovados e o total de testes
let testesAprovados = 0;
let testesTotais = 5;
  
  // Teste 1: Verifica se a função retorna "Sem senha fornecida" quando a senha está vazia
  console.log('Teste 1: A função deve retornar "Sem senha fornecida" se a senha estiver vazia');
  let resultadoTeste1 = capturarSaidaConsole(() => login('coderUser', ''));
  if (resultadoTeste1 === 'Sem senha fornecida') {
      console.log('Teste 1 passou');
      testesAprovados++;
  } else console.log(`Falha no teste 1, recebeu "${resultadoTeste1}", mas esperava "Sem senha fornecida"`);
  
  // Teste 2: Verifica se a função retorna "Nenhum usuário fornecido" quando o usuário está vazio
  console.log('Teste 2: A função deve retornar "Nenhum usuário fornecido" se o usuário estiver vazio');
  let resultadoTeste2 = capturarSaidaConsole(() => login('', '123'));
  if (resultadoTeste2 === 'Nenhum usuário fornecido') {
      console.log('Teste 2 passou');
      testesAprovados++;
  } else console.log(`Falha no teste 2, recebeu "${resultadoTeste2}", mas esperava "Nenhum usuário fornecido"`);
  
  // Teste 3: Verifica se a função retorna "Senha Errada" quando a senha está incorreta
  console.log('Teste 3: A função deve retornar "Senha Errada" se a senha estiver incorreta');
  let resultadoTeste3 = capturarSaidaConsole(() => login('coderUser', 'wrongPassword'));
  if (resultadoTeste3 === 'Senha Errada') {
      console.log('Teste 3 passou');
      testesAprovados++;
  } else console.log(`Falha no teste 3, recebeu "${resultadoTeste3}", mas esperava "Senha Errada"`);
  
  // Teste 4: Verifica se a função retorna "Credenciais incorretas" quando o usuário está incorreto
  console.log('Teste 4: A função deve retornar "Credenciais incorretas" se o usuário estiver incorreto');
  let resultadoTeste4 = capturarSaidaConsole(() => login('wrongUser', '123'));
  if (resultadoTeste4 === 'Credenciais incorretas') {
      console.log('Teste 4 passou');
      testesAprovados++;
  } else console.log(`Falha no teste 4, recebeu "${resultadoTeste4}", mas esperava "Credenciais incorretas"`);
  
  // Teste 5: Verifica se a função retorna "conectado" quando o usuário e a senha estão corretos
  console.log('Teste 5: A função deve retornar "conectado" se o usuário e a senha estiverem corretos');
  let resultadoTeste5 = capturarSaidaConsole(() => login('coderUser', '123'));
  if (resultadoTeste5 === 'conectado') {
      console.log('Teste 5 passou');
      testesAprovados++;
  } else console.log(`Falha no teste 5, recebeu "${resultadoTeste5}", mas esperava "conectado"`);
  
  // Verifica se todos os testes passaram
  if(testesAprovados === testesTotais) console.log('Todos os testes passaram com sucesso');
  else console.log(`${testesAprovados} testes aprovados de um total de ${testesTotais} testes`);
  