module.exports.noticias = function (application, req, res) {
    const connection = application.config.db();
    const noticiasModel = new application.app.models.NoticiasModel(connection);
    noticiasModel.getNoticias((erro, result) => {
        res.render('noticias/noticias', { noticias: result });
    });
}

module.exports.noticia = function (application, req, res) {

    const connection = application.config.db();
    const noticiasModel = new application.app.models.NoticiasModel(connection);

    noticiasModel.getNoticia((erro, result) => {
        res.render('noticias/noticia', { noticia: result });
    });
}