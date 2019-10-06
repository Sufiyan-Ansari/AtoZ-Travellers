const express = require('express');

const router = express.Router();

const adminController = require('../controller/adminController');

router.get('/',adminController.GetIndexPage);

router.post('/',adminController.PostUser);

router.get('/Userlist',adminController.GetUserList);

router.get('/User',adminController.getUser);

module.exports = router;