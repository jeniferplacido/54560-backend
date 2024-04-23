// Middleware para verificar se o usuário está autenticado
function checkAuthenticated(req, res, next) {
    // Verifica se o usuário está autenticado
    if (req.isAuthenticated()) {
        // Se estiver autenticado, permite que a próxima rota seja chamada
        return next();
    }
    // Caso contrário, redireciona para a página de login
    res.redirect('/login');
}

module.exports = { checkAuthenticated };
