var orm = require("../Config/ORM");

var burger = {
    selectAll: function (callbackFunction) {
        var table = "burgers";
        var all = "*";
        orm.selectAll(callbackFunction, all, table);
    },

    updateOne: function (id) {
        var table = "burgers";
        var col = "devoured";
        var id = id;

        orm.updateOne(id, table, col);
    },

    insertOne: function (newName) {
        var table = "burgers";
        var newName = newName;

        orm.insertOne(table, newName);
    }
};

module.exports = burger;