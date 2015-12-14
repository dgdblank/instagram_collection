var express = require('express');
var app = express();
var cors = require('cors');

var corsOptions = {
	origin: 'http://localhost:3002'
};
// var pg = require('pg');

// var conString = 'postgres://localhost/insta';
// var client = new pg.Client(conString);
// client.connect();

// configure server with middleware and routing
require('./middleware.js')(app, express);

// Allow cross-origin requests for instagram API
app.use(cors(corsOptions));

// server static files
app.use(express.static(__dirname + '/../public'));

app.set("port", 3002);

app.listen(app.get("port"), function() {
	console.log("Listening on " + app.get("port"));
});

module.exports = app;