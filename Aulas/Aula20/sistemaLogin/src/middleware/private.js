const privado = (req, res, next) => {
    // Verifica se há um usuário na sessão
    if (req.session.user) {
        // Se houver um usuário na sessão, permite que a requisição continue para o próximo middleware ou rota
        return next();
    }
    // Se não houver um usuário na sessão, redireciona para a rota '/perfil'
    res.redirect('/perfil');
};

module.exports = { privado };
