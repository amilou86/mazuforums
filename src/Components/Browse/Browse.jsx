import React, { useEffect, useState } from 'react';
import './Browse.css';
import health from '../../assets/health.png';
import education from '../../assets/education.png';
import energy from '../../assets/energy.png';
import { SiWorldhealthorganization } from "react-icons/si";
import { IoSchoolOutline } from "react-icons/io5";
import { SlEnergy } from "react-icons/sl";
import { Link } from 'react-router-dom';

const Browse = () => {
    const [mostPopular, setMostPopular] = useState(null);
    const [mostRecent, setMostRecent] = useState(null);
    const [hottestPost, setHottestPost] = useState(null);

    useEffect(() => {
        // Dummy data
        const topics = [
            { id: 1, title: "Health", image: health, posts: 25, replies: 50, latestPostDate: '2023-06-20', icon: <SiWorldhealthorganization /> },
            { id: 2, title: "Education", image: education, posts: 30, replies: 45, latestPostDate: '2023-06-25', icon: <IoSchoolOutline /> },
            { id: 3, title: "Energy", image: energy, posts: 20, replies: 30, latestPostDate: '2023-06-22', icon: <SlEnergy /> },
        ];

        const posts = [
            { id: 1, title: "Health Post", topic: "Health", likes: 100, date: '2023-06-20', image: health },
            { id: 2, title: "Education Post", topic: "Education", likes: 150, date: '2023-06-25', image: education },
            { id: 3, title: "Energy Post", topic: "Energy", likes: 120, date: '2023-06-22', image: energy },
        ];

        // Determine most popular topic
        const popularTopic = topics.reduce((prev, current) => (prev.posts + prev.replies > current.posts + current.replies) ? prev : current);

        // Determine most recent topic
        const recentTopic = topics.reduce((prev, current) => (new Date(prev.latestPostDate) > new Date(current.latestPostDate)) ? prev : current);

        // Determine hottest post
        const hottest = posts.reduce((prev, current) => (prev.likes > current.likes) ? prev : current);

        setMostPopular(popularTopic);
        setMostRecent(recentTopic);
        setHottestPost(hottest);
    }, []);

    return (
        <div className='browse'>
            <div className='browse-header'>
                <h1>Browse Topics</h1>
            </div>
            <div className="topics-container">
                {mostPopular && (
                    <div className="topicsbrowse">
                        <Link to={`/topic/${mostPopular.title}`}>
                            <img src={mostPopular.image} alt={`${mostPopular.title} topic image`} />
                            <div className="caption">
                                {mostPopular.icon}
                                <p>Most Popular: {mostPopular.title}</p>
                            </div>
                        </Link>
                    </div>
                )}
                {mostRecent && (
                    <div className="topicsbrowse">
                        <Link to={`/topic/${mostRecent.title}`}>
                            <img src={mostRecent.image} alt={`${mostRecent.title} topic image`} />
                            <div className="caption">
                                {mostRecent.icon}
                                <p>Most Recent: {mostRecent.title}</p>
                            </div>
                        </Link>
                    </div>
                )}
                {hottestPost && (
                    <div className="topicsbrowse">
                        <Link to={`/post/${hottestPost.id}`}>
                            <img src={hottestPost.image} alt={`${hottestPost.title} post image`} />
                            <div className="caption">
                                <SlEnergy />
                                <p>Hottest Post: {hottestPost.title}</p>
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Browse;
