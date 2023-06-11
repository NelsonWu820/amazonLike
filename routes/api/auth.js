const express = require("express");
const router = express.Router();

// @route GET api/auth
// @desc 
// @access Public
router.get("/", async (req, res) => {
    console.log("started");
    res.send("started1");
});

module.exports = router;