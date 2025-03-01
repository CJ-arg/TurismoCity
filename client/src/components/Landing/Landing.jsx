import React from "react"
import "./Landing.css"
import Banner from "../Banner/Banner"
import Navbar from "../NavBar/Navbar"
import TravelForm from "../TravelForm/TravelForm"

export const Home = () => {
    return (
        <div className="LandingContainer">
            <TravelForm />
        </div>
    )
}

export default Home