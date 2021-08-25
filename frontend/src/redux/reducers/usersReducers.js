const usersReducer = (state= {newUser:{}}, action) => {
    switch(action.type){
        case "SIGN_UP": 
            return {
                ...state, 
                newUser: action.payload
            }
        case "LOG_IN":
                alert ("Welcome back!")
            break
        default: 
        return (
            state
        )
    }
}

export default usersReducer