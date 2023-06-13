const express = require("express");
const router = express.Router();
const check = require("express-validator");
const auth = require("../../middleware/auth");

// @route GET api/auth
// @desc checks if the current jwt is valid and login them if it is
// @access Public
router.get("/", auth, async (req, res) => {
    try {
        //finds user id using token
        const user = await User.findbyId(req.user.id).select("-password");
    } catch (error) {
        console.error(error.message);
        return res.status(400).json({ msg : "Server Error"});
    }
});

// @route POST api/auth
// @desc checks if the password match the email given 
// @access Public

module.exports = router;