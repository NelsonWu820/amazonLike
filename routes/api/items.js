const express = require("express");
const router = express.Router();
const Items = require("../../models/Items.js");

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
// @desc adds a comment with a star rating
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