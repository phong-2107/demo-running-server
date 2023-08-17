require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const connection = require('./config/database');
const fileUpload = require('express-fileupload');
const { MongoClient } = require('mongodb');

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
    // await connection();

    // ============ using mongodb drive =================
    // Connection URL
    const url = process.env.DB_HOST_WITH_DRIVER;
    const client = new MongoClient(url);

    // Database Name
    const dbName = process.env.DB_NAME;

    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('customers');
    // save data
    // collection.insertOne({"name": "Nguyen Phong"});
    collection.insertOne({"address" : "HCM", email : "test@gamil.com" });

    // find data
    let tmp = await collection.findOne({address : "HCM"});
    console.log("find HCM : >>>> " , tmp);
    app.listen(port, hostname, () => {
      console.log(`Example app listening on port ${port}`)
    })
  } catch (error) {
    console.log(` >> error is ${error}`);
  }
})()





