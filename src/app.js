const express = require('express');
const mongoose =  require('mongoose');
require('dotenv').config();
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');


const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// config req.body
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// config template engine
configViewEngine(app);

//config routes
app.use('/', webRoutes);


// connection

const kittySchema = new mongoose.Schema({
  name: String
});

const Kitten = mongoose.model('Kitten', kittySchema);
const silence = new Kitten({ name: 'Phong Cat' });

silence.save();

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





