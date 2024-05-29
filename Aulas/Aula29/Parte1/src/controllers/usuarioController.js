// Função que retorna todos os usuários
const getUsuarios = async (req, res) => {
    res.send({status:"sucess", result:"getUsuarios"});
}

// Função que retorna o usuário com o ID especificado
const getUsuarioById = async (req, res) => {
    res.send({status:"sucess", result:"getUsuarioById"});
}

// Função que cria um novo usuário com os dados do corpo da requisição
const postUsuario = async (req, res) => {
    res.send({status:"sucess", result:"criarUsuario"});
}

// Função que atualiza o usuário com o ID especificado
// Se o usuário não for encontrado, isso causará um erro, pois estamos tentando acessar as propriedades 'nome', 'email' e 'senha' de 'undefined'
const putUsuario = async (req, res) => {
    const { id } = req.params;
    const { nome, email, senha } = req.body;
    const usuario = usuarios.find(usuarios => usuarios.id == id);
    usuario.nome = nome;
    usuario.email = email;
    usuario.senha = senha;
    res.send({status:"sucess", result:"atualizarUsuario"});
}

// Exporta as funções para que possam ser usadas em outros módulos
module.exports = { getUsuarios, getUsuarioById, postUsuario, putUsuario }