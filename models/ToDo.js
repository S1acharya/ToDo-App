const mongoose = require('mongoose');

// create a schema
const listSchema = new mongoose.Schema({
    description:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    category:{
        type: String,
        required: true
    }
});


// define the collection name
const ToDo = mongoose.model('ToDo' , listSchema);

// export list schema
module.exports = ToDo;