var db = require("../models");

module.exports = function (app) {

    app.get("/", function (req, res) {
        db.burger_model.findAll({}).then((result) => {
            // console.log(result.dataValues)
            let burgerObject = {
                burgers: result
            }
            res.render("index", burgerObject);

        });
    });

    //add new burger to DB
    app.post("/api/burgers", function (req, res) {
        db.burger_model.create({
            burger_name: req.body.burger_name
        }).then(() => {
            console.log('redirecting')
            res.redirect("/");
        })
    });

    //change burger status to devoured
    app.put("/api/burgers/:id", function (req, res) {
        var condition = req.params.id;

        db.burger_model.update({
            devoured: true
        }, {
            where: {
                id: condition
            }
        }).then((result) => {
            if (result.changedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });
}