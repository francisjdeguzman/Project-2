var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'codefun123',
    database: 'articles'
});

connection.connect();