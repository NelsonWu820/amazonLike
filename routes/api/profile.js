const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../models/User");
const Profile = require("../../models/Profile");

// @route GET api/profile
// @desc gets the users profile info
// @access Private
router.get("/me", auth, async (req, res) => {
    try {
        //find profile by the id which is created in the auth middleware
        let profile = await Profile.findOne({user : req.user.id}).populate("user", ["name", "avatar"]);
        
        //checks if profile has a user
        if (!profile){
            return res.status(400).json({ "msg" : "There is no profile for this user"});
        }

        res.json(profile);
    } catch (error) {
        console.error(error.message);
        return res.status(500).send("Server Error");
    }
})

// @route POST api/profile
// @desc edits a profiles info
// @access Private

module.exports = router;