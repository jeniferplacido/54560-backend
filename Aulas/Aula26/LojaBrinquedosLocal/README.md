## Loja de Brinquedos

Este projeto é uma aplicação de uma loja de brinquedos construída com Node.js e Express.js. A aplicação permite gerenciar brinquedos e usuários, oferecendo funcionalidades para criar, ler, atualizar e deletar (CRUD) tanto brinquedos quanto usuários. A persistência dos dados é feita em arquivos JSON no sistema de arquivos local.

## Estrutura do Projeto

O projeto está organizado nas seguintes camadas:

- **Roteamento (routes)**: Define as rotas da aplicação.
- **Controladora (controllers)**: Contém a lógica para lidar com as requisições HTTP.
- **Serviço (services)**: Implementa a lógica de negócios e serve como intermediário entre as camadas de controle e persistência.
- **Persistência (model)**: Gerencia a leitura e escrita dos dados nos arquivos JSON.

### Estrutura de Diretórios

```
├── src
│   ├── controllers
│   │   ├── brinquedosController.js
│   │   └── usuariosController.js
│   ├── data
│   │   ├── brinquedos.json
│   │   └── usuarios.json
│   ├── model
│   │   ├── Brinquedo.js
│   │   └── Usuario.js
│   ├── routes
│   │   ├── brinquedoRoutes.js
│   │   └── usuarioRoutes.js
│   ├── services
│   │   ├── brinquedoService.js
│   │   └── usuarioService.js
│   └── app.js
└── README.md
```

## Pré-requisitos

- Node.js (versão 16 ou superior)
- npm (Node Package Manager)

## Instalação

1. Clone o repositório:

   ```
   git clone https://github.com/jeniferplacido/lojaBrinquedosLocal.git
   ```

2. Instale as dependências:

   ```
   npm install
   ```

## Configuração

Certifique-se de que os arquivos JSON de dados (`brinquedos.json` e `usuarios.json`) existam e estejam configurados corretamente na pasta `src/data`. Se os arquivos não existirem, crie-os com o seguinte conteúdo inicial:

```
// src/data/brinquedos.json
[]
// src/data/usuarios.json
[]
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

## Importando a Collection no Postman

1. Abra o Postman.
2. Vá em "File" > "Import".
3. Selecione a opção "Upload Files".
4. Navegue até o local onde a collection do Postman está salva e selecione o arquivo.
5. Clique em "Import".

A collection agora estará disponível no Postman e você poderá testar os endpoints configurados.

## Contribuindo

Se desejar contribuir com o projeto, siga os passos abaixo:

1. Fork o projeto.
2. Crie uma nova branch com sua feature: `git checkout -b minha-feature`.
3. Commit suas alterações: `git commit -m 'Minha nova feature'`.
4. Push para a branch: `git push origin minha-feature`.
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

