const User = require("../models/User")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

const usersControllers = {
    
    addNewUser: async (req, res) => {
        const { firstName, lastName, email, password, src, country } = req.body
        let hashedPassword = bcryptjs.hashSync(password)
        const newUser = new User({ firstName, lastName, email, password: hashedPassword, src, country })
        try {
            let repeatedUser = await User.findOne({email: email})
            if (repeatedUser) throw new Error ("Someone has alreay signed up with this email")
            await newUser.save()
            const token = jwt.sign({...newUser}, process.env.SECRETORKEY)
            res.json({success: true, response: {firstName: newUser.firstName, src: newUser.src, token}, error: null})
        } catch(error) {
            res.json({success: false, response: error.message})
        }
    },

    logUser: async (req, res) => {
        const { email, password } = req.body
        try {
            let savedUser = await User.findOne({email: email})
            if (!savedUser) throw new Error ("Email and/or password incorrect")
            let coincide = bcryptjs.compareSync(password, savedUser.password)
            if (!coincide) throw new Error ("Email and/or password incorrect")
            const token = jwt.sign({...savedUser}, process.env.SECRETORKEY)
            res.json({success: true, response: {firstName: savedUser.firstName, src: savedUser.src, token}})
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
    }
}

module.exports = usersControllers