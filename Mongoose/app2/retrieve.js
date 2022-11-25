var mongoose = require("mongoose");
var EmployeesSchema = new mongoose.Schema( { empid: Number, empname: String, salary: Number } );
var EmployeesModel = mongoose.model("employees", EmployeesSchema);
mongoose.connect("mongodb://localhost/company");

EmployeesModel.find({ salary: { $gt: 5000 } }, afterDataRetrieved);
function afterDataRetrieved(error, data)
{
  if (error == null)
  {
    //console.log(data);
    for (var i = 0; i < data.length; i++)
    {
      console.log(data[i].empid);
      console.log(data[i].empname);
      console.log(data[i].salary);
      console.log("...............");
    }
  }
  else
  {
    console.log(error);
  }
  mongoose.disconnect();
}

