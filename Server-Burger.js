// Require npm packages
var express = require("express");
var bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');
var routes = require("./controllers/burgers_controller.js");

var app = express();

//CREATE STATIC VERSION OF YOUR ASSETS FOLDER FOR EXPRESS HTTP SERVER TO ACCESS
app.use(express.static('public'));

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
routes(app);

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});