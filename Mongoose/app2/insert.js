var mongoose = require("mongoose");
var EmployeesSchema = new mongoose.Schema( { empid: Number, empname: String, salary: Number }, { versionKey: false } );
var EmployeesModel = mongoose.model("employees", EmployeesSchema);
mongoose.connect("mongodb://localhost/company");

var newEmp = new EmployeesModel( { empid: 108, empname: "abc", salary: 2200 } );
newEmp.save(afterDataInserted);
function afterDataInserted(error)
{
  if (error == null)
  {
    console.log("Inserted");
  }
  else
  {
    console.log(error);
  }
  mongoose.disconnect();
}

