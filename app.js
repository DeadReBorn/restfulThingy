const express = require('express');
const req = require('express/lib/request');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');

const db = process.env.DB_CONNECTION;

const oblivionRoute =  require('./routes/oblivion');
app.use('/oblivion', oblivionRoute);
 
app.get('/', (req, res) => {
    res.send('Genesis')
})

mongoose.connect(db, () =>
console.log('connected to the DB'));

app.listen(3000);