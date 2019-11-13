var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "CAM@wa123",
    database: "bamazondb"
});

connection.connect(function(err) {
    if (err) throw err;
    runSearch();
});

