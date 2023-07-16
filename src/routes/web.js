const express = require('express');
const { getHomePage, getDemo, postCreateUser, getUser, getUpdateUser, postUpdateUser } = require('../controllers/homeController');
const router = express.Router();


router.get('/', getHomePage);
router.get('/p', getDemo);
router.get('/User', getUser);
router.get('/update-user/:id', getUpdateUser);

router.post('/create-user', postCreateUser);
router.post('/update-user', postUpdateUser);

module.exports = router;