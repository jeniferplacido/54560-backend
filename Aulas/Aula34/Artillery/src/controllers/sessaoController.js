const { registroUsuario, loginUsuario } = require('../service/sessaoService');

const registrarUsuario = async (req, res) => {
    const { nome, sobrenome, email, senha } = req.body;

    console.log(`Tentativa de registro: nome=${nome}, sobrenome=${sobrenome}, email=${email}, senha=${senha}`);

    if (!nome || !sobrenome || !email || !senha) {
        console.error(`Falha no registro: Campos faltando - nome=${nome}, sobrenome=${sobrenome}, email=${email}, senha=${senha}`);
        return res.status(400).json({ msg: 'Por favor, preencha todos os campos' });
    }

    try {
        const token = await registroUsuario(nome, sobrenome, email, senha);
        console.log(`Usuário registrado com sucesso: email=${email}`);
        res.json({ token });
    } catch (err) {
        console.error(`Erro ao registrar usuário: ${err.message}`);
        res.status(500).json({ msg: 'Erro ao registrar usuário' });
    }
};

const logarUsuario = async (req, res) => {
    const { email, senha } = req.body;
    console.log(`Tentativa de login: email=${email}`);

    if (!email || !senha) {
        console.log('Falha no login: Campos email ou senha não preenchidos');
        return res.status(400).json({ msg: 'Por favor, preencha todos os campos' });
    }

    try {
        const token = await loginUsuario(email, senha);
        console.log(`Login bem-sucedido: email=${email}`);
        res.json({ token });
    } catch (err) {
        console.error(`Erro no processo de login para o email=${email}: ${err.message}`);
        res.status(500).json({ msg: 'Erro ao processar login' });
    }
};

module.exports = {
    registrarUsuario,
    logarUsuario
};
