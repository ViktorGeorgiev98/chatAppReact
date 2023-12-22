const express = require("express");
const dbConfig = require("./database/dbConfig");
const PORT = 3030;


// Initialization of express
const app = express();

app.get('/', (req, res) => {
    res.send("Hello from server");
})

// Connect to DB
dbConfig();





app.listen(PORT, () => console.log("Listening to port: " + PORT));

