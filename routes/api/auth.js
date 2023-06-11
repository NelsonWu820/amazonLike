const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    console.log("started");
    res.send("started1");
});

module.exports = router;