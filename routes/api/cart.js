const express = require("express");
const router = express.Router();
const Cart = require("../../models/Cart");
const auth = require("../../middleware/auth");
const {check, validationResult} = require("express-validator");

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
router.put('/:item_id', auth, check('amount', 'Amount is required').notEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

        const {amount} = req.body

        try {
            const userCart = await Cart.findOne({ user: req.user.id});
            //if there is no user cart
            if(!userCart){
                //create one 
                const newUserCart = new Cart({
                    user: req.user.id,
                })
                
                for(let i = 0; i< amount; i++){
                    newUserCart.items.unshift(req.params.item_id)
                }
    
                await newUserCart.save();
                console.log("past")  
    
                res.json(req.params.item_id)
            }
            else{
                //adds the same item to the beginning of Items array and answer for the redux state to have all 5
                let answer = []
                for(let i = 0; i< amount; i++){
                    userCart.items.unshift(req.params.item_id);
                    answer[i] = req.params.item_id
                }
                
                await userCart.save();
        
                res.json(answer);
            }
    
        } catch (error) {
            console.error(error.message);
            return res.status(500).json({ error : "Server Error"});
        }
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

            res.json(req.params.item_id);
        } catch (error) {
            console.error(error.message);
            return res.status(500).json({ error : "Server Error"});
        }
    }
)


module.exports = router;
