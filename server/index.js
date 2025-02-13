const express = require('express');
const mongoose = require('mongoose');
const route = require('./route'); 
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // Remplace bodyParser.json()

app.use('/api', route);

const mongoDBURL = 'mongodb://127.0.0.1:27017/contact'; 

mongoose.connect(mongoDBURL, {
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB:', err.message));

app.listen(8999, () => {
    console.log('Server is running on port 8999');
});