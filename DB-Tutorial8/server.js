const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const employeeRouter = require("./routes/employee")




// Handle post requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));



app.get('/users/:id',(req,res)=>{
    res.send(req.params.id)

});



// routes
app.use("/employee", employeeRouter)
// app.use("/amin",adminRouter)


app.listen(3001, ()=>{
    console.log("donia");
    console.log("Server is now listening at port 3001 on http://localhost:3001/");
})


app.post('/users',(req,res)=>{
    res.send(req.body)
})



