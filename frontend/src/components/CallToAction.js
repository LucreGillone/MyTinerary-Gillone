import {Link} from "react-router-dom"

const CallToAction = () => {
    return (
        <div className="callToA">
              <h3>Ready to take off?</h3>
              <Link to="/cities"><h4>Click Here</h4><img src="/assets/plane_ticket.png" alt="planeTicket"/>
              </Link>
              {/* <div> */}
                  
              {/* </div> */}
              
        </div>
    )
}

export default CallToAction