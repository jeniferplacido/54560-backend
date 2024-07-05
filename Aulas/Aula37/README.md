# **Pratica Integradora**

### Habilidades Arquitetura por Camadas

A arquitetura por camadas divide a aplicação em diferentes partes (camadas), cada uma com uma responsabilidade específica. Isso ajuda a manter o código organizado e fácil de entender.

### 1. Manuseio da Arquitetura por Camadas

Imagine a aplicação como uma biblioteca. Cada camada representa uma seção diferente da biblioteca, com uma função específica:

1. **Camada de Roteamento**: Onde os pedidos de livros são recebidos.
2. **Camada de Controlador**: Onde as decisões sobre o que fazer com esses pedidos são tomadas.
3. **Camada de Serviço**: Onde a lógica de negócios é aplicada (por exemplo, verificar se o livro está disponível).
4. **Camada de Persistência**: Onde os dados sobre os livros são armazenados e recuperados.

### 2. Isolar a Responsabilidade de Roteamento

**Responsabilidade de Roteamento**: Receber os pedidos dos usuários e direcioná-los para o lugar certo.

No contexto da nossa aplicação de biblioteca:

- O roteamento é como o balcão de atendimento da biblioteca.
- Quando alguém chega e pede um livro, o atendente (roteador) verifica o pedido e direciona para a seção apropriada.

### 3. Isolar a Responsabilidade do Controlador

**Responsabilidade do Controlador**: Tomar decisões sobre o que fazer com o pedido.

Na biblioteca:

- O controlador é como o bibliotecário.
- O atendente do balcão direciona o pedido ao bibliotecário, que decide se o livro está disponível, precisa ser encomendado, etc.

### 4. Compreender e Isolar a Responsabilidade do Serviço

**Responsabilidade do Serviço**: Aplicar a lógica de negócios.

Na biblioteca:

- O serviço é como o processo de verificação de disponibilidade do livro.
- O bibliotecário pergunta ao sistema se o livro está disponível ou se precisa ser encomendado.

### 5. Entender e Isolar a Responsabilidade de Persistência

**Responsabilidade de Persistência**: Armazenar e recuperar dados.

Na biblioteca:

- A persistência é como o sistema de inventário.
- Armazena informações sobre quais livros estão disponíveis, quais foram emprestados, etc.

- **Roteamento**: Recebe os pedidos e direciona para os controladores. (Como o balcão de atendimento)
- **Controlador**: Decide o que fazer com o pedido. (Como o bibliotecário)
- **Serviço**: Aplica a lógica de negócios. (Verifica a disponibilidade dos livros)
- **Persistência**: Armazena e recupera dados. (Sistema de inventário)

Com essa estrutura, a aplicação fica organizada e cada parte tem uma responsabilidade clara, facilitando a manutenção e o entendimento do código.

------

## **Habilidades para Padrões de Projeto**

### 1. Padrão de Design Data Access Object (DAO)

**O que é o padrão DAO?**

O padrão DAO (Data Access Object) é uma maneira de separar a lógica que acessa o banco de dados do resto da aplicação. Isso ajuda a manter o código organizado e facilita a manutenção.

**Analogamente:**

Imagine que você está gerenciando uma biblioteca. O padrão DAO é como ter uma pessoa dedicada apenas a lidar com a seção de arquivos e registros da biblioteca. Quando você precisa de informações sobre um livro, você vai até essa pessoa (DAO) e pede os dados. Essa pessoa sabe como acessar e organizar os registros.

### 2. Padrão de Design Data Transfer Object (DTO)

**O que é o padrão DTO?**

O padrão DTO (Data Transfer Object) é usado para transferir dados entre diferentes partes da aplicação. É um objeto simples que só contém dados, sem lógica.

**Analogamente:**

Na biblioteca, imagine que você tem um formulário onde os dados dos livros são preenchidos. O formulário é o DTO - ele coleta todas as informações necessárias sobre um livro em um formato organizado, que pode ser facilmente enviado de uma seção da biblioteca para outra.

### 3. Padrão de Projeto do Repositório

**O que é o padrão de Repositório?**

O padrão de Repositório é uma camada de abstração que separa a lógica de acesso aos dados da lógica de negócios. Ele atua como uma coleção de objetos em memória.

**Analogamente:**

Na biblioteca, pense no repositório como uma prateleira onde todos os livros estão organizados. Quando você precisa de um livro, você vai até a prateleira e pega o livro que precisa. A prateleira (repositório) mantém tudo organizado e facilita a busca.


### 4. Padrão de Projeto Factory

**O que é o padrão Factory?**

O padrão Factory é usado para criar objetos sem expor a lógica de criação ao cliente. Ele usa um método para criar objetos em vez de usar o operador `new` diretamente.

**Analogamente:**

Na biblioteca, imagine que você tem uma máquina de impressão de livros. Você só precisa dizer à máquina qual livro quer, e ela cuida de todos os detalhes para criar uma cópia perfeita do livro para você. A máquina é a Factory - ela sabe como criar o objeto (livro) sem que você precise saber os detalhes.

### Recapitulando

- **DAO (Data Access Object)**: Organiza o acesso aos dados. (Como a pessoa que cuida dos registros da biblioteca)
- **DTO (Data Transfer Object)**: Transfere dados entre partes da aplicação. (Como um formulário preenchido com dados do livro)
- **Repositório**: Abstrai a lógica de acesso aos dados. (Como uma prateleira onde os livros estão organizados)
- **Factory**: Cria objetos sem expor a lógica de criação. (Como uma máquina de impressão de livros)

Esses padrões ajudam a manter o código organizado, modular e fácil de manter, permitindo que você se concentre em cada parte da aplicação separadamente.

------

## **Habilidades para Mailing**

### 1. Entender sobre o protocolo SMTP

**O que é o protocolo SMTP?**

SMTP (Simple Mail Transfer Protocol) é o protocolo usado para enviar e-mails pela internet. É como a linguagem que os servidores de e-mail usam para falar entre si e enviar mensagens de um lugar para outro.

**Analogamente:**

Imagine que você quer enviar uma carta pelo correio. SMTP é como o sistema postal que transporta a carta da sua casa até a casa do destinatário. Ele cuida do processo de entrega, garantindo que a mensagem chegue ao destino certo.

### 2. Estruturar e-mails básicos de uma conta do Gmail configurada

**Como enviar e-mails usando uma conta do Gmail em Node.js?**

Para enviar e-mails em um projeto Node.js, podemos usar a biblioteca `nodemailer`. Vamos configurar uma conta do Gmail para enviar e-mails.

**Passos:**

1. **Instalar o `nodemailer`**:
   Primeiro, instale o `nodemailer` no seu projeto Node.js.

   ```bash
   npm install nodemailer
   ```

2. **Configurar o `nodemailer` com uma conta do Gmail**:
   Crie um arquivo JavaScript para configurar e enviar o e-mail.

   ```javascript
   const nodemailer = require('nodemailer');
   
   // Configuração do transporte
   let transporter = nodemailer.createTransport({
       service: 'gmail',
       auth: {
           user: 'seuemail@gmail.com', // Seu e-mail
           pass: 'suasenha' // Sua senha
       }
   });
   
   // Configuração do e-mail
   let mailOptions = {
       from: 'seuemail@gmail.com',
       to: 'destinatario@example.com',
       subject: 'Assunto do E-mail',
       text: 'Corpo do e-mail'
   };
   
   // Enviar o e-mail
   transporter.sendMail(mailOptions, (error, info) => {
       if (error) {
           return console.log(error);
       }
       console.log('E-mail enviado: ' + info.response);
   });
   ```

### 3. Implementar anexos em um e-mail

**Como adicionar anexos ao e-mail?**

Às vezes, você precisa enviar arquivos junto com seu e-mail, como documentos, imagens, etc. O `nodemailer` também permite isso.

**Passos para adicionar anexos**:

1. **Atualizar a configuração do e-mail**:
   No arquivo que criamos anteriormente, vamos adicionar uma seção de anexos.

   ```javascript
   const nodemailer = require('nodemailer');
   
   // Configuração do transporte
   let transporter = nodemailer.createTransport({
       service: 'gmail',
       auth: {
           user: 'seuemail@gmail.com', // Seu e-mail
           pass: 'suasenha' // Sua senha
       }
   });
   
   // Configuração do e-mail com anexo
   let mailOptions = {
       from: 'seuemail@gmail.com',
       to: 'destinatario@example.com',
       subject: 'Assunto do E-mail',
       text: 'Corpo do e-mail',
       attachments: [
           {
               filename: 'documento.txt',
               path: './caminho/para/o/documento.txt' // Caminho para o arquivo
           }
       ]
   };
   
   // Enviar o e-mail
   transporter.sendMail(mailOptions, (error, info) => {
       if (error) {
           return console.log(error);
       }
       console.log('E-mail enviado: ' + info.response);
   });
   ```

### Resumo

- **Protocolo SMTP**: É o sistema que envia e-mails pela internet, como o serviço postal que entrega cartas.
- **Estruturar e-mails básicos**: Usando o `nodemailer`, configure uma conta do Gmail para enviar e-mails com assunto e corpo.
- **Implementar anexos em um e-mail**: Adicione arquivos ao seu e-mail usando a propriedade `attachments` do `nodemailer`.

Usando essas informações, você pode criar uma aplicação Node.js que envia e-mails, com ou sem anexos, de forma simples e eficiente.

------

## **Habilidades para ambientes**

### 1. Entender a diferença entre um ambiente de desenvolvimento e um ambiente de produção

**Ambiente de Desenvolvimento:**

- **Propósito:** É onde os desenvolvedores escrevem e testam o código. 
- **Configurações:** Geralmente mais relaxadas, com ferramentas de depuração e logs detalhados.
- **Exemplo:** Um desenvolvedor pode rodar a aplicação localmente em seu computador, ver mensagens detalhadas de erro e mudar o código frequentemente.

**Ambiente de Produção:**

- **Propósito:** É onde a aplicação está disponível para os usuários finais.
- **Configurações:** Mais restritas, com foco em desempenho, segurança e estabilidade.
- **Exemplo:** A aplicação está rodando em servidores que atendem clientes reais, com logs mínimos e configurações otimizadas.

### 2. Configurar ambientes com `.dotenv`

O arquivo `.env` é usado para armazenar variáveis de ambiente, que são configurações específicas para o ambiente onde a aplicação está rodando. Isso ajuda a manter informações sensíveis (como senhas e chaves de API) fora do código-fonte.

**Passos para configurar `.dotenv`:**

1. **Instalar o pacote `dotenv`:**

   ```bash
   npm install dotenv
   ```

2. **Criar o arquivo `.env`:**

   Crie um arquivo chamado `.env` na raiz do seu projeto e adicione variáveis de ambiente:

   ```plaintext
   # .env
   PORT=3000
   DB_HOST=localhost
   DB_USER=meuusuario
   DB_PASS=senha123
   ```

3. **Carregar as variáveis de ambiente no seu código:**

   No início do seu arquivo principal (por exemplo, `app.js`), carregue as variáveis usando `dotenv`:

   ```javascript
   require('dotenv').config();
   
   const express = require('express');
   const app = express();
   
   const port = process.env.PORT || 3000;
   
   app.get('/', (req, res) => {
       res.send('Olá, mundo!');
   });
   
   app.listen(port, () => {
       console.log(`Servidor rodando na porta ${port}`);
   });
   ```

### 3. Definir variáveis de ambiente e um arquivo de configuração geral do aplicativo

Para organizar melhor as configurações da aplicação, podemos criar um arquivo de configuração que usa as variáveis de ambiente carregadas do arquivo `.env`.

**Passos para definir variáveis de ambiente e criar um arquivo de configuração:**

1. **Criar um arquivo de configuração (`config.js`):**

   Crie um arquivo chamado `config.js` na raiz do seu projeto:

   ```javascript
   // config.js
   module.exports = {
       port: process.env.PORT || 3000,
       db: {
           host: process.env.DB_HOST,
           user: process.env.DB_USER,
           password: process.env.DB_PASS
       }
   };
   ```

2. **Usar o arquivo de configuração no seu código:**

   Importe o arquivo de configuração onde for necessário:

   ```javascript
   require('dotenv').config();
   const config = require('./config');
   
   const express = require('express');
   const app = express();
   
   const port = config.port;
   
   app.get('/', (req, res) => {
       res.send('Olá, mundo!');
   });
   
   app.listen(port, () => {
       console.log(`Servidor rodando na porta ${port}`);
   });
   ```

3. **Adicionar diferentes arquivos `.env` para diferentes ambientes:**

   Crie arquivos `.env` específicos para cada ambiente, por exemplo:

   **Arquivo `.env.development`:**

   ```plaintext
   PORT=3000
   DB_HOST=localhost
   DB_USER=meuusuario
   DB_PASS=senha123
   ```

   **Arquivo `.env.production`:**

   ```plaintext
   PORT=80
   DB_HOST=servidorproducaodb
   DB_USER=usuarioProducaodb
   DB_PASS=senhaproducao
   ```

   **Modificar o script de inicialização no `package.json`**:

   ```json
   {
       "scripts": {
           "start": "NODE_ENV=production node app.js",
           "start:dev": "NODE_ENV=development node app.js"
       }
   }
   ```

   **Carregar o arquivo de ambiente correto**:

   No início do seu `app.js`, carregue o arquivo `.env` correto com base no ambiente:

   ```javascript
   const env = process.env.NODE_ENV || 'development';
   require('dotenv').config({ path: `.env.${env}` });
   const config = require('./config');
   
   const express = require('express');
   const app = express();
   
   const port = config.port;
   
   app.get('/', (req, res) => {
       res.send('Olá, mundo!');
   });
   
   app.listen(port, () => {
       console.log(`Servidor rodando na porta ${port}`);
   });
   ```

### Resumo

- **Ambiente de Desenvolvimento vs. Produção:** Desenvolvimento é para criar e testar, produção é para uso final. Configurações e comportamento são diferentes.
- **Configurar `.dotenv`:** Usar o pacote `dotenv` para carregar variáveis de ambiente a partir de um arquivo `.env`.
- **Definir variáveis de ambiente e arquivo de configuração:** Criar um arquivo de configuração geral (`config.js`) e usar diferentes arquivos `.env` para diferentes ambientes, carregando o arquivo correto com base no ambiente.

Seguindo esses passos, você pode configurar e gerenciar ambientes de desenvolvimento e produção de maneira eficiente em sua aplicação Node.js.