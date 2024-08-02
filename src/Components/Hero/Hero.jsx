import React, { useState, useEffect } from 'react';
import './Hero.css';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// Assumptions
// The backend API endpoint /api/hero-content returns an object with title, subtitle, and description.
// We want to keep the hero section's content dynamic and responsive to backend updates.

const Hero = () => {
    const navigate = useNavigate();
    const [heroContent, setHeroContent] = useState({
        title: 'MazuForums',
        subtitle: 'Empowering Voices',
        description: 'short description of forum purpose'
    });

    useEffect(() => {
        // Example of fetching dynamic content from backend
        const fetchHeroContent = async () => {
            try {
                const response = await fetch('/api/hero-content');
                if (response.ok) {
                    const data = await response.json();
                    setHeroContent({
                        title: data.title,
                        subtitle: data.subtitle,
                        description: data.description
                    });
                } else {
                    console.error('Failed to fetch hero content');
                }
            } catch (error) {
                console.error('Error fetching hero content:', error);
            }
        };

        fetchHeroContent();
    }, []);

    const handleExploreClick = () => {
        navigate('/browse');
    };

    return (
        <div className="hero container">
            <div className="full-width-container">
                <div className="hero-text">
                    <h1>{heroContent.title}</h1>
                    <h2>{heroContent.subtitle}</h2>
                    <p>{heroContent.description}</p>
                    <button className='btn' onClick={handleExploreClick}>
                        Explore <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
