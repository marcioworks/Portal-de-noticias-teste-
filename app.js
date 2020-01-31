
const app = require('./config/server')

// const rotaHome = require('./app/routes/home')(app)
// const rotaTecno = require('./app/routes/tecnologia')(app)
// const rotaModa = require('./app/routes/moda')(app)
// const rotaNoticias = require('./app/routes/noticias')(app)

app.listen(3000, () => {
    console.log('Backend Running(Express)...')
})