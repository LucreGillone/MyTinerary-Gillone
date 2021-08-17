const express = require("express")

const citiesControllers = require("../controllers/citiesControllers")


const router = express.Router()
router.route("/cities")
.get(citiesControllers.retrieveAllCities)
.post(citiesControllers.addCity)

router.route("/city/:id")
.get(citiesControllers.retrieveOneCity)
.delete(citiesControllers.deleteCity)
.put(citiesControllers.modifyCity)

module.exports = router
