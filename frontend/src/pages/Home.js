import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import CarouselComp from "../components/Carousel"
import CallToAction from "../components/CallToAction"
// import InfoCards from "../components/InfoCards"

const Home = () => {
    return (
        <main>
            <Hero/>
            <Header/>
            <CallToAction/>
            {/* <InfoCards/> */}
            <h2 id="popularMyt">Popular Mytineraries</h2>
            <div className="plane" style={{
                backgroundImage: `url("/assets/ventana.png")`,
                }}>
                <CarouselComp/>
            </div>
            
            <Footer/>
        </main>
    )
}

export default Home