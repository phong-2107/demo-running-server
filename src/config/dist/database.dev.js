"use strict";

require('dotenv').config();

var mysql = require('mysql2/promise'); // create the connection to database


var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});
module.exports = connection;