
const MYSQL = require('mysql');

const CONN = MYSQL.createConnection({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'myfirtexpress',
    port: 3306

});

module.exports = CONN;