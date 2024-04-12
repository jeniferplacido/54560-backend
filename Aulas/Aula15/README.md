# **Prática Integradora**

**Fazer uma integração prática de todos os conceitos vistos até aqui, no âmbito do desenvolvimento de um projeto paralelo ao nosso projeto final.**

**Skills para Classes**

**Conceito de classe:** Uma classe é uma estrutura que define características e comportamentos de um objeto. Em um projeto de e-commerce, podemos ter classes como `Produto`, `Cliente`, `Pedido`, etc. Cada classe define como um tipo específico de objeto deve ser representado e o que ele pode fazer.

**Definição de uma classe:** A definição de uma classe envolve a criação da estrutura básica do objeto, incluindo suas propriedades (características) e métodos (ações). Por exemplo, a classe `Produto` pode ter propriedades como `nome`, `preco` e `estoque`, além de métodos para calcular descontos, atualizar informações, etc.

**Criação de um Manager e compreensão do seu funcionamento:** Um "Manager" ou gerenciador é uma classe responsável por coordenar e controlar outras partes do sistema. Por exemplo, um `GerenciadorDePedidos` em um e-commerce pode lidar com a criação, atualização e remoção de pedidos.

**Entenda o conceito de construtor, saiba quando definir uma classe com ou sem construtor:** Um construtor é um método especial dentro de uma classe que é chamado automaticamente quando um objeto dessa classe é criado. Ele é usado para inicializar as propriedades do objeto. Você deve definir uma classe com um construtor quando precisar que certas propriedades sejam definidas imediatamente ao criar um objeto dessa classe.

**Definindo propriedades para uma classe usando this:** Dentro de uma classe, você pode definir propriedades usando a palavra-chave `this`. Por exemplo, na classe `Produto`, podemos ter propriedades como `this.nome`, `this.preco`, `this.estoque`, etc.

**Definindo métodos em uma classe:** Além das propriedades, você pode definir métodos dentro de uma classe para representar as ações que um objeto pode realizar. Por exemplo, na classe `Cliente`, podemos ter métodos como `fazerPedido`, `atualizarEndereco`, etc.

**Exporte e importe uma classe entre arquivos diferentes:** No Node.js, você pode exportar uma classe de um arquivo usando `module.exports` e importá-la em outro arquivo usando `require`. Por exemplo, para exportar a classe `Produto`:

```
class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  calcularDesconto(desconto) {
    return this.preco * (1 - desconto);
  }
}

module.exports = Produto;
```

E para importar essa classe em outro arquivo:

```
const Produto = require('./produto.js');

const meuProduto = new Produto('Camiseta', 50);
console.log(meuProduto.calcularDesconto(0.2)); // Exemplo de uso do 
```

#### **Skills para Express**

------

**Definir uma pasta src para seu projeto:** Ao criar um projeto em Node.js, é uma prática comum organizar o código-fonte em uma pasta chamada `src` (abreviação de "source", ou fonte). Dentro dessa pasta, você pode colocar todos os arquivos relacionados ao desenvolvimento do seu aplicativo, como controladores, modelos, serviços, rotas, etc.

**Instalar Express com npm:** O Express é um framework web para Node.js que facilita o desenvolvimento de aplicativos web. Para instalar o Express, você pode usar o npm (Node Package Manager) através do comando:

```
npm install express
```

**Import express em nosso arquivo principal:** Depois de instalar o Express, você pode importá-lo no arquivo principal do seu aplicativo (como `app.js` ou `server.js`) usando o `require`:

```
const express = require('express');
```

**Entenda o modelo de request - response e aplique-o em nosso aplicativo:** O modelo de request-response é fundamental em aplicativos web. Quando um cliente (como um navegador) faz uma requisição (request) para o seu servidor, o servidor processa essa requisição e envia uma resposta (response) de volta para o cliente. No Express, você define rotas para lidar com diferentes tipos de requisições e enviar respostas adequadas.

**Colocar nosso servidor para escutar em uma porta específica:** No Express, você pode iniciar o servidor e colocá-lo para escutar em uma porta específica usando o método `listen`. Por exemplo:

```
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
```

**Configure o express para receber jsons nas requisições:** Para configurar o Express para receber JSON nas requisições, você pode usar o middleware `express.json()`. Isso permite que o Express analise automaticamente o corpo (body) das requisições HTTP com formato JSON. Por exemplo:

```
app.use(express.json());
```

**Manipulação de req.query, req.params e req.body:**

- `req.query`: Usado para acessar parâmetros passados na URL da requisição. Por exemplo, em `/produto?id=1`, você pode acessar o valor de `id` usando `req.query.id`.
- `req.params`: Usado para acessar parâmetros dinâmicos definidos em rotas. Por exemplo, em `/produto/:id`, você pode acessar o valor de `id` usando `req.params.id`.
- `req.body`: Usado para acessar o corpo da requisição, especialmente útil para dados enviados em formulários ou no formato JSON.

**Entender o formato e os códigos de status das respostas:** As respostas enviadas pelo servidor têm um formato padrão, geralmente em JSON, XML ou HTML. Além disso, as respostas incluem códigos de status HTTP para indicar o resultado da requisição. Por exemplo, `200` indica que a requisição foi bem-sucedida, `404` indica que o recurso não foi encontrado, etc.

#### **Skills para Router e Multer**

------

**Entenda o conceito de Router:** O Router no Express é um recurso que permite organizar as rotas do seu aplicativo em arquivos separados. Isso facilita a manutenção e o gerenciamento das rotas, especialmente em aplicativos maiores. Um Router pode ser usado para agrupar rotas relacionadas e definir middleware específico para essas rotas.

**Entenda a arquitetura de pastas e use as pastas “routes”, “public” e “files”:**

- `routes/`: Pasta onde ficam os arquivos que definem as rotas do seu aplicativo usando o Router do Express.
- `public/`: Pasta onde ficam os arquivos estáticos do seu aplicativo, como CSS, JavaScript, imagens, etc.
- `files/`: Pasta onde ficam os arquivos enviados pelos usuários, como uploads de imagens, documentos, etc.

**Definir um router Express:** Para definir um Router no Express, você pode criar um arquivo na pasta `routes/` e usar o método `Router()` do Express para criar o roteador. Por exemplo, em `routes/produtos.js`:

```
javascriptCopy codeconst express = require('express');
const router = express.Router();

// Definir rotas do produto aqui...

module.exports = router;
```

**Importe e exporte seu router corretamente:** Para importar e exportar seu Router corretamente, você pode usar o `module.exports` e `require`. Por exemplo, no seu arquivo principal (como `app.js`), você pode importar o Router e usar com o middleware `app.use`:

```
javascriptCopy codeconst produtosRouter = require('./routes/produtos');
app.use('/produtos', produtosRouter);
```

**Utilize o router com middleware com app.use:** Como mostrado no exemplo acima, você pode usar o Router com o middleware `app.use` para definir as rotas do seu aplicativo. Ao usar um Router, você pode organizar as rotas relacionadas em um único arquivo e importá-las no arquivo principal.

**Compreendendo a configuração do Multer:** O Multer é um middleware do Express usado para lidar com uploads de arquivos. Ele é usado para processar e armazenar arquivos enviados pelo cliente. A configuração do Multer envolve definir onde os arquivos serão armazenados, quais tipos de arquivos são aceitos, limites de tamanho, etc.

**Exporte um uploader Multer dentro de seu arquivo utils.js:** Para exportar um uploader Multer em um arquivo de utilitários (como `utils.js`), você pode configurar o Multer e exportar a instância configurada. Por exemplo:

```
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'files/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

module.exports = upload;
```

**Usando Multer de FormData:** Para usar o Multer com FormData em um formulário HTML, você pode configurar o `enctype` do formulário para `multipart/form-data` e definir o campo de upload como um `<input type="file">`. No lado do servidor, você pode usar o middleware do Multer para lidar com o upload do arquivo.

#### **Skills para Handlebars**

------

**Uso de um template engine:** Um template engine é uma ferramenta que permite a criação de modelos de páginas web reutilizáveis, onde você pode definir partes estáticas e dinâmicas do conteúdo. O template engine processa esses modelos e gera HTML dinamicamente com base nos dados fornecidos. Isso facilita a criação de páginas web dinâmicas e evita a repetição de código.

**Arquitetura separada com uma pasta "public" e "views":**

- `public/`: Pasta onde ficam os arquivos estáticos do seu aplicativo, como CSS, JavaScript, imagens, etc.
- `views/`: Pasta onde ficam os arquivos de visualizações (templates) do seu aplicativo, onde você define a estrutura das páginas HTML usando um template engine como Handlebars.

**Configurando nossas primeiras visualizações em Handlebars:** Para configurar o Handlebars como seu template engine, você precisa instalar o pacote do Handlebars usando o npm e configurar o Express para usar o Handlebars como engine de visualização. Por exemplo:

```
const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

app.engine('handlebars', handelbars.engine());
app.set('view engine', 'handlebars');
app.set('views', 'views');
```

**Usando {{}} para definir elementos variáveis no modelo:** No Handlebars, você pode usar `{{}}` para definir elementos variáveis no modelo. Por exemplo, em um arquivo de visualização `produto.handlebars`, você pode ter algo como:

```
<h1>{{nome}}</h1>
<p>Preço: R$ {{preco}}</p>
```

**Lidar com a passagem de informações para o modelo:** Para passar informações para o modelo (view), você pode usar o método `res.render` do Express. Por exemplo:

```
app.get('/produto', (req, res) => {
  const produto = {
    nome: 'Camiseta',
    preco: 50
  };
  res.render('produto', { produto: produto });
});
```

**Configure um router exclusivo para visualizações:** Você pode criar um Router exclusivo para visualizações em um arquivo separado na pasta `routes/` e definir as rotas para renderizar as visualizações. Por exemplo:

```
const express = require('express');
const router = express.Router();

router.get('/produto', (req, res) => {
  const produto = {
    nome: 'Camiseta',
    preco: 50
  };
  res.render('produto', { produto: produto });
});

module.exports = router;
```

**Importar CSS e JS da pasta pública:** Para importar arquivos CSS e JS da pasta pública (`public/`), você pode usar a função `express.static` do Express. Por exemplo:

```
app.use(express.static('public'));
```

Depois de configurar isso, você pode importar seus arquivos CSS e JS nos arquivos HTML das visualizações. Por exemplo, em um arquivo `produto.handlebars`:

```
<link rel="stylesheet" href="/styles/style.css">
<script src="/scripts/script.js"></script>
```

#### **Skills para MongoDB e mongoose**

------

**Compreender a utilização de uma Base de Dados:** Uma base de dados é um sistema organizado para armazenar e gerenciar informações de forma eficiente. Ela permite que você armazene, consulte, atualize e exclua dados de forma estruturada. As bases de dados são amplamente usadas em aplicações para armazenar dados de forma persistente.

**Entenda o modelo de banco de dados não relacional:** No modelo de banco de dados não relacional (NoSQL), os dados são armazenados de forma não tabular e não necessariamente seguem um esquema fixo. Isso oferece flexibilidade para lidar com diferentes tipos de dados e escalabilidade para grandes volumes de dados. O MongoDB é um exemplo de banco de dados NoSQL que armazena dados em documentos JSON.

**Instale o MongoDB e configure um banco de dados no MongoAtlas:** Para instalar o MongoDB, você pode seguir as instruções na documentação oficial do MongoDB para o seu sistema operacional. Para configurar um banco de dados no MongoAtlas, que é um serviço de banco de dados em nuvem da MongoDB, você precisa criar uma conta no MongoAtlas, configurar um cluster e um banco de dados dentro desse cluster.

**Conheça a linguagem de consulta básica para realizar um CRUD no MongoDB:** No MongoDB, você usa a linguagem de consulta chamada MongoDB Query Language (MQL) para realizar operações CRUD (Create, Read, Update, Delete) nos documentos armazenados. Alguns exemplos de consultas básicas são:

- Inserir um documento:

  ```
  db.collection.insertOne({ campo: 'valor' });
  ```

- Consultar documentos:

  ```
  db.collection.find({ campo: 'valor' });
  ```

- Atualizar um documento:

  ```
  db.collection.updateOne({ campo: 'valor' }, { $set: { novoCampo: 'novoValor' } });
  ```

- Excluir um documento:

  ```
  db.collection.deleteOne({ campo: 'valor' });
  ```

**Instale o mongoose com npm em seu projeto Node.js:** Para instalar o Mongoose, que é uma biblioteca do Node.js que facilita a interação com o MongoDB, você pode usar o npm com o seguinte comando:

```
npm install mongoose
```

Depois de instalar o Mongoose, você pode usá-lo para definir modelos de dados, realizar operações CRUD no MongoDB de forma mais fácil e organizada, e lidar com validações de dados.

**Definindo esquemas e separando a lógica em uma pasta "models":** No Mongoose, você define esquemas para estruturar e validar os dados que serão armazenados no MongoDB. Primeiro, você precisa criar um diretório `models` para manter seus modelos Mongoose organizados. Dentro desse diretório, você pode criar arquivos para cada modelo. Por exemplo, suponha que você queira criar um modelo para usuários:

```
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
```

**Exportando um modelo Mongoose e importando-o para uso:** No exemplo acima, exportamos o modelo `User` definido pelo esquema `userSchema`. Para importar e usar esse modelo em outras partes do seu aplicativo, você pode fazer o seguinte:

```
// Importando o modelo User
const User = require('./models/User');
```

**Fazendo um CRUD com Mongoose em Node.js:** Para realizar um CRUD com Mongoose, você pode usar os métodos disponíveis no modelo Mongoose. Aqui está um exemplo básico de como criar, ler, atualizar e excluir documentos usando o modelo `User` que definimos:

```
// Criar um novo usuário
const newUser = new User({
  name: 'Jeni Pla',
  email: 'jeni@example.com',
  password: 'senha123'
});
newUser.save();

// Ler todos os usuários
User.find({}, (err, users) => {
  if (err) {
    console.error(err);
  } else {
    console.log(users);
  }
});

// Atualizar um usuário existente
User.findOneAndUpdate({ email: 'jeni@example.com' }, { name: 'Jeni Pla' }, { new: true }, (err, user) => {
  if (err) {
    console.error(err);
  } else {
    console.log(user);
  }
});

// Excluir um usuário
User.findOneAndDelete({ email: 'jeni@example.com' }, (err, user) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Usuário excluído:', user);
  }
});
```