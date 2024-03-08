1. **O que é um servidor web?**

   - Um servidor web é como um garçom em um restaurante. Ele serve páginas da web aos clientes (navegadores da web) quando eles fazem pedidos. O servidor web cuida de entregar o conteúdo (como páginas da web, imagens e arquivos) para quem está pedindo.

   **Por que os servidores web são importantes?**

   - Imagine que você tem um site ou um aplicativo da web. Sem um servidor web, seu site ou aplicativo não estaria disponível na internet para as pessoas verem. Os servidores web garantem que seu conteúdo esteja sempre disponível para qualquer pessoa com acesso à internet.

   **Node.js como plataforma para servidores web:**

   - Node.js é como uma ferramenta para fazer servidores web. É como usar um conjunto especial de legos para construir um servidor web. Node.js é popular porque é rápido e eficiente em lidar com muitas pessoas acessando um site ao mesmo tempo.

   **Principais recursos de um servidor web em Node.js:**

   - Node.js permite que você crie um servidor web com facilidade. Você pode pensar nele como um chef de cozinha que segue uma receita para preparar uma comida deliciosa. No caso do Node.js, seguimos um "receita" de código para criar e gerenciar um servidor web.

   **Escalabilidade e concorrência:**

   - Node.js é como um mágico que pode atender a muitas mesas ao mesmo tempo em um restaurante movimentado. Ele é ótimo em lidar com muitas pessoas (ou clientes) acessando um site ao mesmo tempo, o que chamamos de "escalabilidade".

   **Exemplos práticos:**

   - Podemos usar Node.js para criar um servidor web simples que mostra uma página de boas-vindas. É como criar uma placa de "bem-vindo" para o seu site.

   **Casos de uso:**

   - As pessoas usam servidores web em Node.js para muitas coisas, como criar blogs, lojas online, redes sociais e muito mais. Ele é flexível e pode ser usado para muitos tipos diferentes de sites e aplicativos da web.

1. **O que é HTTP?**

   - HTTP é como um idioma que permite que os computadores se comuniquem entre si na internet. Quando você digita um endereço da web em seu navegador e pressiona Enter, seu navegador envia uma solicitação HTTP para um servidor web, pedindo para ver uma página da web.

2. **Como funciona?**

   - Imagine que você está em um restaurante e faz um pedido ao garçom. O pedido é como uma solicitação HTTP, onde você solicita algo específico (como uma página da web). O garçom leva o seu pedido para a cozinha e traz de volta o que você pediu. Isso é como a resposta HTTP, onde o servidor web envia de volta a página da web solicitada.

3. **Componentes do HTTP:**

   - Existem dois principais componentes do HTTP: o cliente (seu navegador) e o servidor web. O cliente envia solicitações HTTP para o servidor, e o servidor responde com os dados solicitados (como páginas da web, imagens, etc.).

4. **Métodos HTTP:**

   - Existem diferentes tipos de solicitações HTTP, chamadas de métodos. Alguns dos métodos comuns são:
     - GET: Solicita dados do servidor.
     - POST: Envio de dados para o servidor (por exemplo, enviar um formulário).
     - PUT: Atualização de dados no servidor.
     - DELETE: Exclusão de dados do servidor.

5. **Respostas HTTP:**

   - Assim como existem diferentes tipos de solicitações, existem diferentes tipos de respostas HTTP. O servidor envia uma resposta para cada solicitação feita pelo cliente. Por exemplo, se o servidor encontrar a página solicitada, ele retornará um código de status 200 OK. Se a página não puder ser encontrada, o servidor retornará um código de status 404 Not Found.

   Nodemon é uma ferramenta que monitora alterações nos arquivos de um projeto Node.js e reinicia automaticamente o servidor sempre que detecta uma modificação. Isso é extremamente útil durante o desenvolvimento de aplicativos Node.js, pois elimina a necessidade de parar e reiniciar manualmente o servidor toda vez que você faz uma alteração no código.

   Aqui está um resumo de como o Nodemon funciona e para que serve:

   1. **Monitoramento de Alterações:** O Nodemon observa os arquivos do seu projeto Node.js em busca de alterações. Ele verifica constantemente se há modificações nos arquivos do código-fonte, como arquivos JavaScript.
   2. **Reinicialização Automática:** Se o Nodemon detectar alguma alteração, ele automaticamente reinicia o servidor Node.js. Isso garante que as mudanças feitas no código sejam aplicadas imediatamente, sem a necessidade de interação manual.
   3. **Aumento da Produtividade:** Com o Nodemon, os desenvolvedores podem se concentrar na escrita do código, pois não precisam se preocupar em parar e reiniciar o servidor a cada pequena alteração feita durante o desenvolvimento.
   4. **Facilidade de Uso:** O Nodemon é fácil de instalar e usar. Ele pode ser instalado globalmente ou localmente em um projeto Node.js, e pode ser executado simplesmente digitando `nodemon` seguido do nome do arquivo principal do seu servidor.

   Em resumo, o Nodemon é uma ferramenta essencial para o desenvolvimento de aplicativos Node.js, ajudando os desenvolvedores a economizar tempo e aumentar sua produtividade ao automatizar o processo de reinicialização do servidor em resposta a alterações no código-fonte.

### Express

Express é um framework para Node.js que simplifica o desenvolvimento de aplicativos da web. Ele fornece uma camada de abstração sobre o módulo http nativo do Node.js, o que torna mais fácil criar servidores web e lidar com rotas, solicitações e respostas HTTP.

Aqui estão algumas características importantes do Express:

1. **Roteamento simplificado:** Express permite definir rotas para diferentes URLs e métodos HTTP de forma mais fácil e organizada. Isso simplifica o gerenciamento de solicitações HTTP e facilita a organização do código.
2. **Middlewares:** Express usa o conceito de middlewares, que são funções que podem ser executadas antes, durante ou depois do processamento de uma solicitação HTTP. Isso permite adicionar funcionalidades extras ao seu aplicativo, como autenticação, logging, compressão, etc.
3. **Gestão de sessão:** Express inclui suporte para gerenciamento de sessão, o que facilita a criação de aplicativos que requerem autenticação do usuário e armazenamento de dados de sessão.
4. **Templates:** Embora o Express não inclua um mecanismo de templates por padrão, é comum utilizá-lo junto com engines de templates como o EJS, Handlebars, Pug (anteriormente conhecido como Jade), etc., para renderização de páginas HTML de forma dinâmica.
5. **Suporte a APIs RESTful:** Express é muito utilizado para criar APIs RESTful, onde as rotas e métodos HTTP são usados para criar, ler, atualizar e excluir recursos em um servidor.

Um "endpoint" em termos simples é uma URL específica em um servidor que é acessada por um cliente para obter ou enviar dados. Cada endpoint é associado a uma determinada funcionalidade ou recurso em um servidor

Atividade com outros GETS

```
// Importa o módulo express
const express = require('express');
```

- Nesta linha, estamos importando o módulo `express`, que é uma biblioteca para Node.js que facilita a criação de servidores web.

```
// Cria uma instância do aplicativo Express
const app = express();
```

- Aqui, estamos criando uma instância do aplicativo Express. Essa instância será o nosso servidor web.

```
// Define a porta em que o servidor irá escutar
const PORT = 8080;
```

- Esta linha define a porta em que o nosso servidor irá escutar por solicitações. No caso, estamos usando a porta 8080.

```
// Endpoint para a rota '/bemvindo'
app.get('/bemvindo', (req, res) => {
  // Retorna uma string HTML com letras azuis
  res.send('<p style="color: blue;">welcome</p>');
});
```

- Aqui estamos definindo um "endpoint" para a rota '/bemvindo'. Isso significa que quando alguém acessar essa rota no navegador, o servidor irá executar a função que está dentro dos parênteses.
- Dentro da função, estamos usando `res.send()` para enviar uma resposta de volta ao cliente. No caso, estamos enviando uma string HTML que contém um parágrafo (`<p>`) com a cor do texto definida como azul.

```
// Endpoint para a rota '/usuario'
app.get('/usuario', (req, res) => {
  // Retorna um objeto JSON com os dados de um usuário falso
  const usuario = {
    nome: 'João',
    sobrenome: 'Silva',
    idade: 30,
    email: 'joao.silva@example.com'
  };
  res.json(usuario);
});
```

- Aqui estamos definindo outro "endpoint" para a rota '/usuario'. Quando alguém acessar essa rota, o servidor irá executar a função que está dentro dos parênteses.
- Dentro da função, estamos usando `res.json()` para enviar uma resposta de volta ao cliente. No caso, estamos enviando um objeto JSON que contém os dados de um usuário falso (nome, sobrenome, idade e email).

```
// Inicia o servidor e o faz escutar na porta definida
app.listen(PORT, () => {
  console.log(`Servidor Express está rodando na porta ${PORT}`);
});
```

- Por fim, estamos iniciando o servidor e fazendo com que ele escute por solicitações na porta que definimos anteriormente (8080). Quando o servidor estiver pronto para aceitar solicitações, ele irá executar a função que está dentro dos parênteses.
- Dentro dessa função, estamos usando `console.log()` para imprimir uma mensagem no console, indicando que o servidor está rodando e em qual porta ele está escutando.



**Objeto request**


O objeto `request` (ou `req` abreviado) é um objeto que contém informações sobre a solicitação HTTP que foi feita ao servidor. Ele é passado como o primeiro argumento para os manipuladores de rota em aplicativos Express. O objeto `request` contém uma variedade de propriedades e métodos que fornecem acesso aos detalhes da solicitação HTTP, como cabeçalhos, corpo, parâmetros de consulta, URL, métodos HTTP, entre outros.

Aqui estão algumas informações que o objeto `request` fornece e para que são usadas:

1. **URL da solicitação:** O objeto `request` fornece acesso à URL que foi solicitada pelo cliente. Isso inclui a rota específica, parâmetros de consulta (se houver) e partes da URL.
2. **Método HTTP:** O método HTTP usado na solicitação (por exemplo, GET, POST, PUT, DELETE) pode ser acessado através do objeto `request`. Isso permite que o servidor saiba qual ação deve ser realizada em resposta à solicitação.
3. **Cabeçalhos da solicitação:** O objeto `request` contém todos os cabeçalhos HTTP enviados com a solicitação. Isso inclui cabeçalhos como `Content-Type`, `User-Agent`, `Authorization`, entre outros.
4. **Corpo da solicitação:** Para solicitações que têm um corpo (como solicitações POST ou PUT), o objeto `request` permite acessar os dados enviados no corpo da solicitação. Isso é útil para processar formulários, enviar dados de formulário ou JSON para o servidor.
5. **Parâmetros de consulta:** Quando uma solicitação GET inclui parâmetros de consulta na URL, o objeto `request` permite acessar esses parâmetros. Isso é útil para receber informações específicas do cliente, como filtros de pesquisa, páginas de paginação, etc.

Em resumo, o objeto `request` é uma parte essencial de qualquer servidor HTTP, pois fornece acesso aos detalhes da solicitação HTTP, permitindo que o servidor processe a solicitação de forma apropriada e envie uma resposta adequada de volta ao cliente.

#### req.params

**`req.params`** é uma propriedade do objeto `request` em aplicativos Express que contém parâmetros de rota capturados na URL. Esses parâmetros de rota são parte da própria URL e são especificados na definição da rota com a sintaxe `:nomeDoParametro`.

Por exemplo, considere a seguinte rota:

```
app.get('/usuarios/:id', (req, res) => {
  const userId = req.params.id;
  // Faça algo com o userId...
  res.send(`Detalhes do usuário com ID ${userId}`);
});
```

Neste exemplo, `:id` é um parâmetro de rota na rota `/usuarios/:id`. Quando uma solicitação GET é feita para uma URL como `/usuarios/123`, o Express captura o valor `123` do URL e o associa ao parâmetro `id`. Esse valor pode ser acessado através de `req.params.id`.

Portanto, `req.params` é um objeto onde as chaves são os nomes dos parâmetros de rota e os valores são os valores fornecidos na URL para esses parâmetros. É útil para acessar dados específicos com base nos parâmetros fornecidos na URL.

#### req.query

A propriedade `req.query` é uma propriedade do objeto `request` em aplicativos Express que contém os parâmetros de consulta da URL. Esses parâmetros de consulta são os dados que vêm após o ponto de interrogação (`?`) na URL e são usados principalmente em solicitações GET para enviar dados para o servidor.

É importante configurar o servidor para lidar com dados complexos da URL codificados como `application/x-www-form-urlencoded`. Isso é especialmente útil quando os dados enviados através de solicitações GET ou POST contêm caracteres especiais, espaços, ou outros caracteres que precisam ser codificados de acordo com as regras do URL.

Para configurar o servidor Express para lidar com dados codificados como `application/x-www-form-urlencoded`, você pode usar o middleware `express.urlencoded()`. Este middleware analisa os dados da URL codificados no formato `application/x-www-form-urlencoded` e os torna acessíveis no objeto `req.body` ou `req.params`.

```
// Middleware para analisar dados codificados como application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
```

**Qual é a diferença com params?**

A principal diferença entre `req.params` e `req.query` está na forma como eles capturam e acessam dados na URL em um servidor Express:

 **req.params**:
   - `req.params` é usado para acessar parâmetros de rota dinâmicos.
   - Esses parâmetros são partes variáveis da URL que são capturadas durante a definição da rota.
   - Eles são especificados na definição da rota usando um padrão, geralmente começando com `:` (dois pontos), como por exemplo: `app.get('/usuarios/:id')`.
   - Esses parâmetros são acessados pelo nome especificado na definição da rota, por exemplo: `req.params.id`.
 **req.query**:
   - `req.query` é usado para acessar os parâmetros de consulta na URL.
   - Estes são os dados que vêm após o ponto de interrogação (`?`) na URL.
   - Eles geralmente são usados para enviar dados para o servidor em solicitações GET.
   - Os parâmetros de consulta são acessados pelo nome do parâmetro na URL, por exemplo: `req.query.nome`.

Resumindo, `req.params` é usado para acessar partes variáveis da própria rota, enquanto `req.query` é usado para acessar os parâmetros de consulta específicos passados na URL. Essas diferenças fundamentais são importantes ao projetar rotas e manipular dados em um servidor Express.