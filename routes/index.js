const express = require("express")

const citiesControllers = require("../controllers/citiesControllers")


const router = express.Router()
router.route("/cities")
.get(citiesControllers.showAllCities)


router.route("/city/:id")
.get(citiesControllers.showOneCity)
.delete(citiesControllers.deleteCity)
.post(citiesControllers.addCity)

// router.route("/cities/:id").get(citiesControllers.NOMBREDELCONTROLER)

module.exports = router
