var mysql = require('mysql');

var db = mysql.createConnection({
  host: "localhost",
  user: "account",
  password: "passw0rd",
  database : 'account_development'
});

db.connect(function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Connected!");
});

module.exports = db;
