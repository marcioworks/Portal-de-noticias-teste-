const express = require('express')
const consign = require('consign')
const bodyparser = require('body-parser')
const expressValidator = require('express-validator')


const app = express()
app.set('view engine', 'ejs')
app.set('views', './app/views')

app.use(bodyparser.urlencoded({extended:true}))
app.use(expressValidator())

app.listen(3000, () => {
    console.log('Backend Running(Express)...')
})

consign()
    .include('app/routes')
    .then('config/db.js')
    .then('app/models')
    .then('app/controllers')
    .into(app)

module.exports = app;