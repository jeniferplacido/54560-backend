# **Estratégia de autenticação de terceiros + JWT**

**Autenticação de terceiros**


A autenticação de terceiros, também conhecida como autenticação externa, é um método utilizado em sistemas e aplicativos para permitir que os usuários façam login utilizando credenciais de uma plataforma externa, como redes sociais, provedores de identidade ou sistemas de autenticação centralizados. Em vez de criar uma conta separada no sistema em questão, os usuários podem usar as credenciais de uma conta já existente em outro serviço para acessar o sistema ou aplicativo.

Alguns exemplos comuns de autenticação de terceiros incluem:

**Login via redes sociais:** Os usuários podem fazer login em um aplicativo usando suas contas de redes sociais, como Facebook, Google, Twitter, LinkedIn, entre outras.

**OAuth e OpenID Connect:** São protocolos de autenticação e autorização amplamente utilizados na web para permitir que os usuários acessem recursos protegidos em um site ou aplicativo usando credenciais de terceiros.

**Single Sign-On (SSO):** Um sistema que permite aos usuários acessarem múltiplos aplicativos usando apenas um conjunto de credenciais de autenticação. O SSO pode ser implementado com a ajuda de provedores de identidade externos, como Okta, Auth0, Azure Active Directory, entre outros.

**Sistemas de autenticação centralizados:** Empresas e organizações muitas vezes utilizam sistemas internos de autenticação centralizados, nos quais os usuários podem usar suas credenciais corporativas para acessar diversos sistemas e aplicativos dentro da empresa.

A utilização da autenticação de terceiros oferece várias vantagens, como conveniência para os usuários (pois não precisam criar e gerenciar várias contas), segurança (dependendo da implementação) e integração com serviços já existentes na web. No entanto, é importante implementar esses métodos de forma segura e garantir a proteção das informações dos usuários durante o processo de autenticação e autorização.

**Como fazer isso?**



Implementar a autenticação de terceiros em um sistema ou aplicativo geralmente envolve seguir alguns passos básicos:

**Escolha o provedor de identidade (IDP):**

- Decida qual provedor de identidade você deseja usar para autenticação de terceiros. Isso pode ser um provedor de redes sociais (como Google, Facebook, Twitter), um serviço especializado em autenticação (como Auth0, Okta, Azure Active Directory), ou até mesmo um sistema interno de autenticação centralizada.

**Registre sua aplicação no provedor de identidade:**

- Se você estiver usando um provedor externo, registre sua aplicação no painel de controle do provedor. Isso geralmente envolve fornecer informações básicas sobre sua aplicação, como URL, nome, descrição, e configurar permissões e credenciais de API, se necessário.

**Configure seu aplicativo:**

- No seu aplicativo, integre a biblioteca ou SDK fornecido pelo provedor de identidade para facilitar o processo de autenticação. Cada provedor terá sua própria documentação e guias para integração. Por exemplo, se estiver usando OAuth com o Google, você pode usar a biblioteca OAuth do Google para fazer a integração.

**Implemente o fluxo de autenticação:**

- No seu aplicativo, implemente o fluxo de autenticação conforme especificado pelo provedor de identidade. Isso geralmente envolve redirecionar o usuário para a página de login do provedor de identidade, permitir que o usuário faça login com suas credenciais nesse provedor e, em seguida, redirecionar de volta para o seu aplicativo com um token de autenticação.

**Gerencie tokens e sessões:**

- Após a autenticação bem-sucedida, seu aplicativo receberá um token de autenticação do provedor de identidade. Gerencie esse token de forma segura e utilize-o para autenticar o usuário em seu próprio sistema. Além disso, gerencie sessões de usuário para mantê-los autenticados durante a navegação no aplicativo.

**Trate a autorização:**

- Além da autenticação, você também pode precisar lidar com a autorização de usuários baseada em suas informações de perfil ou papéis. Por exemplo, determinar quais recursos ou funcionalidades um usuário autenticado pode acessar no seu aplicativo.

**Teste e revise:**

- Antes de lançar sua implementação de autenticação de terceiros em produção, faça testes abrangentes para garantir que tudo funcione conforme o esperado. Revise a segurança da implementação, verifique se há erros e ajuste conforme necessário.

------

**Exemplo de autenticação de terceiros: Github**

**Criar um aplicativo no GitHub:**

- Acesse https://github.com/settings/developers e faça login em sua conta do GitHub.
- Clique em "New OAuth App" para criar um novo aplicativo OAuth.
- Preencha os detalhes do aplicativo, como nome, URL de callback (callback URL) e URL inicial (homepage URL).
- A URL de callback (callback URL) é a rota em sua aplicação para onde o GitHub redirecionará os usuários após a autenticação. Exemplo: `http://localhost:8080/githubcallback`.
- Após criar o aplicativo, você receberá um Client ID e um Client Secret, que serão necessários para configurar o Passport.js em sua aplicação.

------

#### Uma visão diferente da sessão: JWT

JWT significa "JSON Web Token" e é um padrão aberto (RFC 7519) usado para transmitir informações de forma segura entre partes como objetos JSON. Ele é frequentemente utilizado para autenticação e autorização em aplicativos web e serviços.

### Estrutura de um JWT:

1. **Header (Cabeçalho):** Contém metadados sobre o tipo de token e o algoritmo de assinatura utilizado.
2. **Payload (Carga Útil):** É a parte principal do JWT, contendo as informações que queremos transmitir, como dados do usuário ou autorizações.
3. **Signature (Assinatura):** Utiliza uma chave secreta para assinar o token, garantindo sua autenticidade e integridade. Isso permite que o receptor verifique se o JWT foi realmente emitido pelo servidor e não foi alterado.

### Funcionamento do JWT para autenticação:

1. **Geração do Token:** Quando um usuário faz login com sucesso, o servidor gera um JWT contendo informações relevantes sobre o usuário, como seu ID e permissões.
2. **Envio ao Cliente:** O JWT é enviado de volta ao cliente, geralmente armazenado no localStorage ou sessionStorage do navegador.
3. **Envio em Solicitações:** Em cada solicitação subsequente ao servidor que requer autenticação, o cliente envia o JWT no cabeçalho de autorização (Authorization header).
4. **Validação no Servidor:** O servidor verifica a validade e a integridade do JWT, garantindo que ele não tenha sido adulterado e ainda esteja dentro do prazo de validade.
5. **Autorização:** Se o JWT for válido, o servidor autoriza a solicitação com base nas informações contidas no token (por exemplo, permissões do usuário).

### Vantagens do JWT:

1. **Estadoless (Sem Estado):** Como o JWT é autossuficiente, não é necessário manter sessões no servidor, tornando a arquitetura mais escalável e reduzindo a sobrecarga.
2. **Segurança:** A assinatura do JWT garante que ele não tenha sido alterado, fornecendo integridade aos dados transmitidos. A comunicação geralmente é feita via HTTPS para criptografar os dados.
3. **Flexibilidade:** Os JWTs são facilmente integrados com várias tecnologias e frameworks, tornando-os amplamente adotados em ambientes web e APIs.

Em resumo, um JWT é um mecanismo eficiente e seguro para autenticação e autorização em aplicativos web, proporcionando uma maneira escalável e flexível de transmitir informações entre o cliente e o servidor de forma segura.****

O JWT (JSON Web Token) delega responsabilidade a cada cliente de maneira significativa, especialmente no contexto de autenticação e autorização em sistemas distribuídos. Aqui estão algumas maneiras pelas quais o JWT delega responsabilidades:

1. **Autenticação Descentralizada:** Com JWT, cada cliente pode ser responsável por gerar e armazenar seu próprio token de autenticação após o login bem-sucedido. Isso descentraliza a autenticação, pois não há necessidade de manter o estado de sessão no servidor.
2. **Validação e Verificação de Tokens:** O servidor não precisa manter o estado de autenticação para cada cliente. Em vez disso, ele apenas valida e verifica a assinatura do token JWT recebido de um cliente para garantir sua autenticidade e integridade.
3. **Escalabilidade:** Delegar a responsabilidade de autenticação para o cliente torna o sistema mais escalável, pois o servidor não precisa manter uma grande quantidade de sessões de usuários em memória ou em um banco de dados.
4. **Flexibilidade na Implementação:** Cada cliente pode decidir como deseja gerar, armazenar e enviar seu token JWT. Isso oferece flexibilidade na implementação e integração com diferentes tipos de clientes, como aplicativos da web, aplicativos móveis, APIs de terceiros, etc.
5. **Redução da Sobrecarga de Servidor:** Como o estado de autenticação é mantido no token JWT e não no servidor, há uma redução significativa na sobrecarga do servidor em termos de gerenciamento de sessões e armazenamento de informações de autenticação.
6. **Compartilhamento de Informações Seguro:** O JWT permite compartilhar informações seguras entre diferentes partes, como nome de usuário, permissões, informações de perfil, etc., de maneira criptografada e assinada.

No entanto, é importante notar que, embora o JWT ofereça muitas vantagens em termos de descentralização e escalabilidade, também requer uma implementação cuidadosa para garantir a segurança, como uso adequado de algoritmos de assinatura, prazos de validade adequados, e proteção contra ataques como falsificação de token (token spoofing) e captura de token (token hijacking).





