const jwt = require("jsonwebtoken")

function userMiddleware(req, res, next) {
    const token = req.headers.token;
    const decode = jwt.verify( token, `${process.env.JWT_USER_PASSWORD}` )
    
    if(decode){
        req.userId = decodeId;
        next();
    } else{
        res.status(403).json({
            mes: "You are not signed in"
        })
    }
}

module.exports = {
    userMiddleware: userMiddleware
}