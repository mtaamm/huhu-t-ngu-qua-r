const express = require('express')
//import express from 'express'
const path = require('path')
const app = express()
const port = 8080

//template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/ltnc', (req, res) => {
  res.send('mtzz00')
})

app.get('/test', (req, res) => {
  res.render('sample.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})