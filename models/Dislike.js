const mongoose = require("mongoose");

const dislikeSchema = new mongoose.Schema({
    comment: {
        type: mongoose.Schema.Types.ObjectId
    },
    user: {
        type: mongoose.Schema.Types.ObjectId
    }
})

module.exports = mongoose.model("commentDislike", dislikeSchema);