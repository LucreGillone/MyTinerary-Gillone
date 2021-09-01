const Comment = require("../models/Comment")

const commentsControllers = {

    addNewComment: async (req, res) => {
        const { firstName, src, token, itineraryId, comment } = req.body
        const newComment = new Comment({ firstName, src, token, itineraryId, comment })
        try { 
            // let loggedUser = await Comment.findOne({token: token})
            // if (!loggedUser) throw new Error 
            await newComment.save()
            res.json({success: true, response: {firstName: newComment.firstName, src: newComment.src, token: newComment.token, itineraryId: newComment.itineraryId, comment: newComment.comment}, error: null})
        } catch (error) {
            res.json({success: false, response: error.message})
        }
    }, 

    editComment: async (req, res) => {
        try {
            const editedComment = await Comment.findOneAndUpdate({_id: req.params.id}, {...req.body}, {new: true})
            res.json({success: true, response: editedComment})
        } catch (error) {
            res.json({success: false, response: error.message})
        }
    },

    deleteComment: async (req, res) => {
        try {
            let deleteComment = await Comment.findOneAndDelete({_id: req.params.id})
            res.json({success: true, response: deleteComment})
        } catch (error) {
        res.json({success: false, response: error.message})
        }
    },

    
}

module.exports = commentsControllers