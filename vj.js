const PORT = process.env.PORT || 3002;
const express = require("express");
const app = express();
const mysql = require("mysql");

const con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "nikhil6",
});

con.connect(function (err) 
{
  if (err) throw err;
  console.log("Connected!");
  // con.query("CREATE DATABASE nikhil6", function (err, result) {
  //   if (err) throw err;
  //   console.log("Datbase Created!");
  // });

  // con.query(
  //   "CREATE TABLE Employee(name varchar(100),Usn varchar(100) not null, Rollno int,Cpga int,Department varchar(100));",
  //   function (err, result) {
  //     if (err) throw err;
  //     console.log("Employee Created");
  //   }
  // );
});

// const createEmployee = () => {
//   con.query(
//     "INSERT INTO Employee values('Nikhil','01fe20bcs213','429','8','CS');"
//   );
//   con.query(
//      "INSERT INTO Employee values('Nikhil1','01fe20bcs214','421','7','EC');"
//    );
//   con.query("commit;");
// };

// createEmployee();

// let ans = null;

// function setResult(a) {
//   ans = a;
// }

// con.query("SELECT * from Employee;", (err, result) => {
//   if (err) throw err;
//   console.log(result);
//   setResult(result);
// });

// app.get("/getEmployees", (req, res) => {
//   res.send(ans);
// });

// app.listen("3002", () => {
//   console.log("listening on 3002");
// });

// function setResult(a) {
//   ans = a;
// }

// con.query("DELETE FROM Employee WHERE name='Nikhil';", (err, result) => {
//   if (err) throw err;
//   console.log(result);
//   setResult(result);
// });

// app.get("/deleteEmployees", (req, res) => {
//   res.send(ans);
// });

// app.listen(3002, () => {
//   console.log("listening on 3002");
// });
