import Nav from "../components/NavBar"
import Footer from "../components/Footer"
// import InfoCities from "./InfoCities"
import { useEffect } from "react"
import {useState} from "react"
import {Link} from "react-router-dom"
import axios from "axios"

const Cities = (props) => {
    const [cities, setCities] = useState({
        allCities: [],
        filteredCities: []
    })
    const [loading, setLoading] = useState(true)
    const [alphabeticalOrder, setAlphableticalOrder] = useState(false)

    useEffect(() => {
        window.scrollTo(0,0)
        axios.get("http://localhost:4000/api/cities")
        .then((response) => {
            if (response.data.success) {
                setCities({
                    allCities: response.data.response, 
                    filteredCities: response.data.response,
                    setAlphabeticalOrder: response.data.response
                }) 
            } else {
                alert(response.data.response)
            }
        })
        .catch ((error) => {
            console.log(error)
            alert("Something went wrong!")
            props.history.push("/")
        })
        .finally(() => setLoading(false))
        // eslint-disable-next-line react-hooks/exhaustive-deps  
    }, [])
     
    if (loading) {
        return <div className="loading">
            <img src="/assets/flying-airplane.gif" alt="plane flying gif"/>
            <h3>Loading...</h3>
        </div>
    }

    const search = (e) => {
        const inputHandler = e.target.value
        setCities({
            ...cities, 
            filteredCities: cities.allCities.filter((city) => {
                return (
                    (city.city.toLowerCase().startsWith(inputHandler.toLowerCase().trim()))
                )
        })
        
    }) 
    }

    const showCities = cities.filteredCities.length > 0  
    ?   cities.filteredCities.map((city,index) => {
        return (
            <Link to={`/city/${city._id}`} key={index}>
            <div className="cityCards" 
            style={{backgroundImage: `url("${city.picture}")`
            }}>
                <div className="cardsTitles">
                    <h3>{city.city}</h3>
                    <h3>-{city.country}</h3>
                </div>
            </div> 
            </Link>
        )
    })
    : <h3>We couldn't find a match for your search. Try another city!</h3>

    
    const alphabetical = () => {
        setAlphableticalOrder(!alphabeticalOrder)
    }

    



    return (
        <div className="body">
            <Nav/> 
                <div style={{backgroundImage: `url("/assets/airport_board.jpg")`}} className="boardImg">
                </div>
                <div className="inputContainer">
                    <img src="/assets/plane_icon.png" alt="plane icon"/>
                    <input type="text" placeholder="Choose your destination" onChange={search}/>
                    <button onClick={alphabetical}>A-Z</button>
                    {alphabeticalOrder
                    ? <h2>orden alfa</h2>
                    : <h2> como esta</h2>
                    }
                </div>
                <div className="citiesContainer">
                    {showCities}
                </div>
            <Footer/>
        </div>
    )
}

export default Cities 

const City = (props) => {
 
    const [city, setCity] = useState({})
    const [itineraries, setItineraries] = useState([])
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
        .then((res) => {setItineraries(res.data.response) 
            // if (res.data.success) {
            //     setItinerary(res.data.response)  
                console.log(res.data.response)    
                console.log(itineraries)           
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
               
                    <div>
                        {itineraries.map((itineraries, index) => <Itinerary Itineraries={itineraries} key={index}/>)}
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

export default City