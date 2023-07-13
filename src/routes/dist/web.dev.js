"use strict";

var express = require('express');

var _require = require('../controllers/homeController'),
    getHomePage = _require.getHomePage,
    getDemo = _require.getDemo,
    postCreateUser = _require.postCreateUser;

var router = express.Router();
router.get('/', getHomePage);
router.get('/p', getDemo);
router.post('/create-user', postCreateUser);
module.exports = router;