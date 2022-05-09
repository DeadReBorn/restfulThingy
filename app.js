const express = require('express');
const req = require('express/lib/request');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');

const db = process.env.DB_CONNECTION;

const recordsRoute =  require('./routes/records');
app.use('/records', recordsRoute);
 
app.get('/', (req, res) => {
    res.send('Genesis')
})

mongoose.connect(db, () =>
console.log('connected to the DB'));

app.listen(3000);