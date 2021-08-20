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
    
    }, [])

    console.log(props)
    console.log(props.infoCities)

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
                        {/* {props.infoCities.map((city, index) => { return (
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
                                       
                        )})
                        } */}
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
        filterCities: citiesActions.filterCities
}
    
export default connect(mapStateToProps, mapDispatchToProps)(Cities) 

//     useEffect(() => {
//         
//         axios.get("http://localhost:4000/api/cities")
//         .then((response) => {
//             if (response.data.success) {
//                 setCities({
//                     allCities: response.data.response, 
//                     filteredCities: response.data.response,
//                     setAlphabeticalOrder: response.data.response
//                 }) 
//             } else {
//                 alert(response.data.response)
//             }
//         })
//         .catch ((error) => {
//             console.log(error)
//             alert("Something went wrong!")
//             props.history.push("/")
//         })
//         .finally(() => setLoading(false))
//         // eslint-disable-next-line react-hooks/exhaustive-deps  
//     }, [])
     
//     if (loading) {
//         return <div className="loading">
//             <img src="/assets/flying-airplane.gif" alt="plane flying gif"/>
//             <h3>Loading...</h3>
//         </div>
//     }

//     const search = (e) => {
//         const inputHandler = e.target.value
//         setCities({
//             ...cities, 
//             filteredCities: cities.allCities.filter((city) => {
//                 return (
//                     (city.city.toLowerCase().startsWith(inputHandler.toLowerCase().trim()))
//                 )
//         })
        
//     }) 
//     }

//     const showCities = cities.filteredCities.length > 0  
//     ?   cities.filteredCities.map((city,index) => {
//         return (
//             <Link to={`/city/${city._id}`} key={index}>
//             <div className="cityCards" 
//             style={{backgroundImage: `url("${city.picture}")`
//             }}>
//                 <div className="cardsTitles">
//                     <h3>{city.city}</h3>
//                     <h3>-{city.country}</h3>
//                 </div>
//             </div> 
//             </Link>
//         )
//     })
//     : <h3>We couldn't find a match for your search. Try another city!</h3>

    
//     const alphabetical = () => {
//         setAlphableticalOrder(!alphabeticalOrder)
//     }

    



// 





{/* <InfoCities/> */}