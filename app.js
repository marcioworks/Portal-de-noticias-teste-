var app = require('./config/server')

var rotaHome = require('./app/routes/home')(app)
var rotaTecno = require('./app/routes/tecnologia')(app)
var rotaModa = require('./app/routes/moda')(app)






app.listen(3000, () => {
    console.log('Backend Running(Express)...')
})