const usersReducers = (state= {token: null, name: null, src: null}, action) => {
    switch(action.type){
        case "LOGGED": 
            console.log("entre al reducer")
            localStorage.setItem("token", action.payload.token)
            localStorage.setItem("name", action.payload.firstName)
            localStorage.setItem("profilePic", action.payload.src)
            console.log(action.payload)
            return {
                token: action.payload.token, 
                name: action.payload.firstName,
                src: action.payload.src,
            }
        case "LOG_OUT":
            localStorage.removeItem("token")
            localStorage.removeItem("name")
            localStorage.removeItem("profilePic")
            return {
                token: null,
                name: null, 
                src: null
            }
        default: 
        return (
            state
        )
    }
}

export default usersReducers