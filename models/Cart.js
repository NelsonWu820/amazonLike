const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId
    },

    items:[{
        type: mongoose.Schema.Types.ObjectId
    }],

    history:[{
        type: mongoose.Schema.Types.ObjectId
    }]
})

module.exports = mongoose.model('cart', cartSchema);