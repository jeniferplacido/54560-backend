### Principios da Programação Back End

**Diferenças entre Front end e Back end:**

**Front end:**

- Lida com a interface do usuário e interações do usuário.
- Executa no navegador do usuário (client-side).
- Responsável por design, layout, interatividade e experiência do usuário.
- Usa tecnologias como HTML, CSS e JavaScript.
- Comunica-se com o back end por meio de solicitações HTTP para buscar ou enviar dados.

**Back end:**

- Lida com a lógica de negócios, manipulação de dados e segurança.
- Executa no servidor (server-side).
- Responsável pelo processamento de solicitações do cliente, acesso ao banco de dados e lógica de negócios.
- Usa linguagens como JavaScript (Node.js), Python, Ruby, Java, entre outras.
- Fornece APIs ou serviços web para comunicação com o front end e outras aplicações.

------

Agora, vamos discutir os fundamentos da programação usando JavaScript e o MERN Stack.

O MERN Stack é um conjunto de tecnologias para desenvolvimento web full stack, composto por:

1. **MongoDB:** Um banco de dados NoSQL orientado a documentos, usado para armazenar dados de forma flexível e escalável.

2. **Express.js:** Um framework para Node.js que simplifica a criação de aplicativos web e APIs RESTful, fornecendo recursos como gerenciamento de rotas e middleware.

3. **React:** Uma biblioteca JavaScript para construir interfaces de usuário interativas e reativas. O React permite criar componentes reutilizáveis e gerenciar o estado da aplicação de forma eficiente.

4. **Node.js:** Um ambiente de tempo de execução JavaScript que permite executar código JavaScript no servidor. Node.js é usado para criar o back end da aplicação, lidar com solicitações HTTP, acessar o banco de dados e executar a lógica de negócios.

   ------

   **Javascript**

   JavaScript é uma linguagem de programação de alto nível, interpretada e dinâmica, amplamente utilizada para desenvolvimento web. Ela permite que os desenvolvedores criem aplicações interativas e dinâmicas do lado do cliente (front end) e do lado do servidor (back end).

   Aqui estão alguns dos tipos de dados básicos em JavaScript:

   **Number (Número):** Representa números inteiros ou de ponto flutuante. Exemplos: `42`, `3.14`.

   **String (Cadeia de Caracteres):** Sequência de caracteres alfanuméricos. Deve ser definida entre aspas simples (`'`) ou duplas (`"`). Exemplos: `'Hello'`, `"World"`.

   **Boolean:** Representa um valor verdadeiro (`true`) ou falso (`false`), utilizado para expressar condições lógicas.

   **Undefined:** Indica que uma variável foi declarada, mas não atribuída a um valor. Quando uma variável é declarada sem valor, seu tipo é `undefined`.

   **Null:** Representa a ausência de valor intencional. É um valor especial que indica a ausência de qualquer valor.

   **Object (Objeto):** Estrutura de dados complexa que armazena coleções de pares chave-valor. As chaves são strings, e os valores podem ser de qualquer tipo de dados, incluindo outros objetos. Exemplo: `{ nome: 'João', idade: 30 }`.

   **Array (Matriz):** Estrutura de dados ordenada que armazena uma coleção de elementos. Os elementos de uma matriz podem ser de qualquer tipo de dados, inclusive outras matrizes e objetos. Exemplo: `[1, 2, 3, 4]`.

   **Function (Função):** Representa blocos de código reutilizáveis que podem ser chamados para executar uma tarefa específica. As funções em JavaScript são objetos de primeira classe, o que significa que podem ser atribuídas a variáveis, passadas como argumentos e retornadas por outras funções.

**Variáveis**

As variáveis em JavaScript são usadas para armazenar valores que podem ser posteriormente referenciados e manipulados em um programa. Aqui está uma visão geral das variáveis em JavaScript:

**Declarando Variáveis:**

- Em JavaScript, você pode declarar variáveis usando as palavras-chave `var`, `let`, ou `const`.
- Antes do ECMAScript 6 (ES6), a maneira mais comum de declarar variáveis era usando `var`.
- Com o ES6, `let` e `const` foram introduzidos como alternativas mais seguras e mais previsíveis.

**var:**

- Declara uma variável globalmente ou localmente em uma função, sem importar o escopo de bloco em que ela está.
- As variáveis declaradas com `var` podem ser redeclaradas e atualizadas.
- No entanto, elas não respeitam o escopo de bloco, o que pode levar a bugs inesperados em alguns casos.

```
var x = 10;
var y = "Olá";
```

**let:**

- Declara uma variável local no escopo de bloco em que ela é definida.
- Variáveis declaradas com `let` têm escopo de bloco, o que significa que elas são acessíveis apenas dentro do bloco em que são declaradas.
- Não permite a redeclaração de variáveis no mesmo escopo.

```
let idade = 25;
let nome = "Maria";
```

1. const:
   - Declara uma constante de somente leitura, que não pode ser reatribuída ou redeclarada.
   - Assim como `let`, `const` também tem escopo de bloco.
   - É uma boa prática usar `const` sempre que o valor da variável não precisar ser alterado posteriormente.

```
const PI = 3.14159265359;
const URL_API = "https://api.exemplo.com";
```

