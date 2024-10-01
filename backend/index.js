const express = require("express");
const app = express();


app.get("/", (req, res) => {
    console.log(`Backend is connected!`);
    res.status(200).send(`Backend is connected from res!`)
})

app.post("/signup", (req, res) => {
    const email = req.body.email
    const password = req.body.password
})

app.listen(port)