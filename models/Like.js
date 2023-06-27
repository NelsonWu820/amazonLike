const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
    comment: {
        type: mongoose.Schema.Types.ObjectId
    },
    user: {
        type: mongoose.Schema.Types.ObjectId
    }
})

module.exports = mongoose.model("commentLike", likeSchema);