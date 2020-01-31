module.exports = (app) => {
    app.get('/noticia', (req, res) => {

        const connection = app.config.db();
        connection.query('select * from noticias where id_noticia = 2', (erro, result) => {
            res.render('noticias/noticia', { noticia: result });
        });

    });
}




