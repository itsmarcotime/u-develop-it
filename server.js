const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//default response for any other request (Not Found)
//this route overides all others make sure it is the last one.
app.use((req, res) => {
    res.status(404).end();
});


//starts express server on port 3001(or whatever port chosen). This call always goes to the bottom.
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

