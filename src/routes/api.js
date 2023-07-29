const express = require('express');

const routerAPI = express.Router();
const {getUserAPI} = require('../controllers/apiController');
routerAPI.get('/', (req, res) => {
    res.send("hello world with phong");
});

routerAPI.get('/123', (req, res) => {
    res.status(200).json({
        data: "hello world",
    })
});

routerAPI.get('/users',getUserAPI);

module.exports = routerAPI;