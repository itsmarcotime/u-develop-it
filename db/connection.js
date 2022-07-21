const mysql = require('mysql2');

//connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //your mysql username(root is a default user)
        user: 'root',
        //your mysql pass
        password: 'jXurke7g2_jXurke7g2',
        database: 'election'
    },
    console.log('connected to the election database.')
);

module.exports = db;