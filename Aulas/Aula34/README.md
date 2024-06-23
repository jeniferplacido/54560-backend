# **Logging e performance**

No contexto do desenvolvimento back-end com Node.js, **logging** (ou registro) e **monitoramento de performance** são práticas para garantir a saúde, a segurança e a eficiência das aplicações. 

### Logging (Registro de Logs)

Logging é o processo de registrar informações sobre o comportamento de uma aplicação durante sua execução. Essas informações podem incluir eventos importantes, erros, advertências, informações de depuração e qualquer outro dado relevante.

**Para que serve:**

**Depuração:** Ajuda os desenvolvedores a entenderem o que está acontecendo dentro da aplicação e a identificar e corrigir bugs.

**Auditoria:** Registra eventos de interesse, como acessos de usuários, operações críticas e mudanças no sistema, que podem ser usados para fins de segurança e conformidade.

**Monitoramento:** Permite acompanhar o comportamento da aplicação ao longo do tempo, identificando padrões, tendências e anomalias.

**Análise de Erros:** Facilita a investigação de falhas e a determinação de suas causas raízes.

**Ferramentas Comuns:**

- **Winston:** Um dos loggers mais populares no ecossistema Node.js, permitindo criar logs com diferentes níveis de severidade e armazená-los em diferentes destinos (arquivos, bases de dados, etc.).
- **Morgan:** Usado principalmente para registrar requisições HTTP em aplicações Express.
- **Log4js:** Inspirado na biblioteca Log4j do Java, é outro logger flexível e configurável.

### Performance Monitoring (Monitoramento de Performance)

O monitoramento de performance envolve a coleta, análise e visualização de métricas que refletem o desempenho da aplicação, como tempo de resposta, uso de CPU, memória, latência, throughput, entre outras.

**Para que serve:**

**Otimização:** Identifica gargalos e partes da aplicação que podem ser otimizadas para melhorar a performance.

**Escalabilidade:** Fornece dados que ajudam a planejar a escalabilidade da aplicação, garantindo que ela possa lidar com aumentos na carga de trabalho.

**Experiência do Usuário:** Ajuda a assegurar que os usuários tenham uma experiência rápida e responsiva.

**Disponibilidade:** Detecta problemas de desempenho que podem levar a indisponibilidade da aplicação e ajuda a preveni-los.

**O console como uma barreira no performance**

No desenvolvimento de aplicações Node.js, o uso do `console` para logging pode impactar negativamente a performance da aplicação. Isso ocorre porque operações de I/O (Input/Output) são inerentemente mais lentas e podem bloquear a execução de outras operações.

**Solução: Loggers!**

A adoção de loggers é a solução recomendada para resolver os problemas de performance e gerenciamento de logs em aplicações Node.js. Loggers são ferramentas projetadas especificamente para lidar com logs de maneira eficiente, flexível e escalável.

### **Winston Logger**

### O que é o Winston Logger?

Winston é uma biblioteca de logging que oferece uma interface fácil de usar para registrar mensagens de log com diferentes níveis de severidade e formatos. Ele suporta múltiplos "transports", que são destinos onde os logs podem ser enviados, como arquivos, a console, bancos de dados, sistemas de monitoramento, entre outros.

### Para que serve o Winston Logger?

Winston serve para gerenciar de maneira eficaz os logs de uma aplicação. Algumas das principais funções e vantagens de usar Winston incluem:

**Registro de Logs com Níveis de Severidade**:

- Permite registrar mensagens com diferentes níveis de severidade, como 'error', 'warn', 'info', 'verbose', 'debug', e 'silly'.
- Isso facilita filtrar e priorizar mensagens de log, dependendo da necessidade (por exemplo, mostrar apenas erros em produção, mas todas as mensagens em desenvolvimento).

**Destinos Múltiplos (Transports)**:

- Suporta múltiplos destinos para logs. Por exemplo, você pode configurar Winston para registrar erros em um arquivo e todas as outras mensagens no console.
- Transports podem ser adicionados ou removidos dinamicamente, permitindo flexibilidade na gestão dos logs.

**Formato Personalizado de Logs**:

- Winston permite configurar o formato das mensagens de log, incluindo adicionar timestamps, formatar como JSON, ou usar qualquer outra formatação necessária.
- Isso facilita a leitura e análise dos logs, especialmente em sistemas complexos.

**Gestão de Logs Assíncronos**:

- Muitos transports em Winston suportam logging assíncrono, o que melhora a performance da aplicação, evitando o bloqueio do evento loop.

**Rotação de Logs**:

- Suporta a rotação de logs, onde arquivos de log são rotacionados e arquivados após atingirem um certo tamanho ou idade. Isso ajuda a gerenciar o espaço de armazenamento usado pelos logs.

**Extensibilidade**:

- Winston é extensível e permite a criação de transports personalizados para atender a necessidades específicas.

No Winston, os conceitos de "transports" e "níveis de log" são fundamentais para configurar e gerenciar como e onde os logs são armazenados e quais tipos de mensagens são registradas.

### Transports

**Transports** são destinos ou meios através dos quais as mensagens de log são enviadas. Winston permite configurar múltiplos transports, e cada transport pode ser configurado independentemente para registrar logs de diferentes níveis de severidade e em diferentes formatos.

#### Tipos Comuns de Transports

**Console Transport**: Envia logs para a console (stdout).

```
new winston.transports.Console()
```

**File Transport**: Escreve logs em um arquivo.

```
new winston.transports.File({ filename: 'combined.log' })
```

**HTTP Transport**: Envia logs para um endpoint HTTP.

```
new winston.transports.Http({ host: 'logserver', port: 9000, path: '/log' })
```

**Stream Transport**: Envia logs para um stream arbitrário (por exemplo, um stream de rede).

```
new winston.transports.Stream({ stream: someWritableStream })
```

**Custom Transports**: Você pode criar e usar transports personalizados para atender a necessidades específicas.

### Níveis de Log

Os **níveis de log** determinam a severidade das mensagens de log e permitem filtrar quais mensagens devem ser registradas. Winston usa um conjunto de níveis de log que podem ser personalizados. Por padrão, Winston usa os seguintes níveis (do mais severo ao menos severo):

**error**: Indica um erro que causa falha na execução da aplicação.

**warn**: Indica um problema que não impede a execução, mas é importante.

**info**: Informação geral sobre a execução normal da aplicação.

**http**: Mensagens relacionadas a requisições HTTP.

**verbose**: Informações detalhadas sobre a execução da aplicação.

**debug**: Informações usadas para depuração.

**silly**: Informações extremamente detalhadas.

### **Teste de Performance**

O servidor que você desenvolveu usando o Express e o Winston Logger pode ser implantado e usado em um ambiente de produção no mundo real. No entanto, antes de fazer isso, é importante realizar testes de carga e garantir que o servidor possa lidar com a quantidade de solicitações que você espera receber.

## **Artillery**

Artillery é uma ferramenta de teste de carga e desempenho desenvolvida em JavaScript para testar a escalabilidade e o desempenho de aplicativos e sistemas. Ele é amplamente utilizado para simular cargas de solicitações em servidores, APIs, microserviços e outros sistemas, a fim de avaliar como esses sistemas se comportam sob condições de uso intensivo.

### Principais Recursos e Funcionalidades do Artillery:

**Testes de Carga Simples e Complexos**:
O Artillery permite criar testes de carga simples ou complexos, com cenários personalizados, fluxos de usuários, tempos de resposta esperados, entre outros parâmetros.

**Simulação de Cargas Realistas**:
Ele pode simular várias cargas de tráfego, como picos de tráfego, aumento gradual de usuários, solicitações simultâneas, e mais, para reproduzir situações reais de uso.

**Métricas e Relatórios Detalhados**:
O Artillery gera métricas detalhadas durante os testes, incluindo tempos de resposta, taxas de erro, latência, transações por segundo, entre outros, para ajudar na análise de desempenho.

**Configuração Flexível**:
Possui uma configuração flexível que permite ajustar vários parâmetros, como o número de usuários virtuais, intervalos de espera, padrões de solicitações, entre outros.

**Suporte a Diversos Protocolos**:
Pode testar sistemas que utilizam diferentes protocolos de comunicação, como HTTP, WebSocket, gRPC, TCP, etc.

**Integração com Ferramentas de Monitoramento**:
Pode ser integrado com ferramentas de monitoramento e análise, como Grafana e New Relic, para uma visão mais abrangente do desempenho do sistema.

### Como Usar o Artillery:

**Instalação**:
Primeiro, você precisa instalar o Artillery globalmente através do npm:

```
npm install -g artillery
```

**Criação de Cenários**:
Crie um arquivo YAML ou JSON com a configuração do seu teste de carga, incluindo cenários, etapas, solicitações, parâmetros, etc.

**Execução do Teste**:
Execute o teste de carga usando o comando `artillery run` e especifique o arquivo de configuração que você criou:

```
artillery run seu-arquivo-de-configuracao.yaml
```

**Análise de Resultados**:
Após a execução do teste, o Artillery gera relatórios detalhados com métricas e estatísticas sobre o desempenho do sistema. Analise esses resultados para identificar possíveis gargalos e otimizações.

O Artillery é uma ferramenta poderosa para ajudar a garantir que seus sistemas possam lidar com uma carga de tráfego significativa sem comprometer o desempenho e a estabilidade.