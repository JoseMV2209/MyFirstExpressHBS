
let conn = require('../connection/mysqlconnection');

let Movies = {};

Movies.fetchAll = (cb) => {

    if (!conn){
        return cb("No se ha podido crear la conexión.");
    }
    
    const SQL = "SELECT * FROM movies";

    conn.query(SQL, (error, rows) => {

        if (error){
            return cb(error);
        }else{
            return cb(null, rows);
        }

    });

}

Movies.insert = (movie, cb) => {

    if(!conn){
        return cd("No se ha podido crear la conexion.");
    }
    conn.query("INSERT INTO movies SET ?", movie, (error, result) => {
        if(error){
            return cb(error);
        }else{
            return cb(null, result.insertId);
        }
    });
}

module.exports = Movies;