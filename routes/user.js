const { Router } = require("express");
const { userModel } = require("../db");
const userRouter = Router();
const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = "USERALADIN"

userRouter.post("/signup", async function(req, res) {
    const { email, password, firstName, lastName } = req.body
    await userModel.create({
        email,
        password,
        firstName,
        lastName
    })
    res.json({
        message: "signup endpoint"
    })
})

userRouter.post("/signin", async function (req, res)  {
    const { email, password, } = req.body
    const user = await userModel.findOne({
        email: email,
        password: password
    });
    if(user){
        const token = jwt.sign({
            id: user._id
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

userRouter.post("/purchase", (req, res) => {
    res.json({
        message: "signup endpoint"
    })
})

module.exports = {
    userRouter: userRouter
}