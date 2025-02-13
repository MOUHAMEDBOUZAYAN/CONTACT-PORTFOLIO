const express = require('express');
const Contact = require('./model');
const route = express.Router();

route.get('/leo', (req, res) => {
    res.send("fffghhhhjjjj");
});
route.post('/api/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;
          res.status(400).json({ error: 'All fields are required' });
       
        await newContact.save();
        res.status(201).json({ message: 'Contact saved' });
    } catch (error) {
        console.error('Error saving contact:', error);
        res.status(500).json({ error: 'Error saving contact' });
    }
});

module.exports = route;