import React from 'react'
import './Hero.css'
import { FaArrowRight } from "react-icons/fa";


const Hero = () => {
    return (
        <div className='hero container'>
            <div className="hero-text">
                <h1>MazuForums</h1>
                <h2>Empowering Voices</h2>
                <p>short description of forum purpose</p>
                <button className='btn'>Explore <FaArrowRight /> </button>
            </div>
        </div>
    )
}

export default Hero