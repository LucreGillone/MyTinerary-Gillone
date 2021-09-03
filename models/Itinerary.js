const mongoose = require("mongoose")

const itinerarySchema = new mongoose.Schema ({
    itineraryTitle: {type: String, required: true},
    userName: {type: String, required:true},
    userPicture: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    duration: {type: Number, required: true},
    likes: {type: Array},
    hashtags: {type: Array, required: true},
    comments:  [{
            comment: {type: String},
            userId: {type: mongoose.Types.ObjectId, ref: "user"},
        }],
    src:{type: String, required: true},
    cityId: {type: mongoose.Types.ObjectId, ref: "city"},
    season: {type: String}
})

const Itinerary = mongoose.model("itinerary", itinerarySchema)

module.exports = Itinerary