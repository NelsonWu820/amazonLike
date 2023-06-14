const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    user: {
        id: mongoose.Schema.Types.ObjectId,
        ref: user
    },

    address: {
        type: String,
        required: true
    },

    card1 : {
        type: int 
    },

    card2 : {
        type: int 
    },

    card3 : {
        type: int 
    },

    sex: {
        type: String
    },

    age : {
        type: int
    }

})

module.exports = mongoose.model("profile", ProfileSchema);