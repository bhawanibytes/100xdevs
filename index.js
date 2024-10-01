const express = require("express")
const app = express()

app.use(express.json())
app.use()

app.post("/user/signup", (req, res) => {
    res.json({
        message: "signup endpoint"
    })
})

app.post("/user/signin", (req, res) => {
    res.json({
        message: "signin endpoint"
    })
})

app.post("/user/purchase", (req, res) => {
    res.json({
        message: "signup endpoint"
    })
})

app.get("/course/purchase", (req, res) => {
    res.json({
        message: "signup endpoint"
    })    
})

app.get("/courses", (req, res) => {
    res.json({
        message: "signup endpoint"
    })    
})

// app.get("/", (req, res) => {
    
// })

app.listen(3000)