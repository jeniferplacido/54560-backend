// Define uma função chamada 'autorizacao' que atua como um middleware para autorizar o acesso a determinadas rotas
const autorizacao = (req, res, next) => {
    // Exibe uma mensagem no console para indicar que a autorização está sendo verificada
    console.log('Verificando autorização...');
    // Obtém o papel (role) do usuário a partir do objeto 'req.user'
    const userRole = req.user.role;
    // Exibe o papel do usuário no console
    console.log('Papel do usuário:', userRole);

    // Verifica se o usuário tem permissão de administrador
    if (userRole === 'admin') {
        next(); // Permite o acesso à rota seguinte se for um administrador
    } else {
        // Retorna um erro de status 403 se o usuário não tiver permissão de administrador
        res.status(403).send({ message: 'Acesso negado: você não tem permissão para acessar esta rota' });
    }
};

// Define uma função chamada 'naoAutorizado' que atua como um middleware para lidar com acesso não autorizado
const naoAutorizado = (req, res, next) => {
    // Retorna um erro de status 401 se o token estiver ausente ou inválido
    res.status(401).send({ message: 'Não autorizado: token inválido ou ausente' });
};

// Exporta as funções 'autorizacao' e 'naoAutorizado' para uso em outros arquivos
module.exports = { autorizacao, naoAutorizado };
