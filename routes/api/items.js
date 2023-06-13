const express = require("express");
const router = express.Router();

// @route GET api/items
// @desc gives a list of items  
// @access Public

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