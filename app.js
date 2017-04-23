
// app configuration file 
var express = require('express');
var mongoose = require('mongoose');

var app = express();
var routes = require('./routes/index');
var dbConfig = require('./config/datasource');

var bodyParser = require('body-parser');


/* Application Configuration */
(function applicationConfiguration(app) {
  app.use(bodyParser.json({limit: "50mb"}));
  app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
  app.use(bodyParser.urlencoded({ extended: false }));
}(app));


/* Database configuration */
(function databaseConnection(app) {
  app.set('dbUrl', dbConfig.db.development);
  mongoose.connect(app.get('dbUrl'));
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'database connection error:'));
  db.once('open', function() {
    console.log("we're connected with database!");
  });
}(app));

/* RESTFUL API */
app.use('', routes);

module.exports = app;