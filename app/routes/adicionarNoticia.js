module.exports = (application) => {
    application.get('/adicionar', (req, res) => {
        res.render('admin/adicionarNoticia')
    });

    application.post('/noticias/salvar', (req, res) => {
        let noticia = req.body;

        const connection = application.config.db();
        const noticiasModel =  new application.app.models.NoticiasModel(connection);
        noticiasModel.salvarNoticia(noticia, (erro, result) => {
           res.redirect('/noticias')
        });

       
    })
}