import {combineReducers} from "redux"
import citiesReducer from "./citiesReducers"
import itinerariesReducer from "./itinerariesReducers"
import usersReducer from "./usersReducers"

const rootReducer = combineReducers ({
    cities: citiesReducer,
    itineraries: itinerariesReducer, 
    users: usersReducer
})

export default rootReducer