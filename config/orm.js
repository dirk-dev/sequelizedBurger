// Import MySQL connection
var connection = require("../config/connection.js");

var orm = {

    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function (err, res) {
            if (err) {
                throw err
            };
            // console.log('response: ', res);
            cb(res)
        })
    },

    //this is a post to add a new burger to the DB
    insertBurger: function (vals, cb) {
        var queryString = "INSERT INTO burgers (burger_name) ";
        queryString += "VALUES (";
        queryString += "'";
        queryString += vals;
        queryString += "'";
        queryString += ");";

        console.log("SQL Insert query = ", queryString)

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err
            };
            cb(result)
        })
    },

    updateBurger: function (condition, val, cb) {
        var queryString = "UPDATE burgers SET devoured = 1"
        // console.log("CONDITION: ID = ", val)
        queryString += " WHERE ";
        queryString += "id = ";
        queryString += val;

        console.log("SQL Update query = ", queryString)

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }

}

module.exports = orm;