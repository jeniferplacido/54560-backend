# **Arquitetura do servidor: Persistência**

**Padrão DAO**

**(Data Access Object)**

O padrão DAO (Data Access Object) é um design pattern usado em software para abstrair e encapsular todas as interações com a fonte de dados. O objetivo do DAO é proporcionar uma camada de abstração entre a aplicação e os detalhes de persistência de dados, permitindo que a aplicação interaja com a base de dados de uma maneira agnóstica em relação ao tipo de banco de dados ou API de acesso usada. 

### Componentes do Padrão DAO

 **DAO Interface**: Define as operações que podem ser executadas no banco de dados (CRUD - Create, Read, Update, Delete). É uma abstração que não inclui detalhes de implementação.

 **DAO Implementação**: Fornece a implementação concreta da interface DAO, contendo o código específico para acessar a base de dados. Aqui estão os detalhes de conexão e manipulação dos dados.

 **Modelo de Dados**: Representa a estrutura dos dados que serão manipulados pelo DAO, geralmente sob a forma de classes que mapeiam para tabelas no banco de dados.

### Benefícios do Padrão DAO

 **Abstração da Persistência de Dados**: A lógica de acesso a dados é separada da lógica de negócios, permitindo mudanças no banco de dados sem impactar a lógica da aplicação.

 **Manutenibilidade**: Facilita a manutenção e evolução do código, pois as mudanças na lógica de acesso a dados são confinadas ao DAO.

 **Reusabilidade**: Promove a reutilização do código de acesso a dados, já que o DAO pode ser usado por diferentes partes da aplicação.

 **Testabilidade**: Facilita a criação de testes unitários, permitindo a simulação do comportamento do banco de dados.

O padrão DAO é uma prática recomendada para a separação de preocupações em aplicações, especialmente quando se lida com operações de banco de dados complexas. Ele proporciona uma maneira estruturada e organizada de acessar e manipular dados, melhorando a manutenibilidade e escalabilidade da aplicação.

### **Design Pattern Factory**

O Design Pattern Factory, ou Padrão de Projeto Fábrica, é um padrão de criação que fornece uma interface para criar objetos em uma superclasse, mas permite que as subclasses alterem o tipo de objetos que serão criados. Este padrão promove a responsabilidade de instanciar uma classe para subclasses, facilitando a extensão e a manutenção do código.

O principal objetivo do padrão Factory é delegar a responsabilidade de criar instâncias de classes para uma classe especial chamada Fábrica. Isso é especialmente útil quando o processo de criação é complexo ou depende de condições específicas.

### Quando Usar o Padrão Factory

- **Quando a criação do objeto envolve lógica complexa:** Se a criação de um objeto é um processo complicado, o padrão Factory encapsula essa complexidade.
- **Quando o código depende de interfaces e não de implementações concretas:** Permite mudar facilmente a implementação concreta sem modificar o código que depende dela.
- **Para facilitar a extensão do código:** Novas subclasses podem ser adicionadas sem alterar o código existente, apenas estendendo a fábrica.

### Benefícios do Padrão Factory

- **Encapsulamento da criação de objetos:** Oculta os detalhes de criação do objeto do cliente.
- **Facilita a manutenção e extensão do código:** Mudanças na lógica de criação ou na implementação das classes podem ser feitas na fábrica sem afetar os clientes.
- **Suporte para interfaces:** Permite que o código trabalhe com interfaces em vez de classes concretas, facilitando a troca de implementações.

### **DTO**

**Data Transfer Object**

DTO, ou **Data Transfer Object**, é um padrão de design usado para transferir dados entre diferentes partes de um sistema, especialmente em operações de comunicação entre subsistemas, como entre a camada de apresentação e a camada de persistência, ou entre uma aplicação cliente e um servidor.

### Objetivo do DTO

O principal objetivo do DTO é encapsular os dados e transportá-los de um ponto a outro de uma aplicação, reduzindo o número de chamadas entre componentes e facilitando a serialização e deserialização de dados.

### Quando Usar DTOs

- **Redução de Chamadas Remotas:** Quando um sistema envolve chamadas remotas (como em serviços web), reduzir o número de chamadas pode melhorar a performance. Um DTO pode encapsular múltiplos dados em uma única chamada.
- **Segregação de Dados:** Para separar a lógica de negócio dos dados transferidos, mantendo o código mais limpo e organizado.
- **Transferência de Dados Entre Diferentes Camadas:** Em arquiteturas de múltiplas camadas, como MVC (Model-View-Controller), os DTOs ajudam a transferir dados entre as camadas sem expor a lógica interna.

### Benefícios do DTO

- **Desempenho Melhorado:** Agrupa múltiplas informações em uma única transferência, reduzindo a sobrecarga de comunicação.
- **Encapsulamento de Dados:** Proporciona uma maneira clara e definida de encapsular e transferir dados.
- **Segurança:** Pode filtrar ou transformar dados para garantir que apenas a informação necessária é transferida.

### **Padrão de** **design** **Repository**

O Padrão de Design Repository é um padrão amplamente utilizado em desenvolvimento de software, especialmente em aplicações que seguem o padrão de arquitetura MVC (Model-View-Controller) ou que adotam uma abordagem baseada em camadas. Esse padrão tem como objetivo separar a lógica de negócio da camada de acesso a dados, proporcionando uma forma mais organizada e flexível de lidar com operações de leitura e escrita em um banco de dados ou outra fonte de dados.

### Objetivo do Padrão Repository

O objetivo principal do padrão Repository é abstrair o acesso aos dados, fornecendo métodos e interfaces consistentes para realizar operações de CRUD (Create, Read, Update, Delete) em uma fonte de dados, como um banco de dados. Ele promove a modularização do código e facilita a substituição da fonte de dados sem impactar a lógica de negócio.

### Quando Usar o Padrão Repository

- **Abstração do Acesso a Dados:** Quando você precisa abstrair o acesso a uma fonte de dados para facilitar a manutenção e a evolução do sistema.
- **Separação de Responsabilidades:** Para separar claramente a lógica de negócio da camada de persistência de dados.
- **Flexibilidade e Testabilidade:** Para facilitar a substituição da fonte de dados por mocks ou bancos de dados de teste durante os testes unitários.

### Componentes do Padrão Repository

1. **Interface do Repositório (Repository Interface):** Define os métodos padrão para operações CRUD que serão implementados pelo Repositório Concreto.
2. **Repositório Concreto (Concrete Repository):** Implementa a Interface do Repositório e lida com as operações concretas de acesso a dados.
3. **Modelo de Dados (Data Model):** Representa as entidades ou objetos de dados que serão manipulados pelo Repositório.

### Benefícios do Padrão Repository

- **Abstração do Acesso a Dados:** Facilita a troca da fonte de dados sem modificar a lógica de negócio.
- **Separação de Responsabilidades:** Promove uma arquitetura mais organizada e modular.
- **Facilita os Testes:** Permite a substituição da fonte de dados por mocks ou bancos de dados de teste durante os testes unitários.

