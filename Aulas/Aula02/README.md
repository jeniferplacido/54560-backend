# Aula 2

### Princípios Básicos de JavaScript:

**Variáveis e Tipos de Dados**:

- Declaração de variáveis com `var`, `let` e `const`.
- Tipos de dados primitivos: números, strings, booleanos, null e undefined.
- Tipos de dados compostos: objetos e arrays.

**Operadores**:

- Aritméticos (`+`, `-`, `*`, `/`).
- Comparação (`==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, `>=`).
- Lógicos (`&&`, `||`, `!`).

**Estruturas de Controle**:

- Condicionais: `if`, `else if`, `else`.
- Loops: `for`, `while`, `do-while`.

**Funções**:

- Declaração de funções com `function`.
- Funções anônimas e arrow functions (`() => {}`).

**Manipulação de DOM**:

- Seleção de elementos HTML.
- Manipulação de conteúdo, atributos e estilos.

**Eventos**:

- Adição e remoção de event listeners.
- Manipulação de eventos do mouse, teclado, etc.

------

**Tipos de dados em JavaScript**

**Função:**

Uma função em JavaScript é um bloco de código que pode ser chamado e executado em qualquer parte do programa. As funções são uma parte fundamental da linguagem e são usadas para organizar o código em tarefas menores e reutilizáveis, tornando-o mais legível, modular e fácil de manter.

As funções em JavaScript podem ser definidas usando a sintaxe básica ou a notação de flecha (arrow functions), e ambas podem operar dentro de um escopo local.

**Funções com a sintaxe básica**

 As funções definidas com a sintaxe básica têm a seguinte estrutura:

```
function nomeDaFuncao(parametros) {
    // corpo da função
}
```

Essas funções podem ser encontradas em um escopo local, o que significa que as variáveis declaradas dentro delas não são acessíveis fora da função. Elas têm seu próprio contexto de execução isolado do restante do código.

**Arrow functions (funções de flecha)** 

As arrow functions são uma forma mais concisa de escrever funções em JavaScript e têm a seguinte sintaxe:

```
const nomeDaFuncao = (parametros) => {
    // corpo da função
};
```

As arrow functions também operam dentro de um escopo local, o que significa que as variáveis declaradas dentro delas são acessíveis apenas dentro da própria função. Elas têm um comportamento ligeiramente diferente em relação ao `this` em comparação com as funções tradicionais, o que as torna úteis em certos contextos, especialmente quando se trata de funções de retorno de chamada (callbacks) ou funções em que a sintaxe mais curta é desejada.

Ambos os tipos de função podem operar em um escopo local e são úteis para organizar o código em tarefas menores e mais gerenciáveis. A escolha entre eles muitas vezes depende das necessidades específicas do projeto.

Vamos criar uma função simples usando a estrutura básica e depois discutir seus elementos e um caso de uso.

### Exemplo de função com estrutura básica:

```
// Definindo uma função chamada "somar"
function somar(a, b) {
    let resultado = a + b;
    return resultado;
}
// Chamando a função e armazenando o resultado em uma variável
let resultadoSoma = somar(3, 5);

// Imprimindo o resultado no console
console.log(resultadoSoma); // Saída: 8
```

### Elementos da função:

**Nome da função (`somar`):** É o identificador da função, que usamos para chamá-la posteriormente.

**Parâmetros (`a` e `b`):** São os valores que a função espera receber quando é chamada. No exemplo, `a` e `b` são os números que queremos somar.

**Corpo da função (`let resultado = a + b; return resultado;`):** É o bloco de código onde as operações são realizadas. Aqui, estamos somando os valores de `a` e `b`, armazenando o resultado em uma variável `resultado`, e em seguida, retornando esse resultado.

**Palavra-chave `return`:** É usada para especificar o valor que a função deve retornar quando é chamada. Neste caso, estamos retornando o resultado da soma.

### Caso de uso:

Imagine que você está desenvolvendo um aplicativo de calculadora e precisa de uma função para somar dois números. Você pode criar a função `somar` como mostrado acima. Quando precisar somar dois números em qualquer parte do seu código, basta chamar essa função, passando os números desejados como argumentos. Isso torna o código mais modular e reutilizável, pois você não precisa escrever o mesmo bloco de código para realizar a soma toda vez que precisar dessa operação. Em vez disso, você pode simplesmente chamar a função `somar`.

Vamos reescrever a mesma função usando a sintaxe de arrow function e destacar as diferenças em relação à estrutura básica.

### Exemplo da mesma função com arrow function:

```
// Definindo a função como uma arrow function chamada "somar"
const somar = (a, b) => {
    let resultado = a + b;
    return resultado;
};

// Chamando a função e armazenando o resultado em uma variável
let resultadoSoma = somar(3, 5);

// Imprimindo o resultado no console
console.log(resultadoSoma); // Saída: 8
```

1. **Sintaxe da função (`const somar = (a, b) => { ... }`):** Em vez de usar a palavra-chave `function`, estamos usando a sintaxe de arrow function, que é mais concisa. A seta `=>` substitui a palavra `function`.
2. **Palavra-chave `const`:** Como estamos atribuindo a função a uma variável (`somar`), usamos a palavra-chave `const` em vez de `function`.
3. **Escopo de bloco implícito:** Arrow functions têm um escopo de bloco implícito, o que significa que, se o corpo da função consistir em uma única expressão, como no exemplo, não é necessário usar chaves `{ }` para envolver o bloco de código.

### Similaridades:

Apesar das diferenças na sintaxe, a funcionalidade da função é a mesma que no exemplo anterior. A função `somar` ainda espera dois parâmetros (`a` e `b`), realiza a soma e retorna o resultado. O comportamento da função e seu caso de uso permanecem os mesmos, independentemente da sintaxe usada para definir a função.

------

No JavaScript, existem dois tipos principais de escopo:

**Escopo local (ou escopo de função):** As variáveis declaradas dentro de uma função são visíveis apenas dentro dessa função. Elas não podem ser acessadas de fora da função ou de outras funções. Isso significa que essas variáveis têm um escopo local, limitado ao bloco de código da função onde foram declaradas.

**Escopo global:** As variáveis declaradas fora de qualquer função têm escopo global, o que significa que elas podem ser acessadas de qualquer lugar no código, incluindo dentro de funções. Essas variáveis são visíveis em todo o programa.

**Exemplo de escopo inválido:**

```
function minhaFuncao() {
    let localVar = "Eu sou local";
}

console.log(localVar); // Erro: localVar is not defined
```

Neste exemplo, a variável `localVar` é declarada dentro do escopo da função `minhaFuncao()`. Isso significa que ela só é acessível dentro dessa função. Tentar acessá-la fora do escopo da função resultará em um erro, pois `localVar` não está definida no escopo global. Isso ilustra um exemplo de escopo inválido, onde estamos tentando acessar uma variável que não está dentro do escopo em que está sendo referenciada.

**Exemplo de escopo válido:**

```
let globalVar = "Eu sou global";

function minhaFuncao() {
    console.log(globalVar); // Variável global acessível dentro da função
}

minhaFuncao(); // Chamando a função

console.log(globalVar); // Variável global acessível fora da função

```

Neste exemplo, `globalVar` é uma variável global, o que significa que pode ser acessada de qualquer lugar no código, incluindo dentro da função `minhaFuncao()` e fora dela. Dentro da função, `globalVar` é acessada de forma válida e não há problemas de escopo, pois é uma variável global e está disponível em todo o programa.

------

<p align="center">
  <img width="500" height="256" src="https://res.cloudinary.com/practicaldev/image/fetch/s--sF4FouMg--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qakqanq79z8exo4pu63y.jpg">
</p>

ECMAScript (também conhecido como ES) é a especificação padronizada para a linguagem de programação JavaScript. Ele define a sintaxe, semântica e características que a linguagem JavaScript deve seguir.

A padronização do ECMAScript é gerenciada pela Ecma International, uma organização sem fins lucrativos que desenvolve e mantém padrões para diversas tecnologias da computação. O nome "ECMAScript" foi escolhido para evitar possíveis problemas de marca registrada com o nome "JavaScript", que é uma marca registrada da Oracle Corporation.

Desde seu lançamento inicial em 1997, o ECMAScript passou por várias versões e revisões. Cada nova versão traz novos recursos, melhorias de desempenho e correções de bugs para a linguagem JavaScript. Os principais navegadores web implementam as especificações do ECMAScript em suas engines de JavaScript para garantir compatibilidade e interoperabilidade.

É importante observar que "JavaScript" e "ECMAScript" são frequentemente usados de forma intercambiável, mas o ECMAScript refere-se à especificação técnica, enquanto JavaScript é a implementação prática dessa especificação.



**JavaScript e ECMAScript 7**

##### Operador Exponencial (`**`):

O operador exponencial em JavaScript é uma operação matemática que calcula a potência de um número elevado a outro número. Por exemplo, `a ** b` calcula `a` elevado à potência de `b`.

Exemplo:

```
let base = 2;
let expoente = 3;
let resultado = base ** expoente;
console.log(resultado); // Saída: 8 (2 elevado à potência de 3)

```

Neste exemplo, `2 ** 3` retorna 8, pois 2 elevado à potência de 3 é igual a 8.

##### Método `includes()`:

O método `includes()` é um método disponível para arrays em JavaScript que verifica se um determinado elemento está presente no array. Ele retorna `true` se o elemento estiver presente e `false` caso contrário.

Exemplo:

```
let lista = [1, 2, 3, 4, 5];
let numero = 3;
if (lista.includes(numero)) {
    console.log(`${numero} está presente na lista.`);
} else {
    console.log(`${numero} não está presente na lista.`);
}
```

Neste exemplo, `lista.includes(numero)` verifica se o número 3 está presente na lista. Se estiver presente, ele retorna `true` e imprime a mensagem indicando que está presente; caso contrário, retorna `false` e imprime a mensagem indicando que não está presente.

##### Quando usar `includes()`:

Você pode usar o método `includes()` sempre que precisar verificar se um elemento específico está presente em um array. Isso é útil em situações onde você precisa fazer uma verificação simples de pertencimento sem precisar percorrer manualmente o array. Por exemplo:

- Verificar se um determinado valor está presente em um conjunto de opções.
- Verificar se um item específico está presente em uma lista de itens.
- Verificar se um determinado elemento está presente antes de realizar uma operação sobre ele para evitar erros.

Em resumo, o método `includes()` é uma ferramenta útil para verificar a presença de um elemento em um array de forma simples e eficaz.

------

##### Async e Await:

`async` e `await` são recursos introduzidos no JavaScript ES2017 (também conhecido como ES8) para trabalhar com código assíncrono de uma maneira mais limpa e legível, especialmente ao lidar com chamadas de funções assíncronas.

- `async`: é usado para declarar uma função como assíncrona. Uma função assíncrona retorna sempre uma Promise.
- `await`: é usado para pausar a execução de uma função assíncrona até que uma Promise seja resolvida, permitindo que você escreva código assíncrono de forma mais "síncrona".

Exemplo:

```
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function exemploAsync() {
    console.log("Início da função assíncrona");

    // Espera 1 segundo antes de prosseguir
    await delay(1000);
    
    console.log("Passaram-se 1 segundo!");

    // Espera mais 1 segundo antes de prosseguir
    await delay(1000);

    console.log("Passaram-se 2 segundos!");

    console.log("Fim da função assíncrona");
}

exemploAsync();
```

##### Object.entries, Object.values, Object.keys:

Esses são métodos estáticos da classe `Object` em JavaScript que permitem acessar as propriedades de um objeto de diferentes maneiras:

- `Object.entries`: Retorna um array contendo pares de chave/valor de um objeto como arrays.
- `Object.values`: Retorna um array contendo os valores das propriedades do objeto.
- `Object.keys`: Retorna um array contendo as chaves (nomes das propriedades) do objeto.

Exemplo:

```
const objeto = { a: 1, b: 2, c: 3 };

console.log(Object.entries(objeto));
// Saída: [ ['a', 1], ['b', 2], ['c', 3] ]

console.log(Object.values(objeto));
// Saída: [ 1, 2, 3 ]

console.log(Object.keys(objeto));
// Saída: [ 'a', 'b', 'c' ]

```

Neste exemplo, temos um objeto `objeto` com três propriedades. Usamos os métodos `Object.entries`, `Object.values` e `Object.keys` para acessar as propriedades do objeto de diferentes maneiras. Cada método retorna um array que podemos usar para iterar sobre as propriedades do objeto ou realizar outras operações.

------

##### Resolvedores de Promessa com `.finally()`:

O método `.finally()` é utilizado em promessas em JavaScript para especificar um bloco de código que deve ser executado, independentemente de a promessa ter sido resolvida (fulfilled) ou rejeitada (rejected). Ele é útil para realizar tarefas de limpeza ou finalização, independentemente do resultado da promessa.

Exemplo:

```
const promessa = new Promise((resolve, reject) => {
    // Simulando uma operação assíncrona
    setTimeout(() => {
        // Simula a resolução da promessa
        resolve("Promessa resolvida!");
    }, 2000);
});

promessa.then(resultado => {
    console.log(resultado); // Saída: Promessa resolvida!
}).catch(error => {
    console.error(error);
}).finally(() => {
    console.log("Operação finalizada, independentemente do resultado da promessa.");
});
```

##### Operadores Rest e Spread para maior controle de objetos:

Os operadores rest e spread em JavaScript oferecem uma maneira conveniente de manipular listas e objetos.

- **Operador Rest (`...`):** Permite agrupar elementos restantes em uma lista.
- **Operador Spread (`...`):** Permite expandir uma lista ou objeto em outra lista ou objeto.

Exemplo de operador Rest:

```
function soma(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}

console.log(soma(1, 2, 3, 4, 5)); // Saída: 15

```

Neste exemplo, a função `soma` recebe uma quantidade variável de argumentos (`...numeros`). Dentro da função, esses argumentos são agrupados em um array chamado `numeros`. Em seguida, usamos o método `reduce()` para somar todos os números no array.

Ao chamar `soma(1, 2, 3, 4, 5)`, os números `1`, `2`, `3`, `4` e `5` são agrupados em um array `[1, 2, 3, 4, 5]`, e a função retorna a soma desses números, que é `15`.

Da mesma forma, ao chamar `soma(10, 20)`, os números `10` e `20` são agrupados em um array `[10, 20]`, e a função retorna a soma desses números, que é `30`.

E se chamarmos `soma()` sem nenhum argumento, como no último exemplo, o array de argumentos será vazio, e a função retornará `0`.

O operador Rest é muito útil quando você não sabe quantos argumentos uma função pode receber ou quando deseja lidar com um número variável de argumentos de forma flexível. Ele simplifica muito a escrita de funções que precisam operar sobre uma quantidade variável de dados.

Exemplo de operador Spread:

```
const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];

const todosNumeros = [...numeros1, ...numeros2];
console.log(todosNumeros); // Saída: [1, 2, 3, 4, 5, 6]

```

O operador Spread é usado para combinar os elementos de duas listas (`numeros1` e `numeros2`) em uma única lista chamada `todosNumeros`

------

**`String.trim()`:**

O método `trim()` em JavaScript remove os espaços em branco do início e do fim de uma string e retorna a nova string resultante.

Este método é útil para limpar strings de espaços extras que podem ter sido inseridos acidentalmente.

Exemplo:

```
const hello = "   Olá, mundo!   ";
console.log(hello.trim()); // Saída: "Olá, mundo!"

```

------

**`Array.flat()`:**

O método `flat()` em JavaScript "aplana" um array, ou seja, remove sub-arrays aninhados em um único nível no array resultante.

Este método é útil quando você tem arrays aninhados e deseja convertê-los em um único array "achatado".

Exemplo:

```
const arraysAninhados = [[1, 2], [3, 4], [5, 6]];
const arrayAchatado = arraysAninhados.flat();
console.log(arrayAchatado); // Saída: [1, 2, 3, 4, 5, 6]

```

**`Dynamic import`:**

A importação dinâmica, ou `dynamic import`, é uma funcionalidade que permite importar módulos JavaScript de forma dinâmica, sob demanda, em tempo de execução, em oposição à importação estática normalmente feita no início do código.

Isso permite carregar módulos apenas quando necessário, o que pode melhorar o desempenho e a eficiência.

Exemplo:

```
// Importa um módulo dinamicamente quando uma condição é atendida
if (algumaCondicao) {
    import('./meuModulo.js')
        .then(meuModulo => {
            // Faça algo com o módulo importado
        })
        .catch(erro => {
            console.log('Erro ao importar o módulo:', erro);
        });
}
```

------

**Operador nullish (`??`)**:

O operador nullish (`??`) é um operador introduzido no JavaScript para fornecer uma forma mais precisa de verificar se um valor é nulo (`null`) ou indefinido (`undefined`).

Ele retorna o operando do lado direito quando o operando do lado esquerdo é `null` ou `undefined`; caso contrário, retorna o operando do lado esquerdo.

Este operador é útil quando você deseja fornecer um valor padrão apenas se a variável for estritamente nula ou indefinida, mas não se for `0`, uma string vazia `''` ou outro valor "falsy".

Exemplo:

```
const x = null;
const y = 5;

const valorPadrao = x ?? y;
console.log(valorPadrao); // Saída: 5 (pois x é null, então o valor de y é usado como padrão)
```

------

**Variáveis privadas dentro das classes**:

Variáveis privadas são propriedades de classe que só podem ser acessadas dentro da própria classe. Elas não podem ser acessadas fora da classe ou por subclasses.

Isso proporciona encapsulamento e ajuda a evitar interferências externas.

No JavaScript, antes da introdução de variáveis privadas nas classes, era comum usar convenções de nomenclatura (por exemplo, prefixar uma propriedade com um `_` para indicar que ela é privada) para simular variáveis privadas.

Exemplo:

```
class ContaBancaria {
    #saldo; // Variável privada

    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }

    depositar(valor) {
        this.#saldo += valor;
    }

    consultarSaldo() {
        return this.#saldo;
    }
}

const minhaConta = new ContaBancaria(100);
console.log(minhaConta.consultarSaldo()); // Saída: 100

minhaConta.depositar(50);
console.log(minhaConta.consultarSaldo()); // Saída: 150

console.log(minhaConta.#saldo); // Erro! #saldo é uma variável privada e não pode ser acessada fora da classe
```

