const activitiesReducers = (state={itineraryActivities:[]}, action) => {
    switch(action.type){
        case "GET_ACTIVITY_BY_ITINERARYID": 
            return {
                ...state,
                itineraryActivities: action.payload
            }
        default: 
        return (
            state
        )
    }
}

export default activitiesReducers