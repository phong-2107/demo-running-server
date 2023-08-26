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
        deleteACustomer,
        deleteAllCustomer
} = require('../controllers/customerController');


const {
    postCreateProject,
    getProject,
    updateProject,
    deleteProject
} = require('../controllers/projectController');

const {
    postCreateTask,
    getTask,
    updateTask,
    deleteTask
} = require('../controllers/taskController');


// >>>>>>>> route for users
routerAPI.get('/users',getUserAPI);
routerAPI.post('/users',postCreateUserAPI);
routerAPI.put('/users',putUpdateUserAPI);
routerAPI.delete('/users',deleteUserAPI);
routerAPI.post('/file',postUploadSingleFileAPI);
routerAPI.post('/files',postUploadMultiFileAPI);

// >>>>>>>> route for Customers
routerAPI.post('/customers',postCreateCustomer);
routerAPI.get('/customers',getListCustomer);
routerAPI.delete('/customers',deleteACustomer);
routerAPI.delete('/customers-list',deleteAllCustomer);

// >>>>>>>> route for Project
routerAPI.post('/projects', postCreateProject);
routerAPI.get('/projects', getProject);
routerAPI.put('/projects',updateProject);
routerAPI.delete('/projects',deleteProject);

// >>>>>>>> route for Tasks
routerAPI.post('/tasks', postCreateTask);
routerAPI.get('/tasks', getTask);
routerAPI.put('/tasks', updateTask);
routerAPI.delete('/tasks', deleteTask);




// routerAPI.get('/info', (req, res) => {
//     return res.status(200).json(
//         EC: 0,
//         data: req.query
//     })
// });

// routerAPI.get('/info/:name/:address/:email', (req, res) => {
//     return res.status(200).json({
//         EC: 0,
//         data: req.params
//     })
// });

module.exports = routerAPI;