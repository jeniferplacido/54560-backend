# CoderEats

Este é um projeto de um sistema de pedidos de uma lanchonete, desenvolvido utilizando Node.js, Express, e MongoDB no backend, e HTML e JavaScript no frontend. O frontend e o backend estão separados em pastas diferentes e divididos em quatro etapas principais.

## Funcionalidades

- Cadastro de usuários
- Cadastro de comércios
- Realização de pedidos
- Visualização de pedidos

## Tecnologias Utilizadas

### Backend

- Node.js
- Express
- Mongoose (para interagir com o MongoDB)
- CORS (para permitir o acesso do frontend ao backend)
- Body-parser (para parsing das requisições)

### Frontend

- HTML
- JavaScript

## Estrutura do Projeto

### Etapa 1: Roteamento e Controladores

- `src/`
  - `controllers/`
    - `usuarioController.js` - Lógica para manipulação de usuários
    - `comercioController.js` - Lógica para manipulação de comércios
    - `pedidoController.js` - Lógica para manipulação de pedidos
  - `routes/`
    - `usuarioRouter.js` - Rotas para usuários
    - `comercioRouter.js` - Rotas para comércios
    - `pedidoRouter.js` - Rotas para pedidos
  - `app.js` - Configuração do servidor Express

### Etapa 2: DAO MongoDB e Conexão

- `src/`
  - `config/`
    - `db.js` - Configuração da conexão com o banco de dados
  - `models/`
    - `Usuario.js` - Modelo Mongoose para usuários
    - `Comercio.js` - Modelo Mongoose para comércios
    - `Pedido.js` - Modelo Mongoose para pedidos
  - `daos/`
    - `usuarioDAO.js` - DAO para usuários
    - `comercioDAO.js` - DAO para comércios
    - `pedidoDAO.js` - DAO para pedidos

### Etapa 3: Negócio e Serviço

- `src/`
  - `services/`
    - `usuarioService.js` - Lógica de negócios para usuários
    - `comercioService.js` - Lógica de negócios para comércios
    - `pedidoService.js` - Lógica de negócios para pedidos

### Etapa 4: Front-End

- `FrontEnd/`
  - `index.html` - Página principal do frontend
  - `index.js` - Lógica JavaScript para interagir com o backend

## Instalação e Execução

### Backend

1. Clone o repositório do backend:
    ```bash
    git clone https://github.com/jeniferplacido/54560-backend
    cd Aula29
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Configure o MongoDB no arquivo `src/config/db.js`.

4. Inicie o servidor:
    ```bash
    npm start
    ```

### Frontend

1. Instale a extensão LiveServer

2. Rode o arquivo index.html com LiveServer

## Uso

- Acesse a página principal no seu navegador.
- Realize operações como cadastro de usuários, comércios e pedidos.

## Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/seu-nome`).
3. Commit suas mudanças (`git commit -m 'Sua contribuição'`).
4. Push para a branch (`git push origin feature/seu-nome`).
5. Crie um novo Pull Request.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
