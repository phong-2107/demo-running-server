const express = require('express');
const {getHomePage, getDemo} = require('../controllers/homeController');
const router = express.Router();


router.get('/', getHomePage);
router.get('/p', getDemo);

router.get('/1/doc', (req, res) => {
    res.send('nguyenphong.210703@gmail.com');
  })



module.exports = router;