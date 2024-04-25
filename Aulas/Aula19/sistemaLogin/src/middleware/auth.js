// Middleware para verificar se o usuário está autenticado
function checkAuthenticated(req, res, next) {
    // Verifica se existe uma sessão e se há um usuário na sessão
    if (req.session && req.session.user) {
        // Se houver usuário na sessão, permite que a próxima rota seja chamada
        return next();
    }
    // Caso contrário, redireciona para a página de login
    res.redirect('/login');
}

module.exports = { checkAuthenticated };
