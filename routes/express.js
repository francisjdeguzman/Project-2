var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: '',
  password: '',
  database: 'barber_db'
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Listening on " + PORT);
});