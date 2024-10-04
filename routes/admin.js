const { Router } = require("express");
const { adminModel } = require("../db");
const adminRouter = Router();
const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = "ADMINALADIN"

adminRouter.post("/signup", async function (req, res) {
    const { email, password, firstName, lastName } = req.body
    await adminModel.create({
        email,
        password,
        firstName,
        lastName
    })
    res.json({
        message: "signup endpoint"
    })
})

adminRouter.post("/signin", async function (req, res)  {
    const { email, password, } = req.body
    const admin = await adminModel.findOne({
        email: email,
        password: password
    });
    if(admin){
        const token = jwt.sign({
            id: admin._id
        }, JWT_USER_PASSWORD)
        // Do cookie logic
        res.status(200).json({
            token: token
        })
    }
    res.status(403).json({
        message: "wrong credentials"
    })
})

adminRouter.post("/course", (req, res) => {
    res.json({
        message: "signup endpoint"
    })
})

adminRouter.put("/course", (req, res) => {
    res.json({
        message: "signup endpoint"
    })
})

adminRouter.get("/course/bulk", (req, res) => {
    res.json({
        message: "signup endpoint"
    })
})

module.exports = {
    adminRouter: adminRouter
}