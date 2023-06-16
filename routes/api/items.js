const express = require("express");
const router = express.Router();
const Items = require("../../models/Items.js");
const User = require("../../models/User.js");
const auth = require("../../middleware/auth.js");
const checkObjectID = require("../../middleware/checkObjectID.js");
const {check, validationResult} = require("express-validator");

// @route GET api/items
// @desc gives a list of items  
// @access Public
router.get("/", 
    async (req, res) => {
        //should get all items
        const items = await Items.find({});
        try {
            return res.json(items);
        } catch (error) {
            console.error(error.message);
            return res.status(500).json({ error : "Server Error"});
        }
    }
)

// @route POST api/items
// @desc creates an item 
// @access Public
router.post("/", 
    async (req, res) => {
        const {rating, description, price} = req.body;
        
        try {
            let items = new Items({
                rating: rating,
                description: description,
                price: price
            });
            await items.save();
            return res.json(items);

        } catch (error) {
            console.error(error.message);
            return res.status(500).json({ error : "Server Error"});
        }
    }
)

// @route POST api/items/comments/:id
// @desc adds a comment with a star rating and text
// @access Private
router.post("/comments/:id", auth, checkObjectID("id"), 
    check("text", "Please input a comment").notEmpty(),
    check("rating", "Please input a rating from 1 to 5").notEmpty(),
    async (req, res) => {
        const check = validationResult(req);
        if (!check) {
            return res.status(400).json({ errors: check.array()});
        }

        try {
            //finds item through id in header then populates
            const user = await User.findById(req.user.id).select("-password");
            const item = await Items.findById(req.params.id);

            const newComment = {
                user: req.user.id,
                name: user.name,
                text: req.body.text,
                rating: req.body.rating,
                avatar: user.avatar
            };

            item.comments.unshift(newComment);

            await item.save();

            res.json(item.comments);
        } catch (error) {
            console.error(error.message);
            return res.status(500).json({ error : "Server Error"});
        }
    }
)

// @route DELETE api/items/comments/:id
// @desc deletes a comment
// @access Private

// @route POST api/items/comments/dislike/:id
// @desc dislikes a comment 
// @access Private

// @route POST api/items/comments/un dislike/:id
// @desc un dislikes a comment 
// @access Private

// @route POST api/items/comments/like/:id
// @desc likes a comment 
// @access Private

// @route POST api/items/comments/un like/:id
// @desc un likes a comment 
// @access Private

module.exports = router;