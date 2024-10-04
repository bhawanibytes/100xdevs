const { Router } = require("express");
const { adminModel } = require("../db");
const adminRouter = Router();
const jwt = require("jsonwebtoken");
const { adminMiddleware } = require("../middleware/admin");

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
        }, `${process.env.JWT_ADMIN_PASSWORD}`)
        // Do cookie logic
        res.status(200).json({
            token: token
        })
    }
    res.status(403).json({
        message: "wrong credentials"
    })
})

adminRouter.post("/course", adminMiddleware, async function (req, res) {
    const adminId = req.userId;
    const { title, description, imgUrl, price } = req.body;

    const course = await courseModel.create({
        title, description, imgUrl, price, creatorId: userId
    })
    res.json({
        message: "Course created",
        courseId: course._id
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