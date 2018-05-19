// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
 } else {
    connection = mysql.createConnection({
  host: "ehc1u4pmphj917qf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "nxahopwk2lcd9wrb",
  password: "hlr9u6w27nq02d7g ",
  database: "burgers_db"
});
  };

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;