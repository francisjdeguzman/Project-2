var mysql = require("mysql");
var express = require("express");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "appointmentsDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  createCustomer();
});

function createCustomer() {
  console.log("Creating new customer...\n");
  var query = connection.query(
    "INSERT INTO customer SET ?",
    {
      full_name :  'Dwight Schrute',
      phone_number : 5551112222,
      email : 'schrutefarms@mifflin.com',
      preffered_date : 2020-02-02, 
    
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " Customer added!\n");
      // Call updateCustomer AFTER the INSERT completes
      updateCustomer();
    }
});

  // logs the actual query being run
  console.log(query.sql);
}

function updateCustomer() {
  console.log("Updating all customers...\n");
  var query = connection.query(
    "UPDATE customers SET ? WHERE ?",
    [
      {
        preffered_date : 2020-02-02,
      },
      {
        email : 'schrutefarms@mifflin.com',
      }
    ],
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " customers updated!\n");
      // Call deleteCustomer AFTER the UPDATE completes
      deleteCustomer();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

function deleteCustomer() {
  console.log("Deleting all booked days...\n");
  connection.query(
    "DELETE FROM customers WHERE ?",
    {
        preffered_date : 2020-02-02,
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " dates deleted!\n");
      // Call readCustomers AFTER the DELETE completes
      readCustomers();
    }
  );
}

function readCustomers() {
  console.log("Selecting all customers...\n");
  connection.query("SELECT * FROM customers", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
}
