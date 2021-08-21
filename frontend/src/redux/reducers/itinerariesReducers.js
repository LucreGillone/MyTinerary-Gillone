const itinerariesReducers = (state={allItineraries:[], itinearyByCityId:[]}, action) => {
    switch(action.type){
        case "GET_ALL_ITINERARIES": 
            return {
                ...state, 
                allItineraries: action.payload
            }
        case "GET_ITINERARY_BY_CITYID": 
            return {
                ...state,
                cityItineraries: state.allItineraries.find((itinerary) => itinerary.cityId === action.payload)
            }
        default: 
        return (
            state
        )    
    }
}

export default itinerariesReducers