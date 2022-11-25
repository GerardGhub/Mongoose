var mongoose = require("mongoose");
var EmployeesSchema = new mongoose.Schema( { empid: Number, empname: String, salary: Number } );
var EmployeesModel = mongoose.model("employees", EmployeesSchema);
mongoose.connect("mongodb://localhost/company");

EmployeesModel.findOne({ salary: { $gt: 5000 } }, afterDataRetrieved);
function afterDataRetrieved(error, data)
{
  if (error == null)
  {
    console.log(data.empid);
    console.log(data.empname);
    console.log(data.salary);
  }
  else
  {
    console.log(error);
  }
  mongoose.disconnect();
}

