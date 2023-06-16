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

    comments: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user'
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
            },

            likes: [
                {
                    user: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: 'user'
                    }
                }
            ],

            dislikes: [
                {
                    user: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: 'user'
                    }
                }
            ]
        }
    ]
})

module.exports = mongoose.model("items", ItemsSchema);