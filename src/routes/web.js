const express = require('express');
const { getHomePage, getDemo, postCreateUser } = require('../controllers/homeController');
const router = express.Router();


router.get('/', getHomePage);
router.get('/p', getDemo);
router.post('/create-user', postCreateUser);

module.exports = router;