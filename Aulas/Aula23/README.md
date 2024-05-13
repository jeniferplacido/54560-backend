# **Roteamento avançado e gerenciamento de política de autorização**

**Melhorando as práticas do roteamento**

Até agora você conseguiu interagir com o router em termos de:

- **Sua URL,**
- **Seus middlewares,**
- **Seu callback**

No entanto, à medida que o projeto for crescendo, perceberemos que alguns conceitos são aplicados de forma um pouco diferente do que vimos nas aulas anteriores.

Nesta aula abordaremos alguns conceitos e técnicas necessárias para profissionalizar o uso de routers e conseguir encontrar soluções ótimas para problemas do mundo real. 🤩

### **Parâmetros de restrição**

**Nem todos os parâmetros são bons**

Pensem na rota como se fosse uma porta que só aceita certas coisas. Por exemplo, se a porta diz que só aceita palavras, você pode entrar com "cachorro" ou "gato", mas não com números como "123" ou símbolos estranhos como "$%#". É como se a porta tivesse um segurança que verifica se o que você está trazendo está de acordo com as regras da casa. Se não estiver, o segurança diz que não pode deixar você entrar e você precisa voltar e tentar com algo que a porta aceite.

Essa verificação é importante porque se a porta aceitar qualquer coisa, poderia ter problemas, como alguém tentando colocar um caminhão onde só cabe uma bicicleta. Isso pode quebrar a porta! Então, é melhor seguir as regras da porta para que tudo funcione bem.

Na programação, a gente faz algo parecido. Quando criamos uma rota que espera uma palavra, precisamos dizer que só aceitamos letras e não números, símbolos ou coisas assim. Isso evita problemas e ajuda a aplicação a funcionar corretamente.

```
const express = require('express');
const router = express.Router();

// Rota com expressão regular para validar o parâmetro :word
router.get('/:word([a-zA-Z]+)', async (req, res) => {
    try {
        const word = req.params.word; // Captura a palavra válida do parâmetro :word

        // Faça o que for necessário com a palavra válida
        res.send(`Palavra válida recebida: ${word}`);
    } catch (error) {
        console.error('Erro ao processar a palavra:', error);
        res.status(500).send('Erro interno do servidor');
    }
});

module.exports = router;
```

**O que ganhamos com isso?**

Ao usar uma expressão regular para validar o parâmetro de uma rota, ganhamos em controle e segurança. Aqui estão alguns benefícios:

**Validação precisa:** A expressão regular permite especificar exatamente quais tipos de dados são aceitos como parâmetro, como no exemplo em que permitimos apenas palavras contendo letras maiúsculas ou minúsculas.

**Segurança:** Ao restringir o tipo de dados aceitos, reduzimos a chance de ataques maliciosos, como injeção de código ou tentativas de acesso não autorizado.

**Melhor experiência do usuário:** Quando a rota aceita apenas dados válidos, o usuário recebe feedback imediato se o parâmetro fornecido não atende aos critérios, o que pode melhorar a experiência de uso da aplicação.

**Menos tratamento de erros:** Com a validação na rota, reduzimos a necessidade de tratamento de erros em etapas posteriores do código, pois garantimos que o parâmetro já seja válido antes de continuar o processamento.

O uso de expressões regulares para validar parâmetros de rota ajuda a manter a integridade dos dados, reduzir erros e garantir uma experiência mais segura para o usuário final.

**E se precisássemos de informações diferentes?**

Para incluir caracteres especiais como á, é, í, ó, ú, ü, etc., na expressão regular para validação de parâmetros de rota, podemos usar a codificação UTF-8 para representar esses caracteres de forma adequada. No JavaScript, podemos fazer isso usando a sintaxe \uXXXX, onde XXXX representa o código Unicode do caractere. Aqui está um exemplo de como ajustar a expressão regular para incluir esses caracteres:

```
router.get('/:word([a-zA-Z%C3%A0-%C3%B0%C3%AC%C3%B3%C3%B9]+)', async (req, res) => {
 const {word} = req.params;
 res.send(word)
});
```

Esses valores correspondem à codificação URL dos caracteres especiais em UTF-8. Ao usar esses valores na URL, estamos garantindo que os caracteres especiais sejam interpretados corretamente pelo servidor web. Por exemplo:

- á é representado como %C3%A1
- é é representado como %C3%A9
- í é representado como %C3%AD
- ó é representado como %C3%B3
- ú é representado como %C3%BA
- ü é representado como %C3%BC

Essa codificação é importante ao lidar com caracteres especiais em URLs para garantir que os dados sejam transmitidos corretamente e interpretados sem erros pelos aplicativos e servidores web.

**O que fazer com todas as rotas que não correspondem a nenhum endpoint?**

Quando queremos lidar com rotas que não correspondem a nenhum dos endpoints definidos no router, podemos usar um middleware catch-all, muitas vezes representado por `*` na definição da rota. Esse middleware será chamado quando nenhuma rota correspondente for encontrada.

```
// Middleware catch-all para rotas não correspondentes
router.get('*', (req, res) => {
    res.status(404).send('Rota não encontrada');
});
```

**Validando parâmetros**

```
router.get('/:word([a-zA-Z%C3%A0-%C3%B0%C3%AC%C3%B3%C3%B9]+)', async (req, res) => {
 const {word} = req.params;
 res.send(word)
});
router.get('/:word([a-zA-Z%C3%A0-%C3%B0%C3%AC%C3%B3%C3%B9]+)/:language([a-z])', async (req, res)=> {}
router.put('/:word([a-zA-Z%C3%A0-%C3%B0%C3%AC%C3%B3%C3%B9]+)', async (req, res)=> {}
router.delete('/:word([a-zA-Z%C3%A0-%C3%B0%C3%AC%C3%B3%C3%B9]+)', async (req, res)=> {}
```

Você pode usar o método `router.param` do Express.js para definir uma função de middleware que será executada sempre que um determinado parâmetro for encontrado em uma rota. Isso permite centralizar a lógica de validação e busca no banco de dados para garantir que a palavra parâmetro seja válida e exista no sistema de persistência.

#### router.param

O método `router.param` é uma função fornecida pelo Express.js que permite definir middleware de roteamento para parâmetros específicos em rotas. Ele é usado para realizar operações comuns de validação, pré-processamento ou busca de dados associados a parâmetros de rota.

A função `router.param` é especialmente útil quando você tem rotas que usam o mesmo tipo de parâmetro em várias partes do aplicativo. Em vez de repetir a lógica de manipulação desse parâmetro em cada rota, você pode definir uma única middleware usando `router.param` para lidar com isso de forma centralizada.

O `router.param` serve para:

**Validação de Parâmetros:** Você pode validar e sanitizar os parâmetros de rota antes que eles cheguem às rotas reais. Por exemplo, garantir que um ID seja um número inteiro positivo antes de ser usado nas consultas ao banco de dados.

**Pré-processamento de Dados:** Você pode pré-processar ou manipular os parâmetros antes de serem utilizados nas rotas. Isso pode incluir formatação de dados, conversões ou quaisquer outras operações necessárias.

**Busca de Dados Associados:** Em muitos casos, os parâmetros de rota estão relacionados a dados que precisam ser buscados no banco de dados ou em outras fontes. O `router.param` permite realizar essas operações de busca de forma eficiente e organizada.

```
const express = require('express');
const app = express();
const router = express.Router();

// Dicionário simulado
const dictionary = ['cão', 'gato', 'cavalo', 'pássaro'];

// Middleware para validar e buscar a palavra no dicionário
router.param('word', (req, res, next, word) => {
    // Validar se a palavra está no dicionário
    if (dictionary.includes(word)) {
        // Atribuir a palavra ao objeto req para uso posterior nas rotas
        req.word = word;
        next(); // Avançar para a próxima middleware ou rota
    } else {
        res.status(404).send('Palavra não encontrada no dicionário');
    }
});

// Rota para buscar uma palavra específica no dicionário
router.get('/search/:word', (req, res) => {
    res.send(`A palavra "${req.word}" foi encontrada no dicionário.`);
});

// Registrar o router no aplicativo
app.use('/', router);

// Rota padrão para quando a rota não corresponder a nenhum endpoint
app.get('*', (req, res) => {
    res.status(404).send('Endpoint não encontrado');
});

// Iniciar o servidor na porta 8080
app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
});
```

**Vantagens de um custom router**

**Organização e modularidade:** Um custom router permite organizar melhor as rotas e a lógica relacionada em módulos separados. Isso ajuda a manter o código mais limpo, legível e fácil de manter, especialmente em projetos maiores.

**Reutilização de código:** Com um custom router, você pode reutilizar rotas e lógica em diferentes partes da sua aplicação ou até mesmo em diferentes projetos, se necessário. Isso promove a reutilização do código e evita a duplicação desnecessária.

**Separação de responsabilidades:** Ao usar custom routers, você pode separar as responsabilidades de diferentes partes da sua aplicação. Por exemplo, você pode ter um router específico para lidar com a autenticação, outro para lidar com recursos do usuário, e assim por diante, mantendo a lógica isolada e organizada.

**Escalabilidade:** Custom routers facilitam a escalabilidade da sua aplicação, pois permitem adicionar novas rotas e funcionalidades sem afetar diretamente o código existente. Isso é especialmente útil quando você precisa adicionar mais endpoints à medida que a aplicação cresce.

**Facilidade de teste:** Ao separar a lógica em custom routers, você torna mais fácil testar cada parte da sua aplicação de forma isolada. Isso é fundamental para a implementação de testes automatizados e garante a qualidade do código.

**Melhor controle de middleware:** Custom routers oferecem um controle mais granular sobre os middlewares aplicados a determinadas rotas. Você pode definir middlewares específicos para um router sem afetar outras partes da aplicação.

O uso de custom routers traz benefícios significativos em termos de organização, reutilização, separação de responsabilidades, escalabilidade, teste e controle de middleware em aplicações Express. É uma prática recomendada, especialmente em projetos maiores e mais complexos.

**Aproveitando ao máximo o custom router**

A ideia por trás de gerar respostas personalizadas é fornecer uma experiência mais rica e adaptada ao contexto para os usuários ou sistemas que interagem com a aplicação. Isso pode incluir:

1. **Respostas de Erro Personalizadas:** Ao invés de simplesmente retornar um código de erro genérico, como "404 - Not Found" ou "500 - Internal Server Error", você pode gerar uma resposta mais descritiva e útil para o usuário entender o que deu errado e como corrigir.
2. **Respostas de Sucesso Detalhadas:** Quando uma operação é realizada com sucesso, você pode gerar uma resposta que inclua informações relevantes, como identificadores únicos de recursos criados, links para recursos relacionados, ou instruções adicionais para o usuário.
3. **Respostas de Validação de Dados:** Se uma requisição contém dados inválidos, você pode gerar uma resposta personalizada indicando quais campos precisam ser corrigidos e fornecendo orientações sobre como fornecer dados corretos.
4. **Respostas de Redirecionamento:** Em certos casos, pode ser necessário redirecionar o usuário para uma página diferente. Nesse caso, você pode gerar uma resposta de redirecionamento com o código apropriado (como o código 302 - Found) e a URL para onde o usuário deve ser redirecionado.
5. **Respostas de Autenticação e Autorização:** Para requisições que exigem autenticação ou autorização, você pode gerar respostas personalizadas indicando que o usuário não está autenticado, não tem permissão para acessar o recurso solicitado, ou instruções para realizar o login ou obter as permissões necessárias.

Gerar respostas personalizadas é uma prática importante para melhorar a usabilidade, a experiência do usuário e a clareza das interações em uma aplicação de software, garantindo que os usuários recebam informações relevantes e úteis em cada cenário.

**Autorização no nível escalável**

Quando se trata de autorização em um sistema escalável, é importante pensar em estratégias que possam lidar com um grande número de usuários, recursos e permissões de forma eficiente e segura. Aqui estão algumas práticas que podem ajudar a garantir uma autorização eficaz em um ambiente escalável:

1. **Controle de Acesso Baseado em Funções (RBAC):** O Controle de Acesso Baseado em Funções é uma abordagem comum e escalável para autorização. Ela permite atribuir permissões específicas a diferentes papéis de usuário, facilitando a gestão das permissões em um sistema com muitos usuários. Certifique-se de que sua implementação RBAC seja flexível o suficiente para acomodar novos papéis e mudanças nas permissões com facilidade.
2. **Políticas de Autorização Granulares:** Ao definir políticas de autorização, seja o mais granular possível. Em vez de apenas ter permissões de nível alto (por exemplo, acesso total a um recurso), divida as permissões em ações específicas (por exemplo, leitura, escrita, exclusão) e aplique essas permissões de forma granular conforme necessário. Isso ajuda a reduzir o risco de concessão excessiva de privilégios.
3. **Cache de Autorização:** Implemente um mecanismo de cache para suas decisões de autorização. Isso pode reduzir significativamente a carga no sistema, especialmente em ambientes escaláveis com muitas requisições de autorização. Use estratégias de cache inteligentes, como cache por tempo de vida ou invalidação de cache baseada em eventos de mudança de permissões.
4. **Autenticação e Autorização Distribuídas:** Em sistemas escaláveis, é comum ter múltiplos serviços e microsserviços. Certifique-se de que sua solução de autorização seja distribuída e possa ser integrada facilmente em todos os seus serviços. Isso pode envolver o uso de soluções de autorização baseadas em tokens (como OAuth) e mecanismos de autorização centralizados.
5. **Auditoria e Monitoramento:** Implemente um sistema robusto de auditoria e monitoramento para suas decisões de autorização. Isso inclui registrar todas as decisões de autorização, monitorar atividades suspeitas e ter a capacidade de revisar e analisar as políticas de autorização em tempo real. Isso é fundamental para garantir a conformidade e identificar possíveis vulnerabilidades ou abusos.
6. **Testes e Simulações de Autorização:** Antes de implantar suas políticas de autorização em produção, faça testes extensivos e simulações para garantir que elas estejam funcionando conforme o esperado e não introduzam problemas de segurança ou desempenho em escala.

