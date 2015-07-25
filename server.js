var express = require('express');
var app = express();
var path = require("path");

// Views setup: ejs template
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
require('./app/js/routes.js')(app);

app.listen(8888);

module.exports = app;