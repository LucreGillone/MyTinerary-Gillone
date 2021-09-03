import { useState, useEffect} from "react"
import {connect} from "react-redux"
import activitiesActions from "../redux/actions/activitiesActions"
import itinerariesActions from "../redux/actions/itinerariesActions"
import Activity from "./Activity"
import Comments from "./Comments"
import Swal from 'sweetalert2'


const Itinerary = (props) => {
    const [activities, setActivities] = useState([])
    const [collapse, setCollapse] = useState(true)
    const [like, setLike] = useState(true)

    const [itinerariesLikes, setItinerariesLikes] = useState(props.Itineraries.likes)
    
    useEffect(() => {
        props.getActivitiesByItinerary(props.Itineraries._id)
        .then((res) => {
            setActivities(res)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [collapse])
    
    

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    let itinerariesInfo = props.Itineraries

    const toggleInfo = () => {
        setCollapse(!collapse)
    }

    const hashtags = itinerariesInfo.hashtags.map((hashtag, index) => {
        return (
            <p key={index}>{"#" + hashtag}</p>
        )
    })

    const likeItinerary = async () => {
        setLike(false) 
        if(!props.token) {
            Toast.fire({
                icon: 'error',
                 title: 'You must be logged to like this post!'
              })  
        }else {
        let response = await props.likeDislike(props.Itineraries._id, props.token)
        setItinerariesLikes(response.data.response)
        } 
    setLike(true)
    }
    
    let heart = itinerariesLikes.includes(props.userId) ? "/assets/heartFull.svg" : "/assets/heart.svg"
    
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
                        <div className="likes">
                        <img src={heart} onClick={likeItinerary }/>
                        <p>{itinerariesLikes.length}</p>
                        </div>
                    </div>
                    <div className="hashtags">{hashtags}</div>
                </div>
            
                <div className="cityPicture" style={{backgroundImage: `url("${itinerariesInfo.src}")`}}></div>
            </div>
            <div className="activitiesContainer">
                <div className = {collapse ? "hide" : "show"}>
                    <h4>Activities</h4>
                    <div className="activities">
                        {!collapse 
                        ?  activities.map((activities) => <Activity Activities={activities}  key={activities._id}/>)
                        : null}
                    </div>
                    <Comments itineraryId={props.Itineraries._id} comments={props.Itineraries.comments}/>
                </div>
                
                
                <button className="viewMore" onClick={toggleInfo}>{collapse ? " View More" : "View Less"}</button>
           
            </div>
           

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        token: state.users.token,
        firstName: state.users.firstName,
        src: state.users.src,
        userId: state.users._id
    }
}
 
const mapDispatchToProps = {
    getActivitiesByItinerary: activitiesActions.getActivitiesByItinerary,
    likeDislike: itinerariesActions.likeDislike
}

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary) 