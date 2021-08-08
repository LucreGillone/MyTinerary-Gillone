import React from "react"
import {NavLink} from "react-router-dom"


const Header = () => {
    return (
        <header>
            <nav className="navBar">
                <NavLink to="/"><p>Home</p></NavLink>
                <NavLink to="/cities"><p>Cities</p></NavLink>
                <NavLink to="/notFound"><p>Sign up</p></NavLink>
                <NavLink to="/notFound"><p>Log in</p></NavLink>
            </nav>
            <h1>MyTinerary</h1>
            <h2>Find your perfect trip,
            designed by insiders who know and love their cities!</h2>
        </header>    
            
    )
}

export default Header