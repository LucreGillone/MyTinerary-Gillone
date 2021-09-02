const User = require("../models/User")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

const usersControllers = {
    
    addNewUser: async (req, res) => {
        const { firstName, lastName, email, password, src, country, google } = req.body
        let hashedPassword = bcryptjs.hashSync(password)
        const newUser = new User({ firstName, lastName, email, password: hashedPassword, src, country, google })
        try {
            let repeatedUser = await User.findOne({email: email})
            if (repeatedUser) throw new Error
            await newUser.save()
            const token = jwt.sign({...newUser}, process.env.SECRETORKEY)
            res.json({success: true, response: {firstName: newUser.firstName, src: newUser.src, _id: newUser._id, token}, error: null})
        } catch(error) {
            res.json({success: false, response: error.message})
        }
    },

    logUser: async (req, res) => {
        const { email, password, googleFlag } = req.body
        try {
            let savedUser = await User.findOne({email: email})
            if (!savedUser) throw new Error ("Email and/or password incorrect")
            if (savedUser.google && !googleFlag) throw new Error ("Your account was created with Google. Please log in with Google")
            let coincide = bcryptjs.compareSync(password, savedUser.password)
            if (!coincide) throw new Error ("Email and/or password incorrect")
            const token = jwt.sign({...savedUser}, process.env.SECRETORKEY)
            res.json({success: true, response: {firstName: savedUser.firstName, src: savedUser.src, _id: savedUser._id, token}})
        } catch(error) {
            res.json({success: false, response: error.message})
        }
    }, 

    deleteUser: async (req, res) => {
        try {
            let deleteUser = await User.findOneAndDelete({_id: req.params.id})
            if (deleteUser) {
                res.json({success: true, response: deleteUser})
            } else {
                throw new Error()
            }
        } catch(error) {
            res.json({success: false, response: error.message})
        }
    }, 

    tokenVerification: (req, res) => {
        res.json({firstName: req.user.firstName, src: req.user.src, _id: req.user._id})
    }
}

module.exports = usersControllers