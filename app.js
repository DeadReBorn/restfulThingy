const express = require('express');
const req = require('express/lib/request');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');

const db = process.env.DB_CONNECTION;

app.use(bodyParser.json());

// Import routes
const recordsRoute =  require('./routes/records');
app.use('/records', recordsRoute);
 

// ROUTES 
app.get('/', (req, res) => {
    res.send('Genesis')
})

mongoose.connect(db, () =>
console.log('Connected to the DB'));

app.listen(3000);