var mongoose = require("mongoose");
var EmployeesSchema = new mongoose.Schema( { empid: Number, empname: String, salary: Number } );
var EmployeesModel = mongoose.model("employees", EmployeesSchema);
mongoose.connect("mongodb://localhost/company");

EmployeesModel.remove({ empid: 101 }, afterDataDeleted);
function afterDataDeleted(error, data)
{
  if (error == null)
  {
    console.log("Deleted");
  }
  else
  {
    console.log(error);
  }  
  mongoose.disconnect();
}

