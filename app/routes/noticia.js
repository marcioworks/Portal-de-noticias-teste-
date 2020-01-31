module.exports = (app) => {
    app.get('/noticia', (req, res) => {

        const connection = app.config.db();
        const noticiasModel = app.app.models.NoticiasModel;
        
        noticiasModel.getNoticia(connection, (erro, result) => {
            res.render('noticias/noticia', { noticia: result });
        });

    });
}




