const express = require('express');
const routerAPI = express.Router();
const {getUserAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI, postUploadSingleFileAPI} = require('../controllers/apiController');


routerAPI.get('/', (req, res) => {
    res.send("hello world with phong");
});

routerAPI.get('/123', (req, res) => {
    res.status(200).json({
        data: "hello world",
    })
});

routerAPI.get('/users',getUserAPI);
routerAPI.post('/users',postCreateUserAPI);
routerAPI.put('/users',putUpdateUserAPI);
routerAPI.delete('/users',deleteUserAPI);
routerAPI.post('/file',postUploadSingleFileAPI);
module.exports = routerAPI;