const express = require("express");
const fs = require("fs");
const port = 3000;
const app = express();

app.get('/', (req, res) => {
    res.send("i am ok");
});

app.listen(port, () => {

    console.log(`Server is running on http://localhost:${port}`);


});

