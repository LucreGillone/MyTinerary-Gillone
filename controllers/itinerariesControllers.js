const Itinerary = require("../models/Itinerary")

const itinerariesControllers = {

    retrieveAllItineraries: async (req, res) => {
        try {
            var itineraries = await Itinerary.find()
            res.json({succes: true, response: itineraries})
        } catch (error) {
            res.json({success: false, response: error.message})
        }
    },

    addItinerary: async (req, res) => {
        var newItinerary = await Itinerary({...req.body
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
            var deleteItinerary = await Itinerary.findOneAndDelete({_id: req.params.id})
            if (itinerary) {
                res.json({succes: true, response: deleteItinerary})
            } 
            else {
                throw new Error()
            }
        }catch(error) {
            res.json({success: false, response: error.message})
        }
    }

}

module.exports = itinerariesControllers