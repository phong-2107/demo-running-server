"use strict";

var express = require('express');

require('dotenv').config();

var configViewEngine = require('./config/viewEngine');

var webRoutes = require('./routes/web');

var connection = require('./config/database');

var app = express();
var port = process.env.PORT || 8888;
var hostname = process.env.HOST_NAME; // config req.body

app.use(express.json());
app.use(express.urlencoded({
  extended: true
})); // config template engine

configViewEngine(app); //config routes

app.use('/', webRoutes); // // simple query
// connection.query(
//   'SELECT * FROM Users u ',
//   function(err, results, fields) {
//     console.log("result = ", results); // results contains rows returned by server
//   }
// );

app.listen(port, hostname, function () {
  console.log("Example app listening on port ".concat(port));
});