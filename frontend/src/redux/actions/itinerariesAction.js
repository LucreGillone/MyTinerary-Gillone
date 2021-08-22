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
    }
} 

export default itinerariesActions