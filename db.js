var MongoClient = require('mongodb').MongoClient;

var mongoose = require('mongoose');

//crappy singleton pattern
var db = {instance: null};

module.exports = db;

mongoose.connect("mongodb://blog.theworldj.tk:27017/exampleDb");

//// Connect to the db
//MongoClient.connect("mongodb://blog.theworldj.tk:27017/exampleDb", function(err, _db) {
//  if(!err) {
//    console.log("connected to mongo :) !");
//    db.instance = _db;
//  }
//});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("connected to mongo :) !");
});