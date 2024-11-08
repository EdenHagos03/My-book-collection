const mysql = require('mysql');

const config = {
    host: "127.0.0.1",
    user: "ethiopqt_root",
    password: "Maranata@03",
    database: "ethiopqt_Me"
};

const conn = mysql.createConnection(config);

module.exports = conn;