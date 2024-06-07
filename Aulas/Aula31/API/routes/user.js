const express = require('express');

const {generateUser} = require('../utils');
const router = express.Router();



router.get('/', async (req, res) => {
    let users = []
for(let i = 0; i < 10; i++) {
    users.push(generateUser())
}
res.send({status: 'sucesso', payload: users})

})

module.exports = router