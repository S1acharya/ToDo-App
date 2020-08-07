// we require express library
const express = require('express');
const app = express();
const port = 8000;





// we will set ejs as our view engine
app.set('view engine' , 'ejs');
app.set('views' , './views');


// to load static files(css , images , js ,etc) dynamically using middleware
app.use(express.static('assets'));





// code to render page(home.ejs) or simply home page
app.get('/' , function(req , res){
    return res.render('home' , {
        title:"helloooo"
    });
})




// to check if expressserver is running properly or not
app.listen(port , function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is up and running on port: ${port}`);
});
