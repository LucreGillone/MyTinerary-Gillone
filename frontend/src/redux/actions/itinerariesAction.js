import axios from "axios" 

const itinerariesActions = {
    getItineraryByCity: () => {
        return async (dispatch, getState) => {
            let response = await axios.get(`http://localhost:4000/api/itinerary/${props.match.params._id}`)
            if (!response.data.success) {
                throw new Error()
            }
            dispatch({type: "GET_ITINERARY_BY_CITYID", payload: response.data.response})
        }
    }
} 

export default itinerariesActions