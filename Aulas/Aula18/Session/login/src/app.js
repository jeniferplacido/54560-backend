const express = require('express');
const session = require('express-session');

const app = express();


 app.use(session({
     secret: 'C0d3r',
     resave: false,
     saveUninitialized: true
 }))
 

app.get('/session', (req, res) => {
    if(req.session.contador){
        req.session.contador++;
        res.send(`Você visitou o site ${req.session.contador} vezes`);
    }else{
        req.session.contador = 1;
        res.send('Primeira vez visitando o site');
    }
})

app.get('/login', (req, res) => {
    const { username, password } = req.query;
    if(username !== 'Jeni' && password !== '123')
        return res.send('Usuário ou senha inválidos!');
    req.session.username = username;
    req.session.admin = true;
    res.send('Login efetuado com sucesso!');
});
        
    app.get('/privado', auth, (req, res) => {
        res.send('Se souber o que é isso, é porque você está logado!');
    })

    app.get('/logout', (req, res) => {
        req.session.destroy(err => {
            if (!err)
                res.send('Logout efetuado com sucesso!');
            else res.send({ status: 'Erro no logout', body: err });
        });
    });
    app.listen(8080, () => {
        console.log('Servidor rodando na porta 8080');
    }); 
    
    function auth(req, res, next) {
    if(req.session?.username === 'Jeni' && req.session?.admin) {
      return next();
    } else {
       return res.send('Erro de autenticação');
    }
}
