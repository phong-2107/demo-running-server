"use strict";

var express = require('express');

var _require = require('../controllers/homeController'),
    getHomePage = _require.getHomePage,
    getDemo = _require.getDemo,
    postCreateUser = _require.postCreateUser,
    getUser = _require.getUser,
    getUpdateUser = _require.getUpdateUser,
    postUpdateUser = _require.postUpdateUser;

var router = express.Router();
router.get('/', getHomePage);
router.get('/p', getDemo);
router.get('/User', getUser);
router.get('/update-user/:id', getUpdateUser);
router.post('/create-user', postCreateUser);
router.post('/update-user', postUpdateUser);
module.exports = router;