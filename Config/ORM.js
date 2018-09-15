var connection = require("./Connection");
var orm = {
    selectAll: function (callbackFunction, all, table) {
        var query = "SELECT ?? FROM ??";
        connection.query(query, [all, table], function (err, results) {
            if (err) throw err;
            console.log(results);
            return callbackFunction(results)
        });
    },
    insertOne: function (table, newName) {
        var query = "INSERT INTO ?? (burger_name) VALUES (?)";
        connection.query(query, [table, newName], function (err, results) {
            if (err) throw err;
            console.log(results);
            return;
        });
    },
    updateOne: function (id, table, col) {
        var query = "UPDATE ?? SET ?? = 1 WHERE id=?";
        connection.query(query, [table, col, id], function (err, results) {
            if (err) throw err;
            console.log(results);
        });
    }
};
module.exports = orm;