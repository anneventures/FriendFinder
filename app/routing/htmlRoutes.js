// DEPENDENCIES //
var path = require("path");

// ROUTING //
module.exports = function(app) {
	app.get("/", function(res, req) {
		res.sendFile(path.join(__dirname, "/app/public/home.html"));
	});

	app.get("/survey", function(res, req) {
		res.sendFile(path.join(__dirname, "/app/public/survey.html"));
	});
};