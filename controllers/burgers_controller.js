var express = require("express");
var router = express.Router();


// Import the model to use its database functions.
var orm = require("../config/orm.js");

//routes
router.get("/", function (req, res) {
    // console.log('I am here')
    orm.selectAll(function (data) {
        var burgerObject = {
            burgers: data
        };
        // console.log('burgers_controller get route: ', burgerObject);
        res.render("index", burgerObject);
    });
});

//add new burger to DB
router.post("/api/burgers", function (req, res) {
    console.log('router.post: ', req.body.burger_name)
    orm.insertBurger([
        req.body.burger_name
    ], function (result) {
        console.log("results from post", result)
        res.redirect("/");
    });
});

//change burger status to devoured
router.put("/api/burgers/:id", function (req, res) {
    var condition = req.params.id;

    console.log("b_c condition id = ", condition);

    orm.updateBurger({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;