# O que são funções em JavaScript?

- **Definição:** Em JavaScript, uma função é um bloco de código que executa uma tarefa específica quando chamado ou invocado.
- **Reutilização de Código:** As funções permitem encapsular um conjunto de instruções para que possam ser reutilizadas facilmente em diferentes partes do código.

### Sintaxe de Declaração de Função:

```
function nomeDaFuncao(parametro1, parametro2, ...) {
    // corpo da função
    // pode conter várias instruções
    return valor; // opcional, retorna um valor
}

```

- **nomeDaFuncao:** É o nome que você dá à função para identificá-la.
- **parâmetros:** São valores que a função espera receber para executar suas tarefas. São opcionais.
- **corpo da função:** É o conjunto de instruções que a função executa quando é chamada.
- **return:** É uma palavra-chave opcional que especifica o valor que a função deve retornar após a execução.

### Exemplo de Declaração de Função:

```
function soma(a, b) {
    return a + b;
}

console.log(soma(2, 3)); // Output: 5
```

### Expressões de Função (Function Expressions):

Em JavaScript, você também pode definir funções usando expressões de função. Essas são basicamente funções atribuídas a variáveis.

```
const minhaFuncao = function() {
    // corpo da função
};

```

### Arrow Functions (Funções de Seta):

As arrow functions são uma forma mais concisa de escrever funções em JavaScript.

```
const minhaFuncao = (param1, param2) => {
    // corpo da função
};

```

### Funções como Objetos de Primeira Classe:

Em JavaScript, as funções são tratadas como objetos de primeira classe, o que significa que elas podem ser atribuídas a variáveis, passadas como argumentos para outras funções, retornadas por outras funções e armazenadas em estruturas de dados.

```
const minhaFuncao = function() {
    console.log("Olá!");
};

const outraFuncao = minhaFuncao; // Atribuindo uma função a outra variável
outraFuncao(); // Chamando a função através da nova variável

```

