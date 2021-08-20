import Nav from "../components/NavBar"
import Footer from "../components/Footer"
import { useEffect } from "react"
// import {useState} from "react"
import {Link} from "react-router-dom"
import {connect} from "react-redux" 
import citiesActions from "../redux/actions/citiesActions"

const Cities = (props) => {

    useEffect(() => {
        window.scrollTo(0,0)
        props.getAllCities()
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
    

    return (
        <div className="body">
                <Nav/> 
                     <div style={{backgroundImage: `url("/assets/airport_board.jpg")`}} className="boardImg">
                        </div>
                        <div className="inputContainer">
                        <img src="/assets/plane_icon.png" alt="plane icon"/>
                       <input type="text" placeholder="Choose your destination" onChange={search}/>
                       {/* <button onClick={alphabetical}>A-Z</button>
                        {alphabeticalOrder
                        ? <h2>orden alfa</h2>
                        : <h2> como esta</h2>
                        } */}
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
        infoCities: state.cities.allCities
    }
}

const mapDispatchToProps = {
        getAllCities: citiesActions.getAllCities,
        filterCities: citiesActions.filterCities,
}
    
export default connect(mapStateToProps, mapDispatchToProps)(Cities) 
