# Prática Integradora

No desenvolvimento desta prática de integração, você revisará e conectará os seguintes conceitos:

- Mongo Avançado

- Cookies

- Autenticação e autorização

- Passport

- jwt

------

### **Habilidades para Mongo Avançado**

#### Entender o uso de uma referência por ObjectId:

**Uso de uma referência por ObjectId:**

- No Mongoose, uma referência por ObjectId é uma forma de relacionar documentos em coleções diferentes. Por exemplo, em um sistema de blog, um documento de postagem pode fazer referência ao autor da postagem usando o ObjectId do autor.

- Para definir uma referência por ObjectId em um schema do Mongoose, você usa o tipo 

  ```
  Schema.Types.ObjectId
  ```

  . Por exemplo:

  ```
  const postSchema = new mongoose.Schema({
      title: String,
      content: String,
      author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' }
  });
  ```

  Neste exemplo, `author` é uma referência ao ObjectId de um documento na coleção 'Author'.

**Definir referências em um schema de Mongoose:**

- Como mostrado no exemplo acima, você pode definir uma referência em um schema do Mongoose usando o tipo `Schema.Types.ObjectId` e especificando a coleção de referência com `ref: 'NomeDaColeção'`.

#### Entender o uso de populations;

**Uso de populations:**

- As populations no Mongoose são uma maneira de preencher automaticamente campos de referência com documentos reais das coleções de referência. Isso é útil ao recuperar documentos relacionados.

- Por exemplo, ao recuperar uma postagem e seu autor, você pode usar a função 

  ```
  populate()
  ```

   para preencher automaticamente o autor da postagem com seus dados reais.

  ```
  Postagem.findById(idDaPostagem).populate('author').exec((err, postagem) => {
      console.log(postagem.author); // Aqui, author será o documento real do autor
  });
  ```

#### Aplicar uma population em mongoose entre dois esquemas com uma referência;

**Aplicar uma population em mongoose entre dois esquemas com uma referência:**

- Como mostrado no exemplo acima, você pode aplicar uma population em Mongoose usando a função `populate()` após a consulta ao documento que contém a referência.
- Certifique-se de que a referência esteja definida corretamente no schema e que a coleção de referência seja especificada corretamente.

#### Entender a necessidade do uso de paginações;

**Necessidade do uso de paginações:**

- A paginação é necessária ao lidar com grandes conjuntos de dados para melhorar o desempenho e a usabilidade da aplicação. Ela divide os resultados em páginas menores, permitindo que o usuário navegue pelas páginas conforme necessário.
- Com a paginação, você pode carregar apenas uma parte dos dados por vez, reduzindo a carga no servidor e melhorando a experiência do usuário.

#### Aplicar paginações em consultas com mongoose-paginatev2;

1. **Aplicar paginações em consultas com mongoose-paginatev2:**

   - Para aplicar paginação em consultas usando o 

     ```
     mongoose-paginatev2
     ```

     , primeiro instale o pacote:

     ```
     npm install mongoose-paginate-v2
     ```

   - Em seguida, utilize o método 

     ```
     paginate()
     ```

      em consultas ao Mongoose para obter resultados paginados. Por exemplo:

     ```
     const options = {
         page: 1,
         limit: 10
     };
     
     Postagem.paginate({}, options, (err, result) => {
         console.log(result); // Resultado paginado
     });
     ```

   - Com o `mongoose-paginatev2`, você pode definir a página atual, o limite de itens por página e obter os resultados paginados diretamente nas consultas do Mongoose.

     ------

     ### **Habilidades para Cookies**

**Como funciona um cookie:**

- Um cookie é um pequeno arquivo de texto armazenado no navegador do usuário quando ele visita um site. Os cookies são usados para armazenar informações sobre a atividade do usuário no site, como preferências, login, carrinho de compras, etc.
- Quando o usuário visita o site novamente, o navegador envia os cookies de volta para o servidor, permitindo que o site reconheça o usuário e personalize a experiência com base nas informações armazenadas nos cookies.

**Como definir um cookie:**

- No Node.js com Express, você pode definir um cookie usando o método 

  ```
  res.cookie(nome, valor, opções)
  ```

  . Por exemplo:

  ```
  res.cookie('nomeDoCookie', 'valorDoCookie', { maxAge: 3600000, httpOnly: true });
  ```

- Neste exemplo, estamos definindo um cookie chamado 'nomeDoCookie' com o valor 'valorDoCookie' e configurando o tempo de vida para 1 hora (3600000 milissegundos) e tornando-o acessível apenas via HTTP (httpOnly).

**Como configurar o tempo de vida de um cookie:**

- No método 

  ```
  res.cookie()
  ```

  , você pode usar a opção 

  ```
  maxAge
  ```

   para definir o tempo de vida do cookie em milissegundos. Por exemplo:

  ```
  res.cookie('meuCookie', 'valor', { maxAge: 86400000 }); // Tempo de vida de 1 dia (24 horas)
  ```

- Além disso, você pode usar a opção 

  ```
  expires
  ```

   para definir uma data de expiração específica para o cookie:

  ```
  const dataExpiracao = new Date(Date.now() + 86400000); // 1 dia (24 horas)
  res.cookie('meuCookie', 'valor', { expires: dataExpiracao });
  ```

**Como limpar um cookie:**

- Para limpar um cookie, você pode definir seu tempo de vida para 0 ou usar o método 

  ```
  res.clearCookie(nomeDoCookie)
  ```

  . Por exemplo:

  ```
  res.cookie('cookieParaRemover', '', { maxAge: 0 }); // Define o tempo de vida para 0 (expira imediatamente)
  // Ou
  res.clearCookie('nomeDoCookie');
  ```

**Conexão de um cookie com JWT:**

- Os cookies podem ser usados para armazenar tokens JWT (JSON Web Tokens) que são usados para autenticação e autorização em aplicações web.

- Ao gerar um token JWT no servidor, você pode enviá-lo como um cookie para o navegador do usuário, onde ele será armazenado. O servidor pode então verificar a validade do token ao receber solicitações do navegador.

- Exemplo de definição de cookie com um token JWT:

  ```
  const token = jwt.sign({ userId: '123' }, 'seuSegredo', { expiresIn: '1h' });
  res.cookie('token', token, { maxAge: 3600000, httpOnly: true });
  ```

- No lado do servidor, você pode verificar e decodificar o token JWT enviado pelo navegador para autenticar o usuário e autorizar suas solicitações.

  ------

  ### **Habilidades para autenticação e autorização**

**Lógica de registrar um usuário:**

- A lógica de registrar um usuário envolve coletar informações do usuário, como nome, sobrenome, email e senha, e salvá-las no banco de dados.
- Geralmente, você criptografa a senha antes de salvar no banco de dados para segurança.
- Após o registro bem-sucedido, o usuário geralmente é redirecionado para a página de login.

**Conceito de autenticação e a lógica de login de um usuário:**

- Autenticação é o processo de verificar se um usuário é quem ele diz ser. O login é uma forma comum de autenticação.
- Na lógica de login, você verifica se as credenciais fornecidas pelo usuário (como email/senha) correspondem às informações armazenadas no banco de dados.
- Se as credenciais estiverem corretas, o usuário é autenticado e geralmente recebe um token de autenticação (como um JWT) para autenticação futura em solicitações subsequentes.

**Diferença entre autenticação e autorização:**

- Autenticação verifica a identidade do usuário (por exemplo, se o usuário é quem ele diz ser), enquanto autorização determina se o usuário tem permissão para acessar determinados recursos ou executar determinadas ações.
- Por exemplo, depois de se autenticar, um usuário pode ter autorização para visualizar seu perfil (autorização) e modificar suas configurações (autorização).

**Middlewares de autorização e controle de código de status 401 e 403:**

- Um middleware de autorização é uma função que verifica se o usuário tem permissão para acessar um recurso específico.
- Um middleware de autorização pode verificar o token de autenticação do usuário (JWT) para determinar seu papel (role) e se ele tem acesso permitido ao recurso solicitado.
- Um código de status 401 (Unauthorized) é usado quando o usuário não está autenticado. Um código de status 403 (Forbidden) é usado quando o usuário está autenticado, mas não tem permissão para acessar o recurso.
- Ao receber um código de status 401 ou 403, o cliente (como um navegador) pode lidar com isso redirecionando o usuário para a página de login ou exibindo uma mensagem de erro adequada.

**Gerenciamento de políticas:**

- O gerenciamento de políticas envolve definir regras e permissões para diferentes usuários com base em seus papéis (roles) ou outras características.

- Por exemplo, você pode ter políticas que permitem apenas administradores acessarem certas áreas do sistema ou executarem certas operações.

- O gerenciamento de políticas geralmente é implementado por meio de middlewares de autorização que verificam as políticas antes de permitir o acesso ou ação do usuário.

  ------

  ### **Habilidades para Passport**

**Entender o uso de uma estratégia:**

- Passport é um middleware de autenticação para Node.js que suporta várias estratégias de autenticação, como local, OAuth, JWT, entre outras.
- Uma estratégia no Passport é um método de autenticação específico, como autenticação baseada em sessão (local), autenticação OAuth com provedores de terceiros (como Google, Facebook, GitHub) ou autenticação baseada em token (JWT).
- Cada estratégia tem sua própria lógica e configurações específicas para autenticar os usuários.

**Compreender a lógica de uma estratégia local e suas configurações:**

- A estratégia local é usada para autenticar usuários com credenciais (como email/senha) armazenadas localmente no banco de dados.
- A lógica da estratégia local envolve verificar as credenciais fornecidas pelo usuário em relação às informações armazenadas no banco de dados.
- As configurações da estratégia local incluem o campo de nome de usuário (usernameField), campo de senha (passwordField), função de verificação de credenciais (verify callback), entre outros.

**Entender a lógica de uma estratégia de terceiros e suas configurações:**

- Estratégias de terceiros são usadas para autenticar usuários por meio de provedores externos, como Google, Facebook, GitHub, etc.
- A lógica da estratégia de terceiros envolve redirecionar o usuário para a página de autenticação do provedor externo, receber o token de autenticação do provedor após o login bem-sucedido e validar esse token com o provedor.
- As configurações da estratégia de terceiros incluem as credenciais do aplicativo fornecidas pelo provedor externo (clientID, clientSecret), a URL de callback para redirecionamento após o login, entre outros.

**Entender a lógica de uma estratégia de tokenização e sua configuração:**

- Estratégias de tokenização, como JWT (JSON Web Token), são usadas para autenticação baseada em token, onde um token é gerado e enviado para o cliente após o login bem-sucedido.

- A lógica da estratégia de tokenização envolve gerar um token JWT com informações do usuário (payload), assinar o token com uma chave secreta, enviar o token para o cliente e validar o token recebido em solicitações subsequentes.

- As configurações da estratégia de tokenização incluem a chave secreta (secretOrKey), opções de expiração do token (expiresIn), extrair o token de solicitações (jwtFromRequest), entre outros.

  ------

  ### **Skills para JsonWebToken**

**Entender a diferença entre uma sessão e uma tokenização:**

- Sessão: Na autenticação baseada em sessão, o servidor mantém um registro da sessão do usuário após o login. Isso geralmente é feito por meio de um identificador de sessão armazenado em cookies ou armazenamento de sessão no servidor. A cada solicitação subsequente, o servidor verifica a sessão para determinar a identidade do usuário.
- Tokenização (JWT): A tokenização é uma forma de autenticação sem estado, onde um token é gerado após o login do usuário e enviado para o cliente. Esse token contém informações sobre o usuário (payload) e é assinado pelo servidor. O cliente envia o token em cada solicitação subsequente para autenticar-se, e o servidor valida o token para determinar a identidade do usuário.

**Assinar informações em um token:**

- Ao assinar informações em um token JWT, o servidor utiliza uma chave secreta (secret) ou um par de chaves pública/privada para criar uma assinatura digital única para o token.
- A assinatura é adicionada ao token JWT como uma parte do cabeçalho ou do payload, dependendo da implementação.
- A assinatura garante a integridade do token, pois qualquer modificação nos dados do token resultaria em uma assinatura inválida.

**Salvar tokens em cookies HTTP-Only:**

- Uma prática comum ao usar tokens JWT é armazená-los em cookies HTTP-Only. Isso significa que o cookie só pode ser acessado pelo servidor e não pelo JavaScript do navegador, o que ajuda a proteger contra ataques XSS (Cross-Site Scripting).
- Ao salvar um token JWT em um cookie HTTP-Only, o cliente enviará automaticamente o token em cada solicitação HTTP para o servidor, permitindo a autenticação contínua.

**Usar Passport-jwt:**

- O Passport-jwt é uma estratégia do Passport.js para autenticação baseada em token JWT.
- Ele permite que você defina e configure uma estratégia de autenticação JWT em seu aplicativo Node.js, incluindo a verificação e validação de tokens JWT em solicitações HTTP.
- Com o Passport-jwt, você pode definir opções como extrair o token de diferentes locais (cabeçalho, corpo da requisição, query string), especificar a chave secreta, configurar a lógica de verificação do token e muito mais.

------

**Desenvolvimento desta prática integradora**

1. **Reestruturação de usuários para gerenciamento de referências:**

- No contexto de gerenciamento de referências em um sistema de usuários, é comum utilizar referências ObjectId para relacionar entidades em um banco de dados NoSQL como o MongoDB.
- Você pode reestruturar seu modelo de usuário para incluir referências a outras entidades, como carrinhos de compras, produtos favoritos, etc.
- Por exemplo, seu modelo de usuário poderia ter campos como `cart` e `favoriteProducts`, ambos referenciando objetos em outras coleções.

2. **Configuração de visões e estratégias:**

- Para configurar visões (views) em seu aplicativo, você pode usar um mecanismo de templates como Handlebars.
- Crie arquivos de visão para cada página que deseja renderizar, como página inicial, perfil do usuário, página de login, etc.
- Utilize estratégias do Passport.js para autenticar usuários, como LocalStrategy para login com email/senha, JWTStrategy para autenticação com tokens JWT, GitHubStrategy para login via GitHub, etc.
- Configure as rotas do Express para cada estratégia de autenticação, definindo a lógica de autenticação em cada rota correspondente.

3. **Configuração do modelo de sessão stateful / stateless:**

- Stateful: Neste modelo, as informações de sessão do usuário são armazenadas no servidor. Isso pode ser alcançado utilizando o middleware de sessão do Express, como o express-session. Você pode configurar opções como armazenamento em memória, armazenamento em banco de dados ou armazenamento em cache para as sessões.
- Stateless: Neste modelo, as informações de autenticação são baseadas em tokens JWT, eliminando a necessidade de armazenamento de sessão no servidor. Você pode configurar o Passport.js com a estratégia JWTStrategy para autenticar usuários com tokens JWT. Os tokens são enviados pelo cliente em cada requisição e o servidor os valida para autenticação.

**Prática Integradora**

**Objetivo**

Continue no projeto em que você trabalhou para seu comércio eletrônico e configure os seguintes elementos:

**Aspectos a incluir**

- Crie um modelo User que terá os campos:

  - first_name:String,
  - last_name:String,
  - email: String (exclusivo)
  - age:Número,
  - password: String(Hash)
  - cart:Id com referência aos Carts
  - role:String(default:’user’)

- Desenvolva estratégias do Passport para trabalhar com esse modelo de usuário

- Modifique o sistema de login do usuário para poder trabalhar com sessão ou com jwt (a sua escolha).

- (Somente para jwt) desenvolva uma estratégia "current" para extrair o cookie que contém o token para obter o usuário associado ao referido token, no caso de ter o token, retorne o usuário associado ao token, caso contrário, retorne um erro de passport, use um extrator de cookies.

- Adicione ao router /api/sessions/ a rota /current, que usará o modelo de sessão que você está usando, para retornar o usuário atual em uma resposta.