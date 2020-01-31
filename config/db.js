const mysql = require('mysql')

const mySqlConnection = () =>{
    console.log('conexao com db estabelecia')
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'portal_noticias'
    });
}

module.exports = () => {
    console.log('conexao com o bd carregada')
   return mySqlConnection;
}

