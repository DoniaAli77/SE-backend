const express = require("express")
const router = express.Router();


//router.use(logger);

router.get('/' , async (req , res) => {
  return res.render('employee');
});


router.get('/view' , async (req , res) => {
  try{
  const result = await db.raw(`select * from employee`);
  //console.log(`result here`,result.rows);
  res.send(result.rows);
  }catch(err){
      console.log("error message",err.message);
      res.send(err.message);
  }
});

router.post("/new", async (req, res) => {
  
  try{
    const {firstname, middlename, lastname, country, salary, birthdate } = req.body 
    console.log(req.body);
    const result = await db.raw(
      `insert into employee(firstname, middlename, lastname, country, salary , birthdate)
        values('${firstname}', '${middlename}', '${lastname}', '${country}', ${salary}, '${birthdate}');`);
    res.send('new employee has successfully added')
  }catch(err){
    console.log("eror message", err.message);
    res.send("failed to add new employee")
  }

});

router.get('/:id', async (req, res)=> {
  try {
    const query = `select * from employee where id = ${req.params.id}`;
    console.log(req.params.id);
    const result = await db.raw(query);
    res.send(result.rows);
  } catch (err) {
    console.log("eror message", err.message);
    res.send("failed to get this employee id");
  }
})


router.delete('/:id', async (req, res)=> {
  
  try {
    const query = `delete from employee where id=${req.params.id}`;
    const result = await db.raw(query);
    res.send("deleted succesfully");
  } catch (err) {
    console.log("eror message", err.message);
    res.send("failed to delete employee");
  }

})

router.put('/:id', async (req, res)=> {
  
  try {
    const {country , birthdate , salary} = req.body;
    console.log(req.body,salary);
    const query = `update employee
                       set country = '${country}',
                       salary = '${salary}',
                       birthdate = '${birthdate}'
                       where id = ${req.params.id}`
    const result = await db.raw(query);
    res.send("updated succesfully");
  } catch (err) {
    console.log("eror message", err.message);
    res.send("failed to update employee");
  }

});


/*
router.route("/:id")
  .get((req, res) => {
    console.log(req.user)
    res.send(`Get User With ID ${req.params.id}`)
  })
  .put((req, res) => {
    res.send(`Update User With ID ${req.params.id}`)
  })
  .delete((req, res) => {
    res.send(`Delete User With ID ${req.params.id}`)
  })

*/
module.exports = router