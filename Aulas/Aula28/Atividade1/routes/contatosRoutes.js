const express = require('express');
const router = express.Router();

module.exports = (contactDAO) => {
    router.post('/contacts', async (req, res) => {
        const contact = await contactDAO.create(req.body);
        res.json(contact);
    });

    router.get('/contacts', async (req, res) => {
        const contacts = await contactDAO.list();
        res.json(contacts);
    });

    router.get('/contacts/:id', async (req, res) => {
        const contact = await contactDAO.read(req.params.id);
        if (contact) {
            res.json(contact);
        } else {
            res.status(404).send('Contact not found');
        }
    });

    router.put('/contacts/:id', async (req, res) => {
        const contact = await contactDAO.update(req.params.id, req.body);
        if (contact) {
            res.json(contact);
        } else {
            res.status(404).send('Contact not found');
        }
    });

    router.delete('/contacts/:id', async (req, res) => {
        const contact = await contactDAO.delete(req.params.id);
        if (contact) {
            res.json(contact);
        } else {
            res.status(404).send('Contact not found');
        }
    });

    return router;
};
