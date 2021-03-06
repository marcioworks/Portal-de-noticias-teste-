function Noticias(connection) {
    this._connection = connection
}

Noticias.prototype.getNoticias = function(callback) {
    this._connection.query('select * from noticias', callback);
}

Noticias.prototype.getNoticia = function(callback) {
    this._connection.query('select * from noticias where id_noticia = 1', callback);
}

Noticias.prototype.salvarNoticia = function (noticia, callback) {
    
    this._connection.query('insert into noticias set ?', noticia, callback);
}

module.exports = () => {
    return Noticias;
}