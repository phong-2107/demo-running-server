"use strict";

var express = require('express');

var _require = require('../controllers/homeController'),
    getHomePage = _require.getHomePage,
    getDemo = _require.getDemo;

var router = express.Router();
router.get('/', getHomePage);
router.get('/p', getDemo);
router.get('/1/doc', function (req, res) {
  res.send('nguyenphong.210703@gmail.com');
});
module.exports = router;