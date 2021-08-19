import  Nav  from "../components/NavBar"
import Footer from "../components/Footer"
import axios from "axios"
import {useState} from "react"
import { useEffect } from "react"
import {Link} from "react-router-dom"
import Itinerary from "../components/Itinerary"

const City = (props) => {
 
    const [city, setCity] = useState({})
    const [itinerary, setItinerary] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        window.scrollTo(0,0)
        axios.get(`http://localhost:4000/api/city/${props.match.params._id}`)
        .then((response) => {
            if (response.data.success) {
                setCity(response.data.response)                 
            } else {
               throw new Error()
            }
        })
        .catch ((error) => {
            console.log(error)
            alert("Something went wrong!")
            props.history.push("/cities")
        })
        .finally(() => setLoading(false))

        axios.get(`http://localhost:4000/api/itineraries`)
        .then((res) => {setItinerary(res.data.response) 
            // if (res.data.success) {
            //     setItinerary(res.data.response)  
                console.log(res.data.response)    
                console.log(itinerary)           
            // } 
            // else {
            //    console.log (error.message)
            // }
        })
        // .catch ((error) => {
        //     console.log(error)
        //     alert("Something went wrong!")
        //     props.history.push("/cities")
        // })
        // .finally(() => setLoading(false))
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
                style={{backgroundImage: `url("${city.hero}")`}}>
                </div>
                <div className="cityName">
                    <h3>{city.city}</h3>
                </div>
                {/* <p>{city.description}</p> */}
                <div className="construction">
                    <img src="/assets/under_construction.jpg" alt="under construction"/>
                    <Link to="/cities"><button>Go back to cities</button></Link>
                    
                </div>
                    <div>
                        {itinerary.map((itinerary) => <Itinerary Itinerary={itinerary}/>)}
                    </div>
                        
            </main>
            <Footer/>
        </>
    )
}

export default City