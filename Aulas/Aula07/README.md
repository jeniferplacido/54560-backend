**O que são códigos de status HTTP?** Imagine que você está navegando na internet como um explorador corajoso. Sempre que você pede algo a um site (como clicar em um link ou enviar um formulário), o site responde com uma mensagem. Os códigos de status HTTP são como pequenas notas que o site envia de volta para você, dizendo como as coisas estão indo.

Pensem neles como mensagens que sites enviam para nós, como se estivéssemos conversando. Eles nos dizem como está indo nossa interação com o site.

**Os Códigos de Status mais Comuns:**

1. **100 - Continue!**
   - Esse código é como um "espere um momento" educado. O site está dizendo que recebeu a solicitação, mas ainda não terminou de processá-la. É como quando alguém diz "espere um pouco, estou ocupado!".
2. **200 - Tudo Ok!**
   - Ah, esse é o melhor! É como se o site estivesse nos dando um grande abraço virtual. Ele está dizendo "Tudo certo, amigo! Aqui está o que você pediu!".
3. **300 - Múltiplas Escolhas!**
   - Esse é como quando você pede um sorvete e a pessoa da sorveteria diz "Temos muitos sabores! Qual você quer?". O site está dizendo que há várias opções para onde ir a partir dali.
4. **404 - Página Não Encontrada!**
   - Ops! Esse é como encontrar um buraco na estrada enquanto dirigimos. O site está dizendo que não pode encontrar o que procuramos. Talvez esteja em outro lugar ou tenha desaparecido.
5. **500 - Erro Interno do Servidor!**
   - Esse é como quando o cozinheiro da lanchonete deixa cair uma bandeja cheia de hambúrgueres. O site está dizendo que algo deu errado lá dentro e eles estão correndo para consertar.

------

Hoje vamos mergulhar no mundo das APIs REST, que são uma parte essencial do desenvolvimento de aplicações backend. Mas primeiro, vamos entender o que é uma API e para que ela serve!

**O que é uma API?** API significa Interface de Programação de Aplicativos. É essencialmente um conjunto de regras e definições que permite que diferentes softwares se comuniquem entre si. É como uma ponte que conecta diferentes partes de um sistema de software.

**Para que serve uma API?** Uma API permite que diferentes sistemas, aplicativos e serviços compartilhem informações e funcionalidades de forma controlada e segura. Ela define como as diferentes partes de um sistema podem interagir umas com as outras, permitindo que desenvolvedores criem novos recursos e integrações.

**O que é uma API REST?** Uma API REST (Representational State Transfer) é um tipo de API que segue um conjunto específico de princípios de design. Ela utiliza o protocolo HTTP para comunicação e é baseada em recursos, endpoints, métodos HTTP e representação de recursos.

**Principais Conceitos:**

1. **Recursos:** Entidades ou objetos manipulados pela API, como usuários, produtos, postagens em um blog, etc.
2. **Endpoints:** URLs específicos que representam recursos na API.
3. **Métodos HTTP:** Ações que podem ser realizadas nos recursos, como GET (recuperar dados), POST (criar dados), PUT (atualizar dados) e DELETE (excluir dados).
4. **Representação dos Recursos:** Formato em que os recursos são representados, como JSON ou XML.

Definitivamente! JSON (JavaScript Object Notation) é amplamente utilizado devido à sua simplicidade e legibilidade. Ele se assemelha à sintaxe de objetos JavaScript, tornando-o muito fácil de entender e manipular.

Um modelo básico de uma API REST geralmente envolve a definição de recursos, endpoints e métodos HTTP para realizar operações CRUD (Create, Read, Update, Delete) em dados. Aqui está um exemplo simplificado de um modelo de API REST usando JSON como formato de dados:

1. **Cliente (Client):**
   - O cliente é qualquer aplicativo ou dispositivo que deseja interagir com a API REST para obter ou manipular dados. Pode ser um aplicativo da web, aplicativo móvel, sistema embarcado, entre outros.
2. **API REST:**
   - A API REST é o intermediário entre o cliente e o servidor. Ela fornece uma interface padronizada e acessível para que o cliente possa acessar os recursos e serviços fornecidos pelo servidor. A API REST é responsável por receber solicitações do cliente, processá-las e encaminhá-las ao servidor, bem como receber as respostas do servidor e enviá-las de volta ao cliente.
3. **Servidor (Server):**
   - O servidor é onde estão localizados os recursos e serviços que o cliente deseja acessar. Ele contém a lógica de negócios, o acesso aos dados e outras funcionalidades necessárias para atender às solicitações do cliente. O servidor processa as solicitações recebidas da API REST, executa as operações necessárias nos dados e envia as respostas de volta à API REST para serem repassadas ao cliente.

**Fluxo de Interação:**

1. O cliente envia uma solicitação HTTP para a API REST, especificando o método HTTP apropriado (GET, POST, PUT, DELETE), o endpoint desejado e, opcionalmente, os dados da solicitação (por exemplo, corpo JSON em uma solicitação POST).
2. A API REST recebe a solicitação do cliente e a roteia para o endpoint correspondente. Ela valida a solicitação e seus parâmetros conforme necessário.
3. A API REST encaminha a solicitação para o servidor, passando as informações necessárias, como o método HTTP, o endpoint e os dados da solicitação.
4. O servidor recebe a solicitação da API REST e a processa de acordo com a lógica de negócios e as operações necessárias nos dados.
5. O servidor envia uma resposta à API REST, contendo os dados solicitados (no caso de uma operação de leitura) ou uma confirmação da operação realizada (no caso de operações de escrita, atualização ou exclusão).
6. A API REST recebe a resposta do servidor e a envia de volta ao cliente como a resposta final à sua solicitação original.

Suponha que estamos criando uma API para gerenciar uma lista de usuários. Vamos definir os recursos, endpoints e métodos HTTP:

1. **Recursos:**
   - Usuário: Cada usuário possui um ID, nome, e-mail e idade.
2. **Endpoints:**
   - `/users`: Endpoint principal para acessar todos os usuários ou criar um novo usuário.
   - `/users/{id}`: Endpoint para acessar um usuário específico por seu ID.
3. **Métodos HTTP:**
   - GET: Para recuperar dados.
   - POST: Para criar novos dados.
   - PUT: Para atualizar dados existentes.
   - DELETE: Para excluir dados.


Uma API REST (Representational State Transfer) segue um conjunto de princípios de design que definem suas características fundamentais. Aqui estão as principais características que uma API REST deve ter:

1. **Arquitetura Cliente-Servidor:** A API REST segue o princípio da separação entre cliente e servidor. Isso significa que o cliente e o servidor são entidades independentes, cada um com suas responsabilidades definidas. O cliente é responsável pela interface do usuário e pela interação com o usuário final, enquanto o servidor é responsável pelo armazenamento e processamento dos dados, bem como pela lógica de negócios.
2. **Sem Estado (Stateless):** Uma API REST é sem estado, o que significa que cada solicitação do cliente para o servidor deve conter todas as informações necessárias para que o servidor entenda e processe a solicitação. O servidor não mantém nenhum estado das solicitações anteriores do cliente. Isso torna a API mais escalável e fácil de manter, pois não há dependência de sessões ou estados anteriores.
3. **Cacheável:** As respostas da API devem ser explicitamente marcadas como cacheáveis ou não-cacheáveis. Isso permite que os clientes armazenem em cache as respostas e reutilizem esses dados em solicitações futuras, reduzindo assim a quantidade de tráfego na rede e melhorando o desempenho geral do sistema.
4. **Interface Uniforme:** A interface da API deve ser uniforme e consistente, seguindo padrões estabelecidos. Isso inclui o uso de métodos HTTP padrão (GET, POST, PUT, DELETE) para operações CRUD (Create, Read, Update, Delete) e a utilização de URIs (Uniform Resource Identifiers) para identificar recursos de forma única.
5. **Sistema de Camadas (Layered System):** Uma API REST pode ser composta por várias camadas, onde cada camada é responsável por uma parte específica da funcionalidade. Isso permite uma maior escalabilidade e flexibilidade, pois as camadas podem ser adicionadas, removidas ou substituídas independentemente umas das outras.
6. **Manipulação de Recursos:** Os recursos da API devem ser manipulados através de operações bem definidas, como GET para recuperar dados, POST para criar novos recursos, PUT para atualizar recursos existentes e DELETE para excluir recursos. Cada recurso deve ter uma identificação única e acessível através de uma URI.
7. **Representação dos Recursos:** Os recursos da API devem ser representados de forma clara e legível, geralmente utilizando formatos de dados comuns, como JSON (JavaScript Object Notation) ou XML (eXtensible Markup Language). Isso facilita a compreensão e o processamento dos dados por parte dos clientes.

Os métodos de requisição são ações que podem ser realizadas em um recurso específico em uma API REST. Eles definem o tipo de operação que será executada no recurso. Aqui estão os principais métodos de requisição em uma API REST:

1. **GET:**

   - O método GET é usado para solicitar dados de um recurso específico. Ele é usado quando o cliente deseja apenas recuperar informações do servidor, sem realizar nenhuma modificação nos dados. Por exemplo, ao acessar uma página da web em um navegador, o navegador envia uma solicitação GET para obter o conteúdo da página.

2. **POST:**

   - O método POST é usado para enviar dados para o servidor a fim de criar um novo recurso. Ele é utilizado quando o cliente deseja enviar dados para o servidor, como enviar um formulário preenchido. O servidor processa os dados e geralmente cria um novo recurso com eles. Por exemplo, ao enviar um formulário de registro para criar uma nova conta de usuário.

3. **PUT:**

   - O método PUT é usado para atualizar os dados de um recurso existente ou criar um recurso se ele não existir. Ele substitui completamente os dados existentes pelo novo conjunto de dados fornecido na solicitação. Por exemplo, ao editar as informações de um perfil de usuário e enviar os novos dados para o servidor.

4. **DELETE:**

   - O método DELETE é usado para excluir um recurso específico do servidor. Ele remove completamente o recurso do servidor, tornando-o irreversível. Por exemplo, ao excluir uma postagem de blog ou um usuário de um sistema.

5. **PATCH:**

   - O método PATCH é usado para aplicar modificações parciais em um recurso. Ele é semelhante ao método PUT, mas em vez de substituir completamente os dados do recurso, ele apenas atualiza partes específicas dos dados. Este método é útil quando você precisa fazer pequenas alterações em um recurso sem enviar o conjunto completo de dados.

6. **OPTIONS:**

   - O método OPTIONS é usado para obter informações sobre os métodos de requisição permitidos em um recurso, bem como sobre os cabeçalhos, origens e outras informações relevantes sobre a API. Isso permite que o cliente determine quais operações ele pode realizar no recurso e quais cabeçalhos ele precisa enviar.

     ------

     #### Postman

   O Postman é uma ferramenta muito popular para o desenvolvimento, teste e documentação de APIs. Ele fornece uma interface gráfica amigável que permite aos desenvolvedores enviar solicitações HTTP para uma API e visualizar as respostas retornadas pelo servidor. Aqui estão algumas das principais características e funcionalidades do Postman:

   1. **Interface Gráfica Intuitiva:**
      - O Postman possui uma interface gráfica intuitiva e fácil de usar que permite aos desenvolvedores criar e enviar solicitações HTTP de forma rápida e eficiente.
   2. **Suporte para Diferentes Métodos HTTP:**
      - O Postman suporta todos os métodos HTTP padrão, como GET, POST, PUT, DELETE, PATCH, entre outros. Isso permite testar diferentes operações em uma API de forma conveniente.
   3. **Organização de Solicitações em Coleções:**
      - As solicitações HTTP podem ser organizadas em coleções no Postman, o que facilita a organização e gerenciamento de diferentes conjuntos de solicitações relacionadas.
   4. **Ambientes e Variáveis:**
      - O Postman permite definir variáveis de ambiente e globais, o que facilita a configuração de diferentes ambientes de teste, como desenvolvimento, teste e produção. Isso também permite reutilizar valores comuns em várias solicitações.
   5. **Testes Automatizados:**
      - O Postman permite escrever scripts de teste automatizados usando JavaScript. Esses scripts podem ser usados para validar as respostas recebidas do servidor e garantir que a API esteja funcionando conforme o esperado.
   6. **Documentação Automática:**
      - O Postman pode gerar automaticamente documentação para uma API com base nas solicitações e respostas definidas em uma coleção. Isso facilita a criação de documentação atualizada e precisa para uma API.
   7. **Colaboração e Compartilhamento:**
      - O Postman permite compartilhar coleções de solicitações com outros membros da equipe, facilitando a colaboração no desenvolvimento e teste de APIs.
   8. **Monitoramento de Desempenho:**
      - O Postman oferece recursos avançados para monitorar o desempenho de uma API, incluindo a capacidade de criar e agendar testes de desempenho automatizados.

------

**Método POST**

O método POST é uma das operações mais comuns em APIs RESTful e é usado para enviar dados para o servidor a fim de criar um novo recurso.

Para que nosso servidor expresso possa interpretar automaticamente mensagens do tipo JSON em formato urlencoded ao recebê-las, devemos indicá-lo explicitamente, adicionando as seguintes linhas após criá-lo.

```
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
```

Elas configuram o middleware do Express para lidar com dados de solicitação em formatos diferentes. Vamos explicar cada uma delas:

1. **`app.use(express.json())`:**
   - Esta linha configura o middleware `express.json()` no Express. Esse middleware é responsável por analisar o corpo das solicitações HTTP com formato JSON. Quando o cliente envia dados em formato JSON no corpo de uma solicitação POST ou PUT, por exemplo, o middleware `express.json()` é acionado para analisar esses dados e torná-los acessíveis ao manipulador de rota.
   - Em resumo, essa linha permite que a aplicação Express seja capaz de processar solicitações com dados em formato JSON.
2. **`app.use(express.urlencoded({ extended: true }))`:**
   - Esta linha configura o middleware `express.urlencoded()` no Express. Esse middleware é responsável por analisar o corpo das solicitações HTTP com dados codificados em URL, como aqueles enviados através de formulários HTML. Quando o cliente envia dados através de um formulário HTML com o método POST, por exemplo, esses dados são codificados em URL e enviados no corpo da solicitação.
   - O parâmetro `{ extended: true }` indica ao middleware que deve usar a biblioteca `qs` para analisar os dados de solicitação com suporte para objetos complexos e matrizes. Isso permite que o middleware lide com dados de solicitação codificados em URL de forma mais avançada.
   - Em resumo, essa linha permite que a aplicação Express seja capaz de processar solicitações com dados codificados em URL, como aqueles enviados através de formulários HTML.

Juntas, essas duas linhas configuram o Express para lidar com diferentes tipos de dados de solicitação, tanto em formato JSON quanto codificados em URL, permitindo que a aplicação processe solicitações de maneira mais abrangente e eficaz. Isso é crucial para muitas aplicações web que precisam receber e processar dados enviados pelo cliente.

**Método PUT**

O método PUT é usado quando o cliente deseja atualizar um recurso específico no servidor com os dados fornecidos na solicitação. Este recurso pode ser qualquer coisa, como um usuário, um artigo em um blog, um produto em uma loja online, etc.

Para trabalhar com PUT, não apenas enviamos o body da request, mas também enviamos o id, nome ou qualquer identificador como parâmetros para que o servidor saiba qual recurso específico atualizar.

**Método DELETE**

O método DELETE é usado quando o cliente deseja remover um recurso específico do servidor. Esse recurso pode ser qualquer coisa, como um usuário, um artigo em um blog, um produto em uma loja online, etc.

