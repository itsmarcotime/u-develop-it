const express = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Use apiRoutes file for linked files
app.use('/api', apiRoutes);

/*
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
            VALUES (?,?,?,?)`;

const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, result) => {
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
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});