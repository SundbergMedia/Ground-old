// ground
//////////////////////////////////////////////

var express = require('express');
var app = express();
var router = express.Router();
var fs = require('fs');
var bodyParser = require('body-parser');
var chalk = require('chalk');
var config = require('./config/config.js');
var util = require('./modules/util.js');
var log = util.log;


// set up environment & middleware
app.set('view engine', 'jade');                     // set our templating framework
app.set('views', __dirname + '/views');             // set path to our views
app.use(express.static('dist'));                    // set path to static files
app.use('/', router);                               // use express router
app.use(bodyParser.json());                         // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


// routing middleware example
router.use(function(req, res, next) {

    // do something with data
	console.log(req.method, req.url);
	
	// continue doing what we were doing and go to the route
	next(); 
});


// load routes
// TODO: recursion!
fs.readdirSync(__dirname + '/routes').forEach(function(file) {
    console.log('Load routes file: ' + chalk.blue(file));
    require(__dirname + '/routes/' + file)(app);
});


// setup server, listen on port as defined in config
app.listen(config.port, log(chalk.green('Ground') + ' running on port ' + config.port));