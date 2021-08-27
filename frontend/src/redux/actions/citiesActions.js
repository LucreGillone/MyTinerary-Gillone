import axios from "axios"

const citiesActions = {
    getAllCities: (token) => {
        console.log(token)
        return async (dispatch, getState) => {
            let response = await axios.get("http://localhost:4000/api/cities", {
                headers: {
                    Authorization: "Bearer "+ token,
                }
            })
            
            if (!response.data.success) {
                throw new Error("Issues between backend & database")
            }
            dispatch({type: "GET_ALL_CITIES", payload: response.data.response})
        }
    },

    filterCities: (inputValue) => {
        return (dispatch, getState) => {
        dispatch({type: "FILTER_CITIES", payload: inputValue})
        }
    },

    getOneCity: (_id) => {
        return async (dispatch, getState) => {
        dispatch({type: "GET_ONE_CITY", payload: _id})
        }
    }
}

export default citiesActions