module.exports = (app) => {
    app.get('/adicionar', (req, res) => {
        res.render('admin/adicionarNoticia')
    });

    app.post('/noticias/salvar', (req, res) => {
        let noticia = req.body;
        res.send(noticia)
    })
}