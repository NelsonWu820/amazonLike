const express = require("express");
const router = express.Router();
const Cart = require("../../models/Cart");
const auth = require("../../middleware/auth");
// @route GET api/cart
// @desc gets users cart info/id's of items added to cart
// @access Private
router.get("/", auth,
    async (req, res) => {
        const cart = await Cart.findOne({ user : req.user.id });
        console.log(cart);
        try {
            res.json(cart);
        } catch (error) {
            console.error(error.message);
            return res.status(500).send("Server Error");
        }
    }
)

// @route PUT api/cart/:item_id
// @desc get or create a cart
// @access Private
router.put('/:item_id', auth, 
    async (req, res) => {
        const userCart = await Cart.findOne({ user: req.user.id});
        //if there is no user cart
        if(!userCart){
            //create one 
            const newUserCart = new Cart({
                user: req.user.id,
                items: req.params.item_id
            })

            console.log(newUserCart);
            await newUserCart.save();

            res.json({ msg : "Created a new user"})
        }

        //add a item to item array
        userCart.items.push(req.params.item_id);
        await userCart.save();

        res.json({ msg : "New Item added to Cart"});
    }
)

// @route DELETE api/cart/:item_id
// @desc delete's an item from cart
// @access Private
router.delete('/:item_id', auth, 
    async (req, res) => {
        try {
            await Cart.updateOne({ user: req.user.id }, {
                $pull: {
                    items: req.params.item_id
                },
            });

            res.json({ msg : "Item has been deleted from Cart"});
        } catch (error) {
            console.error(error.message);
            return res.status(500).json({ error : "Server Error"});
        }
    }
)


module.exports = router;
