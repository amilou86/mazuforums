import React from 'react'
import './Browse.css'
import health from '../../assets/health.png'
import education from '../../assets/education.png'
import energy from '../../assets/energy.png'
import { SiWorldhealthorganization } from "react-icons/si";
import { IoSchoolOutline } from "react-icons/io5";
import { SlEnergy } from "react-icons/sl";

const Browse = () => {
    return (
        <div className='browse'>
            <div className="topicsbrowse">
                <img src={health} alt="health topic image" />
                <div className="caption">
                    <img src={SiWorldhealthorganization} alt="" />
                    <p>Health</p>
                </div>
            </div>
            <div className='topicsbrowse'>
                <img src={education} alt="education topic image" />
                <div className="caption">
                    <p>Education</p>
                    <img src={IoSchoolOutline} alt="" />
                </div>
            </div>
            <div className='topicsbrowse'>
                <img src={energy} alt="energy topic image" />
                <div className="caption">
                    <p>Energy</p>
                    <img src={SlEnergy} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Browse