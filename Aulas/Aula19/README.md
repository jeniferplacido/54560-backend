**Cookies, Session & Storage II**

------

**Storage**

O termo "storage" no contexto do navegador se refere ao armazenamento de dados locais que o navegador mantém para os sites que você visita. Isso pode incluir informações como cookies, cache de páginas da web, dados de sessão e outras configurações específicas do site. Esses dados são armazenados no seu dispositivo para melhorar a experiência de navegação, como manter o login em um site, salvar preferências de idioma e reter informações para acelerar o carregamento de páginas que você visita com frequência.

**Session**

Em muitos sistemas web, uma sessão é identificada por meio de um sessionId, que é um identificador único atribuído a cada usuário quando ele se conecta ao servidor. Esse sessionId é geralmente gerado pelo servidor e enviado ao navegador do cliente, onde é armazenado, por exemplo, em um cookie ou em uma variável de sessão. O servidor então utiliza esse sessionId para identificar e manter o estado da sessão do usuário, permitindo assim a personalização e o armazenamento temporário de informações durante a interação do usuário com o site.

**Memory storage**

O armazenamento de uma sessão na memória do servidor é chamado de "sessão em memória" ou "sessão na memória do servidor". Este método de armazenamento é rápido e eficiente, pois os dados da sessão são mantidos na RAM do servidor durante a interação do usuário com o site. No entanto, esse método tem suas desvantagens, principalmente a falta de persistência.

Se o servidor for reiniciado, desligado ou ocorrer um problema, os dados da sessão armazenados na memória serão perdidos, resultando na perda da sessão do usuário e em problemas de experiência do usuário, como logout inesperado, carrinhos de compras esvaziados, etc.

**File Storage**

Usar o File Storage para persistir dados de sessão é uma abordagem viável e simples, especialmente em situações onde a escalabilidade e o desempenho extremo não são as principais preocupações. Isso permite que o servidor armazene as informações da sessão em arquivos locais, garantindo que os dados persistam mesmo em casos de reinicialização ou falhas.

Essa solução é eficaz para aplicações de menor escala ou em ambientes onde a simplicidade e a facilidade de implementação são prioritárias

**session-file-store**

O `session-file-store` é um módulo Node.js que permite armazenar as sessões do Express.js em arquivos no sistema de arquivos do servidor. Ele é uma opção de persistência de sessão que pode ser útil em casos simples ou em ambientes onde a escalabilidade extrema não é uma prioridade.

**Instalação**:

Para instalar o pacote `session-file-store` via npm:

```
npm install session-file-store
```

**Session Storage com** **Mongo Atlas**

Ao usar o MongoDB Atlas em um aplicativo da web, você pode armazenar dados relacionados à sessão em coleções do MongoDB. Por exemplo, você pode ter uma coleção chamada "sessões" onde cada documento representa uma sessão de usuário.

**Gerenciamento de Sessões**: Quando um usuário faz login ou interage com seu aplicativo da web, você pode criar um objeto de sessão contendo dados relevantes (por exemplo, ID do usuário, tokens de autenticação, preferências) e armazená-lo na coleção do MongoDB.

**Recuperando Dados de Sessão**: Quando o usuário faz solicitações subsequentes, você pode recuperar os dados da sessão do MongoDB Atlas com base no identificador de sessão (por exemplo, de um cookie ou cabeçalho da solicitação). Isso permite que você mantenha o estado da sessão do usuário em várias solicitações.

**Considerações de Segurança**: Ao usar o armazenamento de sessão com o MongoDB Atlas, certifique-se de seguir as melhores práticas de segurança. Isso inclui criptografar dados sensíveis, usar conexões seguras (HTTPS) e implementar mecanismos adequados de autenticação e autorização.

Combinar o armazenamento de sessão com o MongoDB Atlas pode fornecer uma solução escalável e confiável para gerenciar sessões de usuários e dados associados em aplicativos da web.

**connect-mongo**

O `connect-mongo` é um pacote Node.js que oferece uma maneira conveniente de armazenar sessões de usuário em um banco de dados MongoDB. Especificamente, ele é frequentemente usado em aplicações Express.js para gerenciar sessões de forma eficiente e escalável.

**Instalação**: Certifique-se de ter o Node.js e o MongoDB instalados em seu sistema. Em seguida, instale o `connect-mongo` e outras dependências necessárias para sua aplicação:

```
npm install express express-session connect-mongo mongoose
```

**A maravilha de expires**

A configuração de expiração (expires) é uma funcionalidade importante ao lidar com sessões em bancos de dados, especialmente em aplicações web. Ela permite definir um tempo de vida para as sessões, após o qual elas são automaticamente removidas do banco de dados. Isso ajuda a manter a integridade dos dados e a evitar que sessões antigas e desnecessárias ocupem espaço no banco de dados.

Ao usar o `connect-mongo` com o MongoDB para armazenar sessões em uma aplicação Node.js/Express.js, você pode configurar o tempo de expiração das sessões de forma bastante simples.

