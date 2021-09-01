const Activity = (props) => {

    let activitiesInfo = props.Activities
    console.log("hola")
    console.log(activitiesInfo)

    return (
    
        <div className="activity">
            <div className="activityPic" style={{backgroundImage:`url("${activitiesInfo.src}")` }}></div>
            <h5>{activitiesInfo.activity}</h5>
        </div>
       
    )
        
}

export default Activity