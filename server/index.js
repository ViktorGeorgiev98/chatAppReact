const express = require("express");
const dbConfig = require("./database/dbConfig");
const router = require("./router/router");
const PORT = 3030;
const bodyParser = require('body-parser');
const cors = require('cors');


// Initialization of express
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:5173' // Replace with your frontend origin
}));

app.use(router);

// Connect to DB
dbConfig();





app.listen(PORT, () => console.log("Listening to port: " + PORT));

