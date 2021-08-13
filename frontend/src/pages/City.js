import  Nav  from "../components/NavBar"
import axios from "axios"
import {useState} from "react"
import { useEffect } from "react"

const City = (props) => {
 
    const [city, setCity] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:4000/api/cities/${props.match.params.id}`)
        .then(res => setCity(res.data.response))
        
    }, [])


    return (
        <>
            <Nav/>
            <div>
                <h3>{city.cityName}</h3>
            </div>
        </>
    )
}

export default City