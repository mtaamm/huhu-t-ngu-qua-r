const express = require('express')
//import express from 'express'
const path = require('path')
const app = express()

require('dotenv').config()

const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME

//template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('Hello World! mtzz00')
})

app.get('/ltnc', (req, res) => {
  res.send('mtzz00')
})

//config static file
app.use(express.static(path.join(__dirname, 'public')))

app.get('/test', (req, res) => {
  res.render('sample.ejs')
})

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})