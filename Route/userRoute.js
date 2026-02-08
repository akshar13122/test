const express = require("express");
const router = express.Router();

const {postUsers , getUsers , editUsers , deleteUser} = require('../Controller/userController')


router.post('/postusers',postUsers);
router.get('/getusers',getUsers);
router.post('/editusers/:id',editUsers);
router.post('/deleteuser/:id',deleteUser);


module.exports = router;