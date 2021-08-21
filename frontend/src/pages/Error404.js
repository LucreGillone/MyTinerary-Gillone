import {Link} from "react-router-dom"

const Error404 = () => {
    return (
        <div className="notFound">
            <h2>We couldn't find what you're looking for!</h2>
            <img src="/assets/error.gif" alt="paper plane flying"/>
            <Link to="/cities"><button>Go back to Cities</button></Link>
            <Link to="/"><button>Go to Home</button></Link>
        </div>    
    )
}

export default Error404