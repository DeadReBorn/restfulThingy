const express = require('express');
const Record = require ('../models/Record');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('See you on a dark night')
});

router.post('/', (req, res) => {
    console.log(req.body);
}); 

module.exports = router; 