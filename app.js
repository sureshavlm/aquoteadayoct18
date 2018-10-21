
var express = require('express');

var app = express();

var port = process.env.PORT || 8080;

app.listen(port, function() {
	console.log("Server running on port %s", port);
});

/* http://localhost:8080 */
app.get("/", function(req, res) {

	res.sendFile(__dirname + '/index.html');

});