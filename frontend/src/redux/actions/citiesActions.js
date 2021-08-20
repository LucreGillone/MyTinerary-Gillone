import axios from "axios"

const citiesActions = {
    getAllCities: () => {
        return async (dispatch, getState) => {
            let response = await axios.get("http://localhost:4000/api/cities")
            let data = response.data.response
            dispatch({type: "GET_ALL_CITIES", payload: data})
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