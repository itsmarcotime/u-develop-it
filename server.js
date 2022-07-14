const mysql = require('mysql2');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

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

/*
//this query will return all data in the candidates table
db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});



//create a candidate 
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
            VALUES (?,?,?,?)`;

const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, result) => {
    if (err) {
        console.log(err);
    }

    console.log(result);
});



//GET a single candidate
db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
    if (err) {
        console.log(err);
    }

    console.log(row);
});


//delete a canidate
db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
    if (err) {
        console.log(err);
    }

    console.log(result);
});
*/

//default response for any other request (Not Found)
//this catchall route overides all others make sure it is the last one.
app.use((req, res) => {
    res.status(404).end();
});


//starts express server on port 3001(or whatever port chosen). This call always goes to the bottom.
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

