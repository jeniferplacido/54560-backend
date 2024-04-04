### CRUD no MongoDB: O que Significa?

No MongoDB, CRUD é uma abordagem que nos permite interagir com os dados armazenados no banco de dados. As quatro operações principais são:

- **Create (Criar)**: Adicionar novos dados ao banco de dados.
- **Read (Ler)**: Recuperar dados existentes do banco de dados.
- **Update (Atualizar)**: Modificar dados existentes no banco de dados.
- **Delete (Excluir)**: Remover dados do banco de dados.

### Como Aplicar o CRUD no MongoDB?

#### 1. Create (Criar)

Para criar novos dados no MongoDB, usamos o método `insertOne` ou `insertMany`. Isso nos permite adicionar um único documento ou vários documentos a uma coleção.

Exemplo:

```
db.minhaColecao.insertOne({ nome: "Jeni", idade: 33 });
```

#### 2. Read (Ler)

Para ler dados do MongoDB, usamos o método `find`. Isso nos permite recuperar documentos de uma coleção que correspondem a um determinado critério de pesquisa.

Exemplo:

```
db.minhaColecao.find();
```

#### 3. Update (Atualizar)

Para atualizar dados no MongoDB, usamos o método `updateOne` ou `updateMany`. Isso nos permite modificar um único documento ou vários documentos que correspondem a um critério de pesquisa.

Exemplo:

```
db.minhaColecao.updateOne({ nome: "Jeni" }, { $set: { idade: 34 } });
```

#### 4. Delete (Excluir)

Para excluir dados do MongoDB, usamos o método `deleteOne` ou `deleteMany`. Isso nos permite remover um único documento ou vários documentos que correspondem a um critério de pesquisa.

Exemplo:

```
db.minhaColecao.deleteOne({ nome: "Jeni });
```

O CRUD no MongoDB é uma abordagem simples e poderosa para criar, ler, atualizar e excluir dados em um banco de dados NoSQL. Com essas operações básicas, podemos interagir com nossos dados de forma eficiente e flexível.

### Comandos para Gerenciamento de Bancos de Dados e Coleções:

1. **show dbs**: Mostra todos os bancos de dados disponíveis.
2. **use <nome_do_banco>**: Muda para o banco de dados especificado ou cria um novo se não existir.
3. **show collections**: Mostra todas as coleções no banco de dados atual.
4. **db.createCollection("nome_da_colecao")**: Cria uma nova coleção no banco de dados atual.
5. **db.dropDatabase()**: Exclui o banco de dados atual.
6. **db.nome_da_colecao.drop()**: Exclui a coleção especificada.

### Comandos para Consultas e Manipulação de Dados:

1. **db.nome_da_colecao.find()**: Retorna todos os documentos na coleção especificada.
2. **db.nome_da_colecao.findOne()**: Retorna o primeiro documento que corresponde à consulta na coleção.
3. **db.nome_da_colecao.insertOne({dados})**: Insere um novo documento na coleção.
4. **db.nome_da_colecao.updateOne({filtro}, {atualizacao})**: Atualiza um único documento na coleção que corresponde ao filtro especificado.
5. **db.nome_da_colecao.deleteOne({filtro})**: Exclui um único documento na coleção que corresponde ao filtro especificado.
6. **db.nome_da_colecao.aggregate([{pipeline}])**: Realiza operações de agregação na coleção, como agrupamento, classificação e projeção.

#### **CONTAGEM DE DADOS**

A contagem de dados, como o próprio nome sugere, refere-se ao processo de determinar o número total de documentos em uma coleção em um banco de dados. Em um contexto de banco de dados, os documentos podem ser considerados como registros individuais, cada um contendo informações específicas.

Quando precisamos entender quantos documentos existem em uma coleção, podemos usar comandos específicos para contar esses documentos. No MongoDB, alguns comandos comuns para realizar essa contagem são:

1. **db.collection.count()**:
   - Este comando retorna o número total de documentos na coleção especificada.
2. **db.collection.countDocuments()**:
   - Semelhante ao `count()`, este comando retorna o número total de documentos na coleção especificada. No entanto, é mais flexível e pode aceitar opções de filtro adicionais para contar documentos específicos que atendem a determinados critérios.
3. **db.collection.estimatedDocumentCount()**:
   - Este comando fornece uma estimativa do número total de documentos na coleção. É mais rápido do que `countDocuments()`, mas pode não ser tão preciso em ambientes de grande escala ou com operações de banco de dados ativas.

### Outros Comandos Úteis:

1. **help**: Exibe a lista de comandos disponíveis.
2. **db.stats()**: Fornece estatísticas sobre o banco de dados atual.
3. **db.serverStatus()**: Fornece informações sobre o status do servidor MongoDB.
4. **quit()**: Sai do shell do MongoDB.

Primeiros comandos CRUD - CR

1. **db.collection.insertOne(doc)**:
   - Este comando adiciona um novo documento à coleção selecionada. Você fornece um único documento como argumento para ser inserido na coleção.
2. **db.collection.insertMany(docs)**:
   - Este comando adiciona vários documentos à coleção selecionada. Você passa uma matriz de documentos como argumento para serem inseridos na coleção.
3. **db.collection.findOne(opt)**:
   - **Este comando localiza um item que atende aos critérios de pesquisa especificados em 'opt'. Ele** retorna o primeiro documento que atende a esses critérios.
4. **db.collection.find(opt)**:
   - Este comando retorna todos os documentos que atendem aos critérios de pesquisa especificados em 'opt'. Se nenhum critério é fornecido, retorna todos os documentos na coleção.
5. **db.collection.find(opt).pretty()**:
   - O método `pretty()` é adicionado ao `find()` para tornar os resultados mais apresentáveis, formatando-os de uma forma mais legível para humanos.

### O que é `{opt}`?

No MongoDB, `{opt}` é uma abreviação para "options" (opções). Refere-se aos parâmetros ou critérios de pesquisa que podem ser passados para uma operação de consulta para controlar o comportamento da consulta e filtrar os resultados retornados.

### Para que Serve `{opt}`?

O `{opt}` serve para especificar os critérios de pesquisa e outras opções relevantes ao executar uma operação de consulta no MongoDB. Ele permite que você refine suas consultas e obtenha resultados mais precisos e relevantes, atendendo às necessidades específicas da sua aplicação.

### Como Usar `{opt}`?

O `{opt}` é usado como um parâmetro adicional em operações de consulta, como `find()`, `findOne()`, entre outras. Ele é passado como um objeto JavaScript contendo os critérios de pesquisa desejados. Aqui está um exemplo básico de como usar o `{opt}`:

```
db.minhaColecao.find({ idade: 33 });
```

Neste exemplo, `{ idade: 33 }` é o `{opt}`. Ele especifica que estamos procurando documentos na coleção `minhaColecao` onde o campo `idade` é igual a 30. Você pode adicionar várias condições de pesquisa ao `{opt}` para refinar ainda mais sua consulta.

Além dos critérios de pesquisa, o `{opt}` também pode incluir outras opções, como limitar o número de resultados retornados, especificar a ordem de classificação, projetar campos específicos nos resultados, entre outras funcionalidades avançadas.

O `{opt}` no MongoDB é uma ferramenta poderosa que permite controlar o comportamento das operações de consulta e filtrar os resultados retornados de acordo com as necessidades específicas da sua aplicação. Com uma compreensão adequada do `{opt}`, você pode escrever consultas eficientes e obter os dados desejados de forma precisa e eficaz.

**Inserção de dois dados de sexo diferente**

Então, procurando apenas aqueles que atendem a um gênero específico.

use baseCRUD



**Inserção de dois dados de sexo diferente**

### Passo 1: Criar a Coleção

Primeiro, vamos criar uma coleção chamada `pessoas`:

```
use minhaBaseDeDados;
db.createCollection("pessoas");
```

### Passo 2: Inserir Dados com Gêneros Diferentes

Agora, vamos inserir dois documentos com gêneros diferentes na coleção `pessoas`:

```
db.pessoas.insertMany([
    { nome: "Jeni", idade: 33, genero: "F" },
    { nome: "Filipe", idade: 33, genero: "M" }
]);
```

Isso criará dois documentos na coleção `pessoas`, um com o gênero "F -Feminino" e outro com o gênero "M -Masculino".

### Passo 3: Consulta para Encontrar Gênero Específico

Agora, vamos fazer uma consulta para encontrar apenas os documentos que correspondem a um gênero específico, por exemplo, "Feminino":

```
db.pessoas.find({ genero: "F" });
```

Isso retornará apenas o documento da Jeni, que tem o gênero "F -Feminino".

### Passo 1: Criar o Banco de Dados e Adicionar a Coleção

Primeiro, vamos criar o banco de dados "baseCRUD" e adicionar a coleção "pets":

```
use baseCRUD;
db.createCollection("pets");
```

### Passo 2: Adicionar 3 Animais de Estimação com Propriedades

Agora, vamos adicionar 3 animais de estimação com as propriedades especificadas (nome, espécie, idade) à coleção "pets":

```
db.pets.insertMany([
    { nome: "Bolinha", especie: "Cachorro", idade: 5 },
    { nome: "Whiskers", especie: "Gato", idade: 3 },
    { nome: "Tobby", especie: "Cachorro", idade: 2 }
]);
```

### Passo 3: Buscar os Pets por Suas Espécies

Agora, vamos buscar os pets por suas espécies. Por exemplo, para buscar todos os cachorros:

```
db.pets.find({ especie: "Cachorro" });
```

Isso retornará todos os animais de estimação da espécie "Cachorro".

### Passo 4: Contar o Número Total de Pets Adicionados

Para contar o número total de pets adicionados, podemos usar o comando `count()`:

```
db.pets.count();
```

Isso nos dará o número total de documentos na coleção "pets", que é o número total de animais de estimação adicionados



### Passo 1: Criar o Banco de Dados e Adicionar a Coleção "alunos"

```
use escola;
db.createCollection("alunos");
```

### Passo 2: Adicionar 5 Alunos com os Campos Especificados

```
db.alunos.insertMany([
    { nome: "Daniel", sobrenome: "Adamis", curso: "BackEnd", idade: 18, correspondencia: "Endereço 1", sexo: "F" },
    { nome: "Guilherme", sobrenome: "Almeida", curso: "BackEnd"}])
    { nome: "Gabriela", sobrenome: "Germano", curso: "FullStack", idade: 21, correspondencia: "Endereço 3", sexo: "F" },
    { nome: "Henrique", sobrenome: "França", curso: "Database", idade: 19, correspondencia: "Endereço 4", sexo: "M" },
    { nome: "Lucas", sobrenome: "Constabile", curso: "Database", idade: 19, correspondencia: "Endereço 5", sexo: "M" }
]);
```

### Passo 3: Criar um Aluno Apenas com Nome, Sobrenome e Curso

Sim, é possível criar um aluno com apenas nome, sobrenome e curso. MongoDB é flexível nesse aspecto:

```
db.alunos.insertOne({ nome: "Carlos", sobrenome: "Souza", curso: "Geografia" });
```

### Passo 4: Pesquisar Todos os Alunos

```
db.alunos.find();
```

### Passo 5: Pesquisar Todos os Alunos do Sexo Masculino

```
db.alunos.find({ sexo: "M" });
```

### Passo 6: Contar o Número Total de Documentos

```
db.alunos.count();
```

### Passo 7: Contar o Número Total de Documentos que Correspondem a "Ela é Mulher"

```
db.alunos.count({ sexo: "F" });
```

### O que são Filtros?

Em um banco de dados, um filtro é uma ferramenta que nos permite selecionar e encontrar registros específicos com base em certos critérios ou condições. Os filtros são usados para restringir o conjunto de dados que é retornado em uma consulta, permitindo que você encontre exatamente o que está procurando.

### Para que Servem os Filtros?

Os filtros são utilizados para:

1. **Recuperar Dados Específicos**: Permitem buscar registros que atendam a critérios específicos, como encontrar todos os clientes de uma determinada cidade ou todos os produtos de uma certa categoria.
2. **Refinar Consultas**: Permitem limitar os resultados de uma consulta para que apenas os registros desejados sejam retornados, economizando tempo e recursos.
3. **Analisar Dados**: Permitem realizar análises mais detalhadas ao selecionar apenas os dados relevantes para uma determinada questão ou problema.

No MongoDB, os filtros são especificados dentro do objeto de critérios (`opt`) usando o operador `$`. Isso permite que você defina critérios mais complexos para selecionar documentos na coleção.

A sintaxe geral para filtros no MongoDB é:

```
db.collection.find({ key: { $operator: value } });
```

- `db.collection.find()`: Esta é a operação de consulta que busca documentos na coleção especificada.
- `{ key: { $operator: value } }`: Este é o objeto de critérios onde especificamos o campo (`key`) que estamos filtrando, o operador (`$operator`) que estamos usando para a comparação e o valor (`value`) com o qual estamos comparando.

### Exemplos de Operadores Comuns no MongoDB:

1. **$eq**: Equivalente a igualdade (`==`).
2. **$ne**: Não é igual (`!=`).
3. **$gt**: Maior que (`>`).
4. **$lt**: Menor que (`<`).
5. **$gte**: Maior ou igual a (`>=`).
6. **$lte**: Menor ou igual a (`<=`).
7. **$in**: Igual a qualquer valor na matriz especificada.
8. **$nin**: Não está na matriz especificada.
9. **$and**: Combina múltiplos critérios.

Por exemplo, para encontrar todos os alunos com idade superior a 20 anos:

```
db.alunos.find({ idade: { $gt: 20 } });
```

Este filtro retorna todos os documentos na coleção "alunos" onde o campo "idade" é maior que 20.

Os filtros no MongoDB são poderosos e versáteis, permitindo que você refine suas consultas para encontrar documentos específicos com base em uma variedade de critérios. Com a sintaxe correta e o uso adequado dos operadores, você pode realizar consultas complexas para atender às suas necessidades de pesquisa.

### 1. `db.coll.distinct(val)`

Este método retorna um array com os diferentes valores que um determinado campo assume nos documentos da coleção. Por exemplo, se tivermos uma coleção de alunos com um campo "curso", podemos usar `distinct` para obter todos os cursos diferentes:

```
db.alunos.distinct("curso");
```

Isso retornará um array com todos os cursos diferentes encontrados nos documentos da coleção "alunos".

### 2. `db.coll.find({doc.subdoc:value})`

Este método é usado para filtrar subdocumentos. Por exemplo, se tivermos uma coleção de produtos com um subdocumento "detalhes" que contém informações como "preço" e "estoque", podemos usar `find` para encontrar produtos com um determinado preço:

```
db.produtos.find({"detalhes.preço": 10.99});
```

Isso retornará todos os produtos que têm um subdocumento "detalhes" com o campo "preço" igual a 10.99.

### 3. `db.coll.find({nome: /^Max$/i})`

Este método é usado para filtrar usando expressões regulares. Por exemplo, se quisermos encontrar todos os documentos onde o campo "nome" começa com "Max", independentemente de maiúsculas ou minúsculas:

```
db.coll.find({nome: /^Max$/i});
```

Isso retornará todos os documentos onde o campo "nome" começa com "Max", independentemente de "Max", "max", "MAX", etc.

### 1. Projeções:

**O que é:** Projeções no MongoDB referem-se à seleção de quais campos de um documento devem ser retornados em uma consulta. Isso permite que você especifique quais informações você deseja recuperar dos documentos correspondentes em uma coleção.

**Para que serve:** Serve para limitar os dados retornados em uma consulta, tornando-a mais eficiente e reduzindo a quantidade de dados transferidos pela rede. Você pode escolher apenas os campos relevantes para sua aplicação, economizando recursos.

### 2. Sorts (Ordenações):

**O que é:** Ordenações no MongoDB permitem que você especifique a ordem na qual os resultados de uma consulta devem ser retornados. Você pode classificar os documentos com base nos valores de um ou mais campos.

**Para que serve:** Serve para organizar os resultados de uma consulta em uma ordem específica, tornando-os mais legíveis e úteis para o usuário final. Por exemplo, você pode classificar os resultados por data, preço ou qualquer outro critério relevante.

### 3. Skips (Pular):

**O que é:** O operador skip no MongoDB permite pular um número específico de documentos no resultado de uma consulta. Isso significa que você pode ignorar os primeiros N documentos correspondentes e começar a retornar os resultados a partir do N+1º documento.

**Para que serve:** Serve para paginar os resultados de uma consulta. Por exemplo, se você estiver exibindo resultados em uma interface de usuário e quiser exibir apenas 10 resultados por página, pode usar o skip para pular os resultados das páginas anteriores.

### 4. Limits (Limites):

**O que é:** O operador limit no MongoDB permite limitar o número total de documentos que serão retornados em uma consulta. Isso significa que você pode especificar o máximo de documentos que deseja receber como resultado da consulta.

**Para que serve:** Serve para controlar a quantidade de dados retornados em uma consulta, evitando sobrecarga e melhorando o desempenho. Por exemplo, se você estiver exibindo uma lista de resultados em uma página da web, pode usar o limit para garantir que apenas os primeiros N resultados sejam exibidos.



### Passo 1: Adicionar Mais 5 Alunos

Vamos adicionar mais 5 alunos com campos diferentes, mantendo a mesma estrutura, e também criar um aluno apenas com o nome:

```
db.alunos.insertMany([
    { nome: "Carlos", sobrenome: "Silva", curso: "Geografia", idade: 21, sexo: "M" },
    { nome: "Juliana", sobrenome: "Oliveira", curso: "Artes", idade: 23, sexo: "F" },
    { nome: "Rafael", sobrenome: "Santos", curso: "Engenharia", idade: 22, sexo: "M" },
    { nome: "Mariana", sobrenome: "Ferreira", curso: "Medicina", idade: 24, sexo: "F" },
    { nome: "Gustavo", sobrenome: "Almeida", curso: "Direito", idade: 25, sexo: "M" },
    { nome: "Ana" }
]);
```

Agora temos mais 5 alunos adicionados, além de um aluno apenas com o nome "Ana".

### Passo 2: Realizar uma Pesquisa com Ordenações, Projeções, Saltos e Limites

Vamos fazer uma pesquisa que aplique ordenações, projeções, saltos e limites:

```
db.escola.find(
    { nome: { $exists: true } }, // Filtro para garantir que apenas documentos com o campo "nome" sejam retornados
    { _id: 0, nome: 1, sobrenome: 1, curso: 1 }, // Projeção para incluir apenas os campos "nome", "sobrenome" e "curso"
).sort(
    { idade: 1 } // Ordenação ascendente com base na idade
).skip(
    2 // Pular os dois primeiros resultados
).limit(
    3 // Limitar a 3 resultados
);
```

### Análise dos Resultados

- **Projeções:** Apenas os campos "nome", "sobrenome" e "curso" serão retornados nos resultados.
- **Ordenação:** Os resultados serão ordenados de forma ascendente com base na idade.
- **Salto:** Os dois primeiros resultados serão pulados.
- **Limite:** Apenas 3 resultados serão retornados.

### Comportamento de Documentos com Campos Incompletos

O documento com apenas o campo "nome" (aluno "Ana") será retornado na pesquisa, mas apenas com o campo "nome", já que não possui os campos "sobrenome", "curso" etc. O MongoDB não rejeita documentos com campos incompletos, permitindo que você os recupere e manipule conforme necessário.