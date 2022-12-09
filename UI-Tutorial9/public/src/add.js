$(document).ready(function(){
    $("#submit").click(function() {
      const firstname = $('#fname').val();
      const middlename = $('#mname').val();
      const lastname = $('#lname').val();        
      const salary = $('#salary').val();
      const country = $('#country').val();
      const birthdate = $('#birthdate').val();

      if(!firstname  || !middlename || !lastname || !salary || !country || !birthdate){
        return;
      }

      const employeeObj = {firstname,middlename,lastname,salary,country,birthdate};
      console.log(employeeObj)
      alert("employee added successfuly");
    });
});