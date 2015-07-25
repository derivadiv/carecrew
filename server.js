var express = require('express');
var app = express();
var path = require("path");
var bodyParser = require('body-parser');

var _ = require('./db.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Views setup: ejs template
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// models
app.use('/models',express.static(__dirname+'models'));

app.use(express.static('app'));

var patient = require('./app/js/models/Patient.js');

// Routes
require('./routes.js')(app, patient);

app.listen(8888);

module.exports = app;
