import Nav from "../components/NavBar"
import Footer from "../components/Footer"
// import InfoCards from "./InfoCards"
import { useEffect } from "react"
import {useState} from "react"


const citiesInfo = [
     {
        picture:"/assets/bali.jpg",
        cityName: "Bali",
        country: "Indonesia",
        id: 1,
    },
    {
        picture:"/assets/london.jpg",
        cityName: "London",
        country: "England",
        id: 2,
    },
    {
        picture:"/assets/new_york.jpg",
        cityName: "New York",
        country: "United States",
        id: 3,
    },
    {
        picture:"/assets/cairo.jpg",
        cityName: "Cairo",
        country: "Egypt",
        id: 4,
    },
    {
        picture:"/assets/cappadocia.jpg",
        cityName: "Cappadocia",
        country: "Turkey", 
        id: 5,
    },
    {
        picture:"/assets/machu_picchu.jpg",
        cityName: "Machu Picchu", 
        country: "Peru",
        id: 6,
    },
    {
        picture:"/assets/paris.jpg",
        cityName: "Paris",
        country: "France",
        id: 7,
    },
    {
        picture:"/assets/moscow.jpg",
        cityName: "Moscow",
        country: "Russia",
        id: 8,
    },
    {
        picture:"/assets/rome.jpg",
        cityName: "Rome",
        country: "Italy",
        id: 9,
    },
    {
        picture:"/assets/sidney.jpg",
        cityName: "Sidney",
        country: "Australia", 
        id: 10,
    },
    {
        picture:"/assets/vatnajokull.jpg",
        cityName: "Vatnajokull",
        country: "Iceland", 
        id: 11,
    },
    {
        picture:"/assets/agra.jpg",
        cityName: "Agra",
        country: "India",
        id: 12,
    }
    
]


const Cities = () => {

    useEffect (() => {
        window.scrollTo(0,0)
    }, [])

    const [search, setSearch] = useState("")

    const inputHandler = (e) => {
        setSearch(e.target.value)
    }
    
    return (
        <div className="body">

            <Nav/> 
            {/* <img src="/assets/flying-airplane.gif" alt="plane flying gif"/> */}
            <div style={{backgroundImage: `url("/assets/airport_board.jpg")`}} className="boardImg">
            </div>
           
            <input type="text" placeholder="Choose your destination" onChange={inputHandler}/>
            <div className="citiesContainer">
            {citiesInfo.map((city) => 

                (city.cityName.toLowerCase().startsWith(search.toLowerCase().trim()) && (
               <div className="cityCards" key={citiesInfo.cityName}
                style={{backgroundImage: `url("${city.picture}")`
                }}>
                <h3>{city.cityName}</h3>
                <h3>{city.country}</h3>
                </div> 
                )

            
            ))} 
            </div>
            {/* <InfoCards/> */}
            <Footer/>
        </div>
    )
}

export default Cities

    