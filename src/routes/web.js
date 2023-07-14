const express = require('express');
const { getHomePage, getDemo, postCreateUser, getUser } = require('../controllers/homeController');
const router = express.Router();


router.get('/', getHomePage);
router.get('/p', getDemo);
router.get('/User', getUser);
router.post('/create-user', postCreateUser);

module.exports = router;