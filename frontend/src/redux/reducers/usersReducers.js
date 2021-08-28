const usersReducers = (state= {token: null, firstName: null, src: null}, action) => {
    switch(action.type){
        case "LOGGED": 
            localStorage.setItem("token", action.payload.token)
            localStorage.setItem("name", action.payload.firstName)
            localStorage.setItem("src", action.payload.src)
            return {
                token: action.payload.token, 
                firstName: action.payload.firstName,
                src: action.payload.src,
            }
        case "LOG_OUT":
            localStorage.removeItem("token")
            localStorage.removeItem("name")
            localStorage.removeItem("src")
            return {
                token: null,
                firstName: null, 
                src: null
            }
        default: 
        return (
            state
        )
    }
}

export default usersReducers