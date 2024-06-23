# **Versões e pacotes**

## **Gerenciador de** **versão do Node**

O gerenciador de versão do Node, conhecido como NVM (Node Version Manager), é uma ferramenta muito útil para quem trabalha com desenvolvimento de software, especialmente com JavaScript e Node.js. Vamos imaginar que você está construindo diferentes projetos de LEGO ao mesmo tempo. Cada projeto precisa de peças de LEGO de diferentes tamanhos e cores, e você precisa ter certeza de que está usando as peças corretas para cada projeto. O NVM funciona de uma maneira similar, mas com versões do Node.js.

### O Que é NVM?

O NVM é como uma caixa mágica que guarda várias versões do Node.js, e você pode trocar essas versões facilmente conforme necessário. Node.js é um ambiente de tempo de execução que permite que você execute JavaScript fora do navegador, geralmente no servidor. Cada versão do Node.js pode ter diferentes funcionalidades e melhorias.

### Para Que Serve?

Imagine que você tem dois projetos diferentes:

**Projeto A**: Foi iniciado há dois anos e usa uma versão mais antiga do Node.js.

**Projeto B**: É um novo projeto que usa a versão mais recente do Node.js.

Sem o NVM, seria muito complicado e trabalhoso ficar trocando manualmente a versão do Node.js instalada no seu computador toda vez que você quisesse trabalhar em um dos projetos. Você teria que desinstalar uma versão e instalar outra, o que pode ser demorado e propenso a erros.

Com o NVM, você pode fazer isso com um simples comando. Ele permite que você:

**Instale diferentes versões do Node.js**:

```bash
nvm install 14.17.0
nvm install 16.4.0
```

**Troque rapidamente entre essas versões**:

```bash
nvm use 14.17.0
nvm use 16.4.0
```

**Defina uma versão padrão para ser usada sempre que você abrir um novo terminal**:

```bash
nvm alias default 16.4.0
```

### Por Que Isso é Útil?

**Facilidade de Desenvolvimento**: Se um projeto precisa de uma versão específica do Node.js, você pode rapidamente mudar para essa versão e garantir que tudo funcione como esperado.

**Compatibilidade**: Alguns pacotes e dependências de projetos podem ser compatíveis apenas com determinadas versões do Node.js. O NVM permite que você mantenha essas compatibilidades sem complicações.

**Ambiente de Teste**: Se você está testando como seu projeto se comporta em diferentes versões do Node.js, o NVM facilita essa troca sem a necessidade de reinstalar nada.

### Como Instalar o NVM?

A instalação do NVM é simples. No macOS ou Linux, você pode instalar com um único comando:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

No Windows, há uma ferramenta chamada [nvm-windows](https://github.com/coreybutler/nvm-windows) que faz algo semelhante.

O NVM é como um assistente pessoal que gerencia as diferentes versões do Node.js para você. Ele economiza tempo, evita dores de cabeça e permite que você trabalhe de maneira mais eficiente e organizada.

------

## **Administradores** **de** **pacotes**

Um gerenciador de pacotes é uma ferramenta que ajuda você a instalar, atualizar, remover e gerenciar software no seu computador de maneira fácil e organizada. Para entender melhor, pense no gerenciador de pacotes como uma "loja de aplicativos", mas em vez de apenas fornecer aplicativos, ele também cuida de todas as peças necessárias para que esses aplicativos funcionem corretamente. Aqui está uma explicação simples de como funciona:

### **Instalar Software**

Quando você quer instalar um novo programa (chamado de "pacote"), você não precisa procurar e baixar o arquivo de instalação manualmente. Em vez disso, você simplesmente diz ao gerenciador de pacotes o que quer. Por exemplo, se você quiser instalar o `express` (uma biblioteca para Node.js), você usaria um comando como `npm install express`.

### **Encontrar e Baixar**

O gerenciador de pacotes sabe onde encontrar o software porque ele tem acesso a repositórios, que são grandes bancos de dados cheios de pacotes disponíveis. Quando você pede para instalar algo, ele vai até esses repositórios, encontra o que você pediu, baixa e instala no seu computador.

### **Instalar Dependências**

Muitos programas não funcionam sozinhos; eles precisam de outros pedaços de software chamados dependências. O gerenciador de pacotes cuida disso para você. Ele verifica o que mais é necessário para o programa funcionar e instala tudo junto. Assim, você não precisa se preocupar em descobrir o que mais precisa ser instalado.

### **Manter o Software Atualizado**

Com o tempo, os programas recebem atualizações para melhorar a segurança, adicionar novas funcionalidades ou corrigir problemas. O gerenciador de pacotes facilita a atualização desses programas. Você pode dizer ao gerenciador de pacotes para atualizar um único programa ou todos os programas de uma vez, e ele fará isso para você.

### **Remover Software**

Se você não precisa mais de um programa, pode pedir ao gerenciador de pacotes para removê-lo. Ele vai garantir que o programa seja completamente removido, junto com as dependências que não são mais necessárias por outros programas.

### **Organização e Gestão**

O gerenciador de pacotes mantém um registro de todos os programas que você instalou, suas versões e suas dependências. Isso ajuda a manter tudo organizado e evita conflitos entre diferentes versões de programas.

- **Instalação**: Você pede ao gerenciador de pacotes para instalar um programa.
- **Busca e Download**: Ele encontra o programa nos repositórios e baixa para você.
- **Dependências**: Ele também baixa e instala tudo o que é necessário para o programa funcionar.
- **Atualizações**: Ele mantém seus programas atualizados.
- **Remoção**: Ele remove programas que você não precisa mais.
- **Organização**: Ele mantém tudo organizado e funcionando bem juntos.

Um gerenciador de pacotes, portanto, simplifica muito a forma como você gerencia o software no seu computador, tornando todo o processo mais eficiente e menos sujeito a erros.

------

## **Entendendo o YARN**

Yarn é um gerenciador de pacotes que foi criado para facilitar a instalação e o gerenciamento de bibliotecas e ferramentas de software, especialmente no desenvolvimento de projetos com JavaScript. 

### O que é o Yarn?

Imagine que você está construindo uma casa (seu projeto de software) e precisa de vários materiais (bibliotecas e ferramentas de software) para completá-la. O Yarn é como uma loja de materiais de construção super eficiente que te ajuda a encontrar, comprar e organizar todos os materiais que você precisa de forma rápida e fácil.

### Para que serve o Yarn?

#### **Instalar Bibliotecas (Materiais de Construção)**

Quando você precisa de uma biblioteca para adicionar uma funcionalidade ao seu projeto, você simplesmente pede ao Yarn para buscar e instalar essa biblioteca para você. Por exemplo, se você precisa de uma biblioteca para trabalhar com datas no JavaScript, você pode pedir ao Yarn para instalar a biblioteca chamada `moment`.

##### Como funciona:

- Você usa um comando simples no terminal, como `yarn add moment`.
- O Yarn busca essa biblioteca nos repositórios online, baixa e instala para você.

#### **Gerenciar Dependências (Materiais Relacionados)**

Muitas bibliotecas precisam de outras bibliotecas para funcionar. O Yarn cuida de tudo isso automaticamente. Ele sabe exatamente quais outras bibliotecas são necessárias e as instala junto com a biblioteca principal.

##### Como funciona:

- Quando você instala uma biblioteca, o Yarn também verifica e instala todas as dependências necessárias sem que você precise se preocupar com isso.

#### **Manter Tudo Atualizado**

Com o tempo, as bibliotecas que você usa no seu projeto recebem atualizações. O Yarn ajuda a manter tudo atualizado de maneira fácil e organizada.

##### Como funciona:

- Você pode usar comandos como `yarn upgrade` para atualizar todas as bibliotecas do seu projeto para suas versões mais recentes.

#### **Desempenho e Confiabilidade**

O Yarn foi projetado para ser rápido e confiável. Ele baixa as bibliotecas de forma eficiente e garante que todas as bibliotecas funcionem bem juntas, sem conflitos.

##### Como funciona:

- O Yarn usa uma técnica chamada "caching" para armazenar bibliotecas baixadas anteriormente, tornando as instalações futuras muito mais rápidas.
- Ele também verifica a integridade das bibliotecas para garantir que não haja problemas de compatibilidade.

#### **Trabalho em Equipe**

Quando você trabalha em um projeto com outras pessoas, o Yarn ajuda a garantir que todos estejam usando exatamente as mesmas versões das bibliotecas.

##### Como funciona:

- O Yarn cria um arquivo chamado `yarn.lock` que registra as versões exatas das bibliotecas usadas no projeto. Quando outra pessoa clona o projeto e usa o Yarn, ela obterá exatamente as mesmas versões das bibliotecas.

- **Instalar Bibliotecas**: Você pede ao Yarn para instalar o que precisa.
- **Gerenciar Dependências**: O Yarn cuida de todas as bibliotecas relacionadas necessárias.
- **Manter Atualizado**: O Yarn facilita a atualização das bibliotecas.
- **Desempenho e Confiabilidade**: O Yarn é rápido e garante que tudo funcione bem junto.
- **Trabalho em Equipe**: O Yarn mantém a consistência entre diferentes desenvolvedores do mesmo projeto.

------

## O que é o NPM?

Imagine que você está construindo um Lego (seu projeto de software) e precisa de peças diferentes para completá-lo. O NPM é como uma loja de Lego onde você pode encontrar todas as peças (bibliotecas e ferramentas de software) de que precisa para construir seu projeto.

### Para que serve o NPM?

**Instalar Pacotes (Peças de Lego)**:

- Quando você precisa de uma funcionalidade específica para o seu projeto, como manipulação de datas, você pode procurar por uma biblioteca de JavaScript que já tenha essa funcionalidade.
- Com o NPM, você pode simplesmente digitar um comando no terminal, como `npm install moment`, e o NPM baixará e instalará a biblioteca `moment` para você.

**Gerenciar Dependências (Peças Relacionadas)**:

- Muitas vezes, uma biblioteca precisa de outras bibliotecas para funcionar corretamente (dependências). O NPM gerencia todas essas dependências para você.
- Por exemplo, se a biblioteca `moment` precisa de outra biblioteca chamada `lodash` para funcionar, o NPM instalará ambas para você e garantirá que tudo funcione bem.

**Atualizar Pacotes**:

- À medida que as bibliotecas são atualizadas com novos recursos e correções, o NPM facilita a atualização desses pacotes.
- Você pode usar comandos como `npm update` ou `npm outdated` para verificar e atualizar as bibliotecas do seu projeto.

**Remover Pacotes**:

- Se você não precisa mais de uma biblioteca, pode removê-la facilmente usando o NPM. Por exemplo, `npm uninstall moment`.

**Scripts e Automatização**:

- O NPM permite que você crie scripts no seu `package.json` para automatizar tarefas comuns, como iniciar o servidor, compilar código, executar testes, entre outros.
- Por exemplo, você pode ter um script "start" que inicia o servidor da sua aplicação com `npm start`.

**Compartilhamento e Colaboração**:

- O NPM é uma comunidade enorme de desenvolvedores que compartilham suas bibliotecas e ferramentas.
- Você pode publicar seus próprios pacotes no NPM para que outros desenvolvedores possam usá-los e colaborar com pacotes existentes.

- **Instalação de Pacotes**: `npm install <nome_do_pacote>`
- **Atualização de Pacotes**: `npm update` ou `npm outdated`
- **Remoção de Pacotes**: `npm uninstall <nome_do_pacote>`
- **Scripts e Automatização**: `npm run <nome_do_script>`
- **Compartilhamento e Colaboração**: Publicação e uso de pacotes na comunidade do NPM.

O NPM torna o processo de gerenciamento de pacotes e dependências em projetos JavaScript mais fácil, permitindo que os desenvolvedores encontrem, instalem, atualizem e removam bibliotecas e ferramentas de software de forma eficiente.

O arquivo `package-lock.json` é um arquivo de manifesto gerado automaticamente pelo NPM (Node Package Manager) e Yarn para registrar a árvore de dependências exata de um projeto. Ele foi introduzido para garantir que a instalação de pacotes seja determinística e reproduzível em diferentes ambientes.

### O que é o `package-lock.json`?

**Registro de Dependências Exatas**:

- O `package-lock.json` registra todas as dependências do projeto, incluindo suas versões exatas e as versões das dependências das dependências, formando uma árvore completa de dependências.

**Versões Exatas**:

- Ele especifica as versões exatas de cada pacote instalado, garantindo que as mesmas versões sejam usadas em diferentes instalações do projeto, evitando surpresas ou incompatibilidades.

### Por que o `package-lock.json` é Importante?

**Reprodutibilidade**:

- Com o `package-lock.json`, você pode reproduzir exatamente o mesmo ambiente de desenvolvimento em diferentes máquinas ou em diferentes momentos no tempo. Isso é crucial para garantir que todos os desenvolvedores estejam trabalhando com as mesmas versões de pacotes.

**Determinismo**:

- O `package-lock.json` garante que as instalações de pacotes sejam determinísticas, ou seja, que sempre produzam o mesmo resultado, independentemente do ambiente ou ordem de instalação. Isso é fundamental para garantir a estabilidade e consistência do projeto.

**Resolução de Conflitos**:

- Em caso de conflitos de versão ou resolução de dependências, o `package-lock.json` ajuda a resolver esses problemas de forma automática, escolhendo as versões corretas dos pacotes de acordo com a árvore de dependências registrada.

**Rastreamento de Alterações**:

- O `package-lock.json` registra todas as alterações nas dependências do projeto ao longo do tempo, facilitando o rastreamento de atualizações e a reversão para versões anteriores, se necessário.

### Quando o `package-lock.json` é Gerado?

- **Instalação de Pacotes**:
  - Sempre que você instala novos pacotes ou atualiza pacotes existentes usando o NPM (`npm install`) ou Yarn (`yarn add`), o `package-lock.json` é automaticamente gerado ou atualizado para refletir as mudanças.

O `package-lock.json` é um arquivo crucial em projetos JavaScript gerenciados pelo NPM ou Yarn, pois garante a reprodutibilidade, determinismo e resolução confiável de dependências. Ele serve como um registro preciso das dependências exatas do projeto e é essencial para manter a consistência e estabilidade do ambiente de desenvolvimento.

### O que é o comando `npm ci`?

**Modo de Instalação Limpa**:

- O `npm ci` (do inglês, "clean install") é um comando que realiza uma instalação limpa das dependências de um projeto. Isso significa que ele ignora o arquivo `package.json` e instala exatamente as versões especificadas no arquivo `package-lock.json` ou `npm-shrinkwrap.json`.

**Reprodução Exata**:

- O comando `npm ci` garante que as mesmas versões exatas de pacotes sejam instaladas em diferentes ambientes ou em diferentes momentos no tempo. Isso é fundamental para garantir a reprodutibilidade e a consistência do ambiente de desenvolvimento.

**Ignora `package.json`**:

- Ao contrário do comando `npm install`, que usa o arquivo `package.json` para determinar quais pacotes instalar, o `npm ci` não leva em consideração o `package.json` e usa apenas o arquivo `package-lock.json` ou `npm-shrinkwrap.json`.

### Por que usar `npm ci`?

**Ambientes de Produção**:

- O `npm ci` é especialmente útil em ambientes de produção, onde é essencial garantir que as mesmas versões exatas de pacotes sejam instaladas em todos os servidores.

**Ambientes de Integração Contínua**:

- Em ambientes de integração contínua (CI), onde as compilações precisam ser determinísticas e reproduzíveis, o `npm ci` é uma escolha comum para garantir a consistência das dependências.

**Rápida e Consistente**:

- Como o `npm ci` usa o arquivo `package-lock.json` ou `npm-shrinkwrap.json` para instalar as dependências, ele é mais rápido e garante uma instalação consistente e sem surpresas.

### Como usar `npm ci`?

1. **Navegue até o diretório do projeto**:

   - Abra o terminal e vá para o diretório do seu projeto onde está localizado o arquivo `package-lock.json` ou `npm-shrinkwrap.json`.

2. **Execute o comando `npm ci`**:

   - No terminal, execute o seguinte comando:

     ```sh
     npm ci
     ```

   - Isso instalará as dependências exatas do projeto de acordo com o arquivo `package-lock.json` ou `npm-shrinkwrap.json`.

O `npm ci` é um comando do NPM que realiza uma instalação limpa e determinística das dependências de um projeto JavaScript, usando o arquivo `package-lock.json` ou `npm-shrinkwrap.json` para garantir a reprodutibilidade e consistência das versões de pacotes instaladas. É uma escolha comum para ambientes de produção e integração contínua, onde a consistência e a rapidez são essenciais.