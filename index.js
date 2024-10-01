const express = require("express")
const { userRouter } = require("./routes/user");
const { courseRouter, adminRouter } = require("./routes/admin");
const app = express()

app.use(express.json());
app.use()

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);

// app.get("/", (req, res) => {
    
// })

app.listen(3000)