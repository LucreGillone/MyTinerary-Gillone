import {combineReducers} from "redux"
import citiesReducer from "./citiesReducers"
import itinerariesReducer from "./itinerariesReducers"
import usersReducers from "./usersReducers"
import activitiesReducers from "./activitiesReducers"

const rootReducer = combineReducers ({
    cities: citiesReducer,
    itineraries: itinerariesReducer, 
    users: usersReducers,
    activities: activitiesReducers
})

export default rootReducer