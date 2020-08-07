// we require express library
const express = require('express');

const app = express();

const port = 8000;










// to check if expressserver is running properly or not
app.listen(port , function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is up and running on port: ${port}`);
});
