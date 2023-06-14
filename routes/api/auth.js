const express = require("express");
const router = express.Router();
const {check, validationResult} = require("express-validator");
const auth = require("../../middleware/auth");
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// @route GET api/auth
// @desc checks if the current jwt is valid and login them if it is
// @access Public
router.get("/", auth, async (req, res) => {
    try {
        //finds user id using token
        const user = await User.findById(req.user.id).select("-password");
    } catch (error) {
        console.error(error.message);
        return res.status(400).json({ msg : "Server Error"});
    }
});

// @route POST api/auth
// @desc checks if the password match the email given 
// @access Public
router.post("/", [
    check("email", "Please input a valid email").isEmail(),
    check("password", "Password is required").isLength({ min : 6})
], 
async (req,res) => {
        //checks if there were any errors from the check above
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array()});
        }

        //pull the email and password from res
        const {email, password} = req.body;

        //checks if email has an account and has the correct password then creates jwt
        try {
            //finds the user by email
            const user = User.findOne({ email });
            //if it can't find a user with that email
            if (!user){
                return res.status(400).json({ msg : "Invalid Credentials"});
            }

            //checks if password matches the users password
            const isMatch = await bcrypt.compare(password, user.password)
            //checks if password matches or not
            if(!isMatch){
                return res.status(400).json({ msg : "Invalid Credentials"});
            }

            //creates a jwt
            //gets user id which is generated by mongoDb auto
            const payload = {
                user : {
                    id : user.id
                }
            };

            jwt.sign(payload, config.get("jwtSecret"), {expiresIn : "5 days"}, (err, token) => {
                if (err) throw err;
                res.json({ token });
            });

        } catch (err) {
            console.error(err.message);
            return res.status(500).send("Server Error");
        }

    }
)

module.exports = router;