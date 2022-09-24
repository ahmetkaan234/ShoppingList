const express  =require('express');
const productsControllers = require('../controllers/productsController')

const router = express.Router();


router.route('/products').get(productsControllers.getProducts)


module.exports = router;