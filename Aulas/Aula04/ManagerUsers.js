const fs = require("fs");

class ManagerUsers {
  #pathData = "./Usuarios.json"; // Caminho do arquivo onde os usuários serão armazenados

  constructor() {}

  #lerArquivo = async () => { // Método privado para ler o conteúdo do arquivo
    try {
      let resultado = await fs.promises.readFile(this.#pathData, "utf-8"); // Lê o conteúdo do arquivo
      if (!resultado.trim()) { // Verifica se o conteúdo está vazio
          return []; // Retorna um array vazio se o conteúdo estiver vazio
      }
      const resultadoParsed = JSON.parse(resultado); // Analisa o conteúdo JSON do arquivo
      return resultadoParsed; // Retorna os dados lidos do arquivo
    } catch (error) {
      // Se ocorrer um erro ao ler o arquivo
      if (error.code === 'ENOENT') { // Se o erro for "arquivo não encontrado"
          await fs.promises.writeFile(this.#pathData, '[]'); // Cria um novo arquivo vazio
          return []; // Retorna um array vazio
      }
      // Se houver outro erro, lança o erro
      throw error;
    }
  };

  criarUsuario = async (name, sobrenome, idade, curso) => {
    const resultadoParsed = await this.#lerArquivo(); // Lê os usuários existentes do arquivo
    const user = { // Cria um novo objeto representando o usuário a ser adicionado
      name,
      sobrenome,
      idade,
      curso,
    };
    resultadoParsed.push(user); // Adiciona o novo usuário ao array de usuários

    const dataToSave = JSON.stringify(resultadoParsed, null, 2); // Converte os dados para JSON

    await fs.promises.writeFile(this.#pathData, dataToSave); // Escreve os dados de volta no arquivo
  };

  consultarUsuarios = async () => {
    const resultadoParsed = await this.#lerArquivo(); // Lê os usuários do arquivo
    return resultadoParsed; // Retorna os usuários
  };

  consultaByName = async (name) => {
    const resultadoParsed = await this.#lerArquivo(); // Lê os usuários do arquivo
    const userFound = resultadoParsed.filter((user) => user.name === name); // Filtra os usuários pelo nome
    return userFound.length > 0 ? userFound : null; // Retorna os usuários encontrados, ou null se nenhum for encontrado
  };
}

async function main() {
    const userManager = new ManagerUsers();
  
    await userManager.criarUsuario("Jeni", "Placido", 33, "Backend"); // Cria um novo usuário
    const lista = await userManager.consultarUsuarios(); // Consulta os usuários salvos
    console.log(lista); // Exibe os usuários salvos

    await userManager.criarUsuario("Gui", "Salzer", 18, "Backend"); // Cria um novo usuário
    const user = await userManager.consultaByName("Jeni", "Gui"); // Encontra o usuário pelo nome
    console.log(user); // Exibe o usuário encontrado
  }
  
  main().catch((err) => console.error(err)); // Executa a função principal e trata os erros