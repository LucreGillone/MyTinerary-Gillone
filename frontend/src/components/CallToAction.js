import {Link} from "react-router-dom"

const CallToAction = () => {
    return (
        <div className="callToA">
              <h3>Ready to take off?</h3>
              <Link to="/cities"><button>Click Here!</button></Link>
              {/* <div> */}
                  <img src="/assets/ticket.png" alt="planeTicket"/>
              {/* </div> */}
              
        </div>
    )
}

export default CallToAction