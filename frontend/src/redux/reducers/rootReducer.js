import {combineReducers} from "redux"
import citiesReducer from "./citiesReducers"
import itinerariesReducer from "./itinerariesReducers"
import usersReducers from "./usersReducers"

const rootReducer = combineReducers ({
    cities: citiesReducer,
    itineraries: itinerariesReducer, 
    users: usersReducers,
})

export default rootReducer