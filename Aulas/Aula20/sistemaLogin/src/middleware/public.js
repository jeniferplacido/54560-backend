const publico = (req, res, next) => {
    // Verifica se NÃO há um usuário na sessão
    if (!req.session.user) {
        // Se não houver um usuário na sessão, redireciona para a rota '/login'
        return res.redirect('/login');
    }
    // Se houver um usuário na sessão, permite que a requisição continue para o próximo middleware ou rota
    next();
};

module.exports = { publico };
