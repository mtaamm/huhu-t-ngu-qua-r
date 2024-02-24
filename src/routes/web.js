const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hello World! mtzz00')
})

router.get('/ltnc', (req, res) => {
  res.send('mtzz00')
})

router.get('/test', (req, res) => {
  res.render('sample.ejs')
})

module.exports = router