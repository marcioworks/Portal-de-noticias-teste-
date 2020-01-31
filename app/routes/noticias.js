const dbConnection = require('../../config/db')
module.exports = (app) => {
    app.get('/noticias', (req, res) => {

        const connection = dbConnection();
        connection.query('select * from noticias', (erro, result) => {
            res.render('noticias/noticias', { noticias: result });
        });

    });
}




