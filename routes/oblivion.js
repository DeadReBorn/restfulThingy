const express = require('express');
const res = require('express/lib/response');

const router = express.Router();

let fullLyrics = `I never walk about after dark
Its my point of view
Cause someone could break your neck
Coming up behind you
Always coming and you'd never have a clue
I never look behind all the time
I will wait forever
Always looking straight
Thinking, counting all the hours you wait`;


router.get('/', (req, res) => {
    res.send('See you on a dark night')
});

router.get('/fullLyrics', (req, res) => {
    res.send(fullLyrics)
});

module.exports = router; 