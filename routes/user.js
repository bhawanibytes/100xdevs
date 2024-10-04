const { Router } = require("express");
const { userModel } = require("../db");
const userRouter = Router();
const jwt = require("jsonwebtoken");

userRouter.post("/signup", async function(req, res) {
    console.log("Incoming data:", req.body);
    try {
        const { email, password, firstName, lastName } = req.body;
        console.log(req.body);
        const newUser = await userModel.create({
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        })
        res.json({
            message: "User signed up successfully",
            user: newUser
        })
    } catch (error) {
        console.error("Error during signup:", error);
        res.status(500).json({
            message: "Failed to sign up user",
            error: error.message
        });        
    }
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
        }, `${process.env.JWT_USER_PASSWORD}`)
        // Do cookie logic
        res.status(200).json({
            token: token
        })
    } else {
        res.status(403).json({
            message: "wrong credentials"
        })
    }
})

userRouter.post("/purchase", (req, res) => {
    res.json({
        message: "signup endpoint"
    })
})

module.exports = {
    userRouter: userRouter
}