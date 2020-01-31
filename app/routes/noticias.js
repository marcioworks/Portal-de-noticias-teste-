module.exports = (app) => {
    app.get('/noticias', (req, res) => {

        const connection = app.config.db();
        const noticiasModel = app.app.models.NoticiasModel;
        noticiasModel.getNoticias(connection, (erro, result) => {
            res.render('noticias/noticias', { noticias: result });
        });

    });
}




