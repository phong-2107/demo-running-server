"use strict";

var express = require('express');

require('dotenv').config();

var configViewEngine = require('./config/viewEngine');

var webRoutes = require('./routes/web');

var app = express();
var port = process.env.PORT || 8888;
var hostname = process.env.HOST_NAME;

var mysql = require('mysql2'); // config template engine


configViewEngine(app); // config routes

app.use('/test', webRoutes); // create the connection to database

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: '123456',
  database: 'hoidanit'
}); // simple query

connection.query('SELECT * FROM Users u ', function (err, results, fields) {
  console.log("result = ", results); // results contains rows returned by server

  console.log("fields = ", fields); // fields contains extra meta data about results, if available
});
app.listen(port, hostname, function () {
  console.log("Example app listening on port ".concat(port));
});