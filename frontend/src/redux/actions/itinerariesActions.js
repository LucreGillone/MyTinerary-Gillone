import axios from "axios" 

const itinerariesActions = {
    getItineraryByCity: (cityId) => {
        return async (dispatch, getState) => {
            try {
                let response = await axios.get(`http://localhost:4000/api/itineraries/${cityId}`)
                let data = response.data.response
                dispatch({type: "GET_ITINERARY_BY_CITYID", payload: data})
            } catch (error){
                return {
                    success: false, response: error
                }
            }
        }
    },

    addComment: (itineraryId, comment, token) => {
        return async () => {
            try {
                let response = await axios.put(`http://localhost:4000/api/comments/${itineraryId}`, {comment, type: "addComment"},
                {headers: {
                    Authorization: "Bearer "+token
                    }
                })
                if (response.data.success) {
                    return {
                        success: true, response: response.data.response
                    }
                } else {
                    throw new Error()
                }     
            } catch (error) {
                return {
                    success: false, response: error
                }
            }
        }
    },

    deleteComment: (itineraryId, commentId, token) => {
        return async (dispatch) => {
            try {
                let response = await axios.put(`http://localhost:4000/api/comments/${itineraryId}`, {commentId, type: "deleteComment"},
                {headers: {
                    Authorization: "Bearer "+token
                    }
                })
                if (response.data.success) {
                    return {
                        success: true
                    }
                } else {
                    throw new Error()
                }
            } catch (error) {
                return {
                    success: false, response: error
                }
            }
        }
    }, 

    editComment: (itineraryId, commentId, token) => {
        return async () => {
            try {
                let response = await axios.put(`http://localhost:4000/api/comments/${itineraryId}`, {commentId, type: "editComment"},
                {headers: {
                    Authorization: "Bearer "+token
                    }
                })
                if (response.data.success) {
                    return {
                        success: true, response: response.data.response
                    }
                } else {
                    throw new Error()
                }
            } catch (error) {
                return {
                    success: false,response: error
                }
            }
        }    
    }
} 

export default itinerariesActions