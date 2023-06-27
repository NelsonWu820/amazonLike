const mongoose = require("mongoose");

const ItemsSchema = new mongoose.Schema({
    rating : {
        type: Number
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    comments: [{
        user: {
            type: mongoose.Schema.Types.ObjectId
        },

        name: {
            type: String
        },

        text: {
            type: String,
            required: true
        },

        rating: {
            type: Number,
            required: true
        },
        
        avatar: {
            type: String
        },

        date: {
            type: Date,
            default: Date.now
        }
    }]
})

module.exports = mongoose.model("items", ItemsSchema);