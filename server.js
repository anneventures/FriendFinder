// DEPENDENCIES //
const express = require("express");
const bodyParser = require("body-parser");

// SET UP EXPRESS APP //
const app = express();
const PORT = process.env.PORT || 8080;

// DATA PARSING //
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTER //
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// LISTENER //
app.listen(PORT, function() {
	console.log("App listening on port: " + PORT);
});
