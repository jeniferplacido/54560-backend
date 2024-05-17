# Loja de Brinquedos

## Descrição do Projeto

Este projeto é uma aplicação de uma loja de brinquedos construída com Node.js, Express.js e MongoDB Atlas. A aplicação permite gerenciar brinquedos e usuários, oferecendo funcionalidades para criar, ler, atualizar e deletar (CRUD) tanto brinquedos quanto usuários. A persistência dos dados é feita no MongoDB Atlas, um serviço de banco de dados como serviço (DBaaS) baseado na nuvem.

## Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose (ODM para MongoDB)
- Postman (para testar os endpoints da API)

## Estrutura do Projeto

O projeto está organizado nas seguintes camadas:

- **Roteamento (routes)**: Define as rotas da aplicação.
- **Controladora (controllers)**: Contém a lógica para lidar com as requisições HTTP.
- **Serviço (services)**: Implementa a lógica de negócios e serve como intermediário entre as camadas de controle e persistência.
- **Persistência (models)**: Define os modelos de dados e a comunicação com o banco de dados MongoDB usando Mongoose.

### Estrutura de Diretórios

```
plaintextCopiar código.
├── src
│   ├── controllers
│   │   ├── brinquedosController.js
│   │   └── usuariosController.js
│   ├── models
│   │   ├── Brinquedo.js
│   │   └── Usuario.js
│   ├── routes
│   │   ├── brinquedoRoutes.js
│   │   └── usuarioRoutes.js
│   ├── services
│   │   ├── brinquedoService.js
│   │   └── usuarioService.js
│   ├── config
│   │   ├── config.js
│   │   └── database.js
│   └── app.js
├── .env (arquivo de configuração com as variáveis de ambiente)
└── README.md
```

## Pré-requisitos

- Node.js (versão 18 ou superior)
- npm (Node Package Manager)
- Conta no MongoDB Atlas (https://www.mongodb.com/cloud/atlas)

## Instalação

1. Clone o repositório:

   ```
   git clone https://github.com/jeniferplacido/lojaDeBrinquedosAtlas.git
   ```

2. Instale as dependências:

   ```
   npm install
   ```

## Configuração

1. Renomeie o arquivo `.env.example` para `.env`.

2. Preencha as variáveis de ambiente no arquivo `.env` com as credenciais do seu MongoDB Atlas:

   ```
   MONGO_URL=URL_de_conexão_com_o_MongoDB_Atlas
   PORT=8080
   ```

3. Certifique-se de que o arquivo `.env` não está sendo versionado (adicionado ao `.gitignore`).

4. Configure as informações de conexão com o MongoDB no arquivo `config/database.js`:

   ```
   // config/database.js
   const mongoose = require('mongoose');
   const dotenv = require('dotenv');
   dotenv.config();
   
   const connectDB = async () => {
       try {
           await mongoose.connect(process.env.MONGO_URL, {
           });
           console.log('Conectado com sucesso ao MongoDB');
       } catch (error) {
           console.error('Erro ao conectar com o MongoDB:', error.message);
           process.exit(1);
       }
   };
   
   module.exports = connectDB;
   ```

5. Configure o dotenv no arquivo `config/config.js`:

   ```
   // config/config.js
   const dotenv = require('dotenv');
   dotenv.config();
   
   module.exports = {
       PORT: process.env.PORT || 3000,
   };
   ```

## Executando a Aplicação

Para iniciar o servidor:

```
npm start
```

O servidor estará rodando em `http://localhost:8080`.

## Endpoints

### Brinquedos

- `GET /brinquedos`: Retorna todos os brinquedos.
- `GET /brinquedos/:id`: Retorna um brinquedo pelo ID.
- `POST /brinquedos`: Cria um novo brinquedo.
- `PUT /brinquedos/:id`: Atualiza um brinquedo pelo ID.
- `DELETE /brinquedos/:id`: Deleta um brinquedo pelo ID.

### Usuários

- `GET /usuarios`: Retorna todos os usuários.
- `GET /usuarios/:id`: Retorna um usuário pelo ID.
- `POST /usuarios`: Cria um novo usuário.
- `PUT /usuarios/:id`: Atualiza um usuário pelo ID.
- `DELETE /usuarios/:id`: Deleta um usuário pelo ID.

## Importante

Certifique-se de que a variável de ambiente `MONGO_URL` está configurada corretamente no arquivo `.env` para que a conexão com o MongoDB Atlas funcione corretamente.

## Contribuindo

Se desejar contribuir com o projeto, siga os passos abaixo:

1. Fork o projeto.
2. Crie uma nova branch com sua feature: `git checkout -b minha-feature`.
3. Commit suas alterações: `git commit -m 'Minha nova feature'`.
4. Push para a branch: `git push origin minha-feature`.
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

