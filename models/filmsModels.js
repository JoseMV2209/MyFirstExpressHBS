
let conn = require('../connection/mysqlconnection');

let Movies = {};

Movies.fetchAll = (cb) => {

    if (!conn){
        return cb("No se ha podido crear la conexión.");
    }
    
    const SQL = "SELECT * FROM movies LIMIT 5";

    conn.query(SQL, (error, rows) => {

        if (error){
            return cb(error);
        }else{
            return cb(null, rows);
        }

    });

}

module.exports = Movies;