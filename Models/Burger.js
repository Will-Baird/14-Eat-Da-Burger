var orm = require("../Config/ORM");
var burger = {
    selectAll: function (callbackFunction) {
        var table = "Burgers";
        var all = "*";
        orm.selectAll(callbackFunction, all, table);
    },
    updateOne: function (id) {
        var table = "Burgers";
        var col = "Devoured";
        var id = id;
        orm.updateOne(id, table, col);
    },
    insertOne: function (newName) {
        var table = "Burgers";
        var newName = newName;

        orm.insertOne(table, newName);
    }
};

module.exports = burger;