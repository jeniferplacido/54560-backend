**O que é Indexação?**

Imagine que você tem uma biblioteca com milhares de livros. Encontrar um livro específico sem uma organização seria como procurar uma agulha em um palheiro. Indexação é como uma tabela de conteúdo em um livro - ela ajuda a encontrar as informações de forma rápida e eficiente.

**O que é Indexação no MongoDB?**

No MongoDB, a indexação é uma técnica que permite pesquisar e recuperar documentos de forma eficiente. Ela cria uma estrutura organizada que permite ao MongoDB localizar rapidamente os documentos com base em critérios específicos.

**Como funciona a Indexação no MongoDB?**

Quando você cria um índice em um campo em seu banco de dados MongoDB, o MongoDB cria uma estrutura de dados que mapeia os valores de campo para os documentos que os contêm. Isso permite que o MongoDB localize rapidamente os documentos com base nos valores de campo indexados.

**Por que Indexar no MongoDB?**

Indexar em MongoDB pode acelerar significativamente as consultas e melhorar o desempenho do seu aplicativo. Sem índices, o MongoDB precisa examinar cada documento em uma coleção para encontrar os documentos correspondentes a uma consulta. Com índices, o MongoDB pode usar a estrutura indexada para localizar os documentos relevantes de forma muito mais rápida.



EXEMPLO AO VIVO

A indexação é uma técnica crucial em bancos de dados que melhora significativamente o desempenho das consultas. Aqui estão algumas conclusões sobre a indexação:

1. **Melhoria de Desempenho**: A indexação ajuda a melhorar o desempenho das consultas, permitindo que o banco de dados localize rapidamente os registros relevantes.
2. **Redução do Tempo de Resposta**: Ao criar índices em campos comuns utilizados em consultas, como campos de filtro ou de ordenação, o tempo de resposta das consultas é reduzido, proporcionando uma melhor experiência para os usuários.
3. **Economia de Recursos**: Índices bem projetados podem reduzir a quantidade de recursos necessários para processar consultas, como CPU e memória, resultando em um sistema mais eficiente e escalável.
4. **Trade-offs**: Embora a indexação melhore o desempenho das consultas, ela também tem alguns trade-offs. Índices ocupam espaço em disco e podem aumentar o tempo de inserção, atualização e exclusão de registros. Portanto, é importante equilibrar o benefício da indexação com os custos associados.
5. **Seleção Adequada de Campos**: A escolha dos campos a serem indexados é crucial. Deve-se indexar campos frequentemente usados em consultas, mas evitar indexar excessivamente, pois isso pode levar a um aumento no consumo de recursos.
6. **Monitoramento e Manutenção**: É importante monitorar o desempenho das consultas e realizar manutenção regular nos índices, como reconstruí-los ou removê-los, conforme necessário, para garantir um desempenho ideal do banco de dados.

A indexação é uma técnica poderosa para melhorar o desempenho das consultas em bancos de dados, mas deve ser usada com cuidado e consideração para obter os melhores resultados.

**Funcionamento Interno** **de um Índice**

Quando criamos um índice em um campo de um documento no MongoDB, esse campo é como uma fita métrica onde os valores são colocados em ordem. Isso significa que o índice basicamente organiza os valores desse campo em uma sequência. Quando fazemos uma busca por valores indexados, o MongoDB pode usar uma estrutura de dados chamada B-tree para encontrar esses valores de forma eficiente. Essa é a razão pela qual a pesquisa em um campo indexado não requer percorrer toda a coleção, pois o MongoDB pode usar o índice para localizar os valores desejados de maneira rápida e eficiente.

**Outros tipos de índice**

Existem diferentes tipos de índices que podemos usar no MongoDB para tornar as consultas mais eficientes:

1. **Índices Compostos**: Esses índices são usados quando precisamos indexar mais de um campo e queremos especificar a ordem de ordenação para cada campo. Por exemplo, podemos ter um índice composto onde um campo é ordenado de forma crescente e outro de forma decrescente.
2. **Índices de Chave Múltipla (Multikey)**: Este tipo de índice é utilizado quando precisamos indexar valores que estão dentro de um array em um documento. O MongoDB cria um índice separado para cada valor dentro do array, permitindo consultas eficientes.
3. **Índices de Texto**: Esses índices são usados para pesquisas baseadas em palavras específicas em texto. Eles permitem que você pesquise documentos com base em termos específicos ou frases em campos de texto.
4. **Índices Geoespaciais**: Esses índices são usados para armazenar e consultar dados geoespaciais, como coordenadas de latitude e longitude. Eles usam uma esfera 2D para representar a superfície da Terra e permitem consultas eficientes para localização e proximidade.

Esses tipos de índices ajudam a otimizar consultas no MongoDB, permitindo que você busque e recupere dados de forma mais rápida e eficiente, dependendo das necessidades específicas de sua aplicação.

**Vamos analisar cada esquema e identificar as propriedades que podem se beneficiar da indexação:**

1. **Esquema de Aluno**:

   - Propriedades que podem ser indexadas: `first_name`, `last_name`, `email`, `age`, `grade`.
   - Justificativa: Essas propriedades são frequentemente utilizadas em consultas, como buscar alunos por nome, idade ou nota. Indexar essas propriedades pode melhorar a eficiência das consultas de busca e filtro.

2. **Esquema de Ticket de Compra**:

   - Propriedades que podem ser indexadas: `buyer_id`, `total_amount`, `destination_address`, `destination_postal_code`.
   - Justificativa: Essas propriedades são frequentemente usadas em consultas relacionadas a transações, como buscar compras de um determinado cliente ou encontrar compras com base em um código postal de destino. Indexar essas propriedades pode melhorar a eficiência das consultas de análise de transações.

3. **Esquema de Usuário de Aplicativo de Entrega e Remessa**:

   - Propriedades que podem ser indexadas: `first_name`, `last_name`, `email`, `telephone`, `address`, `postal_code`.
   - Justificativa: Assim como no esquema de aluno, essas propriedades são frequentemente utilizadas em consultas de busca e filtro de usuários. Indexar essas propriedades pode melhorar a eficiência das consultas de busca de usuários por nome, email, telefone ou endereço.

4. **Esquema de Livro de Livraria**:

   - Propriedades que podem ser indexadas: `title`, `author`, `rating`.
   - Justificativa: As propriedades `title` e `author` são frequentemente utilizadas em consultas de busca por livros específicos ou por livros de determinado autor. Indexar essas propriedades pode melhorar a eficiência das consultas de busca de livros. Além disso, a propriedade `rating` pode ser indexada para consultas relacionadas à classificação dos livros.

   **Populations**

   Populations em MongoDB referem-se à técnica de preencher automaticamente campos de referência em um documento com dados de outro documento em uma coleção diferente. Isso é especialmente útil quando temos relacionamentos entre documentos e queremos acessar os detalhes desses relacionamentos em consultas.

   Por exemplo, considere um cenário em que temos duas coleções: "users" e "posts". Cada documento na coleção "posts" pode ter um campo "author" que faz referência a um documento na coleção "users" que representa o autor desse post.

   Usando o populations, podemos preencher automaticamente o campo "author" de um post com os detalhes do usuário ao consultar o post. Isso nos permite acessar os detalhes do autor diretamente, sem a necessidade de consultas adicionais.

**Middlewares para mongoose**

Os middlewares no Mongoose são funções que são executadas antes ou depois de certos eventos ocorrerem em um modelo do Mongoose. Eles são úteis para executar lógica adicional antes ou depois de operações como salvar, atualizar, excluir, etc., em documentos do MongoDB.

Existem quatro tipos principais de middlewares no Mongoose:

1. **Middleware Pre**: São executados antes de um evento específico ocorrer. Eles são úteis para realizar operações como validações, modificação de dados, etc., antes que os dados sejam salvos no banco de dados. Para definir um middleware pré, você usa o método `pre()` no esquema do Mongoose.
2. **Middleware Pós**: São executados após um evento específico ocorrer. Eles são úteis para realizar operações como envio de e-mails, notificações, etc., após os dados serem salvos no banco de dados. Para definir um middleware pós, você usa o método `post()` no esquema do Mongoose.
3. **Middleware Documento**: São middlewares associados a instâncias específicas de documentos do Mongoose. Eles são úteis para manipular operações específicas em um documento individual.
4. **Middleware Query**: São middlewares associados a consultas específicas no Mongoose. Eles são úteis para manipular consultas antes de serem executadas no banco de dados.

Esses são os tipos principais de middlewares no Mongoose e como você pode usá-los para adicionar lógica adicional em suas operações de banco de dados. Eles fornecem uma maneira poderosa de adicionar comportamentos personalizados aos seus modelos do Mongoose.