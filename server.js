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

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8888);
