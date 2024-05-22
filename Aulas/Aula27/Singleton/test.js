// Importa a classe MongoSingleton do arquivo mongoSingleton.js
// A classe MongoSingleton é uma implementação do padrão de design singleton, que garante que apenas uma instância da classe seja criada
const MongoSingleton = require('./mongoSingleton.js');

// Chama o método estático getInstance para obter a instância única de MongoSingleton
// Se a instância ainda não existir, o método getInstance irá criá-la
// Se a instância já existir, o método getInstance irá retorná-la
const mongoInstance = MongoSingleton.getInstance();

// Chama o método estático getInstance novamente para obter a mesma instância de MongoSingleton
// Como a instância já foi criada na linha anterior, o método getInstance apenas retorna a instância existente
// Isso demonstra o comportamento do padrão de design singleton: mesmo que o método getInstance seja chamado várias vezes, sempre a mesma instância é retornada
const anotherMongoInstance = MongoSingleton.getInstance();
