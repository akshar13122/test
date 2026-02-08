const express = require('express');
const router = express.Router();

const {purchaseProduct} = require('../Controller/purchaseController');

router.post('/purchaseProduct/:userid',purchaseProduct)

module.exports = router