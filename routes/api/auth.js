const express = require("express");
const router = express.Router();

// @route GET api/auth
// @desc checks if the current jwt is valid and login them if it is
// @access Public
router.get("/", async (req, res) => {
    console.log("started");
    res.send("started1");
});

// @route POST api/auth
// @desc checks if the password match the email given 
// @access Public

module.exports = router;