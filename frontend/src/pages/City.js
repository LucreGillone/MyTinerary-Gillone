import  Nav  from "../components/NavBar"
import Footer from "../components/Footer"
// import axios from "axios"
// import {useState} from "react"
import { useEffect } from "react"
import {Link} from "react-router-dom"
// import Itinerary from "../components/Itinerary"
import {connect} from "react-redux" 
import citiesActions from "../redux/actions/citiesActions"

const City = (props) => {

    useEffect(() => {
        window.scrollTo(0,0)
        props.getOneCity(props.match.params._id)
        console.log(props)
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    return (
        <>
            <Nav/>
            <main>
                <div className="heroCity" 
                style={{backgroundImage: `url("${props.selectedCity.hero}")`}}>
                </div>
                <div className="cityName">
                    <h3>{props.selectedCity.city}</h3>
                </div>
                {/* <p>{city.description}</p> */}
{/*                
                    <div>
                        {itineraries.map((itineraries, index) => <Itinerary Itineraries={itineraries} key={index}/>)}
                    </div> */}
                        
                <div className="construction">
                    {/* <img src="/assets/under_construction.jpg" alt="under construction"/> */}
                    <Link to="/cities"><button>Go back to cities</button></Link>
                    
                </div> 
            </main>
            <Footer/>
        </>
    )
}


const mapStateToProps = (state) => {
    return {
       selectedCity : state.cities.oneCity
    }
}

const mapDispatchToProps = {
    getOneCity: citiesActions.getOneCity,
    getAllCities: citiesActions.getAllCities
} 

export default connect(mapStateToProps, mapDispatchToProps)(City)