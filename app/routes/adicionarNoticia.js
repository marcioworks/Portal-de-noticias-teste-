module.exports = (app) => {
    app.get('/adicionar', (req, res) => {
        res.render('admin/adicionarNoticia')
    });

    app.post('/noticias/salvar', (req, res) => {
        let noticia = req.body;

        const connection = app.config.db();
        const noticiasModel = app.app.models.NoticiasModel;
        noticiasModel.salvarNoticia(noticia,connection, (erro, result) => {
           res.redirect('/noticias')
        });

       
    })
}