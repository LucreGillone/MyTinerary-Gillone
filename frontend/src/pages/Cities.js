import Nav from "../components/NavBar"
import Footer from "../components/Footer"
import { useEffect } from "react"
import {useState} from "react"
import {Link} from "react-router-dom"
import {connect} from "react-redux" 
import citiesActions from "../redux/actions/citiesActions"

const Cities = (props) => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        window.scrollTo(0,0)
        async function getAllCities() {
            try{
                await props.getAllCities() 
            } catch (err){
                console.log(err.message)
                return false
            }
            setLoading(false)
        }
        getAllCities()
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    console.log("FUNCIONA POR FAVOR")

    if (loading) {
        return <div className="loading">
            <img src="/assets/flying-airplane.gif" alt="plane flying gif"/>
            <h3>Loading...</h3>
        </div>
    }

    const showCities = props.infoCities.length > 0  
    ?   props.infoCities.map((city,index) => {
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


    const search = (e) => {
        props.filterCities(e.target.value)
    }

    // const alphabeticalOrder = JSON.parse(JSON.stringify(props.infoCities))//json stringify

    // const alphabetical = () => {
    //     alphabeticalOrder.sort(function (a,b) {
    //         return a.alphabeticalOrder.city.localeCompare(b.alphabeticalOrder.city)
    //     })       
    // } 
    // console.log(alphabeticalOrder)

    return (
        <div className="body">
                <Nav/> 
                     <div style={{backgroundImage: `url("/assets/airport_board.jpg")`}} className="boardImg">
                        </div>
                        <div className="inputContainer">
                        <img src="/assets/plane_icon.png" alt="plane icon"/>
                       <input type="text" placeholder="Choose your destination" onChange={search}/>
                       {/* <button onClick={alphabetical}>A-Z</button> */}
                    </div>
                    <div className="citiesContainer">
                        {showCities}
                    </div>
                <Footer/>
            </div>
        )
}


const mapStateToProps = (state) => {
    return {
        infoCities: state.cities.filteredCities,
        token: state.users.token,
        name: state.users.name
    }
}

const mapDispatchToProps = {
        getAllCities: citiesActions.getAllCities,
        filterCities: citiesActions.filterCities,
}
    
export default connect(mapStateToProps, mapDispatchToProps)(Cities) 
