import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import Carousell from "../components/Carousel"
import CallToAction from "../components/CallToAction"

const Home = () => {
    return (
        <div className="body">
            <Header/>
            <Hero/>
            <CallToAction/>
            <Carousell/>
            <Footer/>
        </div>
    )
}

export default Home