var mongoose = require("mongoose");
var EmployeesSchema = new mongoose.Schema( { empid: Number, empname: String, salary: Number } );
var EmployeesModel = mongoose.model("employees", EmployeesSchema);
mongoose.connect("mongodb://localhost/company");

EmployeesModel.findOne({ empid: 101 }, afterDataRetrieved);
function afterDataRetrieved(error, data)
{
  if (error == null)
  {
    data.empname = "new emp name";
    data.salary = 10000;

    data.save(afterDataUpdated);
    function afterDataUpdated(error2)
    {
      if (error2 == null)
      {
        console.log("Updated");
      }
      else
      {
        console.log(error2);
      }
      mongoose.disconnect();
    }
  }
  else
  {
    console.log(error);
  }  
}

