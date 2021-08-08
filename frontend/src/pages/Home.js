import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import CarouselComp from "../components/Carousel"
import CallToAction from "../components/CallToAction"

const Home = () => {
    return (
        <div className="body">
            <Hero/>
            <Header/>
            <CallToAction/>
            <h2>Popular Mytineraries</h2>
            <div className="plane" style={{
                        backgroundImage: `url("/assets/avion2.png")`,
                        }}>
                <CarouselComp/>
            </div>
            
            <Footer/>
        </div>
    )
}

export default Home