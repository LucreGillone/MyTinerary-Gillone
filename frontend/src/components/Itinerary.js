import { useState, useEffect} from "react"
import {connect} from "react-redux"
import activitiesActions from "../redux/actions/activitiesActions"
import Activity from "./Activity"


const Itinerary = (props) => {
    console.log(props.Itineraries._id)
    useEffect(() => {
        window.scrollTo(0,0)
        props.getActivitiesByItinerary(props.Itineraries._id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    const [collapse, setCollapse] = useState(true)

    let itinerariesInfo = props.Itineraries

    const toggleInfo = () => {
        setCollapse(!collapse)
    }

    const hashtags = itinerariesInfo.hashtags.map((hashtag, index) => {
        return (
            <p key={index}>{"#" + hashtag}</p>
        )
    })
   

    const showActivities = props.itineraryActivities.map((activities, index) =>{
        
    <Activity Activities={activities}  key={index}/>
    })

    
    
    return (
        <div className="itinerary">
            <h3>{itinerariesInfo.itineraryTitle}</h3>
            <div className="itineraryContent">
                <div className="itineraryInfo">
                    <div className="author">
                        <div className="authorPicture" style={{backgroundImage: `url("${itinerariesInfo.userPicture}")`}}></div>
                        <h4>{itinerariesInfo.userName}</h4>
                    </div>
                    <p>{itinerariesInfo.description}</p>
                    <div className="iconContainer">
                        <p>{"💰".repeat(parseInt(itinerariesInfo.price))}</p>
                        <p>{"🕓" + itinerariesInfo.duration + "hs"}</p>
                        <p>{"🤍" + itinerariesInfo.likes}</p>
                    </div>
                    <div className="hashtags">{hashtags}</div>
                </div>
            
                <div className="cityPicture" style={{backgroundImage: `url("${itinerariesInfo.src}")`}}></div>
            </div>
            <div className="viewMore">
                <div className="activities">
                    <h4>Activities</h4>
                    {!collapse 
                    ?  props.itineraryActivities.map((activities, index) => <Activity Activities={activities}  key={index}/>)
                    : null}
                </div>
                <h4>Comments</h4>
                <div className="comments">

                </div>
                
                <button className="viewMore" onClick={toggleInfo}>{collapse ? " View More" : "View Less"}</button>
           
            </div>
           

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        itineraryActivities: state.activities.itineraryActivities
    }
}
 
const mapDispatchToProps = {
    getActivitiesByItinerary: activitiesActions.getActivitiesByItinerary
}

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary) 