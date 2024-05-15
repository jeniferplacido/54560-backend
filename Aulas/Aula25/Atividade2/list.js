// Definindo uma função chamada listNumbers que aceita um número indefinido de argumentos usando o operador spread (...)
function listNumbers(...numbers) {
  // Mapeando os tipos de cada argumento para um array chamado types
  const types = numbers.map(value => typeof value);
  
  // Filtrando os tipos que não são 'number' para encontrar argumentos inválidos
  const invalidParams = types.filter(type => type !== 'number');

  // Verificando se existem argumentos inválidos
  if (invalidParams.length > 0) {
      // Formatando os tipos de argumentos inválidos para exibir na mensagem de erro
      const formattedTypes = types.map(type => (type === 'number' ? type : `'${type}'`));
      
      // Exibindo uma mensagem de erro indicando os argumentos inválidos e definindo o código de saída do processo
      console.error(`Invalid parameters: [${formattedTypes.join(', ')}]`);
      process.exitCode = -4; // Código de saída -4 para indicar erro de argumento inválido
  } else {
      // Caso não haja argumentos inválidos, exibe uma mensagem indicando que os números serão listados
      console.log('Lista de números:');
      
      // Iterando sobre os números válidos e exibindo cada um deles
      for (let number of numbers) {
          console.log(number);
      }
  }
}

// Adicionando um ouvinte para o evento de saída do processo
process.on('exit', (code) => {
  // Verificando se o código de saída indica um erro de argumento inválido
  if (code === -4) {
      // Exibindo uma mensagem indicando que o processo foi encerrado devido a argumentos inválidos
      console.log('Processo encerrado devido a argumentação inválida em uma função');
  }
});

// Exemplo de uso da função listNumbers com argumentos válidos e inválidos
listNumbers(1, 2, 'a', true);
