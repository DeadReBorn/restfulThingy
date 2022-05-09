 const mongoose = require('mongoose'); 

 const RecordSchema = mongoose.Schema({
     title: {
         type: String,
         required: true,
     },
     artist: {
        type: String,
        required: true,
    },
    year: Number,
 });

 module.exports = mongoose.model('Record', RecordSchema);