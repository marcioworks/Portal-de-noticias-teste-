module.exports = (application) => {
    application.get('/noticias', (req, res) => {

        const connection = application.config.db();
        const noticiasModel =  new application.app.models.NoticiasModel(connection);
        noticiasModel.getNoticias((erro, result) => {
            res.render('noticias/noticias', { noticias: result });
        });

    });
}




