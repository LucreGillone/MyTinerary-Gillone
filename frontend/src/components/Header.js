import React from "react"
import {Link} from "react-router-dom"


const Header = () => {
    return (
        <div className="header">
            <nav className="navBar">
                <Link><p>Home</p></Link>
                <Link><p>Cities</p></Link>
                <Link><p>Sign up</p></Link>
                <Link><p>Log in</p></Link>
            </nav>
            <h1>MyTinerary</h1>
        </div>    
    )
}

export default Header