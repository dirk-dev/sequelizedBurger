var express = require("express");

var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.static("public"));
app.use(express.static("models"));


app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

var expressHandlebars = require("express-handlebars");

app.engine("handlebars", expressHandlebars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var router = require("./controllers/burgers_controller.js");

app.use(router);
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT)
})