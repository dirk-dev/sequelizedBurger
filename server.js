var express = require("express");

var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.static("public"));

var db = require("./models");

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

require("./routes/api-routes.js")(app);

var expressHandlebars = require("express-handlebars");

app.engine("handlebars", expressHandlebars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

db.sequelize.sync({}).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});