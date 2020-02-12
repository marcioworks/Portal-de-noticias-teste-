module.exports = (application) => {
    application.get('/noticia', (req, res) => {

        const connection = application.config.db();
        const noticiasModel = new application.app.models.NoticiasModel(connection);

        noticiasModel.getNoticia((erro, result) => {
            res.render('noticias/noticia', { noticia: result });
        });

    });
}




