### 1. Introdução aos Bancos de Dados

#### O que é um banco de dados?

Um banco de dados é um sistema organizado de armazenamento de informações que permite o gerenciamento eficiente, organização e recuperação de dados.

#### Persistência: O grande problema

Antes dos bancos de dados, os dados eram frequentemente armazenados em arquivos, o que levava a problemas de perda de dados devido a falhas de hardware ou software.

#### A necessidade de mudança

A necessidade de uma solução mais confiável e eficiente para armazenar dados levou ao desenvolvimento de sistemas de banco de dados.

#### Por que um banco de dados é útil?

- Organização estruturada dos dados
- Acesso rápido e eficiente aos dados
- Controle de integridade e segurança dos dados
- Facilidade de compartilhamento e colaboração

------

### 2. Arquivos vs. Banco de Dados

#### Quão trabalhoso é fazer isso com arquivos?

Gerenciar dados com arquivos pode ser trabalhoso e propenso a erros, exigindo a implementação de funções para manipulação de arquivos, controle de acesso e garantia de integridade dos dados.

#### Comparação entre FileSystem e Banco de Dados

- **FileSystem:** Arquivos individuais, acesso limitado e vulnerabilidade a perda de dados.
- **Banco de Dados:** Estrutura organizada, acesso facilitado e maior segurança e integridade dos dados.

------

### 3. Modelos de Banco de Dados

#### Modelo Relacional e Não Relacional

- **Modelo Relacional:** Baseado em tabelas relacionadas por chaves estrangeiras.
- **Modelo Não Relacional:** Armazena dados de forma mais flexível, como documentos, grafos ou pares chave-valor.

#### O problema dos bancos de dados relacionais

Os bancos de dados relacionais podem ser rígidos em termos de esquema e têm dificuldade em lidar com dados não estruturados.

#### Quando usar cada modelo?

- **Modelo Relacional:** Estruturas de dados bem definidas e consultas complexas.
- **Modelo Não Relacional:** Flexibilidade no esquema e escalabilidade.

------

### 4. Gestão de Arquivos com Multer

#### O que é Multer?

Multer é uma middleware para Node.js que facilita o upload de arquivos.

#### Instalar Multer e Configurar

Instale o Multer usando npm e configure-o para especificar o destino e o nome do arquivo.

#### Utilizando Multer

Use o Multer como middleware em rotas para processar e salvar arquivos enviados pelo usuário.

#### Exemplo de Implementação Multer

Veja um exemplo prático de como implementar e usar o Multer em uma aplicação Node.js.
O código se encontra nesse repositório.

```
// Importando o módulo Multer
const multer = require('multer');

// Configuração do destino e nome do arquivo
const storage = multer.diskStorage({
    // Função para definir o diretório onde os arquivos serão salvos
    destination: function (req, file, cb) {
        // Aqui você especifica o diretório onde deseja salvar os arquivos enviados
        // No caso, 'uploads/' indica que os arquivos serão salvos na pasta 'uploads' dentro do seu projeto
        cb(null, 'uploads/');
    },
    // Função para definir o nome do arquivo
    filename: function (req, file, cb) {
        // Aqui você define como o nome do arquivo será composto
        // No exemplo, estamos usando o timestamp atual (Date.now()) para garantir que cada nome seja único
        // Em seguida, adicionamos um hífen (-) e o nome original do arquivo enviado (file.originalname)
        // Isso garante que cada arquivo tenha um nome único e identificável
        cb(null, Date.now() + '-' + file.originalname);
    }
});

// Configurando a instância do Multer com a configuração de storage que acabamos de definir
const upload = multer({ storage: storage });
```

## O que é MongoDB?

MongoDB é um banco de dados NoSQL (Not Only SQL) orientado a documentos. Isso significa que ele armazena dados em documentos flexíveis semelhantes a JSON, em vez de em tabelas como bancos de dados relacionais tradicionais. Ele é amplamente utilizado em aplicativos modernos devido à sua flexibilidade, escalabilidade e desempenho.

## Principais Conceitos do MongoDB

### Documentos

- No MongoDB, os dados são armazenados em documentos BSON (Binary JSON), que são estruturas de dados flexíveis semelhantes a JSON.
- Um documento MongoDB é uma coleção de pares de chave-valor.

### Coleções

- As coleções são grupos de documentos no MongoDB. Elas são o equivalente a tabelas em bancos de dados relacionais.
- As coleções não impõem um esquema rígido, o que significa que os documentos em uma coleção podem ter campos diferentes e não precisam seguir uma estrutura predefinida.

### Banco de Dados

- Um banco de dados MongoDB é um recipiente físico para coleções.
- Um servidor do MongoDB pode ter vários bancos de dados, cada um contendo suas próprias coleções independentes.

## Instalação do MongoDB

1. **Baixe o MongoDB:** Acesse o site oficial do MongoDB (https://www.mongodb.com/) e baixe a versão adequada para o seu sistema operacional.
2. **Instale o MongoDB:** Siga as instruções de instalação fornecidas na documentação oficial do MongoDB.
3. **Inicie o Servidor MongoDB:** Após a instalação, inicie o servidor MongoDB executando o comando apropriado para o seu sistema operacional.

## Operações Básicas no MongoDB

### 1. Conectar-se ao MongoDB:

Abra o terminal e inicie o shell do MongoDB usando o comando `mongo`. Isso conectará ao servidor MongoDB em execução na sua máquina local.

```
mongo
```

### 2. Criar um banco de dados:

Você pode criar um banco de dados usando o comando `use coders`. Se o banco de dados já existir, ele será selecionado; caso contrário, ele será criado quando você inserir dados nele.

```
use coders
```

### 3. Criar uma coleção:

Você pode criar uma coleção inserindo um documento na coleção. Quando você insere um documento em uma coleção que ainda não existe, a coleção é criada automaticamente.

```
db.alunos.insertOne({ nome: "Jeni", idade: 33 })
```

### 4. Inserir usuários na coleção:

Você pode inserir documentos na coleção usando o método `insertOne()` ou `insertMany()`.

```
db.alunos.insertOne({ nome: "Jeni", idade: 33 })
db.alunos.insertMany([
    { nome: "Daniel", idade: 18 },
    { nome: "Guilherme", idade: 19 },
    { nome: "Gabriel", idade: 24 }
])
```

### 5. Visualizar o banco de dados, coleção e documentos:

Você pode usar vários comandos para visualizar o banco de dados, as coleções e os documentos inseridos.

- Listar todos os bancos de dados:

```
show dbs
```

- Selecionar um banco de dados específico:

```
use coders
```

- Listar todas as coleções no banco de dados atual:

```
show collections
```

- Visualizar todos os documentos em uma coleção:

```
db.alunos.find()
```