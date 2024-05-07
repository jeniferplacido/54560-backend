# **Passport avançado**

JWT

JsonWebToken é um padrão que resolve o problema de consulta e escalabilidade apresentado pela sessão. **Baseia-se em criptografar as informações do usuário em um token que será salvo no lado do cliente, e o cliente o enviará ao servidor a cada consulta, para descriptografar e obter as informações internas do usuário.**

**Enviando de cabeçalhos de autorização**

**Cabeçalhos de Autorização:**

Imagine que você tem uma casa com um cofre muito importante. Para acessar o cofre e pegar algo valioso, você precisa de uma chave especial. Nos sistemas de computadores, essa "chave especial" é como um código secreto chamado de token. Os cabeçalhos de autorização são como mensagens que você envia para o guarda da sua casa, dizendo: "Olá, eu tenho a chave certa para abrir o cofre. Posso entrar?"

**Local Storage e JWT:**

Agora, vamos falar sobre onde você guarda essa chave especial (token) depois de receber ela. O Local Storage é como uma caixa secreta dentro do seu navegador. Quando você recebe a chave especial (token) do guarda (servidor), você pode guardar essa chave de forma segura na caixa secreta (Local Storage). Assim, toda vez que precisar abrir o cofre (acessar recursos protegidos), você pode pegar a chave (token) da caixa secreta (Local Storage) e mostrar para o guarda (servidor) sem precisar ficar pedindo uma nova chave toda vez.

Resumindo, os cabeçalhos de autorização são como uma forma de se identificar e provar que você tem acesso a algo especial, como uma chave para abrir um cofre. O Local Storage é como uma caixa secreta onde você guarda essa chave (token) de forma segura para usar sempre que precisar acessar algo protegido.

O Local Storage é uma ferramenta útil para armazenar dados no navegador do usuário, mas é importante estar ciente de algumas vulnerabilidades associadas a ele:

1. **Acesso por Scripts Maliciosos:** Como o Local Storage é acessível por scripts no navegador, um script malicioso inserido em uma página pode potencialmente acessar e manipular os dados armazenados no Local Storage.

2. **Cross-Site Scripting (XSS):** Se um site sofrer um ataque XSS, um invasor pode injetar scripts maliciosos na página, possibilitando o acesso aos dados do Local Storage daquela página.

3. **Phishing:** Em ataques de phishing, os invasores podem enganar os usuários para que insiram informações confidenciais em um site falso. Se o site falso conseguir acessar o Local Storage, ele pode roubar os tokens de autenticação ou outras informações sensíveis armazenadas lá.

4. **Roubo de Dados:** Se um computador estiver comprometido por malware, o Local Storage pode ser acessado pelo malware para roubar informações armazenadas, como tokens de autenticação ou dados pessoais.

   

   

