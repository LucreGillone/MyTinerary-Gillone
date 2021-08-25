import axios from "axios" 

const usersActions = {
    signUp: (newUser) => {
        return async (dispatch, getState) => {
            let response = await axios.post("http://localhost:4000/api/user/signUp", {...newUser})
            if (response.data.success){
                dispatch({type: "SIGN_UP", payload: response.data.response})
                return response
            }
        }
    },
    logUser: (logUser) => {
        return async (dispatch, getState) => {
            let response = await axios.post("http://localhost:4000/api/user/logIn", {...logUser})
            if (response.data.success){
                dispatch({type: "LOG_IN", payload: response.data.response})
                return response
            }
        }
    }
}

export default usersActions