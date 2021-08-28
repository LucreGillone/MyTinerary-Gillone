const City = require("../models/City")

const citiesControllers = {

    retrieveAllCities: async (req, res) => {
        try {
            var cities = await City.find()
            res.json({success: true, response: cities})
        } catch (error) {
            res.json({success: false, response: error.message})
        }    
    },

    retrieveOneCity: async (req, res) => {
        try {
            var city = await City.findOne({_id:req.params.id})
            if (city) {
                res.json({success: true, response: city})
            } else {
                throw new Error()
            }
        } catch(error) {
            res.json ({success: false, response: "Something went wrong!"})
            console.log(error)
        }    
    },

    deleteCity: async (req, res) => {
       try {
           var deleteCity = await City.findOneAndDelete({_id: req.params.id})
            if (city) {
                res.json({success: true, response: deleteCity})
            } else {
                throw new Error()
            }
       } catch(error) {
            res.json({success: false, response: error.message})
       }      
    },

    addCity: async (req, res) => {
        const newCity = new City({
            city: req.body.city,
            country: req.body.country,
            picture: req.body.picture,
            description: req.body.description,
            language: req.body.language,
            hero: req.body.hero
        }) 
        try 
        {await newCity.save()
        res.json({success:true})
        } catch(error) {
            res.json({success: false, response: error.message})
        }
    },
    
    modifyCity: async (req, res) => {
        try{
            const modifiedCity = await City.findOneAndUpdate({_id: req.params.id}, {...req.body}, {new: true})
            if (city) {
                res.json({success: true, response: modifiedCity})
            } else {
                throw new Error()
            }
        } catch(error) {
            res.json({success: false, response: error.message})
        }
    }
}

module.exports = citiesControllers
