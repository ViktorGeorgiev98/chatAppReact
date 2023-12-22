const express = require("express");
const PORT = 3030;



const app = express();

app.get('/', (req, res) => {
    res.send("Hello from server");
})






app.listen(PORT, () => console.log("Listening to port: " + PORT));

