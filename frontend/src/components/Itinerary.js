import {useState} from "react"

const Itinerary = (props) => {

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
            {!collapse ? <h5>Under construction</h5> : null}
            <button className="viewMore" onClick={toggleInfo}>{collapse ? " View More" : "View Less"}</button>
           

        </div>
    )
}

export default Itinerary