import axios from "axios" 

const usersActions = {
    signUp: (newUser) => {
        return async (dispatch, getState) => {
            let response = await axios.post("http://localhost:4000/api/user/signUp", {...newUser})
            if (response.data.success){
                dispatch({type: "LOGGED", payload: response.data.response})
                return response
            }
        }
    },
    logUser: (logUser) => {
        console.log("entre al action")
        return async (dispatch, getState) => {
            let response = await axios.post("http://localhost:4000/api/user/logIn", {...logUser})
            if (response.data.success){
                dispatch({type: "LOGGED", payload: response.data.response})
                return response
            }
        }
    },

    logOut: () => {
        return async (dispatch, getState) => {
            dispatch({type: "LOG_OUT"})
        }
    },

    logInLS: (token, name) => {
        return (dispatch, getState) => {
            dispatch({type: "LOGGED", payload: {token, name}})
            console.log(name)
        }
    }
}

export default usersActions