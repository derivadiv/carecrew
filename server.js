var express = require('express');
var app = express();
var path = require("path");
var db = require('./db.js');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Views setup: ejs template
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
require('./app/js/routes.js')(app);

app.listen(8888);

module.exports = app;
