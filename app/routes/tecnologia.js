module.exports = (app) => {
    app.get('/tecnologia', (req, res) => {
        res.render('section/tecnologia')
    });
}