import {useState} from "react"

const Itinerary = (props) => {

    const [collapse, setCollapse] = useState(true)
    console.log(props)
    console.log(props.Itinerary)

    let itineraryInfo = props.Itinerary
    console.log(itineraryInfo)

    const toggleInfo = () => {
        setCollapse(!collapse)
    }
    
    return (
        <div className="itinerary">
            <h3>{itineraryInfo.itineraryTitle}</h3>
            <div className="itineraryContent">
                <div className="itineraryInfo">
                    <div className="author">
                        <div className="authorPicture" style={{backgroundImage: `url("${itineraryInfo.userPicture}")`}}></div>
                        <h4>{itineraryInfo.userName}</h4>
                    </div>
                    <p>{itineraryInfo.description}</p>
                    <div className="infoContainer">
                        <p>{"💵".repeat(parseInt(itineraryInfo.price))}</p>
                        <p>{"🕓" + itineraryInfo.duration + "hs"}</p>
                        <p>{"🤍" + itineraryInfo.likes}</p>
                    </div>
                    <div className="hashtags">{itineraryInfo.hashtags}</div>
                </div>
            
                <div className="cityPicture" style={{backgroundImage: `url("${itineraryInfo.src}")`}}></div>
            </div>
            
            <button onClick={toggleInfo}>{collapse ? " View More" : "View Less"}</button>
            {!collapse ? <h5>Under construction</h5> : null}

        </div>
    )
}

export default Itinerary