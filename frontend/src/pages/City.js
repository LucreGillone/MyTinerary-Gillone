import  Nav  from "../components/NavBar"
import axios from "axios"
import {useState} from "react"
import { useEffect } from "react"

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
                setCity(response.data.response)
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

    return (
        <>
            <Nav/>
            <div>
                <h3>{city.city}</h3>
            </div>
        </>
    )
}

export default City