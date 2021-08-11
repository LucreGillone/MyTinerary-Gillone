import Nav from "../components/NavBar"
import Footer from "../components/Footer"
import InfoCards from "./InfoCards"
import { useEffect } from "react"


const citiesInfo = [
     {
        picture:"/assets/bali.jpg",
        cityName: "Bali"
    },
    {
        picture:"/assets/london.jpg",
        cityName: "London"
    },
    {
        picture:"/assets/new_york.jpg",
        cityName: "New York"
    },
    {
        picture:"/assets/cairo.jpg",
        cityName: "Cairo"
    },
    {
        picture:"/assets/cappadocia.jpg",
        cityName: "Cappadocia"
    },
    {
        picture:"/assets/machu_picchu.jpg",
        cityName: "Machu Picchu"
    },
    {
        picture:"/assets/paris.jpg",
        cityName: "Paris"
    },
    {
        picture:"/assets/moscow.jpg",
        cityName: "Moscow"
    },
    {
        picture:"/assets/rome.jpg",
        cityName: "Rome"
    },
    {
        picture:"/assets/sidney.jpg",
        cityName: "Sidney"
    },
    {
        picture:"/assets/vatnajokull.jpg",
        cityName: "Vatnajokull"
    },
    {
        picture:"/assets/agra.jpg",
        cityName: "Agra"
    }
    
]



const Cities = () => {

    useEffect (() => {
        window.scrollTo(0,0)
    }, [])


    return (
        <div className="body">
            <Nav/> 
            {/* <img src="/assets/flying-airplane.gif" alt="plane flying gif"/> */}
            <div style={{backgroundImage: `url("/assets/airport_board.jpg")`}} className="boardImg">
            </div>

            <input type="text" placeholder="Choose your destination"></input>
            {/* <div className="citiesContainer">
            {citiesInfo.map((city) => 
            <div className="cityCards"
            style={{backgroundImage: `url("${city.picture}")`}}>
            <h3>{city.cityName}</h3>
            </div>
            )} 
            </div> */}
            <InfoCards/>
            <Footer/>
        </div>
    )
}

export default Cities

    