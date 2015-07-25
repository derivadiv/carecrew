var express = require('express');
var app = express();
var path = require("path");
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://blog.theworldj.tk:27017/exampleDb", function(err, db) {
  if(!err) {
    console.log("connected to mongo :) !");
  }
});

// Views setup: ejs template
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
require('./app/js/routes.js')(app);

app.listen(8888);

module.exports = app;
