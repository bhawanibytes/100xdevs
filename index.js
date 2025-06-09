const express = require("express")
const app = express();
app.use(express.json());
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const mongoose = require("mongoose");


app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);

async function main() {
    try {
        require('dotenv').config()
        await mongoose.connect(`${process.env.dbConnectionString}`);
        console.log("db is connected")
        app.listen(`${process.env.PORT}`, () => {
            console.log(`Listening on PORT: ${process.env.PORT}`);
        });
    } catch (error) {
        console.error("Database connection error:", error);
    }
}

main();