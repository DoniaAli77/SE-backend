const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const employeeRouter = require("./routes/employee")


// Handle post requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// routes
app.use("/employee", employeeRouter)


app.listen(3000, ()=>{
    console.log("Server is now listening at port 3000 on http://localhost:3000/");
})


app.get('/' , (req , res) => {    
    res.send('Welcome localhost:3000');
});




