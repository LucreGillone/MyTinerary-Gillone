import {Link} from "react-router-dom"

const Footer = () => {
    return (
        <footer>
            <div className="iconsRef">
                <Link to="/"><img src ="/assets/home.svg" alt="homeIcon"/></Link>
                <Link to="/cities"><img src ="/assets/building.svg" alt="citiesIcon"/></Link>
                <img src ="/assets/person-circle.svg" alt="userIcon"/>
            </div>
            <p>MyTinerary &copy; | Lucrecia Gillone | MindHub 2021</p>
            <div className="socialMediaIcons">
                <img src ="/assets/instagram.svg" alt="instagramIcon"/>
                <img src ="/assets/facebook.svg" alt="facebookIcon"/>                
                <img src ="/assets/twitter.svg" alt="twitterIcon"/>
            </div>
        </footer>
    )
}

export default Footer