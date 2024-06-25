import React from 'react';
import './Browse.css';
import health from '../../assets/health.png';
import education from '../../assets/education.png';
import energy from '../../assets/energy.png';
import { SiWorldhealthorganization } from "react-icons/si";
import { IoSchoolOutline } from "react-icons/io5";
import { SlEnergy } from "react-icons/sl";
import { Link } from 'react-router-dom'; // Import Link for routing

const Browse = () => {
    const topics = [
        { id: 1, title: "Health", image: health, icon: <SiWorldhealthorganization /> },
        { id: 2, title: "Education", image: education, icon: <IoSchoolOutline /> },
        { id: 3, title: "Energy", image: energy, icon: <SlEnergy /> },
    ];

    return (
        <div className='browse'>
            <div className='browse-header'>
                <h1>Browse Topics</h1>
            </div>
            <div className="topics-container">
                {topics.map(topic => (
                    <div key={topic.id} className="topicsbrowse">
                        <Link to={`/topic/${topic.title}`}> {/* Link to topic details */}
                            <img src={topic.image} alt={topic.title + " topic image"} />
                            <div className="caption">
                                {topic.icon}
                                <p>{topic.title}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div >
    );
}

export default Browse;
