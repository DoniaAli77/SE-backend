const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const employeeRouter = require("./routes/employee")
const path = require('path');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');
app.use(express.static('public'));

// Handle post requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// routes
app.use("/employee", employeeRouter)


app.listen(3000, ()=>{
    console.log("Server is now listening at port 3000 on http://localhost:3000/");
})

// Main Home page
app.get('/' , (req , res) => {    
    return res.render('index' , 
    {title : "Tutorial 9" , 
    desc : "Tutorial is mainly about UI connection with server" ,
    arr : [1,2,3]
    });
});

// Main Home page
app.get('/addEmployee' , (req , res) => {    
    return res.render('add');
});

// profile page
app.get('/profile' , (req , res) => {    
    return res.render('profile');
});



