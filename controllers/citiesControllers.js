const City = require("../models/City")
// const citiesInfo = [
//     {
//        picture:"/assets/bali.jpg",
//        cityName: "Bali",
//        country: "Indonesia",
//        id: 1, 
//    },
//    {
//        picture:"/assets/london.jpg",
//        cityName: "London",
//        country: "England",
//        id: 2,
//    },
//    {
//        picture:"/assets/new_york.jpg",
//        cityName: "New York",
//        country: "United States",
//        id: 3,
//    },
//    {
//        picture:"/assets/cairo.jpg",
//        cityName: "Cairo",
//        country: "Egypt",
//        id: 4,
//    },
//    {
//        picture:"/assets/cappadocia.jpg",
//        cityName: "Cappadocia",
//        country: "Turkey", 
//        id: 5,
//    },
//    {
//        picture:"/assets/machu_picchu.jpg",
//        cityName: "Machu Picchu", 
//        country: "Peru",
//        id: 6,
//    },
//    {
//        picture:"/assets/paris.jpg",
//        cityName: "Paris",
//        country: "France",
//        id: 7,
//    },
//    {
//        picture:"/assets/moscow.jpg",
//        cityName: "Moscow",
//        country: "Russia",
//        id: 8,
//    },
//    {
//        picture:"/assets/rome.jpg",
//        cityName: "Rome",
//        country: "Italy",
//        id: 9,
//    },
//    {
//        picture:"/assets/sidney.jpg",
//        cityName: "Sidney",
//        country: "Australia", 
//        id: 10,
//    },
//    {
//        picture:"/assets/vatnajokull.jpg",
//        cityName: "Vatnajokull",
//        country: "Iceland", 
//        id: 11,
//    },
//    {
//        picture:"/assets/agra.jpg",
//        cityName: "Agra",
//        country: "India",
//        id: 12,
//    }
   
// ]

const citiesControllers = {

    showAllCities: async (req, res) => {
        try {
            var cities = await City.find()
            res.json({success: true, response: cities})
        } catch (error) {
            res.json ({success: false, response: error.message})
        }
        
    },


    showOneCity: async (req, res) => {
        try {
            var city = await City.findOne({_id:req.params.id})
            if (city) {
                res.json({success: true, response: city})
            } else {
                throw new Error("The city you're looking for does not exist")
            }
        } catch (error) {
            res.json ({success: false, response: error.message})
        }
        
    },

    deleteCity: async (req, res) => {
       try {
           var deleteCity = await City.findOneAndDelete({_id: req.params.id})
           res.json({success: true, response: deleteCity})
       } catch(error) {
            res.json({success: false, response: error.message})
       }      
    },

    addCity: async (req, res) => {
        const newCity = new City({
            city: req.body.city,
            country: req.body.country,
            picture: req.body.picture,
            description: req.body.description
        }) 
        try 
        {await newCity.save()
        res.json({success:true}))
        } catch(error) {
            res.json({success: false, response: error.message})
        }
    },
    
    // modifyCity: async (req, res) => {

    // }
}

module.exports = citiesControllers
