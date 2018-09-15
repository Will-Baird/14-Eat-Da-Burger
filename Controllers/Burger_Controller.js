var burger = require("../models/burger.js");
var orm = require("../config/orm.js");
module.exports = function(app) {
    app.get("/", function(req, res) {
        burger.selectAll(done);
        function done(data) {
            console.log("data", data);
            res.render("index", {burgers:data});
        };
    });
    app.get("/api/burgers", function(req, res) {
        burger.selectAll(done);
        function done(data) {
            console.log("data", data);
            return res.json(data);
        };
    });
    app.put("/api/burgers/:id", function(req, res) {
        burger.updateOne(req.params.id);
        res.redirect("/");
    }); 
    app.post("/api/burgers", function(req, res) {
        burger.insertOne(req.body.burger);
        res.redirect("/");
    }); 
};