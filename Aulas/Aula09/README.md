**O que é uma Template Engine?**

Uma Template Engine é uma ferramenta que nos ajuda a criar e gerenciar o conteúdo visual em um site, aplicativo ou documento. Ela permite que criemos modelos (templates) pré-definidos, nos quais podemos inserir dados dinâmicos, como texto, imagens, e até mesmo lógica de programação em alguns casos.

**Para que serve uma Template Engine?**

A principal função de uma Template Engine é separar o conteúdo visual do conteúdo dinâmico em uma aplicação. Isso significa que podemos criar um design visual para o nosso site ou aplicativo uma vez, e depois reutilizar esse design para exibir diferentes tipos de conteúdo sem ter que redesenhar tudo manualmente.

Além disso, uma Template Engine facilita a manutenção e atualização do conteúdo, pois podemos modificar o modelo (template) central e essas mudanças se refletirão automaticamente em todas as páginas que utilizam esse modelo.

Por exemplo, imagine um site de notícias. Com uma Template Engine, podemos criar um modelo visual para exibir cada notícia, e em seguida, quando adicionamos uma nova notícia, simplesmente preenchemos o modelo com os dados específicos dessa notícia, como o título, a descrição e a imagem.

Isso torna o desenvolvimento mais eficiente e permite que foquemos mais na criação de conteúdo de qualidade, enquanto a Template Engine cuida da apresentação desse conteúdo de forma consistente e atrativa.

**Handlebars, EJS (Embedded JavaScript) e Pug** (anteriormente conhecido como Jade) são todos template engines populares utilizados no desenvolvimento web. Cada um tem suas próprias características, sintaxe e estilo de escrita.

**Handlebars:**

- Handlebars é um template engine que permite criar templates simples e eficientes para gerar HTML dinâmico.
- Ele é baseado no Mustache, o que significa que segue uma abordagem minimalista e de fácil leitura para definir os templates.
- Handlebars suporta expressões, condicionais (if/else), iteração (loops), parciais (partials), helpers (funções auxiliares) e muito mais.
- É amplamente usado em projetos JavaScript tanto no lado do servidor (Node.js) quanto no lado do cliente (navegador).

**EJS (Embedded JavaScript):**

- EJS é um template engine que permite escrever código JavaScript diretamente nos templates, facilitando a geração dinâmica de HTML.
- Ele usa tags delimitadas por `<% %>` para incluir lógica JavaScript no template, o que o torna muito flexível.
- EJS suporta iteração, condicionais, inclusão de parciais, e permite a passagem de dados do servidor para o template de forma direta.
- É amplamente utilizado em aplicativos Node.js para renderização de páginas HTML dinâmicas no servidor.

**EJS (Embedded JavaScript):**

- EJS é um template engine que permite escrever código JavaScript diretamente nos templates, facilitando a geração dinâmica de HTML.
- Ele usa tags delimitadas por `<% %>` para incluir lógica JavaScript no template, o que o torna muito flexível.
- EJS suporta iteração, condicionais, inclusão de parciais, e permite a passagem de dados do servidor para o template de forma direta.
- É amplamente utilizado em aplicativos Node.js para renderização de páginas HTML dinâmicas no servidor.

Cada um desses template engines tem suas vantagens e é adequado para diferentes tipos de projetos e preferências de desenvolvimento. A escolha entre eles geralmente depende das necessidades específicas do projeto, da familiaridade da equipe de desenvolvimento e das preferências de sintaxe.

### Relação entre Template Engine e Front-end:

- **Complementares:** Um template engine e um framework de front-end geralmente trabalham juntos em um aplicativo web. O template engine é usado no lado do servidor para renderizar páginas dinâmicas, enquanto as bibliotecas/frameworks de front-end são usadas no lado do cliente para interatividade e manipulação dinâmica do DOM.
- **Integração:** Por exemplo, um aplicativo React pode receber dados do servidor renderizados usando um template engine como Handlebars ou EJS, e então o React gerencia a interatividade e atualizações no navegador, sem a necessidade de recarregar a página.
- **Arquitetura SPA:** Em uma arquitetura SPA, o template engine pode ser menos utilizado, pois a maior parte da renderização e lógica de apresentação é tratada pelo framework de front-end, enquanto o servidor fornece APIs para dados dinâmicos.

Em resumo, um template engine é usado para renderizar HTML dinâmico no lado do servidor, enquanto as bibliotecas e frameworks de front-end são usados para criar interfaces de usuário interativas e responsivas no lado do cliente, e ambos trabalham juntos para criar experiências web completas e dinâmicas.

**Como escolher entre um template engine e um framework front-end de acordo com o nível de dinamismo?**

1. **Nível Básico de Dinamismo:**
   - Escolha um template engine (como Handlebars, EJS, Pug) se o seu projeto requer apenas geração dinâmica de conteúdo HTML no lado do servidor.
   - Use um template engine para inserir dados variáveis, expressões condicionais simples e iteração em modelos HTML.
   - Exemplos: sites com conteúdo dinâmico simples, geração de e-mails, relatórios HTML.
2. **Nível Avançado de Dinamismo e Interatividade:**
   - Opte por um framework front-end (como React.js, Vue.js) se o seu projeto necessita de interatividade avançada, manipulação de estado complexa e atualizações em tempo real no lado do cliente.
   - Use um framework front-end para construir Single Page Applications (SPAs), com gerenciamento de rotas, manipulação de eventos, comunicação com APIs, etc.
   - Exemplos: aplicativos web complexos, dashboards interativos, plataformas colaborativas.
3. **Combinação de Ambos:**
   - Em alguns casos, é benéfico usar tanto um template engine no lado do servidor quanto um framework front-end no lado do cliente.
   - Use o template engine para renderizar a estrutura básica da página no servidor e o framework front-end para adicionar interatividade às partes específicas da página no navegador.
4. **Escalabilidade e Manutenção:**
   - Considere a escalabilidade e a facilidade de manutenção ao escolher entre as opções. Frameworks front-end oferecem ferramentas avançadas, mas também podem ser mais complexos de aprender e manter em comparação com template engines mais simples.

Em suma, escolha entre um template engine e um framework front-end com base nos requisitos específicos de dinamismo e interatividade do seu projeto, considerando também a complexidade e a facilidade de manutenção da solução escolhida.

**Handlebars**

Handlebars é um popular engine de templates que simplifica a geração dinâmica de conteúdo HTML em aplicações web. Ele é especialmente útil em ambientes server-side como Node.js, mas também pode ser utilizado em ambientes client-side. 



Desafio 1

Utilizem o Math.floor e o Math.randon

1. `Math.floor()`: Esta é uma função em JavaScript que arredonda para baixo um número decimal para o número inteiro mais próximo.
2. `Math.floor(Math.random() * users.length)`: Essa expressão combina a geração de um número aleatório com a multiplicação pelo comprimento do array `users` e, em seguida, arredonda o resultado para baixo. Isso nos dá um número inteiro aleatório entre 0 (inclusive) e o comprimento do array `users` - 1.

**Estruturas em Handlebars** 

Em Handlebars, as estruturas mais comuns são as expressões (`{{}}`), as condições (`{{#if}}`, `{{else}}`, `{{#unless}}`) e os loops (`{{#each}}`)

**Expressões (Interpolação de Variáveis)**:

- Sintaxe: `{{nomeDaVariavel}}`
- Descrição: As expressões são usadas para exibir o valor de uma variável dentro do template. Quando o template é renderizado, o Handlebars substitui as expressões pelas informações reais correspondentes.

**Condições (if, else, unless)**:

- Sintaxe:
  - `{{#if condicao}} ... {{else}} ... {{/if}}`
  - `{{#unless condicao}} ... {{else}} ... {{/unless}}`
- Descrição: As estruturas condicionais são usadas para exibir conteúdo com base em condições. Se a condição for verdadeira (`true`), o bloco dentro do `{{#if}}` ou `{{#unless}}` é renderizado. Caso contrário, se houver uma cláusula `{{else}}`, o bloco dentro dela é renderizado.

**Loops (each)**:

- Sintaxe: `{{#each array}} ... {{/each}}`
- Descrição: Os loops são utilizados para iterar sobre arrays e objetos. Dentro do bloco `{{#each}}`, você pode acessar cada elemento do array ou as propriedades de um objeto para renderizar conteúdo dinâmico de forma repetida.