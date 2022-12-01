const mysql = require('mysql2');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'musicdb'
});

module.exports = conn;