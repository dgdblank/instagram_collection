var bodyParser = require('body-parser');

module.exports = function (app, express){

	// parses body of http request
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
};