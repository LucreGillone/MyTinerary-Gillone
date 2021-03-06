const mongoose = require("mongoose")

const userSchema = new mongoose.Schema ({
    firstName: {type: String},
    lastName: {type: String}, 
    email: {type: String, required: true}, 
    password: {type: String, required: true}, 
    src: {type: String},
    country: {type: String},
    google: {type: Boolean, default: false}
})

const User = mongoose.model("user", userSchema)

module.exports = User