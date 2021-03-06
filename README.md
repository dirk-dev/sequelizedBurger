# sequelizedBurger

![Eat-Da-Burger Sequelized](public/assets/images/sequelized_burgers_app.png)

## [deployed app](https://intense-thicket-35887.herokuapp.com/)

## Purpose of the app

`sequelizedBurger` was written to address the problem of how to create tables in a MySQL database, store user input, update that input when the user modifies it, and render the data to the screen. `Handlebars` is used to render the content on the screen. `SequelizedBurger` uses the `Sequelize` library for database queries. to store user input, and is an offshoot of a previous app, `burger`, which used `mySQL` queries. The repo for this app is found here `https://github.com/dirk-kiesewetter/burger`.

## Summary

The user inputs the burger(s) they would like to eat to the `sequelizedBurger` app. The app does a `POST` of user input to a MySQL database and updates the screen to reflect any additions. There is also `schema.sql` & `seeds.sql` files to set up the database and add the initial values.

Each item has a button that allows the user to chose a burger to 'devour'. Clicking that button triggers a `PUT`, which updates the values in the database to reflect that the burger has been eaten, and the screen is updated to reflect this change.

## Technical Details

- This app makes use of the `Model-View-Controller (MVC)` Architecture.
  - The `Model` contains the `schema.sql` file to set up the database. A table is created in the database via Sequelize using the `burger_model.js` file. The `burger_model.js` file was generated by Sequelize CLI. A JavaScript file containing jQuery interacts with this data.
  - The `Views` component is all of the front-end code in the form of 2 Handlebars files which display the contents of the database onscreen.
  - The `Controller` component is the intermediary between the `Model` (database) and `Views` (HTML front end).
- jQuery is used to collect user input and pass it to the database, as well as reload the page via AJAX calls.
- Handlebars is used to create the HTML views. The `main.handlebars` file contains the HTML including links to the stylesheets and jQuery library, as well as the handlebars `{{{body}}}` tag. The `index.handlebars` file contains the HTML body to display the complete webpage, including the buttons to change the burger state, the form for user input, and the handlebars tags for the database records.

## Running the App Locally

#### Setup - MySQL/MAMP

1. You will need to have a MySQL server running to use this app. MAMP is free software that runs a MySQL server on your local machine. Their URL can be found in the `Technologies Used` section below. Once you have a MySQL server running, take note of the `host`, `port`, `user` and `password` info on the server. On MAMP, this can be accessed clicking on the `open start page` icon on the MAMP app.

2. Install and configure the MySQL database app. For `MySQL Workbench`, on the start screen, click on the add or edit icons next to `MySQL Connections` and check that the settings correspond to the MAMP settings. The password is normally `root`. Once the settings are entered, click the `Test Connection` button to confirm that the connection is working.

#### Setup - Database:

1. Open the code for `schema.sql` (found in the `models` folder) in your text editor, copy it, and paste it into the Query window of `MySQL Workbench`.

2. Click the leftmost lightning-bolt icon (to the right of the disk icon), or select Query - Execute (All or Selection) in the Workbench menu. This will create the schema (skeleton) for the database.

3. Then click on the refresh icon at the top right side of the `SCHEMAS` panel to confirm that the database was created. It should be called burgers_db. Click on the dropdown arrows of the database and confirm that the database was created. At this point, there will be no tables or data associated with `burgers_db.`There is no supplied seeds file in this app; all data will be user-entered.

#### Setup - Node, Express, MySQL, Sequelize, and the server.js file

1. If not installed already, download & install `Node.js` on your computer.

2. Copy all the supplied the files to the directory you wish to run `sequelizedBurger` from.

3. At the command line, navigate to the directory where the server.js file is located and type `npm i` - this will read the `package.json` file and install any needed packages into a node_modules folder.

4. Open `config.json` in a text editor and change the connection info as needed to match the settings in your MySQL server and save it. Note: if you are on a Mac, the port number should be 8889; on a Windows machine, it should be 3306.

#### How to use `sequelizedBurger` locally:

1. Navigate in the command line to the directory where the server.js file located. Type `node server` at the prompt. This will run the server portion of the app.

2. Open a new web browser window. Type `localhost:3000/index` to run the client portion of the app. Add a new burger in the form and click `submit`. The new burger will appear in the `Burgers to Eat` column. Click the `Devour!` button to move the burger to the "Burgers that have been eaten." column.

## Technologies used:

- [Express npm package](https://www.npmjs.com/package/express)
- [Google Fonts](https://fonts.google.com/)
- [Handlebars templating engine](https://handlebarsjs.com/)
- [Heroku - for deployment](https://www.heroku.com/)
- JavaScript
- [jQuery](http://jquery.com/)
- [MAMP local server](https://www.mamp.info/en/)
- [MySQL Workbench](https://www.mysql.com/products/workbench/)
- [mySQL npm module](https://www.npmjs.com/package/mysql)
- [Node.js](https://nodejs.org)
- [Sequelize npm package](https://www.npmjs.com/package/sequelize)
- [Sequelize CLI package](https://www.npmjs.com/package/sequelize-cli)
- [Twitter Bootstrap CSS framework](http://getbootstrap.com/)
