// we require express library
const express = require('express');

const port = 8000;

// require mongoose file
const db = require('./config/mongoose');

// require list schema
const ToDo = require('./models/ToDo');

const app = express();

// we will set ejs as our view engine template
app.set('view engine' , 'ejs');
app.set('views' , './views');

// middleware for parsing data and appending to server
app.use(express.urlencoded());

// to load static files(css , images , js ,etc) dynamically using middleware
app.use(express.static('assets'));

// written initially to show on page when database was not connected
var ToDoList = [
    {
        description : "why not add a task",
        date : "12-08-2050",
        category : "other"
    },
    {
        description : "why not add a task",
        date : "12-08-2050",
        category : "other"
    }
]




// push data to database
app.post('/make-app' , function(req , res){
    ToDo.create({
        description: req.body.description,
        date: req.body.date,
        category: req.body.category
    } , function(err , newWork){
        if(err){console.log('Error in creating a work list!')
        return;}
        console.log('******' , newWork);
        return res.redirect('back');
    })
});




// fetch from database and show on screen
app.get('/' , function(req , res){
    ToDo.find({} , function(err , listShow){
        if(err){
            console.log("Error in fetching list from db");
            return;
        }
        return res.render('home' , {
            title:"ToDo App" , 
            ToDo_List : listShow
        });
    })
});


// code to render page(home.ejs) or simply home page
// this peice of code was written initially when database was not connected
// app.get('/' , function(req , res){
//     return res.render('home' , {
//         title:"helloooo" , 
//         ToDo_List : ToDoList
//     });
// });




// delete data from database
app.get('/delete-contact/' , function(req, res){
    // get the id from query in the url
        let id = req.query.id;

    // it searches for the contact in the database using id and delete it
        ToDo.findByIdAndDelete(id , function(err){
            if(err){
                console.log("error in deleting an list from database");
                return;
            }
            return res.redirect('back');
        })
      
    });



// to check if expressserver is running properly or not
app.listen(port , function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is up and running on port: ${port}`);
});
