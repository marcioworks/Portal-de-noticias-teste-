module.exports = (application) => {
    app.get('/adicionar', (req, res) => {
        res.render('admin/adicionarNoticia')
    });

    app.post('/noticias/salvar', (req, res) => {
        let noticia = req.body;

        const connection = application.config.db();
        const noticiasModel =  new application.app.models.NoticiasModel(connection);
        noticiasModel.salvarNoticia(noticia, (erro, result) => {
           res.redirect('/noticias')
        });

       
    })
}