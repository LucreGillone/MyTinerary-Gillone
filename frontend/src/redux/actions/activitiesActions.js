import axios from "axios"

const activitiesActions = {
    getActivitiesByItinerary: (itineraryId) => {
        console.log("hola")
        return async (dispatch, getState) => {
            try {
                let response = await axios.get(`http://localhost:4000/api/activities/${itineraryId}`)
                let data = response.data.response
                console.log(data)
                dispatch({type: "GET_ACTIVITY_BY_ITINERARYID", payload: data})
            } catch (error){
                return {
                    success: false, response: error
                }
            }
        }
    }

}

export default activitiesActions