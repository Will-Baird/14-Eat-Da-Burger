var mysql = require("mysql2");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3000,
    user: "root",
    password: "root",
    database: "Burgers_DB"
});
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
module.exports = connection;