// require mongoose library
const mongoose = require('mongoose');

// connect to database
mongoose.connect('mongodb://localhost/ToDo_List_db' , {
    useNewUrlParser: true , useUnifiedTopology: true 
});

// get access to database by using variable('db')
const db = mongoose.connection;


// if error found
db.on('error' , console.error.bind(console , 'error connecting to db'));

//  if up and running
db.once('open' , function(){
    console.log("Successfully connected to the database");
});