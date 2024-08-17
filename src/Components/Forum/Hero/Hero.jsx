import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../../assets/background2.svg';

const Hero = () => {
    const navigate = useNavigate();

    const handleExploreClick = () => {
        navigate("/browse", { state: { scrollTo: "browse" } });
    };

    return (
        <div id="hero" className="h-screen bg-gradient-to-b from-blue-900 to-blue-700 flex items-center justify-center relative">
            <img src={backgroundImage} alt="Hero image" className="absolute top-0 left-0 w-full h-full object-cover" />
            <div className="text-center z-10">
                <h1 className="text-6xl font-bold text-[#00B4D8]">MazuForums</h1>
                <h2 className="text-3xl font-medium text-blue-900">Empowering Voices</h2>
                <p className="text-lg text-blue-900 max-w-2xl mx-auto mt-4">
                    Short description of forum purpose
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={handleExploreClick}>
                    Explore
                </button>
            </div>
        </div>
    );
};

export default Hero;
