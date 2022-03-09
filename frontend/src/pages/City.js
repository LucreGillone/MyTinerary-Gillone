import  Nav  from "../components/NavBar"
import Footer from "../components/Footer"
import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import Itinerary from "../components/Itinerary"
import {connect} from "react-redux" 
import citiesActions from "../redux/actions/citiesActions"
import itinerariesActions from "../redux/actions/itinerariesActions"
import NoItineraries from "../components/NoItineraries"

const City = (props) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        window.scrollTo(0,0)
        if(props.allCities.length === 0){
            props.history.push("/cities")
            return false
        }
        props.getOneCity(props.match.params._id)
        props.getItineraryByCity(props.match.params._id)
        setLoading(false)
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (loading) {
        return <div className="loading">
            <img src="/assets/flying-airplane.gif" alt="plane flying gif"/>
            <h3>Loading...</h3>
        </div>
    }

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
                <div className="cityDescription">{props.selectedCity.description}</div>
                <div>
                    {props.cityItineraries.length !==0 
                    ? props.cityItineraries.map((itineraries) => <Itinerary Itineraries={itineraries} key={itineraries.id}/>)
                    : <NoItineraries/>}
                </div>
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
       selectedCity : state.cities.oneCity,
       cityItineraries: state.itineraries.cityItineraries,
       allCities: state.cities.filteredCities
    }
}

const mapDispatchToProps = {
    getOneCity: citiesActions.getOneCity,
    getAllCities: citiesActions.getAllCities,
    getItineraryByCity: itinerariesActions.getItineraryByCity
} 

export default connect(mapStateToProps, mapDispatchToProps)(City)