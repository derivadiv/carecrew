var mongoose = require('mongoose');

mongoose.connect("mongodb://blog.theworldj.tk:27017/exampleDb");

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("connected to mongo :) !");
});