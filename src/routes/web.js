const express = require('express')
const router = express.Router()
const {getHomePage, getLtncPage, getTestPage} = require('../controllers/homeController')

router.get('/', getHomePage)

router.get('/ltnc', getLtncPage)

router.get('/test', getTestPage)

module.exports = router