require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const connection = require('./config/database');
const fileUpload = require('express-fileupload');

const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config file upload
app.use(fileUpload());

// config req.body
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// config template engine
configViewEngine(app);

//config routes
app.use('/', webRoutes);
app.use('/v1/', apiRoutes);

( async () => {
  try {
    await connection();
    app.listen(port, hostname, () => {
      console.log(`Example app listening on port ${port}`)
    })
  } catch (error) {
    console.log(` >> error is ${error}`);
  }
})()





