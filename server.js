/**
 * Module dependencies.
 */
var app = require('./app');
var http = require('http');

/* Creating the HTTP server */
var server = http.createServer(app);

/* trigger the server */
server.listen(8081);
