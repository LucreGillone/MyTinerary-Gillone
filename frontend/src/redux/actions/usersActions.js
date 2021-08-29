import axios from "axios" 

const usersActions = {
    signUp: (newUser) => {
        return async (dispatch, getState) => {
            let response = await axios.post("http://localhost:4000/api/user/signUp", {...newUser})
            if (response.data.success){
                dispatch({type: "LOGGED", payload: response.data.response})
                
            }
           return response 
        }
    },
    logUser: (logUser) => {
        return async (dispatch, getState) => {
            let response = await axios.post("http://localhost:4000/api/user/logIn", {...logUser})
            console.log(response.data.response)
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
                let response = await axios.get("http://localhost:4000/api/tokenVerification", {
                headers: {
                    Authorization: "Bearer "+token
                }
                
                 })
                dispatch({type: "LOGGED", payload: {token, firstName: response.data.firstName, src: response.data.src}})
            } catch (error) {
                return dispatch ({type: "LOG_OUT"})
            } 
        }
    }
}

export default usersActions