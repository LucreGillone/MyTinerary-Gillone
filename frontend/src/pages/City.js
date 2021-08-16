import  Nav  from "../components/NavBar"
import axios from "axios"
import {useState} from "react"
import { useEffect } from "react"
import {Link} from "react-router-dom"

const City = (props) => {
 
    const [city, setCity] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect (() => {
        window.scrollTo(0,0)
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:4000/api/city/${props.match.params._id}`)
        .then((response) => {
            if (response.data.success) {
                response.data.response.length !== 0 
                ? setCity(response.data.response) 
                : alert ("Something went wrong!")
                // if (response.data.response.length !== 0){
                //     setCity(response.data.response)
                // } else {alert ("error de front")}
                
            } else {
                props.history.push("/notFound")
            }
        })
        .catch ((error) => {
            alert("se cayó la api")

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

    return (
        <>
            <Nav/>
            <div>
                <div className="heroCity" 
                style={{backgroundImage: `url("${city.hero}")`}}>
                </div>
                 <h3>{city.city}</h3>
                <div className="construction">
                    <img src="/assets/under_construction.jpg" alt="under construction"/>
                    <Link to="/cities"><button>Go back to cities</button></Link>
                </div>
            </div>
        </>
    )
}

export default City