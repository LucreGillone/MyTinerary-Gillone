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
                throw new Error() 
            }
        } catch (error) {
            res.json({success: false, response: error.message})
        }
    }, 

    editComment: async (req, res) => {
        switch(req.body.type){
            case "addComment":
                try {
                    const newComment = await Itinerary.findOneAndUpdate({_id: req.params.id}, {$push: {comments: {comment: req.body.comment, userId: req.user._id}}}, {new: true}).populate("comments.userId")
                    if (newComment) {
                        res.json({success: true, response: newComment.comments})
                    } else {
                        throw new Error()
                    }
                } catch (error) {
                    res.json({success: false, response: error.message})
                }
                break

            case "editComment": 
                try {
                    let editedComment = await Itinerary.findOneAndUpdate({"comments._id": req.params.id}, {$set: {"comments.$.comment": req.body.comment}}, {new: true})
                    if (editedComment) {
                        res.json({success: true, response: editedComment.comments})
                    } else {
                        throw new Error()
                    }
                } catch (error) {
                    res.json({success: false, response: error.message})
                }
                break

            case "deleteComment":
                try {
                    let deletedComment = await Itinerary.findOneAndUpdate({"comments._id": req.body.commentId}, {$pull: {comments: {_id: req.body.commentId}}}, {new: true})
                    if (deletedComment) {
                        res.json({success: true})
                    } else {
                        throw new Error()
                    }
                } catch (error) {
                    res.json({success: false, response: error.message})
                }
                break  
        }
    },

    likeItinerary: async (req, res) => {

    }

  
}

module.exports = itinerariesControllers