const express = require("express")

const citiesControllers = require("../controllers/citiesControllers")
const itinerariesControllers = require("../controllers/itinerariesControllers")

const router = express.Router()

router.route("/cities")
.get(citiesControllers.retrieveAllCities)
.post(citiesControllers.addCity)

router.route("/city/:id")
.get(citiesControllers.retrieveOneCity)
.delete(citiesControllers.deleteCity)
.put(citiesControllers.modifyCity)

router.route("/itineraries")
.get(itinerariesControllers.retrieveAllItineraries)
.post(itinerariesControllers.addItinerary)

router.route("/itineraries/:cityId")
.get(itinerariesControllers.retrieveItinerariesOfOneCity)

router.route("/itinerary/:id")
.get(itinerariesControllers.retrieveItinerariesById)
.delete(itinerariesControllers.deleteItinerary)
.put(itinerariesControllers.modifyItinerary)

module.exports = router
