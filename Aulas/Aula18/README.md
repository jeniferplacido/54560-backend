**Cookies, Session & Storage I**

Os cookies são pequenos arquivos de texto que um servidor pode enviar para o navegador do cliente e que o navegador pode armazenar e enviar de volta ao servidor em cada solicitação subsequente. Eles são amplamente utilizados para várias finalidades, como manter o estado da sessão do usuário, armazenar preferências do usuário, rastrear atividades do usuário e muito mais.

**Cookies de sessão:** Esses cookies são armazenados temporariamente no navegador do cliente e são excluídos quando o navegador é fechado. Eles geralmente são usados para manter o estado da sessão do usuário enquanto ele navega no site. Por exemplo, eles podem ser usados para manter o usuário conectado após o login, armazenar itens em um carrinho de compras durante uma sessão de compra, etc.

**Cookies persistentes:** Esses cookies são armazenados no navegador do cliente por um período específico, definido pelo servidor. Eles não são excluídos quando o navegador é fechado e podem ser usados para lembrar informações e preferências do usuário entre sessões. Por exemplo, eles podem ser usados para lembrar as preferências de idioma do usuário, mostrar anúncios personalizados, etc.

Importante:
É importante notar que, embora os cookies tenham muitos benefícios em termos de funcionalidades da web, eles também podem levantar preocupações de privacidade e segurança. Portanto, o uso responsável e transparente de cookies é essencial para garantir uma experiência positiva e ética para os usuários da web.

**Características**

s cookies, no contexto da web, possuem várias características que os tornam úteis para diversas funcionalidades. Aqui estão algumas das principais características dos cookies:

**Armazenamento de Informações:** Os cookies podem armazenar informações temporariamente ou permanentemente no navegador do usuário. Isso pode incluir dados como preferências do usuário, itens em um carrinho de compras, dados de login, etc.

**Persistência:** Dependendo da configuração do cookie, ele pode ser persistente (armazenado por um período específico, mesmo após o navegador ser fechado e reaberto) ou de sessão (apenas armazenado durante a sessão atual do navegador).

**Rastreamento de Sessão:** Os cookies de sessão são frequentemente usados para rastrear o estado da sessão do usuário enquanto ele navega em um site. Isso pode incluir informações como login, itens em um carrinho de compras, preferências temporárias, etc.

**Personalização:** Os cookies podem ser usados para personalizar a experiência do usuário em um site. Isso inclui exibir conteúdo relevante, lembrar preferências do usuário, manter sessões de login ativas, etc.

**Segurança:** Cookies podem ser usados para fins de segurança, como autenticação de usuário (mantendo o usuário conectado após o login), prevenção de fraudes, proteção contra ataques de sessão, etc.

**Análise e Rastreamento:** Cookies são frequentemente utilizados em ferramentas de análise para rastrear o comportamento do usuário, como páginas visitadas, tempo gasto em cada página, cliques em botões, etc. Isso ajuda os proprietários de sites a entenderem o desempenho do site e o comportamento dos usuários.

**Publicidade:** Cookies de terceiros são comumente usados em publicidade online para rastrear atividades de navegação do usuário em vários sites. Isso permite a exibição de anúncios direcionados com base nos interesses e comportamentos do usuário.

**Utilização de cookies:** **set, get e clear**

**Set (Definir) Cookies:**

A ação de "setar" um cookie refere-se ao processo de criar e armazenar um cookie no navegador do usuário. Isso é feito no lado do servidor, geralmente em uma resposta HTTP enviada ao navegador após uma solicitação. O cabeçalho HTTP `Set-Cookie` é usado para definir um novo cookie ou atualizar um cookie existente. 

**Adicionando segurança ao cookie:** **Cookies assinados**

Cookies assinados são cookies que têm uma assinatura criptografada adicionada a eles, o que torna mais difícil para usuários mal-intencionados manipularem o conteúdo do cookie.



`req.signedCookies` é uma propriedade do objeto `req` (requisição) em Express que contém todos os cookies assinados digitalmente enviados pelo cliente.

Quando um cookie é enviado pelo cliente para o servidor, o servidor pode verificar se o cookie foi assinado digitalmente usando uma chave secreta. Isso garante que o conteúdo do cookie não foi alterado pelo cliente e que o cookie é autêntico.

A propriedade `req.signedCookies` permite acessar esses cookies assinados. Se um cookie com o mesmo nome for enviado pelo cliente e estiver assinado digitalmente, ele será acessível através de `req.signedCookies`.





**Sobre cookies assinados**

Quando você usa cookies assinados em Express.js com `cookie-parser`, é importante lembrar que os cookies assinados não estarão disponíveis em `req.cookies`, mas sim em `req.signedCookies`. Esta é uma distinção crucial a ser feita ao lidar com cookies assinados em sua aplicação.

Além disso, a assinatura criptográfica adicionada aos cookies assinados é verificada automaticamente pelo `cookie-parser` ao acessar `req.signedCookies`. Se um cookie assinado foi alterado ou sua assinatura não corresponde aos dados, `req.signedCookies` retornará `false` para esse cookie.

Essa verificação automática de assinatura é fundamental para garantir a integridade e a autenticidade dos cookies assinados em sua aplicação. Isso significa que se um cookie assinado foi manipulado ou corrompido de alguma forma, ele será considerado inválido ao acessá-lo por meio de `req.signedCookies`.

Ao usar cookies assinados em Express.js, sempre verifique os cookies em `req.signedCookies` e esteja ciente de que a verificação automática de assinatura está ocorrendo nos bastidores para garantir a segurança e a confiabilidade dos dados do cookie. Isso ajuda a proteger sua aplicação contra manipulações de cookies e garante a integridade dos dados transmitidos por meio dos cookies assinados.

**Sessions**

Uma sessão é uma maneira de armazenar informações sobre um usuário específico enquanto ele interage com o site ou aplicativo. Essas informações podem incluir dados como preferências do usuário, dados de autenticação (como se o usuário está logado ou não), carrinho de compras em lojas online, entre outros.

As sessões são fundamentais para manter o estado do usuário em aplicativos da web. Elas permitem que você rastreie e mantenha informações específicas de um usuário durante sua visita ao seu site ou aplicativo. Isso é útil para personalizar a experiência do usuário e fornecer funcionalidades dinâmicas.

**Session como módulo de Node**

O módulo `express-session` é uma ferramenta muito útil em aplicações Node.js para lidar com sessões de usuário. Ele simplifica o processo de gerenciamento de sessões e permite armazenar dados de sessão de forma segura no servidor.

function auth(req, res, next) {
    if (req.session?.username === 'Jeni' && req.session?.admin) {
        return next(); // Próximo middleware ou rota
    } else {
        return res.send('Erro de autenticação');
    }
}



