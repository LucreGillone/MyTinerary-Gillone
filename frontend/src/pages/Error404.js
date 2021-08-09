import {Link} from "react-router-dom"

const Error404 = () => {
    return (
        <div className="notFound">
            <h2>We couldn't find what you're loonking for!</h2>
            <img src="/assets/error.gif" alt="paper plane flying"/>
            <Link to="/"><button>Go back</button></Link>
        </div>
            
    )
}

export default Error404