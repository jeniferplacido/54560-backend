# **Autorização e Autenticação**

#### Autenticação: Identifique-se!

 A autenticação é a primeira etapa no estabelecimento da conexão entre um cliente e um servidor. É o processo pelo qual o sistema verifica a identidade de um usuário ou de uma entidade que está tentando acessar recursos ou serviços protegidos.

Quando um cliente (como um usuário, um aplicativo ou um dispositivo) tenta se conectar a um servidor, ele normalmente precisa provar sua identidade de alguma forma. Isso é feito através de diversos métodos de autenticação, como:

**Nome de usuário e senha:** Este é o método mais comum, onde o usuário fornece um nome de usuário e uma senha previamente definida. O sistema então verifica se essas credenciais correspondem às informações armazenadas.

**Autenticação de dois fatores (2FA):** Além do nome de usuário e senha, um segundo fator de autenticação é solicitado, como um código enviado por SMS, um token gerado por um aplicativo de autenticação ou até mesmo uma impressão digital.

**Biometria:** Isso inclui reconhecimento de impressão digital, reconhecimento facial, reconhecimento de íris, entre outros métodos que utilizam características físicas únicas do usuário para autenticá-lo.

**Certificados digitais:** Nesse caso, são utilizados certificados digitais que contêm informações sobre a identidade do usuário e são emitidos por autoridades de certificação confiáveis.

**Token de autenticação:** Um token é gerado e enviado ao usuário após a autenticação bem-sucedida, e ele é usado para autorizar acessos subsequentes sem a necessidade de inserir novamente nome de usuário e senha.

Cada método de autenticação tem seus próprios pontos fortes e fracos em termos de segurança, usabilidade e complexidade técnica. A escolha do método correto depende das necessidades de segurança e das preferências do sistema e dos usuários.

A autorização é o processo pelo qual o servidor decide se um usuário autenticado tem permissão para acessar determinado recurso ou funcionalidade. Mesmo após a autenticação, o sistema precisa determinar quais ações e recursos específicos cada usuário pode utilizar.

**Usuários Comuns:**

- Acesso básico aos recursos do sistema, como visualização de conteúdo público.
- Restrição de acesso a funcionalidades avançadas e dados sensíveis.

**Usuários Premium:**

- Além das permissões dos usuários comuns, acesso a recursos premium, como conteúdo exclusivo ou funcionalidades avançadas.
- Possivelmente acesso prioritário a recursos de suporte ou atendimento ao cliente.

**Administrador:**

- Acesso completo a todos os recursos e funcionalidades do sistema.
- Capacidade de gerenciar usuários, definir permissões e configurar o sistema.

O uso adequado dos códigos de status HTTP é fundamental para comunicar de forma clara e precisa o resultado de diferentes etapas no processo de autenticação e autorização. Aqui estão os códigos de status que você mencionou e seus significados:

**401 Unauthorized (Não Autorizado):** Este código de status é utilizado quando a autenticação é necessária e falha. Ou seja, o servidor requer autenticação do usuário, mas as credenciais fornecidas estão incorretas ou ausentes. Isso indica que o usuário não tem permissão para acessar o recurso por falta de autenticação.

**403 Forbidden (Proibido):** Este código de status é usado quando o usuário foi autenticado com sucesso, mas não possui permissão para acessar o recurso solicitado. Isso significa que o servidor entendeu a solicitação do usuário, mas se recusa a atendê-la devido a restrições de autorização.

É importante destacar que esses códigos de status não são intercambiáveis e devem ser usados com precisão de acordo com a situação específica. Usar incorretamente esses códigos pode levar a mal-entendidos por parte dos clientes ou usuários finais, causando confusão sobre o motivo pelo qual o acesso foi negado.

**bcrypt** 

O módulo `bcrypt` do Node.js é uma biblioteca que implementa a função de hashing criptográfico bcrypt, utilizado para armazenamento seguro de senhas e dados sensíveis em aplicações Node.js. Ele é uma interface para a biblioteca nativa em C, o que o torna eficiente e adequado para lidar com operações de hashing intensivas.

**O que é o módulo bcrypt do Node.js:**

**Interface para Bcrypt:** O módulo `bcrypt` do Node.js fornece uma interface para utilizar a função de hashing bcrypt em ambientes Node. Isso permite que os desenvolvedores aproveitem a segurança e a eficiência do bcrypt em suas aplicações.

**Implementação Segura:** A implementação do bcrypt é projetada para ser lenta e resistente a ataques de força bruta. Ele utiliza hashing com salt, o que adiciona um valor aleatório único a cada hash gerado, dificultando a pré-computação de hashes e ataques de dicionário.

**Uso em Aplicações Node.js:** O módulo `bcrypt` é comumente utilizado em aplicações Node.js para proteger senhas de usuários, bem como outros dados sensíveis que precisam ser armazenados de forma segura em bancos de dados.



#### Estratégias de Autenticação: Passport


O Passport é uma biblioteca popular em Node.js para autenticação de aplicativos web. Ele fornece uma série de estratégias de autenticação que podem ser integradas facilmente em aplicativos Express. Aqui estão algumas das estratégias de autenticação mais comuns que o Passport oferece:

**Local Strategy:**

- Esta é a estratégia mais básica do Passport.
- É utilizada para autenticar usuários com base em um nome de usuário e senha armazenados localmente.
- É ideal para sistemas de login tradicionais onde os usuários têm contas diretamente no banco de dados do aplicativo.

**JWT Strategy (JSON Web Token):**

- Utiliza tokens JWT para autenticar usuários.
- Os tokens JWT são emitidos pelo servidor após a autenticação bem-sucedida e são enviados para o cliente para autorização em solicitações subsequentes.
- É uma estratégia popular para autenticar APIs RESTful e serviços web.

**OAuth Strategies (OAuth 1.0a, OAuth 2.0):**

- O Passport oferece suporte a várias estratégias OAuth para autenticação de terceiros.
- OAuth 1.0a é usado principalmente com APIs mais antigas que ainda não foram atualizadas para OAuth 2.0.
- OAuth 2.0 é a versão mais recente e amplamente adotada do protocolo OAuth, usada para integrações com plataformas como Google, Facebook, Twitter, etc.

**OpenID Connect Strategy:**

- Esta estratégia é baseada no protocolo OpenID Connect, que é uma camada de autenticação construída sobre o protocolo OAuth 2.0.
- É usado para autenticação federada, onde um provedor de identidade externo é usado para autenticar usuários em um aplicativo.

**Strategy Compostas:**

- O Passport permite criar estratégias compostas, combinando várias estratégias de autenticação.
- Isso é útil em cenários onde diferentes tipos de autenticação são necessários, como autenticação local junto com autenticação OAuth.

Ao usar o Passport, você pode configurar essas estratégias com middleware no Express para proteger rotas específicas ou endpoints da sua aplicação. Ele simplifica bastante o processo de autenticação e autorização em aplicativos web e APIs RESTful, permitindo uma integração eficiente e segura.



##### Serializar e Desserializar

Em termos de autenticação com o Passport em Node.js, "serializar" e "desserializar" referem-se a processos essenciais para o gerenciamento de sessões de usuário. Vamos entender o que cada um desses termos significa:

**Serialização (Serialize):**

- A serialização é o processo de converter os dados do usuário em uma forma que possa ser armazenada na sessão do servidor.
- Em um contexto de autenticação, a serialização geralmente envolve pegar o ID único do usuário (geralmente o ID do banco de dados) e armazená-lo na sessão.
- No Passport, a serialização é configurada por meio da função `passport.serializeUser`, que determina quais dados do usuário serão armazenados na sessão.

**Desserialização (Deserialize):**

- A desserialização é o processo inverso da serialização. É quando os dados do usuário são recuperados da sessão do servidor.
- O objetivo da desserialização é pegar o ID do usuário armazenado na sessão e encontrar o usuário correspondente no banco de dados (ou em qualquer fonte de dados).
- No Passport, a desserialização é configurada por meio da função `passport.deserializeUser`, que recupera os dados do usuário com base no ID armazenado na sessão.



O uso do Passport em aplicações Node.js é recomendado por várias razões:

**Facilita a autenticação**: Passport simplifica o processo de autenticação em Node.js, fornecendo estratégias para diferentes métodos de autenticação, como local, OAuth, OpenID, entre outros. Isso permite que você integre facilmente a autenticação em sua aplicação, independentemente do método utilizado.

**Flexibilidade**: Com o Passport, você tem a flexibilidade de escolher e configurar as estratégias de autenticação mais adequadas para sua aplicação. Seja autenticação por nome de usuário e senha (local), autenticação social (como Facebook, Google, etc.), ou outros métodos, o Passport oferece suporte.

**Padrão da indústria**: O Passport é amplamente adotado e considerado um padrão da indústria para autenticação em aplicações Node.js. Isso significa que há uma vasta quantidade de recursos, documentação e suporte disponíveis para ajudar no desenvolvimento e solução de problemas relacionados à autenticação.

**Middleware leve**: O Passport é um middleware leve que pode ser facilmente integrado ao Express.js, um dos frameworks mais populares para aplicações web em Node.js. Ele não impõe uma estrutura rígida, permitindo que você o utilize de forma modular e adaptável às necessidades da sua aplicação.

**Segurança**: O Passport implementa boas práticas de segurança, como hashing de senhas, proteção contra ataques de força bruta, prevenção de CSRF (Cross-Site Request Forgery), entre outros recursos que ajudam a proteger a autenticação na sua aplicação.

O Passport oferece uma maneira eficiente, flexível e segura de lidar com a autenticação em aplicações Node.js, reduzindo a complexidade do desenvolvimento e garantindo um padrão de segurança elevado.