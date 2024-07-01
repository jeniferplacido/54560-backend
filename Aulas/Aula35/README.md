# **Clusters e escalabilidade**

**Estratégia: Escalabilidade**

Escalabilidade em termos de servidores se refere à capacidade de um sistema de lidar com um aumento na demanda, seja em termos de tráfego de usuários, processamento de dados, armazenamento de informações, ou qualquer outro recurso que o sistema ofereça. Existem dois principais tipos de escalabilidade: vertical e horizontal.

1. **Escalabilidade Vertical (ou Escalabilidade "Scale-up")**:
   - **O que é**: Nesse tipo de escalabilidade, você aumenta a capacidade de um servidor existente adicionando mais recursos a ele, como CPU, RAM, armazenamento, etc. Ou seja, você "escala" o servidor para cima, tornando-o mais poderoso.
   - **Para que serve**: A escalabilidade vertical é útil quando você possui um aplicativo que pode se beneficiar de um único servidor mais robusto. Ela é geralmente mais fácil de implementar, pois envolve apenas atualizar os recursos de um servidor existente.

2. **Escalabilidade Horizontal (ou Escalabilidade "Scale-out")**:
   - **O que é**: Aqui, em vez de aumentar a capacidade de um único servidor, você distribui a carga entre vários servidores menores. Ou seja, você "escala" adicionando mais servidores ao seu ambiente.
   - **Para que serve**: A escalabilidade horizontal é ideal para lidar com um grande volume de tráfego ou processamento distribuído. Ela oferece maior flexibilidade e resiliência, pois permite adicionar mais servidores conforme necessário e distribuir a carga entre eles.

Em resumo, a escalabilidade permite que os sistemas se adaptem às demandas variáveis do ambiente, garantindo desempenho, disponibilidade e confiabilidade mesmo diante de picos de uso ou crescimento contínuo. A escolha entre escalabilidade vertical e horizontal depende das necessidades específicas do seu aplicativo, da infraestrutura disponível e de outros fatores como custo, manutenção e facilidade de gerenciamento.

Sim, o gerenciamento de processos filhos é uma técnica comum para escalabilidade horizontal em sistemas distribuídos. Aqui está um resumo de como funciona:

1. **Processos Filhos**:
   - Ao escalar horizontalmente, geralmente você executa várias instâncias do seu aplicativo em diferentes servidores (ou containers).
   - Cada instância é chamada de processo filho. Esses processos filhos trabalham juntos para lidar com a carga de trabalho total.

2. **Balanceamento de Carga**:
   - Um servidor ou serviço dedicado, conhecido como balanceador de carga, é usado para distribuir o tráfego entre os diferentes processos filhos.
   - O balanceador de carga pode usar diferentes algoritmos para decidir a qual processo filho enviar uma requisição. Alguns exemplos incluem Round Robin, Least Connections, IP Hash, etc.

3. **Comunicação entre Processos**:
   - Os processos filhos precisam se comunicar entre si e compartilhar informações conforme necessário. Isso geralmente é feito por meio de protocolos de comunicação como HTTP, WebSockets, gRPC, ou até mesmo troca de mensagens em um sistema de filas como RabbitMQ, Kafka, etc.
   - O uso de um sistema de cache compartilhado, como Redis ou Memcached, também é comum para armazenamento temporário de dados compartilhados entre os processos filhos.

4. **Monitoramento e Gerenciamento**:
   - É importante ter ferramentas de monitoramento e gerenciamento para acompanhar o desempenho de cada processo filho e do cluster como um todo.
   - As métricas importantes podem incluir uso de CPU, memória, tempo de resposta das requisições, erros, etc.
   - Além disso, ferramentas de orquestração como Kubernetes, Docker Swarm, ou mesmo scripts personalizados podem ser utilizados para gerenciar o ciclo de vida dos processos filhos, como escalonamento automático, atualizações, reinicializações, etc.

Este código está usando uma funcionalidade do Node.js chamada "Cluster". O Cluster permite que um programa Node.js rode múltiplas instâncias de si mesmo para aproveitar melhor os recursos do sistema, como os múltiplos núcleos de um processador. Aqui está o que acontece, passo a passo, de uma maneira simplificada:

1. **Importação do Módulo Cluster**: O código começa importando um módulo chamado [`cluster`](command:_github.copilot.openSymbolFromReferences?%5B%7B%22%24mid%22%3A1%2C%22path%22%3A%22%2FC%3A%2FUsers%2FLENOVO%2FAppData%2FLocal%2FMicrosoft%2FTypeScript%2F5.4%2Fnode_modules%2F%40types%2Fnode%2Fcluster.d.ts%22%2C%22scheme%22%3A%22file%22%7D%2C%7B%22line%22%3A54%2C%22character%22%3A0%7D%5D "../../../../../AppData/Local/Microsoft/TypeScript/5.4/node_modules/@types/node/cluster.d.ts") do Node.js. Este módulo contém as funcionalidades necessárias para criar múltiplas instâncias (ou "workers") do mesmo programa.

2. **Verificação se é o Processo Primário**: Em seguida, o código verifica se o processo atual é o "primário" usando [`cluster.isPrimary`](command:_github.copilot.openSymbolFromReferences?%5B%7B%22%24mid%22%3A1%2C%22path%22%3A%22%2FC%3A%2FUsers%2FLENOVO%2FAppData%2FLocal%2FMicrosoft%2FTypeScript%2F5.4%2Fnode_modules%2F%40types%2Fnode%2Fcluster.d.ts%22%2C%22scheme%22%3A%22file%22%7D%2C%7B%22line%22%3A54%2C%22character%22%3A0%7D%5D "../../../../../AppData/Local/Microsoft/TypeScript/5.4/node_modules/@types/node/cluster.d.ts"). Quando você roda um programa Node.js, ele começa como um processo primário. Se [`cluster.isPrimary`](command:_github.copilot.openSymbolFromReferences?%5B%7B%22%24mid%22%3A1%2C%22path%22%3A%22%2FC%3A%2FUsers%2FLENOVO%2FAppData%2FLocal%2FMicrosoft%2FTypeScript%2F5.4%2Fnode_modules%2F%40types%2Fnode%2Fcluster.d.ts%22%2C%22scheme%22%3A%22file%22%7D%2C%7B%22line%22%3A54%2C%22character%22%3A0%7D%5D "../../../../../AppData/Local/Microsoft/TypeScript/5.4/node_modules/@types/node/cluster.d.ts") for verdadeiro, significa que o código está sendo executado no processo original, não em uma cópia.

3. **Criação de um Processo Trabalhador (Worker)**: Se o processo atual for o primário, o código exibe uma mensagem dizendo "Processo primário, gerando processo trabalhador" e então cria um novo processo (um "worker") usando [`cluster.fork()`](command:_github.copilot.openSymbolFromReferences?%5B%7B%22%24mid%22%3A1%2C%22path%22%3A%22%2FC%3A%2FUsers%2FLENOVO%2FAppData%2FLocal%2FMicrosoft%2FTypeScript%2F5.4%2Fnode_modules%2F%40types%2Fnode%2Fcluster.d.ts%22%2C%22scheme%22%3A%22file%22%7D%2C%7B%22line%22%3A54%2C%22character%22%3A0%7D%5D "../../../../../AppData/Local/Microsoft/TypeScript/5.4/node_modules/@types/node/cluster.d.ts"). Isso efetivamente duplica o programa, mas desta vez, o novo processo não será primário.

4. **Execução como Processo Trabalhador**: Se o processo atual não for o primário (ou seja, foi criado por [`cluster.fork()`](command:_github.copilot.openSymbolFromReferences?%5B%7B%22%24mid%22%3A1%2C%22path%22%3A%22%2FC%3A%2FUsers%2FLENOVO%2FAppData%2FLocal%2FMicrosoft%2FTypeScript%2F5.4%2Fnode_modules%2F%40types%2Fnode%2Fcluster.d.ts%22%2C%22scheme%22%3A%22file%22%7D%2C%7B%22line%22%3A54%2C%22character%22%3A0%7D%5D "../../../../../AppData/Local/Microsoft/TypeScript/5.4/node_modules/@types/node/cluster.d.ts")), ele entra no bloco `else` e exibe uma mensagem explicando que é um processo trabalhador e não o primário.

**Para que serve?** Este mecanismo é usado para melhorar o desempenho de uma aplicação. Ao distribuir as tarefas entre múltiplos processos (workers), você pode fazer com que sua aplicação lide com mais solicitações simultaneamente, aproveitando ao máximo os recursos do servidor, especialmente em máquinas com vários núcleos de CPU.

Ao clusterizar sua aplicação dessa forma, você ganha escalabilidade, flexibilidade e resiliência, permitindo lidar com cargas variáveis, garantir alta disponibilidade e facilitar a manutenção e o gerenciamento do sistema.

Quando falamos em "clusterizar" uma aplicação, estamos basicamente falando sobre torná-la capaz de crescer conforme necessário e continuar funcionando sem problemas quando mais pessoas a utilizam. Isso é importante porque, se muitas pessoas acessarem a aplicação ao mesmo tempo, ela pode ficar lenta ou até mesmo parar de funcionar.

Aqui está uma explicação passo a passo sobre como isso funciona:

1. **O que são processos filhos?**
   - Imagine que sua aplicação é como uma equipe de trabalhadores em uma fábrica. Cada trabalhador é como um processo filho da aplicação.
   - Se a fábrica fica muito movimentada, você contrata mais trabalhadores para ajudar. Da mesma forma, se muitas pessoas estão usando sua aplicação, você pode criar mais processos filhos para lidar com essa demanda.
2. **Balanceamento de carga:**
   - Agora, imagine que você tem uma pessoa que distribui o trabalho entre os trabalhadores da fábrica para garantir que todos estejam ocupados, mas não sobrecarregados. Essa pessoa é como um balanceador de carga.
   - O balanceador de carga garante que as requisições dos usuários sejam distribuídas de maneira equilibrada entre os diferentes processos filhos da aplicação.
3. **Como os processos filhos se comunicam?**
   - Os processos filhos precisam conversar entre si para coordenar o trabalho. Isso é como os trabalhadores da fábrica que precisam se comunicar para garantir que tudo funcione sem problemas.
   - Eles usam diferentes formas de comunicação, como enviar mensagens ou compartilhar informações em um quadro de avisos.
4. **Monitoramento e gerenciamento:**
   - É importante ficar de olho em como os processos filhos estão trabalhando para garantir que tudo funcione bem.
   - Assim como você pode verificar o desempenho dos trabalhadores na fábrica para garantir que eles estejam produzindo bem, você também precisa monitorar o desempenho dos processos filhos da sua aplicação.
   - Se necessário, você pode adicionar mais processos filhos ou removê-los com base na demanda.

Então, clusterizar uma aplicação é como organizar uma fábrica de forma inteligente: você tem mais trabalhadores quando há muito trabalho, eles se comunicam para coordenar suas tarefas e tudo é gerenciado para garantir que a fábrica (ou sua aplicação) funcione sem problemas mesmo em momentos de alta demanda.

**Módulo nativo**

**cluster**

O módulo nativo `cluster` é uma parte do ambiente Node.js que permite criar aplicações multithreaded (multitarefa), também conhecidas como clusterizadas. Vamos entender o que isso significa e para que serve:

1. **O que é o módulo `cluster`?**
   - O módulo `cluster` é uma funcionalidade integrada ao Node.js que facilita a criação de aplicações escaláveis e de alto desempenho.
   - Ele permite que você crie múltiplas instâncias de um processo Node.js (trabalhadores ou workers) que compartilham a mesma porta de rede. Cada instância é um processo independente, mas eles trabalham juntos para lidar com as requisições dos usuários.

2. **Para que serve o módulo `cluster`?**
   - **Escalabilidade Horizontal:** O principal objetivo do `cluster` é melhorar a capacidade de resposta e a escalabilidade horizontal de uma aplicação Node.js. Isso significa que a aplicação pode lidar com um maior número de requisições e usuários simultâneos sem perder desempenho.
   - **Aproveitamento de Recursos:** Ao criar múltiplas instâncias do processo Node.js, você pode aproveitar melhor os recursos do servidor, como múltiplos núcleos de CPU. Cada instância pode ser distribuída em um núcleo diferente, o que melhora a eficiência e o desempenho global da aplicação.
   - **Balanceamento de Carga:** O `cluster` facilita o balanceamento de carga entre as instâncias (workers) da aplicação. Um balanceador de carga pode distribuir as requisições entre os workers de forma equilibrada, garantindo que cada worker não fique sobrecarregado.
   - **Resiliência e Tolerância a Falhas:** Se uma instância do worker falhar por algum motivo, o `cluster` é capaz de detectar esse problema e iniciar uma nova instância automaticamente. Isso aumenta a resiliência da aplicação e garante que ela continue funcionando mesmo em situações de falha.

Em resumo, o módulo `cluster` do Node.js é uma ferramenta poderosa para criar aplicações escaláveis, eficientes e resilientes, permitindo que você aproveite ao máximo os recursos do seu servidor e melhore a experiência dos usuários, especialmente em ambientes de alta demanda.

A propriedade `cluster.isPrimary é uma propriedade do módulo `cluster` do Node.js que retorna `true` se o processo atual é o processo mestre (master) no cluster Node.js. Essa propriedade é muito útil para escrever código que se comporta de maneira diferente com base no papel do processo no cluster.

O uso principal de `cluster.isMaster` é para distinguir entre o processo mestre e os processos filhos (workers) dentro de um cluster Node.js. Aqui está um exemplo simples de como você pode usá-lo:

```javascript
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Processo mestre (PID ${process.pid})`);

  // Cria workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Gerenciamento dos workers
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker (PID ${worker.process.pid}) encerrado`);
    // Cria um novo worker em caso de encerramento
    cluster.fork();
  });
} else {
  // Lógica para workers
  console.log(`Worker (PID ${process.pid}) iniciado`);

  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello World\n');
  }).listen(8000);
}
```

Neste exemplo:

- O processo mestre (master) verifica se é o processo mestre usando `cluster.isMaster`.
- Se for o processo mestre, ele cria vários processos filhos (workers) usando `cluster.fork()` para aproveitar o máximo possível do hardware disponível.
- O processo mestre também gerencia os processos filhos, reiniciando-os automaticamente se algum deles falhar (usando o evento `exit`).

Por outro lado, se o processo não for o processo mestre, ele é considerado um dos processos filhos (workers) e executa a lógica específica para os workers (no caso, criar um servidor HTTP).

Em resumo, `cluster.isMaster` é usado para determinar se o processo atual é o processo mestre no cluster Node.js e, assim, tomar decisões com base nessa informação, como a criação de processos filhos ou a execução de lógica específica para workers.

### **Conteiners** **com** **Docker**

### Docker: O Que É e Para Que Serve

#### O Que É Docker?

Docker é uma plataforma de software que permite criar, testar e implantar aplicativos rapidamente. Docker empacota software em unidades padronizadas chamadas contêineres, que têm tudo o que o software precisa para rodar, incluindo bibliotecas, ferramentas de sistema, código e runtime. Isso garante que o aplicativo funcione de maneira consistente, independentemente do ambiente em que está sendo executado.

#### Para Que Serve Docker?

Docker é amplamente utilizado para melhorar o fluxo de trabalho de desenvolvimento, integração contínua, entrega contínua (CI/CD) e operações em nuvem. Aqui estão algumas das principais vantagens e casos de uso de Docker:

1. **Isolamento de Aplicativos**:
   - Cada aplicativo roda em seu próprio contêiner, isolado dos outros. Isso significa que você pode executar várias versões de uma aplicação ou diferentes aplicações sem conflitos.

2. **Portabilidade**:
   - Contêineres Docker podem ser executados em qualquer ambiente que tenha o Docker instalado, seja um laptop, um servidor local ou na nuvem. Isso facilita o movimento de aplicativos entre ambientes de desenvolvimento, teste e produção.

3. **Consistência e Reprodutibilidade**:
   - Docker garante que o software funcione de maneira consistente em diferentes ambientes, eliminando o clássico problema de "funciona na minha máquina".

4. **Escalabilidade**:
   - Contêineres podem ser facilmente escalados horizontalmente. Ferramentas como Docker Swarm e Kubernetes permitem gerenciar e orquestrar um grande número de contêineres em um cluster.

5. **Eficiência de Recursos**:
   - Contêineres compartilham o kernel do sistema operacional e outros recursos de forma eficiente, permitindo um uso mais denso dos recursos de hardware em comparação com máquinas virtuais.

6. **Integração Contínua e Entrega Contínua (CI/CD)**:
   - Docker facilita a criação de pipelines CI/CD, permitindo que desenvolvedores integrem código e implantem aplicativos rapidamente e de maneira confiável.

7. **Ambientes de Desenvolvimento Isolados**:
   - Desenvolvedores podem criar ambientes de desenvolvimento isolados e descartáveis para experimentar com segurança, sem impactar o ambiente principal.

### Conceitos Básicos do Docker

1. **Imagem Docker (Docker Image)**:
   - Uma imagem é um pacote imutável que contém tudo o que um aplicativo precisa para ser executado. É a base dos contêineres.

2. **Contêiner Docker (Docker Container)**:
   - Um contêiner é uma instância em execução de uma imagem Docker. Ele é leve e isolado, com seu próprio sistema de arquivos, rede e espaço de processo.

3. **Dockerfile**:
   - Um Dockerfile é um script de configuração que define como criar uma imagem Docker. Ele contém uma série de comandos que são executados para montar a imagem.

4. **Docker Hub**:
   - Um repositório público para armazenar e compartilhar imagens Docker. Docker Hub é uma das várias opções de registro de imagens.

### Exemplo Básico de Uso do Docker

Aqui está um exemplo básico de como usar o Docker para criar e executar uma aplicação Node.js:

1. **Crie um arquivo `Dockerfile`**:

   ```Dockerfile
   # Use a imagem base oficial do Node.js
   FROM node:14
   
   # Crie o diretório de trabalho no contêiner
   WORKDIR /app
   
   # Copie o arquivo package.json e package-lock.json para o diretório de trabalho
   COPY package*.json ./
   
   # Instale as dependências do aplicativo
   RUN npm install
   
   # Copie o restante do código do aplicativo para o diretório de trabalho
   COPY . .
   
   # Exponha a porta em que o aplicativo vai rodar
   EXPOSE 3000
   
   # Comando para iniciar o aplicativo
   CMD ["node", "app.js"]
   ```

2. **Construa a imagem Docker**:

   ```bash
   docker build -t meu-app-node .
   ```

3. **Execute um contêiner a partir da imagem**:

   ```bash
   docker run -p 3000:3000 -d meu-app-node
   ```

Neste exemplo:

- O `Dockerfile` define as etapas para construir uma imagem Docker que contém uma aplicação Node.js.
- O comando `docker build` cria a imagem.
- O comando `docker run` cria e inicia um contêiner a partir da imagem, mapeando a porta 3000 do contêiner para a porta 3000 da máquina host.

### Conclusão

Docker é uma ferramenta poderosa que facilita a criação, implantação e execução de aplicativos em ambientes isolados e consistentes. Sua capacidade de garantir que o software funcione de maneira uniforme em diferentes ambientes faz dele uma escolha popular para desenvolvimento moderno, CI/CD, e operações em nuvem.

**O que são máquinas virtuais?**

Máquinas virtuais (VMs) são emulações de sistemas computacionais que fornecem a funcionalidade completa de um computador físico. Elas são executadas em um host (computador físico) e compartilham os recursos físicos do host, como CPU, memória, armazenamento e rede. Cada VM tem seu próprio sistema operacional e aplicativos, funcionando como um computador independente.

Enquanto VMs emulam o hardware completo e contêm um sistema operacional completo, contêineres compartilham o kernel do sistema operacional host e são mais leves. Contêineres, como os do Docker, são mais eficientes em termos de recursos e oferecem tempos de inicialização mais rápidos, mas as VMs oferecem um isolamento mais forte e são melhores para rodar sistemas operacionais diferentes no mesmo host.



### O Que São Contêineres?

#### Definição

Contêineres são unidades de software que empacotam o código e todas as suas dependências para que uma aplicação possa ser executada de maneira rápida e confiável de um ambiente de computação para outro. Eles fornecem uma forma de virtualização em nível de sistema operacional, onde várias aplicações podem ser executadas em contêineres isolados no mesmo sistema operacional

Claro! Vamos explicar de forma simples o que são imagens Docker e contêineres, e como eles se relacionam.

### O que é uma Imagem Docker?

Uma **imagem Docker** é como um **modelo** ou uma **fotografia instantânea** de um ambiente de software. Ela contém tudo o que você precisa para rodar uma aplicação: código, bibliotecas, dependências, configurações e o próprio sistema operacional.

Pense em uma imagem Docker como uma **receita** que descreve como fazer uma cópia exata de um prato. Essa receita inclui todos os ingredientes (dependências e bibliotecas) e instruções (configurações e código) para preparar o prato (executar a aplicação).

### O que é um Contêiner?

Um **contêiner** é uma **instância** ou uma **execução** de uma imagem Docker. Se a imagem é a receita, o contêiner é o prato pronto que você pode realmente usar e comer.

Quando você roda um contêiner, você está pegando a receita (imagem Docker) e criando uma cópia funcional dela, que pode ser executada em qualquer lugar. Cada contêiner é isolado, o que significa que ele tem seus próprios recursos (como CPU e memória) e não interfere com outros contêineres.

### Como Funciona na Prática?

1. **Criar uma Imagem Docker**:
   - Você cria um `Dockerfile` que contém as instruções para construir a imagem.
   - O Dockerfile especifica a partir de qual imagem base começar (como `node:14`), copia o código-fonte, instala dependências e configura a aplicação.

2. **Construir a Imagem**:
   - Você usa o comando `docker build` para construir a imagem a partir do Dockerfile.
   - Docker lê o Dockerfile e cria uma imagem que pode ser usada para rodar a aplicação.

3. **Executar um Contêiner**:
   - Você usa o comando `docker run` para criar e executar um contêiner a partir da imagem.
   - Docker pega a imagem, cria um contêiner isolado e roda a aplicação dentro desse contêiner.

### Exemplos Práticos

Vamos pegar o exemplo do nosso projeto Express para ilustrar:

#### Dockerfile

```Dockerfile
# Usar a imagem base oficial do Node.js
FROM node:14

# Configurar o diretório de trabalho no contêiner
WORKDIR /app

# Copiar package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar o restante do código para o diretório de trabalho
COPY . .

# Expôr a porta que a aplicação usará
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
```

#### Construir e Executar

1. **Construir a Imagem Docker:**

   ```bash
   docker build -t meu-projeto .
   ```

   Isso cria uma imagem chamada `meu-projeto` a partir do Dockerfile.

2. **Executar o Contêiner:**

   ```bash
   docker run -p 3000:3000 meu-projeto
   ```

   Isso cria e executa um contêiner a partir da imagem `meu-projeto`, mapeando a porta 3000 do contêiner para a porta 3000 do seu host (seu computador).

### Resumo

- **Imagem Docker**: Receita que descreve como criar um ambiente de software.
- **Contêiner**: Instância funcional da imagem Docker, que executa a aplicação em um ambiente isolado.
- **Dockerfile**: Arquivo que contém as instruções para construir a imagem Docker.
- **Construir uma Imagem**: Criar uma imagem Docker a partir de um Dockerfile.
- **Rodar um Contêiner**: Criar e executar um contêiner a partir de uma imagem Docker.

Docker permite que desenvolvedores criem, testem e executem suas aplicações de forma consistente e isolada, independentemente do ambiente onde elas estão sendo executadas.