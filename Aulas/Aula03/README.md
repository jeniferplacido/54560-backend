# O que é um Callback?

Um callback é uma função que é passada como argumento para outra função e é chamada de volta (ou executada) após a conclusão de uma operação específica. Em outras palavras, é uma forma de dizer "quando terminar, faça isso".

Imagine que você está indo a uma loja de sorvete e pede um sabor de sorvete. Enquanto o sorvete está sendo preparado, você não precisa ficar parado esperando. Você pode continuar fazendo outras coisas. Quando o sorvete estiver pronto, eles chamam o seu nome para que você possa pegá-lo. Nesse caso, o ato de chamar seu nome é como um callback - eles só o fazem depois que o sorvete está pronto.

Em JavaScript, isso é muito útil em situações assíncronas, como carregar dados de um servidor, executar animações ou manipular eventos de usuário.

Por exemplo:

```
// Exemplo de callback com setTimeout
console.log("Início");

setTimeout(function() {
    console.log("Este é um callback!");
}, 2000);

console.log("Fim");

```

Neste exemplo, o código dentro da função `setTimeout` é o callback. Ele será executado depois de 2 segundos, enquanto o resto do código continua sendo executado.

------

Vamos começar com uma analogia:

Imagine que você está em uma lanchonete fazendo um pedido. Você diz ao atendente o que quer (seu pedido) e depois espera até que ele esteja pronto. Enquanto isso, você pode fazer outras coisas. Quando o seu pedido estiver pronto, o atendente chama seu nome para que você possa pegá-lo. Neste caso, você é o callback - você só é chamado de volta quando o pedido está pronto.

### Etapa 2: Exemplo Prático

**Objetivo:** Demonstrar um exemplo prático de callback em JavaScript.

**Atividade:** Vamos imaginar que queremos fazer um sanduíche e precisamos de diferentes ingredientes que estão disponíveis em lugares diferentes. Vamos simular isso com funções e um callback.

**Exemplo de Código:**

```
function comprarPao(callback) {
    setTimeout(function() {
        console.log("Pão comprado!");
        callback();
    }, 2000);
}

function comprarQueijo(callback) {
    setTimeout(function() {
        console.log("Queijo comprado!");
        callback();
    }, 2000);
}

function prepararSanduiche() {
    console.log("Sanduíche pronto!");
}

comprarPao(function() {
    comprarQueijo(prepararSanduiche);
});

```

**Recapitulação:**

- Callbacks são funções que são passadas como argumentos para outras funções e são chamadas de volta mais tarde.
- As funções em JavaScript podem ser usadas como callbacks para controlar a ordem de execução de operações assíncronas.

### Método onClick no Frontend:

No desenvolvimento de aplicações web, especialmente no frontend, frequentemente lidamos com interações do usuário, como clicar em botões, links ou outros elementos. O método `onClick` é usado para atribuir uma função que será executada quando o elemento HTML associado for clicado. Essa função é um exemplo clássico de um callback. Veja um exemplo:

```
<button onclick="minhaFuncao()">Clique aqui</button>

<script>
function minhaFuncao() {
    alert("Você clicou no botão!");
}
</script>

```

Nesse exemplo, a função `minhaFuncao` é um callback. Ela é chamada quando o botão é clicado.

### Método forEach:

O método `forEach` é usado para percorrer todos os elementos de um array e executar uma função para cada elemento. Essa função é um callback. Veja um exemplo:

```
const numeros = [1, 2, 3, 4, 5];

numeros.forEach(function(numero) {
    console.log(numero * 2); // Este é o callback
});

```

Neste exemplo, a função anônima passada para `forEach` é um callback. Ela é executada para cada elemento do array `numeros`.

### Método map ou filter:

### O que é o método map?

O método `map` é uma função de array em JavaScript que é usada para transformar cada elemento de um array e criar um novo array com os resultados dessa transformação. Em termos mais simples, você pode pensar nele como uma máquina que pega cada item de uma lista, faz algo com ele e produz uma nova lista com os resultados.

### O que é o método map?

O método `map` é uma função de array em JavaScript que é usada para transformar cada elemento de um array e criar um novo array com os resultados dessa transformação. Em termos mais simples, você pode pensar nele como uma máquina que pega cada item de uma lista, faz algo com ele e produz uma nova lista com os resultados.

Os métodos `map` e `filter` são usados para transformar ou filtrar elementos de um array, respectivamente. Eles também aceitam uma função callback como argumento. Veja exemplos:

#### Método map:

```
const numeros = [1, 2, 3, 4, 5];

const numerosDobrados = numeros.map(function(numero) {
    return numero * 2; // Este é o callback
});

console.log(numerosDobrados); // Output: [2, 4, 6, 8, 10]

```

Neste exemplo, `function(numero) { return numero * 2; }` é uma função anônima que é passada para o método `map` como um callback. Ela é chamada para cada elemento do array `numeros` e retorna o elemento dobrado.

#### Método filter:

```
const numeros = [1, 2, 3, 4, 5];

const numerosPares = numeros.filter(function(numero) {
    return numero % 2 === 0; // Este é o callback
});

console.log(numerosPares); // Output: [2, 4]

```

Neste exemplo, `function(numero) { return numero % 2 === 0; }` é uma função anônima que é passada para o método `filter` como um callback. Ela é chamada para cada elemento do array `numeros` e retorna `true` se o número for par e `false` caso contrário, filtrando apenas os números pares.

Nos exemplos acima, as funções passadas para `map` e `filter` são callbacks. Elas são chamadas para cada elemento do array e executam a lógica definida dentro delas.

Esses são exemplos comuns de como os callbacks são utilizados em JavaScript para tornar o código mais dinâmico e flexível.

Quatro funções serão criadas**: somar, subtrair**, **multiplicar** e **dividir**.

Além disso, será fornecida outra função de operação, que receberá como callback qualquer uma dessas três funções para executá-la.

```
const somar = (numero1, numero2) => numero1 + numero2;

const subtrair = (numero1, numero2) => numero1 - numero2;

const multiplicar = (numero1, numero2) => numero1 * numero2;

const dividir = (numero1, numero2) => numero1 / numero2;

const realizarOperacao = (numero1, numero2, callback) => {
    console.log("Vou fazer uma operação, mas não sei qual é, mas vou...");
    let resultado = callback(numero1, numero2);
    console.log(`O resultado da operação é: ${resultado}`);
};

realizarOperacao(10, 5, somar);       // O resultado da operação é: 15
realizarOperacao(10, 5, subtrair);    // O resultado da operação é: 5
realizarOperacao(10, 5, multiplicar); // O resultado da operação é: 50
realizarOperacao(10, 5, dividir);     // O resultado da operação é: 2
```

**Callbacks aninhados**

- Callbacks aninhados são simplesmente callbacks dentro de outros callbacks. No código acima, cada função que executa uma tarefa assíncrona (como encontrar a chave, construir uma ponte, buscar equipamentos) chama outra função (callback) quando a tarefa é concluída.
- Por exemplo, depois de encontrar a chave, chamamos a função `abrirPorta()` como um callback para abrir a porta. Isso é um callback aninhado.
- O mesmo acontece com os outros desafios: após construir a ponte, chamamos a função `atravessarRio()` como um callback, e após buscar os equipamentos, chamamos a função `escalarMontanha()` como um callback.

Imagine que estamos em uma aventura épica no mundo da programação! Nosso herói, o Aventureiro, precisa passar por uma série de desafios para encontrar um tesouro escondido. Cada desafio é representado por uma função, e nosso herói precisa usar callbacks para avançar para o próximo desafio!

**Desafio 1: Encontrando uma chave** Nosso herói entra em uma sala misteriosa e encontra uma porta trancada. Para abrir a porta, ele precisa encontrar uma chave escondida em uma caixa. Aqui está o código desse desafio:

```
function encontrarChave(callback) {
    setTimeout(function() {
        console.log("Você encontrou a chave!");
        callback();
    }, 2000);
}

function abrirPorta() {
    console.log("A porta está aberta! Você pode avançar.");
}

encontrarChave(abrirPorta);

```

**Desafio 2: Cruzando um rio** Agora, nosso herói se depara com um rio turbulento. Ele precisa de uma ponte para atravessá-lo com segurança. A construção da ponte leva um tempo, então usaremos um callback para esperar até que ela esteja pronta:

```
function construirPonte(callback) {
    setTimeout(function() {
        console.log("A ponte está pronta!");
        callback();
    }, 3000);
}

function atravessarRio() {
    console.log("Você atravessou o rio com segurança!");
}

construirPonte(atravessarRio);

```

**Desafio 3: Escalando uma montanha** Nosso próximo desafio é escalar uma montanha íngreme. Mas primeiro, precisamos de equipamentos adequados. Vamos usar callbacks aninhados para buscar os equipamentos e, em seguida, começar a escalada:

```
function buscarEquipamentos(callback) {
    setTimeout(function() {
        console.log("Você encontrou os equipamentos de escalada!");
        callback();
    }, 2500);
}

function escalarMontanha() {
    console.log("Você alcançou o pico da montanha!");
}

buscarEquipamentos(function() {
    escalarMontanha();
});

```

Parabéns, nosso Aventureiro conseguiu superar todos os desafios usando callbacks aninhados! Ele agora está mais próximo de encontrar o tesouro escondido. Nosso herói aprendeu que, com callbacks aninhados, ele pode lidar com uma série de desafios de forma organizada e eficiente, avançando na sua jornada de programação!



```
// Função para encontrar a chave
function encontrarChave(callback) {
    setTimeout(function() {
        console.log("Você encontrou a chave!");
        callback();
    }, 2000);
}

// Função para abrir a porta
function abrirPorta() {
    console.log("A porta está aberta! Você pode avançar.");
}

// Função para construir a ponte
function construirPonte(callback) {
    setTimeout(function() {
        console.log("A ponte está pronta!");
        callback();
    }, 3000);
}

// Função para atravessar o rio
function atravessarRio() {
    console.log("Você atravessou o rio com segurança!");
}

// Função para buscar equipamentos de escalada
function buscarEquipamentos(callback) {
    setTimeout(function() {
        console.log("Você encontrou os equipamentos de escalada!");
        callback();
    }, 2500);
}

// Função para escalar a montanha
function escalarMontanha() {
    console.log("Você alcançou o pico da montanha!");
}

// Explicação sobre callbacks aninhados
console.log("Vamos começar uma grande aventura!");

// Primeiro desafio: Encontrar a chave e abrir a porta
encontrarChave(function() {
    abrirPorta();

    // Segundo desafio: Construir a ponte e atravessar o rio
    construirPonte(function() {
        atravessarRio();

        // Terceiro desafio: Buscar equipamentos e escalar a montanha
        buscarEquipamentos(function() {
            escalarMontanha();
            console.log("Parabéns! Você completou todos os desafios e alcançou o objetivo final!");
        });
    });
});
```

- O código acima simula uma série de desafios que nosso herói, o Aventureiro, precisa superar.
- Cada desafio é representado por uma função que recebe um callback para indicar que foi concluído.
- No entanto, os callbacks estão aninhados uns dentro dos outros, formando uma "pirâmide" horizontal de código.
- Isso significa que cada novo desafio só pode ser enfrentado após a conclusão do anterior, levando a uma estrutura de código difícil de ler e manter.
- Esse padrão de código é conhecido como "Callback Hell" ou "Pyramid of Doom", devido à sua forma.

### Por que é um problema?

- O "Callback Hell" torna o código difícil de entender e dar manutenção.
- À medida que adicionamos mais desafios (ou seja, mais callbacks aninhados), a pirâmide horizontal de código cresce, dificultando ainda mais a compreensão.
- Isso pode levar a erros, tornar o código propenso a bugs e dificultar a adição de novos recursos ou correções no futuro.

### O que fazer?

- Quando o código começa a parecer uma "pirâmide", é hora de reconsiderar a abordagem.
- Uma estratégia comum é usar Promises ou async/await em vez de callbacks, pois elas proporcionam uma maneira mais limpa e fácil de lidar com tarefas assíncronas.
- As Promises e async/await ajudam a evitar o aninhamento excessivo de callbacks, tornando o código mais legível e manutenível.

Em resumo, o "Callback Hell" é um padrão de código que surge quando há muitos callbacks aninhados, tornando o código difícil de entender e manter. É importante reconhecê-lo e considerar alternativas, como Promises ou async/await, para melhorar a legibilidade e a manutenibilidade do código.

### O que são Promises?

As Promises são objetos em JavaScript que representam a eventual conclusão ou falha de uma operação assíncrona. Elas são usadas para lidar com operações assíncronas de uma maneira mais limpa e legível, evitando o aninhamento excessivo de callbacks.

### Como as Promises funcionam?

1. **Criação de uma Promise:** Uma Promise é criada usando o construtor `new Promise()`. Este construtor requer uma função executora como argumento. Esta função executora, por sua vez, recebe dois parâmetros: `resolve` e `reject`. Dentro desta função, você realiza sua operação assíncrona e chama `resolve()` quando a operação for concluída com sucesso ou `reject()` se ocorrer um erro.
2. **Manipulação do resultado:** Depois de criar uma Promise, você pode encadear chamadas `.then()` para manipular o resultado bem-sucedido da Promise e `.catch()` para lidar com erros.

### Exemplo de como usar Promises para melhorar o "Callback Hell":

Vamos reescrever nosso exemplo anterior usando Promises:

```
// Desafio 1: Encontrando uma chave
function encontrarChave() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Você encontrou a chave!");
            resolve();
        }, 2000);
    });
}

// Desafio 2: Construindo uma ponte
function construirPonte() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("A ponte está pronta!");
            resolve();
        }, 3000);
    });
}

// Desafio 3: Buscando equipamentos
function buscarEquipamentos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Você encontrou os equipamentos de escalada!");
            resolve();
        }, 2500);
    });
}

// Desafio 4: Escalando uma montanha
function escalarMontanha() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Você alcançou o pico da montanha!");
            resolve();
        }, 2000);
    });
}

// Realizando os desafios usando Promises
encontrarChave()
    .then(() => construirPonte())
    .then(() => buscarEquipamentos())
    .then(() => escalarMontanha())
    .catch((error) => console.error("Ocorreu um erro:", error));

```

Imagine que você está em uma jornada épica, enfrentando uma série de desafios, mas quer evitar ficar preso em um labirinto de dificuldades, certo? Isso é exatamente o que acontece quando você usa callbacks aninhados - você se encontra perdido em um "Callback Hell".

Agora, para nos ajudar nessa jornada, temos uma nova ferramenta chamada "Promessa". As promessas são como contratos. Elas prometem que algo será feito, mas não precisamos esperar por elas. Podemos continuar nossa jornada e voltar quando a promessa for cumprida.

Vamos usar um exemplo prático:

Digamos que você queira comprar um novo item em uma loja online, mas precisa verificar se está disponível, adicionar ao carrinho e fazer o pagamento.

Com callbacks, seria como ligar para a loja e esperar na linha até que cada etapa seja concluída, o que pode ser cansativo.

Com promessas, é como se você deixasse seu número de telefone para a loja. Você pode continuar suas outras tarefas e eles te ligarão quando o item estiver disponível, adicionado ao carrinho e o pagamento for feito.

### O que é o `resolve`?

O `resolve` é como uma promessa cumprida. Quando tudo corre como planejado e a tarefa assíncrona é concluída com sucesso, usamos o `resolve` para indicar que a promessa foi cumprida e fornecemos o resultado esperado.

### O que é o `reject`?

Por outro lado, o `reject` é usado quando algo dá errado durante a execução da tarefa assíncrona. Se ocorrer um erro ou algum problema inesperado, usamos o `reject` para indicar que a promessa não foi cumprida e fornecer detalhes sobre o erro que ocorreu.

```
function encontrarChave() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Você encontrou a chave!");
            resolve(); // A chave foi encontrada com sucesso, então usamos resolve para cumprir a promessa
        }, 2000);
    });
}

function escalarMontanha() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Aqui simulamos um erro
            const erro = new Error("Não foi possível escalar a montanha. Equipamentos insuficientes.");
            reject(erro); // Ocorreu um erro ao escalar a montanha, então usamos reject para indicar que a promessa não foi cumprida e fornecer detalhes sobre o erro
        }, 2000);
    });
}

encontrarChave()
    .then(() => escalarMontanha()) // Abre a porta (then) quando a chave é encontrada
    .catch((erro) => console.log(erro)); // Usa o guarda-chuva (catch) para lidar com erros

```

Neste exemplo:

- A função `encontrarChave` retorna uma promessa que é cumprida com sucesso usando `resolve` quando a chave é encontrada.
- A função `escalarMontanha` retorna uma promessa que é rejeitada usando `reject` quando ocorre um erro ao tentar escalar a montanha.
- Quando a chave é encontrada com sucesso, a próxima etapa, a escalada da montanha, é tentada. Se ocorrer um erro durante a escalada, o `catch` é acionado e nos permite lidar com o erro de forma apropriada.

Promessa encadeada:

Imagine que você tem uma série de tarefas para realizar, mas cada uma delas depende do resultado da anterior. Por exemplo, primeiro você precisa encontrar uma chave, depois construir uma ponte, e assim por diante. Você precisa esperar que uma tarefa seja concluída antes de começar a próxima.

Para lidar com essa situação, você pode encadear promessas. Isso significa que você executa uma promessa após a outra, garantindo que cada uma seja concluída antes de passar para a próxima.

```
// Função que retorna uma promessa para encontrar a chave
function encontrarChave() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Você encontrou a chave!");
            resolve();
        }, 2000);
    });
}

// Função que retorna uma promessa para construir uma ponte
function construirPonte() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("A ponte está pronta!");
            resolve();
        }, 3000);
    });
}

// Função que retorna uma promessa para buscar equipamentos
function buscarEquipamentos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Você encontrou os equipamentos de escalada!");
            resolve();
        }, 2500);
    });
}

// Função que retorna uma promessa para escalar a montanha
function escalarMontanha() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Você alcançou o pico da montanha!");
            resolve();
        }, 2000);
    });
}

// Encadeando as promessas
encontrarChave()
    .then(() => construirPonte())
    .then(() => buscarEquipamentos())
    .then(() => escalarMontanha())
    .catch((erro) => console.log(erro)); // Lidar com erros

```

### Sincronismo:

Isso é como seguir uma receita passo a passo, um passo de cada vez. Por exemplo, você adiciona ingredientes à panela, mexe e espera até que a comida esteja pronta antes de passar para o próximo passo. É como fazer uma coisa de cada vez, na ordem certa.

### Assincronismo:

Por outro lado, assincronismo é como fazer várias coisas ao mesmo tempo. Por exemplo, enquanto a sopa está fervendo no fogão, você pode estar cortando legumes ou preparando a sobremesa. Não é necessário esperar que uma tarefa termine para iniciar outra.

```
// Função para escrever uma mensagem em um arquivo de forma assíncrona
function escreverArquivo(mensagem, callback) {
    // Simulando uma operação de escrita assíncrona
    setTimeout(() => {
        // Suponha que a escrita no arquivo seja bem-sucedida após 2 segundos
        callback(null, 'Escrita no arquivo bem-sucedida!');
    }, 2000);
}

// Chamando a função para escrever no arquivo
console.log('Iniciando a escrita no arquivo...');
escreverArquivo('Olá, Mundo!', (erro, resultado) => {
    if (erro) {
        console.error('Erro:', erro);
    } else {
        console.log(resultado);
    }
});
console.log('Continuando a execução do programa...');

```

Neste exemplo:

- Temos uma função `escreverArquivo` que simula uma operação de escrita assíncrona usando `setTimeout`. Ela recebe uma mensagem como parâmetro e um callback que será chamado após a conclusão da operação.
- Chamamos a função `escreverArquivo` para iniciar a operação de escrita, passando uma mensagem e uma função de callback.
- Logo após chamar a função, imprimimos uma mensagem indicando que estamos continuando a execução do programa. Isso ocorre antes mesmo da operação de escrita ser concluída.
- Após 2 segundos, a operação de escrita é concluída e o callback é chamado para informar que a escrita foi bem-sucedida. O resultado é exibido no console.
- Este exemplo demonstra como a execução do programa não é bloqueada pela operação assíncrona e como o controle é passado para a próxima instrução imediatamente após iniciar a operação. O callback é chamado posteriormente, quando a operação é concluída.

```
// Função para escrever uma mensagem em um arquivo de forma síncrona
function escreverArquivoSincrono(mensagem) {
    // Simulando uma operação de escrita síncrona
    console.log('Iniciando a escrita no arquivo...');
    
    // Suponha que a escrita no arquivo seja concluída imediatamente
    console.log('Escrita no arquivo bem-sucedida!');
}

// Chamando a função para escrever no arquivo de forma síncrona
escreverArquivoSincrono('Olá, Mundo!');
console.log('Continuando a execução do programa...');

```

Neste exemplo:

- Temos uma função `escreverArquivoSincrono` que simula uma operação de escrita síncrona. Ela recebe uma mensagem como parâmetro.
- Chamamos a função `escreverArquivoSincrono` para iniciar a operação de escrita de forma síncrona, passando uma mensagem.
- Logo após chamar a função, imprimimos uma mensagem indicando que estamos continuando a execução do programa. No entanto, essa mensagem só será exibida após a conclusão da operação de escrita, pois estamos lidando com código síncrono.
- Como a operação de escrita é concluída imediatamente, a mensagem "Continuando a execução do programa..." será exibida logo após a mensagem indicando que a escrita no arquivo foi bem-sucedida.

### Async:

- `async` é uma palavra-chave que você coloca antes de uma função para indicar que ela contém código assíncrono.
- Basicamente, significa que essa função pode pausar sua execução e esperar por algo assíncrono antes de continuar.
- Você pode pensar nela como uma maneira de dizer ao JavaScript: "Ei, esta função pode precisar de um tempo extra para terminar, então fique tranquilo e não bloqueie outras coisas enquanto espera."

### Await:

- `await` é usado dentro de funções assíncronas para indicar que você quer esperar pela resolução de uma promessa (um resultado assíncrono) antes de continuar a execução do código.
- Quando você coloca `await` antes de uma expressão que retorna uma promessa, a execução da função é pausada até que a promessa seja resolvida.
- Isso permite que você escreva código assíncrono de uma maneira mais sincronizada e fácil de entender, sem a necessidade de usar callbacks ou encadeamento de promessas.

Em resumo:

- `async` indica que uma função é assíncrona e pode retornar uma promessa.
- `await` é usado para esperar que uma promessa seja resolvida dentro de uma função assíncrona.

Isso torna o código mais limpo, fácil de entender e menos propenso a erros quando se lida com operações assíncronas em JavaScript.

### Tarefa Síncrona (Sem async/await):

Quando você lava a louça de forma síncrona, seria como se você lavasse um prato, secasse, guardasse e só depois passasse para o próximo. Você só pode começar a lavar o próximo prato quando o anterior estiver completamente terminado.

### Tarefa Assíncrona (Com async/await):

Agora, vamos adicionar um pouco de async/await na mistura. Imagine que você tem uma máquina de lavar louça (similar a uma promessa). Com async/await, você pode colocar a louça na máquina, apertar o botão para começar a lavagem e continuar fazendo outras coisas enquanto a máquina faz o trabalho por você.

```
// Função para lavar a louça de forma assíncrona (com async/await)
async function lavarLouca() {
    console.log("Colocando a louça na máquina...");
    await maquinaDeLavar();
    console.log("Louça lavada e pronta para guardar!");
}

// Função simulando a operação assíncrona da máquina de lavar louça (retorna uma promessa)
function maquinaDeLavar() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 3000); // Leva 3 segundos para lavar a louça
    });
}

// Chamando a função para lavar a louça
console.log("Hora de lavar a louça!");
lavarLouca();
console.log("Continuando com outras tarefas...");

```

Neste exemplo:

- `lavarLouca()` é uma função async que usa await para esperar que a operação assíncrona da máquina de lavar louça seja concluída.
- Dentro da função, colocamos a louça na máquina, usamos await para esperar que a máquina de lavar termine e, em seguida, guardamos a louça lavada.
- `maquinaDeLavar()` é uma função que simula a operação assíncrona da máquina de lavar louça, retornando uma promessa que é resolvida após 3 segundos.
- Quando chamamos `lavarLouca()`, podemos continuar com outras tarefas enquanto a máquina de lavar trabalha nos bastidores para lavar a louça. Isso é possível graças ao async/await, que nos permite lidar com operações assíncronas de uma maneira mais fácil e sincronizada.

Desafio Prático:

Como fazemos? Será criado um conjunto de funções gerenciadas por promessas e um ambiente ASYNCHRONOUS onde podemos testá-las Defina a função soma: Deve retornar uma promessa que resolva, desde que nenhum parcela seja 0 Caso alguma parcela seja 0, rejeite a promessa indicando "Operação desnecessária". Caso a soma seja negativa, rejeite a promessa afirmando “A calculadora deve retornar apenas valores positivos” Defina a função de subtração: Deve retornar uma promessa que resolve desde que nenhum dos valores seja 0 Se o minuendo ou o subtraendo for 0, rejeite a promessa indicando "Operação inválida” Caso o valor da subtração seja menor que 0, rejeite a promessa indicando "A calculadora só pode retornar valores positivos" efina uma função de multiplicação: Deve retornar uma promessa que resolve desde que nenhum dos fatores seja negativo Se o produto for negativo, rejeite a oferta afirmando "A calculadora só pode retornar valores positivos Defina a mesma função de divisão usada nesta classe. Definir uma função assíncrona “cálculos” e realizar testes usando async/await e try/catch

```
// Função de soma
function soma(a, b) {
    return new Promise((resolve, reject) => {
        if (a === 0 || b === 0) {
            reject(new Error("Operação desnecessária"));
        } else {
            const resultado = a + b;
            if (resultado < 0) {
                reject(new Error("A calculadora deve retornar apenas valores positivos"));
            } else {
                resolve(resultado);
            }
        }
    });
}

// Função de subtração
function subtracao(a, b) {
    return new Promise((resolve, reject) => {
        if (a === 0 || b === 0) {
            reject(new Error("Operação inválida"));
        } else {
            const resultado = a - b;
            if (resultado < 0) {
                reject(new Error("A calculadora só pode retornar valores positivos"));
            } else {
                resolve(resultado);
            }
        }
    });
}

// Função de multiplicação
function multiplicacao(a, b) {
    return new Promise((resolve, reject) => {
        if (a < 0 || b < 0) {
            reject(new Error("A calculadora só pode retornar valores positivos"));
        } else {
            resolve(a * b);
        }
    });
}

// Função de divisão
function divisao(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject(new Error("Divisão por zero não é permitida"));
        } else {
            resolve(a / b);
        }
    });
}

// Função assíncrona para realizar os cálculos
async function calculos() {
    try {
        const resultadoSoma = await soma(5, 3);
        console.log("Resultado da soma:", resultadoSoma);

        const resultadoSubtracao = await subtracao(8, 3);
        console.log("Resultado da subtração:", resultadoSubtracao);

        const resultadoMultiplicacao = await multiplicacao(4, 2);
        console.log("Resultado da multiplicação:", resultadoMultiplicacao);

        const resultadoDivisao = await divisao(10, 2);
        console.log("Resultado da divisão:", resultadoDivisao);
    } catch (error) {
        console.error("Erro ao realizar os cálculos:", error.message);
    }
}

// Realizar os cálculos
calculos();
```

