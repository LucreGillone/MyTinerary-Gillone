import React from "react"
import Nav from "../components/NavBar"

const Header = () => {
    return (
        <header>
            <Nav/>
            <div>
                <img src="/assets/logo.png" alt="logo" />
                <h1>MyTinerary</h1>
                <h2>Find your perfect trip,
                designed by insiders who know and love their cities!</h2>
            </div>   
        </header>               
    )
}

export default Header