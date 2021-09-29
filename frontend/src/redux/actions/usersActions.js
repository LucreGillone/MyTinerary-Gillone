import axios from "axios" 

const usersActions = {
    signUp: (newUser) => {
        return async (dispatch, getState) => {
            let response = await axios.post("https://gillone-mytinerary.herokuapp.com/api/user/signUp", {...newUser})
            if (response.data.success){
                dispatch({type: "LOGGED", payload: response.data.response})
                
            }
           return response 
        }
    },
    
    logUser: (logUser) => {
        return async (dispatch, getState) => {
            let response = await axios.post("https://gillone-mytinerary.herokuapp.com/api/user/logIn", {...logUser})
            if (response.data.success){
                dispatch({type: "LOGGED", payload: response.data.response})   
            }
            return response
        }
    },

    logOut: () => {
        return async (dispatch, getState) => {
            dispatch({type: "LOG_OUT"})
        }
    },

    logInLS: (token) => {
        return async (dispatch, getState) => {
            try {
                let response = await axios.get("https://gillone-mytinerary.herokuapp.com/api/tokenVerification", {
                headers: {
                    Authorization: "Bearer "+token
                }
                
                 })
                dispatch({type: "LOGGED", payload: {token, firstName: response.data.firstName, src: response.data.src, _id: response.data._id}})
            } catch (error) {
                return dispatch ({type: "LOG_OUT"})
            } 
        }
    }
}

export default usersActions