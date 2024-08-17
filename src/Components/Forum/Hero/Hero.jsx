import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { fetchHeroContent } from '../../../../apiService.js'; // Import the API service
import backgroundImage from '../../../assets/background2.svg';

const Hero = () => {
    const navigate = useNavigate();
    const [heroContent, setHeroContent] = useState({
        title: 'MazuForums',
        subtitle: 'Empowering Voices',
        description: 'Short description of forum purpose'
    });

    useEffect(() => {
        // Fetch dynamic content from backend or use mock data
        const getHeroContent = async () => {
            const data = await fetchHeroContent();
            if (data) {
                setHeroContent({
                    title: data.title,
                    subtitle: data.subtitle,
                    description: data.description
                });
            }
        };

        getHeroContent();
    }, []); // Empty dependency array ensures this runs once on mount

    const handleExploreClick = () => {
        navigate('/browse');
    };

    return (
        <div className="h-screen bg-gradient-to-b from-blue-900 to-blue-700 flex items-center justify-center relative">
            <img src={backgroundImage} alt="Hero image" className="absolute top-0 left-0 w-full h-full object-cover" />

            <div className="text-center z-10"> {/* Add z-index to ensure text is above image */}
                <h1 className="text-6xl font-bold text-[#00B4D8]">
                    {heroContent.title}
                </h1>
                <h2 className="text-3xl font-medium text-blue-900">
                    {heroContent.subtitle}
                </h2>
                <p className="text-lg text-blue-900 max-w-2xl mx-auto mt-4">
                    {heroContent.description}
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={handleExploreClick}>
                    Explore <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default Hero;