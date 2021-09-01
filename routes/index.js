const express = require("express")
const citiesControllers = require("../controllers/citiesControllers")
const itinerariesControllers = require("../controllers/itinerariesControllers")
const usersControllers = require("../controllers/usersControllers")
const activitiesControllers = require("../controllers/activitiesControllers")
// const commentsControllers = require("../controllers/commentsControllers")
const router = express.Router()
const passport = require("passport")
const validator = require("../controllers/validator")

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

router.route("/user/signUp")
.post(validator, usersControllers.addNewUser)

router.route("/user/logIn")
.post(usersControllers.logUser)

router.route("/user/:id")
.delete(usersControllers.deleteUser)

router.route("/tokenVerification")
.get(passport.authenticate("jwt", {session: false}),usersControllers.tokenVerification)

router.route("/activities")
.post(activitiesControllers.addActivity)

router.route("/activities/:itineraryId")
.get(activitiesControllers.retrieveActivitiesOfOneItinerary)

router.route("/comments/:id")
.post(passport.authenticate("jwt", {session: false}),itinerariesControllers.addComment)

router.route("/comment/:id")
// .put(commentsControllers.editComment)
.delete(itinerariesControllers.deleteComment)

module.exports = router
