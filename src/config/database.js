require('dotenv').config();
const mongoose = require('mongoose');
// const mysql = require('mysql2');

// check connection
const dbState = [{
    value: 0,
    label: "disconnected"
},
{
    value: 1,
    label: "connected"
},
{
    value: 2,
    label: "connecting"
},
{
    value: 3,
    label: "disconnecting"
}];




// mongoose connection
const connection = async () => {
    try {
        mongoose.set('strictQuery', false);

        const options = {
            user: process.env.DB_USER,
            pass: process.env.DB_PASSWORD,
            dbName: process.env.DB_NAME
        }
        await mongoose.connect(process.env.DB_HOST,options);
        const state = Number(mongoose.connection.readyState);
        console.log(dbState.find(f => f.value == state).label, "to db"); // connected to db
    } catch (error) {
        // handleError(error);
        console.log(`==> error connection : ${error}`);
    }
}

// export database
module.exports = connection;