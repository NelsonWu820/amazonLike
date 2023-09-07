const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
    const token = req.header("x-auth-token");

    if (!token) {
        return res.status(401).json({ msg: "No token, authorize denied"});
    }

    try{
        jwt.verify(token, config.get("jwtSecret"), (error, decoded) => {
            if(error){
                return res.status(401).json({ msg: "token is not valid"});
            }
            else{
                req.user = decoded.user;
                next();
            }
        })
    }
    catch(err){
        console.error("Something went wrong in the server");
        return res.status(500).json({ msg: "Server Error"})
    }
}