module.exports = (application) => {
    application.get('/adicionar', (req, res) => {
        application.app.controllers.admin.adicionar(application,req,res)
    });

    application.post('/noticias/salvar', (req, res) => {
        application.app.controllers.admin.noticias_salvar(application,req,res)
       
    })
}