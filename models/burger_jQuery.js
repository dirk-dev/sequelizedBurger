$(function () {

    //adds new burger to DB
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#new-burger").val().trim(),
        };
        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("new burger added!");
                // Reload the page to get the updated burger lists
                location.reload();
            }
        );
    });

    //changes burger state to devoured
    $(".burger-delete-button").on("click", function (event) {
        var id = $(this).data("id");
        var burgerStatus = $(this).data("burgerStatus");

        var updatedBurgerState = {
            devoured: burgerStatus
        };
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: updatedBurgerState
        }).then(
            function () {
                console.log("burger was eaten", burgerStatus);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

})