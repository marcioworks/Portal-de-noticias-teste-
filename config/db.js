const mysql = require('mysql')

const mySqlConnection = () =>{
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'portal_noticias'
    });
}

module.exports = () => {

   return mySqlConnection;
}

