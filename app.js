const express = require('express');
const req = require('express/lib/request');

const app = express();

app.use('/oblivion', () => {
    console.log('See you on a dark night')
})
 
app.get('/', (req, res) => {
    res.send('Genesis')
})

app.get('/oblivion', (req, res) => {
    res.send('Oblivion')
})

app.listen(3000);