// Importa o módulo 'path' para lidar com operações de caminho de arquivo
const path = require('path');

// Obter o diretório base do projeto (CommonJS)
// A função 'require.main.filename' retorna o caminho absoluto do arquivo principal que está sendo executado
const dirname = path.dirname(require.main.filename);

// Exporta a variável 'dirname' para ser utilizada em outros arquivos que importarem este módulo
module.exports = dirname;
