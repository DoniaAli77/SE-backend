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


app.listen(3001, ()=>{
    console.log("Server is now listening at port 3001 on http://localhost:3001/");
})

// Main Home page
app.get('/' , (req , res) => {    
    return res.render('index' , 
    {title : "Tutorial 9" , 
    desc : "Tutorial is mainly about cypress" ,
    });
});

// Main Home page
app.get('/addEmployee' , (req , res) => {    
    return res.render('add');
});

// profile page
app.get('/apply' , (req , res) => {    
    return res.render('apply');
});
app.post('/profile' , (req , res) => {    
    const{ fname,mname,lname,country,salary,birthdate}=req.body
    return res.render('profile',{fname,mname,lname,country,salary,birthdate});
});


