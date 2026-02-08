const express = require('express');
const router = express.Router();
const {postProducts } = require('../Controller/productController')



router.post('/postproducts',postProducts)

module.exports = router;