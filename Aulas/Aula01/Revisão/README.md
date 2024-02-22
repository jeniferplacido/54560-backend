# Revisão Aula 1

**Relação e Diferença entre Backend e Frontend**:

- O Backend refere-se à parte do sistema que opera no servidor, lidando com a lógica, processamento de dados e interações com o banco de dados.
- O Frontend é a parte do sistema que os usuários interagem diretamente, geralmente através de um navegador web ou aplicativo móvel. Ele lida com a interface do usuário e a apresentação dos dados.
- A principal diferença é que o Backend lida com a lógica e os dados do servidor, enquanto o Frontend lida com a interface do usuário e a interação do usuário.

<p align="center">
  <img width="600" height="356" src="https://3.bp.blogspot.com/-AfXqUIHhv6A/WjAzne0IO_I/AAAAAAAAUUE/klMiOHqLQrEI0LF0IXcbQ4kAyS4GR-3_gCLcBGAs/s1600/FrontEndXBackEnd.png">
</p>



------

**Stack MERN**:

- MERN é um acrônimo para MongoDB, Express.js, React e Node.js.
- É uma pilha de tecnologia usada para desenvolvimento web full-stack, onde MongoDB é o banco de dados, Express.js é o framework para construir aplicativos web, React é uma biblioteca JavaScript para construir interfaces de usuário e Node.js é uma plataforma para executar JavaScript do lado do servidor.

<p align="center">
  <img width="600" height="356" src="https://inzint.com/wp-content/uploads/2023/02/Features-of-Mern-stack-development-services-You-Should-Know-1.png">
</p>

------

### Testando JavaScript no Node.js:

**Ambiente de Servidor:**

- No Node.js, você pode escrever e executar JavaScript como se estivesse em um servidor.
- Você pode usar o Terminal (ou Prompt de Comando no Windows) para navegar até a pasta onde está seu arquivo JavaScript e então executá-lo com o comando `node nome_do_arquivo.js`.
- Isso permite que você teste funções e lógica de backend sem a necessidade de um navegador.

### Testando JavaScript no Navegador:

Ambiente de Cliente Web:

- No navegador, você pode testar JavaScript diretamente no console do navegador.
- Abra o console do navegador clicando com o botão direito na página, selecionando "Inspecionar" e depois indo para a guia "Console".
- Lá você pode digitar comandos JavaScript e vê-los sendo executados em tempo real na página.
- Isso é útil para experimentar e depurar código interativo.

### Dicas Gerais:

- Use o Node.js para testar funcionalidades do servidor, como manipulação de dados, acesso a banco de dados, etc.
- Use o console do navegador para testar interações com a página web, manipulação de elementos HTML, etc.
- Comece com pequenos exemplos e vá aumentando gradualmente a complexidade do seu código conforme você se sentir mais confortável.
- Pratique regularmente para aprimorar suas habilidades de programação em JavaScript.

------

### Tipos de Dados em JavaScript:

**Número (`number`)**: Representa números inteiros ou de ponto flutuante. Exemplo: `10`, `9.9`.

**String (`string`)**: Sequência de caracteres. Exemplo: `"Olá, mundo!"`.

**Booleano (`boolean`)**: Representa um valor lógico verdadeiro ou falso. Exemplo: `true`, `false`.

**Nulo (`null`)**: Indica a ausência intencional de qualquer valor ou objeto. Exemplo: `null`.

**Indefinido (`undefined`)**: Indica que uma variável foi declarada, mas ainda não foi atribuída a nenhum valor. Exemplo: `undefined`.

**Objeto (`object`)**: Estrutura de dados complexa que pode conter múltiplos valores, incluindo outros objetos. Exemplo: `{ nome: "Jenifer", idade: 33, profissao: "Engenheira"}`.

**Array (`array`)**: Uma coleção ordenada de valores, geralmente do mesmo tipo, acessados por meio de um índice numérico. Exemplo: `[1, 2, 3, 4, 5]`.

------

### Variáveis em JavaScript:

Uma variável é um contêiner para armazenar valores de dados. Em JavaScript, você pode declarar variáveis usando as palavras-chave `var`, `let` ou `const`. Aqui está uma explicação de cada uma:

- **`var`**: Declara uma variável globalmente ou localmente para uma função, independentemente do escopo de bloco.
- **`let`**: Declara uma variável localmente para um bloco de instruções, escopo de função ou em uma expressão.
- **`const`**: Declara uma variável somente leitura, cujo valor não pode ser alterado após a atribuição inicial.


Claro! Abaixo estão os tipos de dados mais comuns em JavaScript, juntamente com uma breve explicação e uma tabela para ilustrar melhor:

### Tipos de Dados em JavaScript:

1. **Número (`number`)**: Representa números inteiros ou de ponto flutuante. Exemplo: `10`, `3.14`.
2. **String (`string`)**: Sequência de caracteres. Exemplo: `"Olá, mundo!"`.
3. **Booleano (`boolean`)**: Representa um valor lógico verdadeiro ou falso. Exemplo: `true`, `false`.
4. **Nulo (`null`)**: Indica a ausência intencional de qualquer valor ou objeto. Exemplo: `null`.
5. **Indefinido (`undefined`)**: Indica que uma variável foi declarada, mas ainda não foi atribuída a nenhum valor. Exemplo: `undefined`.
6. **Objeto (`object`)**: Estrutura de dados complexa que pode conter múltiplos valores, incluindo outros objetos. Exemplo: `{ nome: "João", idade: 25 }`.
7. **Array (`array`)**: Uma coleção ordenada de valores, geralmente do mesmo tipo, acessados por meio de um índice numérico. Exemplo: `[1, 2, 3, 4, 5]`.

### Variáveis em JavaScript:

Uma variável é um contêiner para armazenar valores de dados. Em JavaScript, você pode declarar variáveis usando as palavras-chave `var`, `let` ou `const`. Aqui está uma explicação de cada uma:

- **`var`**: Declara uma variável globalmente ou localmente para uma função, independentemente do escopo de bloco.
- **`let`**: Declara uma variável localmente para um bloco de instruções, escopo de função ou em uma expressão.
- **`const`**: Declara uma variável somente leitura, cujo valor não pode ser alterado após a atribuição inicial.

### Tabela de Exemplos:

| Tipo de Dado | Exemplo     | Descrição                   |
| ------------ | ----------- | --------------------------- |
| Número       | `10`        | Número inteiro              |
| String       | `"Olá"`     | Sequência de caracteres     |
| Booleano     | `true`      | Valor lógico verdadeiro     |
| Null         | `null`      | Valor nulo                  |
| Indefinido   | `undefined` | Valor indefinido            |
| Objeto       | `{}`        | Estrutura de dados complexa |
| Array        | `[1, 2, 3]` | Coleção ordenada de valores |

