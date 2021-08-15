import Nav from "../components/NavBar"
import Footer from "../components/Footer"
// import InfoCards from "./InfoCards"
import { useEffect } from "react"
import {useState} from "react"
import {Link} from "react-router-dom"
import axios from "axios"

const Cities = () => {
    const [cities, setCities] = useState([])
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(true)
     
    useEffect (() => {
        window.scrollTo(0,0)
    }, [])

    useEffect(() => {
        axios.get("http://localhost:4000/api/cities")
        .then((response) => {
            if (response.data.response) {
                setCities(response.data.response)
            } else {
                alert(response.data.response)
            }
        })
        .catch ((error) => {
            alert(error)
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
    

    const inputHandler = (e) => {
        setSearch(e.target.value)
    }
    
    return (
        <div className="body">

            <Nav/> 
            
                <div style={{backgroundImage: `url("/assets/airport_board.jpg")`}} className="boardImg">
                </div>
            
                <input type="text" placeholder="Choose your destination" onChange={inputHandler}/>
                <div className="citiesContainer">
                {cities.map((city) => 

                   (city.city.toLowerCase().startsWith(search.toLowerCase().trim()) && (
                    <Link to={`/city/${city._id}`} key={cities._id}>
                    <div className="cityCards" 
                    style={{backgroundImage: `url("${city.picture}")`
                    }}>
                    <h3>{city.city}</h3>
                    <h3>{city.country}</h3>
                    </div> 
                    </Link>
                    )
                
                ))}  
                </div>
           
            {/* <InfoCards/> */}
            <Footer/>
        </div>
    )
}

export default Cities

    