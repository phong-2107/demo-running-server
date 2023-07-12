const express = require('express');
require('dotenv').config();
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);

// config routes
app.use('/test', webRoutes);



// simple query
connection.query(
  'SELECT * FROM Users u ',
  function(err, results, fields) {
    console.log("result = ", results); // results contains rows returned by server

  }
);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})



