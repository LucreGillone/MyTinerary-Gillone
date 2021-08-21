import axios from "axios" 

const itinerariesActions = {
    getAllItineraries: () => {
        return async (dispatch, getState) => {
            let response = await axios.get("http://localhost:4000/api/itineraries")
            if (!response.data.success) {
                throw new Error()
            }
            dispatch({type: "GET_ALL_ITINERARIES", payload: response.data.response})
        }
    },

    getItineraryByCity: (cityId) => {
        return async (dispatch, getState) => {
        dispatch({type: "GET_ITINERARY_BY_CITYID", payload: cityId})
        }
    }
} 

export default itinerariesActions