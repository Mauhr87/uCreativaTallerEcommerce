const express  = require('express')
const router = express.Router()
const categoryController = require('../controllers/productController')

router.get('/', categoryController.getAllcategories)
router.post('/', categoryController.createCategory)

module.exports = router
