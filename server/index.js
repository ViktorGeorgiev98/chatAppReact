const express = require("express");
const dbConfig = require("./database/dbConfig");
const router = require("./router/router");
const PORT = 3030;
const bodyParser = require('body-parser');


// Initialization of express
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(router);

// Connect to DB
dbConfig();





app.listen(PORT, () => console.log("Listening to port: " + PORT));

