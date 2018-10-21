
var express = require('express');

var app = express();



app.listen(8080, function() {
	console.log("Server running on port %s", 8080);
});

/* http://localhost:8080 */
app.get("/", function(req, res) {

	res.sendFile(__dirname + '/index.html');

});