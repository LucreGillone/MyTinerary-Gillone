const Itinerary = require("../models/Itinerary")

const itinerariesControllers = {

    retrieveAllItineraries: async (req, res) => {
        try {
            let itineraries = await Itinerary.find()
            res.json({succes: true, response: itineraries})
        } catch (error) {
            res.json({success: false, response: error.message})
        }
    },

    retrieveItinerariesOfOneCity: async (req, res) => {
        try{
            let cityItineraries = await Itinerary.find({cityId: req.params.cityId})
            res.json({success: true, response: cityItineraries})
        } catch(error) {
            res.json({success: false, response: error.message})
        }
    },

    retrieveItinerariesById: async (req, res) => {
        try{
            let itinerary = await Itinerary.findOne({_id: req.params.id})
            if (itinerary) {
                res.json({success: true, response: itinerary})
            } else {
                throw new Error()
            }
        } catch(error) {
            res.json({success: false, response: "Something went wrong!"})
            console.log(error)
        }
    },

    addItinerary: async (req, res) => {
        let newItinerary = await Itinerary({...req.body
        })
        try {
            await newItinerary.save()
            res.json({succes: true})
        } catch(error) {
            res.json({success: false, response: error.message})
        }
    },

    deleteItinerary: async (req, res) => {
        try {
            let deleteItinerary = await Itinerary.findOneAndDelete({_id: req.params.id})
            if (deleteItinerary) {
                res.json({success: true, response: deleteItinerary})
            } 
            else {
                throw new Error()
            }
        }catch(error) {
            res.json({success: false, response: error.message})
        }
    },

    modifyItinerary: async (req, res) => {
        try {
            const modifiedItinerary = await Itinerary.findOneAndUpdate({_id: req.params.id}, {...req.body}, {new: true})
            if (itinerary) {
                res.json({success: true, response: modifiedItinerary})
            } else {
                throw new Error 
            }
        } catch (error) {
            res.json({success: false, response: error.message})
        }
    }

}

module.exports = itinerariesControllers