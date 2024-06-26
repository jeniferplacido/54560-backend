const bcrypt = require('bcrypt');

const hashSenha = async (senha) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(senha, salt);
    return hashedPassword;
};

const comparaSenha = async (senha, hashedPassword) => {
    return await bcrypt.compare(senha, hashedPassword);
};

module.exports = {
    hashSenha,
    comparaSenha
};
