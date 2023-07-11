const express = require('express');
require('dotenv').config();
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
const mysql = require('mysql2');
// config template engine
configViewEngine(app);

// config routes
app.use('/test', webRoutes);

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: '123456',
  database: 'hoidanit'
});

// simple query
connection.query(
  'SELECT * FROM Users u ',
  function(err, results, fields) {
    console.log("result = ", results); // results contains rows returned by server
    console.log("fields = ", fields); // fields contains extra meta data about results, if available
  }
);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})



