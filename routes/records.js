const express = require('express');
const { execMap } = require('nodemon/lib/config/defaults');
const Record = require ('../models/Record');

const router = express.Router();


// Get all the records
router.get('/getAllRecords', async (req, res) => {
    try {
        const allRecords = await Record.find();
        res.json(allRecords);
    } catch (err) {
        res.json({message: err})
    }
});

// Add a record
router.post('/addRecord', async (req, res) => {
    const record = new Record({
        title: req.body.title,
        artist: req.body.artist,
        year: req.body.year,
    });
    try {
        const savedRecord = await record.save();
        res.json(savedRecord);
    } catch (err) {
        res.json({message: err})
    }
});

// Get one record
router.get('/getRecord/:recordId', async (req, res) => {
    try {
        const foundRecord = await Record.findById(req.params.recordId);
        res.json(foundRecord);
    } catch (err) {
        res.json({message: err})
    }
});

// Delete one record
router.delete('/deleteRecord/:recordId', async (req, res) => {
    try {
        const deletedRecord = await Record.remove({_id: req.params.recordId});
        res.json(deletedRecord);
    } catch (err) {
        res.json({message: err})
    }
});

// Update one record
router.patch('/updateRecord/:recordId', async (req, res) => {
    try {
        const updatedRecord = await Record.updateOne(
            {_id: req.params.recordId},
            {$set: { title: req.body.title, artist: req.body.artist, year: req.body.year }
        });
        res.json(updatedRecord);
    } catch (err) {
        res.json({message: err})
    }
});

module.exports = router; 