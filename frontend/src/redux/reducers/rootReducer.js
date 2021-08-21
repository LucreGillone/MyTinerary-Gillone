import {combineReducers} from "redux"
import citiesReducer from "./citiesReducers"
import itinerariesReducer from "./itinerariesReducers"

const rootReducer = combineReducers ({
    cities: citiesReducer,
    itineraries: itinerariesReducer
})

export default rootReducer