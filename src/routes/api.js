const express = require('express');
const routerAPI = express.Router();
const {getUserAPI,
    postCreateUserAPI,
    putUpdateUserAPI,
    deleteUserAPI,
    postUploadSingleFileAPI,
    postUploadMultiFileAPI,

} = require('../controllers/apiController');

const { postCreateCustomer,
        getListCustomer,
        deleteACustomer
} = require('../controllers/customerController');

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
routerAPI.post('/files',postUploadMultiFileAPI);
routerAPI.post('/customers',postCreateCustomer);
routerAPI.get('/customers',getListCustomer);
routerAPI.delete('/customers',deleteACustomer);
module.exports = routerAPI;