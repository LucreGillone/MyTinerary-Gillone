const itinerariesReducers = (state={itinearyByCityId:[]}, action) => {
    switch(action.type){
        case "GET_ITINERARY_BY_CITYID": 
            return {
                ...state, 
                itinearyByCityId: action.payload
            }
        default: 
        return (
            state
        )    
    }
}

export default itinerariesReducers