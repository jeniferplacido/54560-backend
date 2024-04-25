const privado = (req, res, next) => {
    if (req.session.user) {
        return next();
    }
    res.redirect('/perfil');
};

module.exports = {privado};
